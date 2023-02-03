import React from "react";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const contact = (request, response) => {
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
    subject: `Message From ${request.body.contactName}`,
    text:
      request.body.contactMessage +
      " | Sent from: " +
      request.body.contactEmail +
      " | Call at: " +
      request.body.contactPhone,
    html: `<div>${request.body.contactMessage}</div><p>Sent from:
    ${request.body.contactEmail}</p><p>Call at ${request.body.contactPhone} </p>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  response.status(200);

  console.log(request.body);
};

export default contact;
