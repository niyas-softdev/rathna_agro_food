import nodemailer from "nodemailer";

export const runtime = "nodejs";

/* ✅ ADD THIS — Cloudflare CORS Preflight Fix */
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, company, message, honeypot } = body;

        // 1. Honeypot Spam Protection
        if (honeypot) {
            return Response.json({ success: true });
        }

        // 2. Validation
        if (!name || name.trim().length < 3) {
            return Response.json(
                { success: false, error: "Name must be at least 3 characters long." },
                { status: 400 }
            );
        }

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            return Response.json(
                { success: false, error: "Name can only contain alphabets and spaces." },
                { status: 400 }
            );
        }

        if (!phone || phone.replace(/\D/g, "").length < 8) {
            return Response.json(
                { success: false, error: "Phone number must contain at least 8 digits." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return Response.json(
                { success: false, error: "Invalid email address format." },
                { status: 400 }
            );
        }

        if (!message || message.trim().length < 10) {
            return Response.json(
                { success: false, error: "Message must be at least 10 characters long." },
                { status: 400 }
            );
        }

        const ip =
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "Unknown IP";

        // 3. Nodemailer Setup
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const receivingEmail =
            process.env.RECEIVING_EMAIL || "info@rathnaagrofoods.com";

        // 4. Admin Mail
        const adminMailOptions = {
            from: process.env.SMTP_USER,
            replyTo: email,
            to: receivingEmail,
            subject: `New Business Enquiry – Rathna Agro Foods`,
            text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company || "Not provided"}
Message: ${message}

Submitted Date: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
            })}
IP Address: ${ip}`,
            html: `
        <div style="font-family: Arial; line-height:1.6;">
          <h2 style="color:#ea580c;">New Business Enquiry – Rathna Agro Foods</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br/>
          <small>
            Submitted: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
            })}<br/>
            IP: ${ip}
          </small>
        </div>
      `,
        };

        // 5. Customer Mail
        const customerMailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Thank you for contacting Rathna Agro Foods`,
            html: `
        <div style="font-family: Arial;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Rathna Agro Foods</strong>. 
          We have received your enquiry and our team will get back to you within 24 hours.</p>
          <br/>
          <p>Best Regards,<br/>
          <strong>Rathna Agro Foods Team</strong></p>
        </div>
      `,
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return new Response(
            JSON.stringify({ success: true, message: "Enquiry submitted successfully." }),
            {
                status: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error("Contact Form Error:", error);

        return new Response(
            JSON.stringify({
                success: false,
                error: "Failed to send the enquiry. Please try again later.",
            }),
            {
                status: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
            }
        );
    }
}