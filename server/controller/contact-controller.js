const Contact = require("../models/contact-model.js");
const nodemailer = require("nodemailer");

const contact = async (req, res, next) => {
    try {
        const { email, message } = req.body;
        await Contact.create({ email, message });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const notifyOwner = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "New Contact Form Submission",
            text: `You have a new message:\n\nFrom:${email}\nMessage:\n${message}`,
        };

        const notifyUser = {
            from: process.env.EMAIL,
            to: email,
            subject: "We have received your message -Code and Cosmos",
            html: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #121212;
      color: #e0e0e0;
      padding: 0;
      margin: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 2rem auto;
      background-color: #1e1e1e;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.05);
    }
    .header {
      text-align: center;
    }
    .logo-img {
      max-width: 120px;
      height: auto;
      margin-bottom: 0.75rem;
    }
    .company-name {
      font-size: 1.6rem;
      font-weight: bold;
      color: #7e74f1;
      margin: 0;
    }
    .message {
      font-size: 1rem;
      margin: 1.5rem 0;
      line-height: 1.6;
      color: #cccccc;
    }
    .highlight {
      color: #a093ff;
      font-weight: 500;
    }
    .footer {
      font-size: 0.85rem;
      color: #888;
      text-align: center;
      margin-top: 2rem;
      border-top: 1px solid #333;
      padding-top: 1rem;
    }
    a {
      color: #a093ff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="https://res.cloudinary.com/dcndyvcd7/image/upload/v1749207589/codecosmoslogo_jjyrlz.png" alt="Code & Cosmos Logo" class="logo-img" />
      <p class="company-name">Code & Cosmos</p>
      <p style="margin: 0; color: #ccc;">Thank you for contacting us!</p>
    </div>

    <div class="message">
      <p>Hi there,</p>
      <p>We have received your message and appreciate you reaching out to <span class="highlight">Code & Cosmos</span>.</p>
      <p>Our team is reviewing your inquiry and will get back to you shortly. In the meantime, feel free to explore our services or connect with us on social media.</p>
      <p>We value your time and thank you for your interest!</p>
      <p>Warm regards,<br/>
      <strong>The Code & Cosmos Team</strong></p>
    </div>

    <div class="footer">
      This is an automated email. Please do not reply.<br/>
      &copy; 2025 Code & Cosmos. All rights reserved.
    </div>
  </div>
</body>
</html>

            `,
        };
        res.status(201).json({ msg: "Message sent successfully." });

        try {
            await transporter.sendMail(notifyOwner);
            await transporter.sendMail(notifyUser);
        } catch (emailError) {
            console.error("Failed to send email:", emailError);
            return res.status(500).json({ msg: "Failed to send email", error: emailError.message });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = contact;