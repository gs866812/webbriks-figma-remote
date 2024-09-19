import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Handle multipart/form-data using Next.js built-in `FormData` API
    const formData = await req.formData();

    // Extract fields from the formData
    const fullName = formData.get('fullName') || 'N/A';
    const email = formData.get('email') || 'N/A';
    const phone = formData.get('phone') || 'N/A';
    const website = formData.get('website') || 'N/A';
    const message = formData.get('message') || 'N/A';
    const driveLink = formData.get('driveLink') || 'N/A';
    const services = formData.getAll('services[]'); // Array of services

    // Extract files
    const files = formData.getAll('files'); // File list (if any)

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'gsarwar.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build the email content
    const mailMessage = `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Website: ${website}
      Drive Link: ${driveLink}
      Services Requested: ${services.length ? services.join(', ') : 'N/A'}
      Message: ${message}
    `;

    // Define the email options
    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: 'hello@gsarwar.com',
      subject: 'New Quote Request',
      text: mailMessage,
    };

    // If files were uploaded, attach them to the email
    if (files.length > 0) {
      mailOptions.attachments = await Promise.all(files.map(async (file, index) => {
        const buffer = await file.arrayBuffer(); // Convert file to arrayBuffer
        return {
          filename: file.name,
          content: Buffer.from(buffer), // Convert arrayBuffer to Buffer
          contentDisposition: 'attachment', // Force it to be treated as an attachment
        };
      }));
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
