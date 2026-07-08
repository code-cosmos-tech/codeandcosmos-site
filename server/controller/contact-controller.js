const nodemailer = require("nodemailer");

const sendEmails = async (req, res, next) => {
    try {
        const { email, message } = req.body;
        const now = new Date();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const clientMailPromise = transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Received Your message",
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
                      This is an automated email. Please do not reply directly — contact us at <a href="mailto:${process.env.EMAIL}">${process.env.EMAIL}</a>.<br/>
                      &copy; ${now.getFullYear()} Code & Cosmos. All rights reserved.
                    </div>
                  </div>
                </body>
                </html>
                        `
        });

        const teamMailPromise = transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            replyTo: email, 
            subject: `New contact message from ${email}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <style>
                    body { font-family: 'Segoe UI', sans-serif; background-color: #121212; color: #e0e0e0; margin: 0; padding: 0; }
                    .email-container { max-width: 600px; margin: 2rem auto; background-color: #1e1e1e; padding: 2rem; border-radius: 10px; }
                    .field { margin-bottom: 1rem; }
                    .label { color: #a093ff; font-weight: 600; display: block; margin-bottom: 0.25rem; }
                    .value { color: #ccc; line-height: 1.6; white-space: pre-wrap; }
                  </style>
                </head>
                <body>
                  <div class="email-container">
                    <h2 style="color:#7e74f1;">New Contact Form Submission</h2>
                    <div class="field">
                      <span class="label">Email</span>
                      <span class="value">${email}</span>
                    </div>
                    <div class="field">
                      <span class="label">Message</span>
                      <span class="value">${message || "Not provided"}</span>
                    </div>
                    <div class="field">
                      <span class="label">Received At</span>
                      <span class="value">${now.toLocaleString()}</span>
                    </div>
                  </div>
                </body>
                </html>
            `
        });

        await Promise.all([clientMailPromise, teamMailPromise]);

        res.status(201).json({msg: "Message sent successfully."});
    } catch (error) {
        next({message: "Failed to send the message."});
    }
};

module.exports = sendEmails;