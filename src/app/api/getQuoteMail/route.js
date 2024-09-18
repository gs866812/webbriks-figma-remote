import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parser
  },
};

export async function POST(req) {
  const formData = await req.formData();
  const fullName = formData.get("fullName") || "N/A";
  const email = formData.get("email") || "N/A";
  const phone = formData.get("phone") || "N/A";
  const website = formData.get("website") || "N/A";
  const driveLink = formData.get("driveLink") || "N/A";
  const message = formData.get("message") || "N/A";
  const services = formData.getAll("services[]");

  // Extracting files from the form data
  const files = formData.getAll("files");

  // Helper function to convert ReadableStream to Buffer
  const streamToBuffer = async (stream) => {
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  };

  // Convert file streams to Buffers
  const fileAttachments = await Promise.all(
    files.map(async (file, index) => ({
      filename: file.name,
      content: await streamToBuffer(file.stream()), // Convert stream to Buffer
    }))
  );

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'webbriks.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: 'info@webbriks.com',
    subject: 'New Quote Request',
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Website: ${website}
      Drive Link: ${driveLink}
      Services: ${services.join(', ')}
      Message: ${message}
    `,
    attachments: fileAttachments, // Attach files to the email
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
