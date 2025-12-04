import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!(firstName && lastName && email && subject && message)) {
      return NextResponse.json(
        {
          error: true,
          success: false,
          message: "Firstname, lastName, email, subject, message required!",
        },
        { status: 400 },
      );
    }

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
      subject: `Portfolio ${subject} :Message By ${firstName} ${lastName}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };

    await transport.sendMail(mailData);
    return NextResponse.json({
      success: true,
      error: false,
      message: "Message sent successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "An error occurred while sending the message!",
      },
      { status: 500 },
    );
  }
}
