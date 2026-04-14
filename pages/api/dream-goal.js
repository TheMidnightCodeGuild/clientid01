import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, goal } = req.body || {};

  if (!name || !phone || !goal) {
    return res.status(400).json({ error: "Name, phone, and goal are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Sankalpashree Wealth Enquiry" <${process.env.GMAIL_USER}>`,
      to: "sankalpshreeinvest@gmail.com",
      subject: `Dream Goal Lead – ${goal} | Sankalpashree Wealth`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #0B2C4D; margin-bottom: 4px;">🎯 New Dream Goal Submission</h2>
          <p style="color: #6b7280; margin-top: 0; margin-bottom: 24px;">A visitor has submitted their financial dream goal via the website.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; background: #f9fafb; border-radius: 8px 8px 0 0; font-weight: 600; color: #374151; width: 35%;">Name</td>
              <td style="padding: 12px 16px; background: #f9fafb; border-radius: 8px 8px 0 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #374151;">Phone</td>
              <td style="padding: 12px 16px; color: #111827;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f9fafb; border-radius: 0 0 8px 8px; font-weight: 600; color: #374151;">Dream Goal</td>
              <td style="padding: 12px 16px; background: #f9fafb; border-radius: 0 0 8px 8px; color: #0B2C4D; font-weight: 700;">${goal}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">This lead was submitted from the Sankalpashree Wealth website homepage.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Dream Goal email error:", err.message);
    return res.status(500).json({ error: err.message || "Failed to send email." });
  }
}
