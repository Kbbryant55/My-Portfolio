import React from "react";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const password = process.env.PASSWORD;
    const dummyEmail = process.env.DUMMYEMAIL;
    const email = process.env.EMAIL;

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
      subject: `Message From ${req.body.contactName}`,
      text:
        req.body.contactMessage +
        " | Sent from: " +
        req.body.contactEmail +
        " | Call at: " +
        req.body.contactPhone,
      html: `<div>${req.body.contactMessage}</div><p>Sent from:
      ${req.body.contactEmail}</p><p>Call at ${req.body.contactPhone} </p>`,
    };
    await transporter.sendMail(mailData);

    return res.status(200).json({ message: "Message received successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({ message: "Error processing your request" });
  }
}
