import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { contactName, contactEmail, contactPhone, contactMessage } = req.body || {};
  if (!contactName || !contactEmail || !contactPhone || !contactMessage) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const password = process.env.PASSWORD;
  const dummyEmail = process.env.DUMMYEMAIL;
  const email = process.env.EMAIL;
  if (!password || !dummyEmail || !email) {
    console.error("Contact API: missing env (PASSWORD, DUMMYEMAIL, EMAIL)");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: dummyEmail,
        pass: password,
      },
      secure: true,
    });

    const mailData = {
      from: dummyEmail,
      to: email,
      subject: `Message From ${contactName}`,
      text:
        contactMessage +
        " | Sent from: " +
        contactEmail +
        " | Call at: " +
        contactPhone,
      html: `<div>${contactMessage}</div><p>Sent from: ${contactEmail}</p><p>Call at ${contactPhone}</p>`,
    };
    await transporter.sendMail(mailData);

    return res.status(200).json({ message: "Message received successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({ message: "Error processing your request" });
  }
}
