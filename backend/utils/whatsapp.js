// utils/whatsapp.js
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

console.log("🔧 Initializing Twilio client...");
console.log("📋 ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID ? "Set" : "NOT SET");
console.log("🔑 AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN ? "Set" : "NOT SET");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log("✅ Twilio client initialized successfully");

export const sendWhatsAppMessage = async (to, body) => {
  try {
    console.log("📱 Attempting to send WhatsApp message to:", to);
    console.log("📝 Message body:", body);
    console.log("🔧 From number:", process.env.TWILIO_WHATSAPP_NUMBER);

    const message = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, // sandbox sender
      to: `whatsapp:${to}`, // user phone number with country code
      body,
    });

    console.log("✅ WhatsApp message sent successfully:", message.sid);
    console.log("📨 Message details:", { to, body, status: message.status });
  } catch (err) {
    console.error("❌ Error sending WhatsApp message:", err.message);
    console.error("❌ Full error:", err);
  }
};
