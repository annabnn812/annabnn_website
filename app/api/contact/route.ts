import { NextResponse } from "next/server" // Imported NextResponse
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, inquiryType, message, captchaToken } = body

    // 1. Guard check: Ensure captcha token is present
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Security check token missing." }, 
        { status: 400 }
      )
    }

    // 2. Verify token directly with Cloudflare Turnstile API
    const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
    const captchaResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!, // Loaded from your secure server environment variables
        response: captchaToken,
      }),
    })

    const captchaOutcome = await captchaResponse.json()

    // 3. Fail immediately if Cloudflare marks this submission as automated bot spam
    if (!captchaOutcome.success) {
      return NextResponse.json(
        { error: "Security check failed. Please try again." }, 
        { status: 400 }
      )
    }

    // Map inquiry type to readable text (including custom property-inquiry for listings)
    const inquiryLabels: Record<string, string> = {
      "buying": "Buying in NYC",
      "selling": "Selling in NYC",
      "renting": "Renting in NYC",
      "pre-foreclosure": "Pre-Foreclosure/Property Solutions",
      "general": "General Inquiry",
      "property-inquiry": "Specific Property Inquiry",
    }

    // 4. Captcha passed! Now execute the Resend Email pipeline
    const { data, error } = await resend.emails.send({
      from: "Anna Kolbasova Website <onboarding@resend.dev>",
      to: ["annak@realprof.us"],
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
            This message was securely sent from your website contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" }, 
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: data?.id }, 
      { status: 200 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
}