import Task from "../middleware/taskModel.js";
import userModel from "../models/userModel.js";
import { sendWhatsAppMessage } from "./whatsapp.js";

export const checkAndSendReminders = async () => {
  try {
    // Calculate the time 12 hours from now
    const twelveHoursFromNow = new Date(Date.now() + 12 * 60 * 60 * 1000);

    // Find tasks that are not completed and due within the next 12 hours
    const tasksDueSoon = await Task.find({
      completed: { $ne: 'completed' },
      dueDate: {
        $lte: twelveHoursFromNow,
        $gt: new Date() // Due date is in the future
      }
    }).populate('owner', 'name phone');

    for (const task of tasksDueSoon) {
      if (task.owner && task.owner.phone) {
        const message = `Reminder: Your task "${task.title}" is due on ${task.dueDate.toLocaleString()}. Don't forget to complete it!`;
        await sendWhatsAppMessage(task.owner.phone, message);
        console.log(`Reminder sent for task: ${task.title} to ${task.owner.name}`);
      }
    }
  } catch (error) {
    console.error("Error checking and sending reminders:", error);
  }
};
