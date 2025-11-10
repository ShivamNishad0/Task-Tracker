import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: "sn.shivamni@gmail.com",
    pass: "yqveaonbbisjrgyg",
  },
});

// Wrap in an async IIFE so we can use await.
async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({
    from: '"Shivam Nishad" <sn.shivamni@gmail.com>',
    to,
    subject,
    text, // plain‑text body
    html, // HTML body
  });
}

export { sendMail };
