import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { setupGoogleCredentials } from '@/app/lib/recaptcha';

setupGoogleCredentials();

const client = new RecaptchaEnterpriseServiceClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function verifyRecaptcha(token: string) {
  try {
    const projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID!);
    
    const [response] = await client.createAssessment({
      assessment: {
        event: {
          token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      },
      parent: projectPath,
    });

    if (!response.tokenProperties?.valid) {
      console.error(`Token invalid: ${response.tokenProperties?.invalidReason}`);
      return false;
    }

    return response.riskAnalysis?.score! > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email configuration is missing');
    }

    const { name, email, phone, message, recaptchaToken, website } = await req.json();

    // Check honeypot
    if (website) {
      // If honeypot is filled, return success but don't send email
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const isValid = await verifyRecaptcha(recaptchaToken);
    if (!isValid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['stephenstarc01@gmail.com', 'mandalafarmsarakuvalley@gmail.com'].join(', '), // Multiple recipients
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
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