export const runtime = "edge";

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
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        // 2. Validation
        if (!name || name.trim().length < 3) {
            return new Response(
                JSON.stringify({ success: false, error: "Name must be at least 3 characters long." }),
                { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
            );
        }

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            return new Response(
                JSON.stringify({ success: false, error: "Name can only contain alphabets and spaces." }),
                { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
            );
        }

        if (!phone || phone.replace(/\D/g, "").length < 8) {
            return new Response(
                JSON.stringify({ success: false, error: "Phone number must contain at least 8 digits." }),
                { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ success: false, error: "Invalid email address format." }),
                { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
            );
        }

        if (!message || message.trim().length < 10) {
            return new Response(
                JSON.stringify({ success: false, error: "Message must be at least 10 characters long." }),
                { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
            );
        }

        const ip =
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "Unknown IP";

        // 3. Resend Setup
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            throw new Error("Missing RESEND_API_KEY");
        }

        const senderEmail = "info@rathnaagrofoods.com";
        const receivingEmail = process.env.RECEIVING_EMAIL || "info@rathnaagrofoods.com";

        // 4. Admin Mail
        const adminEmailData = {
            from: senderEmail,
            to: receivingEmail,
            reply_to: email,
            subject: "New Business Enquiry – Rathna Agro Foods",
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

        const adminRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${resendApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adminEmailData),
        });

        if (!adminRes.ok) {
            const errorText = await adminRes.text();
            throw new Error(`Admin Mail Error: ${errorText}`);
        }

        // 5. Customer Mail
        const customerEmailData = {
            from: senderEmail,
            to: email,
            subject: "Thank you for contacting Rathna Agro Foods",
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

        const customerRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${resendApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customerEmailData),
        });

        if (!customerRes.ok) {
            const errorText = await customerRes.text();
            console.error(`Customer Mail Error: ${errorText}`);
        }

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