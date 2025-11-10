export const welcomeMessage = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 40px; line-height: 1.6;">
      <h1 style="color: #6b46c1;">
        Welcome${name ? `, ${name}` : ''}! 👋
      </h1>
      <h2 style="color: #9333ea;">Welcome to Task Tracker</h2>

      <p style="max-width: 800px; margin: 20px auto; font-size: 18px; color: #374151;">
        Task Tracker is your all-in-one productivity companion designed to help you stay organized, focused,
        and efficient. Whether you're managing personal goals, professional projects, or team deliverables,
        our intuitive platform empowers you to create, monitor, and complete tasks seamlessly.
      </p>

      <p style="max-width: 800px; margin: 20px auto; font-size: 18px; color: #374151;">
        With features like easy task creation, deadline tracking, and progress updates, Task Tracker ensures
        that you never lose sight of your priorities. Our goal is to simplify task management and give you the
        clarity needed to achieve your objectives without the clutter.
      </p>

      <p style="max-width: 800px; margin: 20px auto; font-size: 18px; color: #374151;">
        Start managing your tasks smarter today and experience how structured planning leads to better performance.
        Task Tracker is built with modern technologies to deliver a smooth, responsive, and reliable experience
        — so you can focus on what truly matters: getting things done.
      </p>

      <p style="color: #a855f7; font-weight: bold; margin-top: 30px;">
        Built with passion and precision by <strong>Shivam Nishad</strong>.
      </p>
    </div>
  `;
};
