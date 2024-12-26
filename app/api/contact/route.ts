import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing');
    }

    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['mandalafarmsarakuvalley@gmail.com', 'stephenstarc01@gmail.com'].join(', '), // Multiple recipients
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    // More detailed error logging
    console.error('Email sending error details:', {
      error: err,
      emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
      emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });

    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: err instanceof Error ? err.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 