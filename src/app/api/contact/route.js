import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, company, message, honeypot } = body;

        // 1. Basic Spam Protection (Honeypot)
        if (honeypot) {
            // If honeypot is filled, it's likely a bot. Return 200 to trick the bot.
            return Response.json({ success: true });
        }

        // 2. Server-Side Validation
        if (!name || name.trim().length < 3) {
            return Response.json({ success: false, error: "Name must be at least 3 characters long." }, { status: 400 });
        }
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            return Response.json({ success: false, error: "Name can only contain alphabets and spaces." }, { status: 400 });
        }

        if (!phone || phone.replace(/\D/g, "").length < 8) {
            return Response.json({ success: false, error: "Phone number must contain at least 8 digits." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return Response.json({ success: false, error: "Invalid email address format." }, { status: 400 });
        }

        if (!message || message.trim().length < 10) {
            return Response.json({ success: false, error: "Message must be at least 10 characters long." }, { status: 400 });
        }

        // Capture IP Address (Best-effort in Next.js)
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown IP";

        // 3. Nodemailer Configuration Loader
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // TLS requires secure: false for port 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Receiver Email
        const receivingEmail = process.env.RECEIVING_EMAIL || "info@rathnaagrofoods.com";

        // 4. Send Email to Admin (Admin Notification)
        const adminMailOptions = {
            from: process.env.SMTP_USER, // MUST match Zoho auth user perfectly
            replyTo: email,
            to: receivingEmail,
            subject: `New Business Enquiry \u2013 Rathna Agro Foods`,
            text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company || "Not provided"}
Message: ${message}

Submitted Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
IP Address: ${ip}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #ea580c;">New Business Enquiry – Rathna Agro Foods</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">
            Submitted Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}<br>
            IP Address: ${ip}
          </p>
        </div>
      `,
        };

        
        const customerMailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Thank you for contacting Rathna Agro Foods`,
            text: `Dear ${name},

Thank you for reaching out to Rathna Agro Foods. We have received your enquiry and our team will get back to you within 24 hours.

If you have any urgent requirements, you can also reach us via WhatsApp or Phone.

Best Regards,
The Rathna Agro Foods Team
www.rathnaagrofoods.com`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Rathna Agro Foods</strong>. We have received your enquiry and our team will get back to you within 24 hours.</p>
          <p>If you have any urgent requirements, you can also reach us via WhatsApp or Phone on our website.</p>
          <br>
          <p>Best Regards,<br>
          <strong>The Rathna Agro Foods Team</strong><br>
          <a href="https://www.rathnaagrofoods.com" style="color: #ea580c;">www.rathnaagrofoods.com</a></p>
        </div>
      `,
        };

        // Execute sending
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return Response.json({ success: true, message: "Enquiry submitted successfully." });

    } catch (error) {
        console.error("Contact Form Error:", error);
        return Response.json(
            { success: false, error: "Failed to send the enquiry. Please try again later." },
            { status: 500 }
        );
    }
}
