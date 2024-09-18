import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Disable automatic body parsing by Next.js so we can handle file uploads manually
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    // Parse form data (including file)
    const formData = await req.formData();

    // Get form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const website = formData.get('website') || 'N/A';
    const message = formData.get('message');
    const driveLink = formData.get('driveLink') || 'N/A';

    // Get the uploaded file
    const file = formData.get('file'); // Assuming 'file' is the field name for the file

    let filePath = '';
    if (file && file.size > 0) {
      // Save the file to the 'uploads' directory
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadDir = './uploads';

      // Ensure the directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      filePath = path.join(uploadDir, file.name);
      fs.writeFileSync(filePath, buffer); // Save file to the uploads directory
      console.log('File saved to:', filePath);
    }

    // Now let's configure Nodemailer to send the email
    const transporter = nodemailer.createTransport({
      host: 'gsarwar.com', // Replace with your SMTP server (e.g., 'smtp.gmail.com' for Gmail)
      port: 587,
      auth: {
        user: process.env.EMAIL_USER, // Your email username from environment variables
        pass: process.env.EMAIL_PASS, // Your email password from environment variables
      },
    });

    // Prepare the email options
    const mailOptions = {
      from: `"Quote Request" <${process.env.EMAIL_USER}>`,
      to: 'hello@gsarwar.com', // The email where you want to receive the request
      subject: 'New Quote Request',
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Drive Link:</strong> ${driveLink}</p>
      `,
    };

    // Attach the file if it exists
    if (file && file.size > 0) {
      mailOptions.attachments = [
        {
          filename: file.name,
          path: filePath, // Path to the uploaded file
        },
      ];
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Log the success message
    console.log('Email sent:', info.response);

    // Respond with success message
    return NextResponse.json({ message: 'Form data and file sent via email successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
