import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, lastName, email, message } = await req.json();  // Ensure proper JSON parsing

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // To avoid self-signed certificate errors
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'info@webbriks.com',  // Replace with your desired recipient email
      subject: 'New Contact Form Message',
      text: message,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
