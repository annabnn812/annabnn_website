import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, inquiryType, message } = body

    // Map inquiry type to readable text
    const inquiryLabels: Record<string, string> = {
      "buying": "Buying in NYC",
      "selling": "Selling in NYC",
      "renting": "Renting in NYC",
      "pre-foreclosure": "Pre-Foreclosure/Property Solutions",
      "general": "General Inquiry",
    }

    const { data, error } = await resend.emails.send({
      from: "Anna Kolbasova Website <onboarding@resend.dev>",
      to: ["anna@annabnn.com"],
      replyTo: email,
      subject: `New Inquiry: ${inquiryLabels[inquiryType] || inquiryType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #D7D3D2; padding-bottom: 10px;">
            New Website Inquiry
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p style="margin: 8px 0;"><strong>Inquiry Type:</strong> ${inquiryLabels[inquiryType] || inquiryType}</p>
            ${message ? `<p style="margin: 8px 0;"><strong>Message:</strong></p><p style="margin: 8px 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">${message}</p>` : ""}
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from your website contact form at annabnn.com
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json({ error: "Failed to send email" }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Server error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
