import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  // Validate body
  const { firstName, lastName, email, subject, message } = req.body;
  if (!(firstName && lastName && email && subject && message)) {
    res.statusCode = 400;
    return res.json({
      error: true,
      success: false,
      message: "Firstname, lastName, email, subject, message required!",
    });
  }

  let nodemailer = require("nodemailer");

  const transport = nodemailer.createTransport({
    port: 587,
    host: process.env.host,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailData = {
    from: process.env.from,
    to: "kariukigeorge2030@gmail.com",
    subject: `Portfolio ${req.body.subject} :Message By ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  try {
    await transport.sendMail(mailData);
    res.status(200);
    return res.json({
      success: true,
      error: false,
      message: "Message sent successfully!",
    });
  } catch (error) {
    res.json({
      error: true,
      success: false,
      message: "An error occurred while sending the message!",
    });
  }
};

export default sendEmail;
