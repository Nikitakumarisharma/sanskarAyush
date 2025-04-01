import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, contact, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use 'smtp.mailtrap.io' for testing
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Lead Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Lead from ${name}`,
      html: `
        <h3>Lead Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
