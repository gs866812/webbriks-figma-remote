import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Disable Next.js's default body parser to handle multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    // Initialize formidable to parse incoming form data
    const form = new formidable.IncomingForm();

    // Parse the incoming form-data (fields + file)
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else {
          console.log('Fields:', fields);  // Log fields to ensure correct parsing
          console.log('Files:', files);    // Log files to ensure correct parsing
          resolve({ fields, files });
        }
      });
    });

    // Extract the form fields and file
    const { fullName, email, phone, website, message, driveLink } = fields;
    const services = fields['services[]'];  // Multiple services selected

    // Setup the email transporter using nodemailer
    const transporter = nodemailer.createTransport({
      host: 'gsarwar.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare the email message
    const selectedServices = Array.isArray(services) ? services.join(', ') : services;
    const mailMessage = `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Website: ${website || 'N/A'}
      Drive Link: ${driveLink || 'N/A'}
      Services Requested: ${selectedServices}
      Message: ${message}
    `;

    // Define the email options
    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: 'hello@gsarwar.com',
      subject: 'New Quote Request',
      text: mailMessage,
    };

    // If a file was uploaded, attach it to the email
    if (files.file) {
      console.log('File exists, attaching to email:', files.file);
      const file = files.file;

      // Read the file as a buffer to attach it
      const fileBuffer = fs.readFileSync(path.resolve(file.filepath));

      mailOptions.attachments = [
        {
          filename: file.originalFilename,
          content: fileBuffer,
        },
      ];
    } else {
      console.log('No file uploaded');
    }

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return new NextResponse(
        JSON.stringify({ success: false, error: 'Failed to send email' }),
        { status: 500 }
      );
    }

    // Return success response
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to process request:', error);
    return new NextResponse(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
