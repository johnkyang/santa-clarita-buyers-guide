import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      // Support both form formats
      name,
      firstName,
      lastName,
      email,
      phone,
      // lead-capture-form fields
      interestedIn,
      propertyType,
      message,
      // lead-form fields (legacy)
      preferredNeighborhoods,
      bedrooms,
      budgetMin,
      budgetMax,
      comments,
      // Common fields
      buyerType,
      timeline,
      source,
      sourcePage,
      consent,
      submittedAt,
    } = body

    // Validate required fields
    if ((!name && !firstName) || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Note: Supabase integration removed per user request
    // All data is sent to n8n webhook → Airtable instead

    // Normalize fields for consistent processing
    const fullName = name || `${firstName} ${lastName}`
    const neighborhoods = interestedIn || preferredNeighborhoods || []
    const additionalNotes = message || comments || ''

    // Plain text version
    const emailText = `
New Lead from Santa Clarita Buyers Guide
========================================

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Neighborhoods: ${Array.isArray(neighborhoods) && neighborhoods.length > 0 ? neighborhoods.join(', ') : 'Not specified'}
Property Type: ${propertyType || 'Not specified'}
Buyer Type: ${buyerType || 'Not specified'}
Timeline: ${timeline || 'Not specified'}
${bedrooms ? `Bedrooms: ${bedrooms}` : ''}
${budgetMin || budgetMax ? `Budget Range: ${budgetMin && budgetMax ? `$${budgetMin.toLocaleString()} - $${budgetMax.toLocaleString()}` : budgetMin ? `$${budgetMin.toLocaleString()}+` : `Up to $${budgetMax.toLocaleString()}`}` : ''}

Additional Information:
${additionalNotes || 'None provided'}

---
Source Page: ${sourcePage || source}
Submitted: ${submittedAt || new Date().toISOString()}
Consent Given: ${consent ? 'Yes' : 'N/A (Resource Download)'}

---
This lead was generated from SantaClaritaBuyersGuide.com
A Kailei Media property
    `.trim()

    // HTML version
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🏠 New Lead Inquiry</h1>
              <p style="margin: 10px 0 0 0; color: #dbeafe; font-size: 14px;">Santa Clarita Buyers Guide</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Contact Information -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: bold; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Contact Information</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Name:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 700;">${fullName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Email:</td>
                        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Phone:</td>
                        <td style="padding: 8px 0;"><a href="tel:${phone || ''}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${phone || 'Not provided'}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Property Preferences -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: bold; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Property Preferences</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Neighborhoods:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${Array.isArray(neighborhoods) && neighborhoods.length > 0 ? neighborhoods.join(', ') : 'Not specified'}</td>
                      </tr>
                      ${propertyType ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Property Type:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${propertyType}</td>
                      </tr>` : ''}
                      ${buyerType ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Buyer Type:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${buyerType}</td>
                      </tr>` : ''}
                      ${timeline ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Timeline:</td>
                        <td style="padding: 8px 0;">
                          <span style="background-color: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 600;">${timeline}</span>
                        </td>
                      </tr>` : ''}
                      ${bedrooms ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Bedrooms:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${bedrooms}</td>
                      </tr>` : ''}
                      ${budgetMin || budgetMax ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 180px; font-weight: 600;">Budget Range:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${budgetMin && budgetMax ? `$${budgetMin.toLocaleString()} - $${budgetMax.toLocaleString()}` : budgetMin ? `$${budgetMin.toLocaleString()}+` : `Up to $${budgetMax.toLocaleString()}`}</td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              ${additionalNotes ? `
              <!-- Additional Information -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Additional Information</h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${additionalNotes}</p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Metadata -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top: 2px solid #e2e8f0; padding-top: 20px;">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 4px 0; color: #94a3b8; font-size: 13px;">Source Page:</td>
                        <td style="padding: 4px 0; color: #64748b; font-size: 13px; text-align: right;">${sourcePage || source || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #94a3b8; font-size: 13px;">Submitted:</td>
                        <td style="padding: 4px 0; color: #64748b; font-size: 13px; text-align: right;">${new Date(submittedAt || Date.now()).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #94a3b8; font-size: 13px;">Consent:</td>
                        <td style="padding: 4px 0; color: #64748b; font-size: 13px; text-align: right;">${consent ? 'Yes' : 'N/A (Resource Download)'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; border-radius: 0 0 8px 8px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 12px; text-align: center;">
                This lead was generated from <strong>SantaClaritaBuyersGuide.com</strong><br>
                A Kailei Media property
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    // Build buyer confirmation email HTML
    const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on your way home</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #dbeafe; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;">Santa Clarita Buyers Guide</p>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; line-height: 1.3;">We Got Your Request, ${fullName.split(' ')[0]}.</h1>
              <p style="margin: 12px 0 0 0; color: #bfdbfe; font-size: 16px;">Here's what happens next.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Thanks for reaching out. We're a free, independent resource for Santa Clarita home buyers — no sales pressure, no obligation. Our goal is to make sure you're fully informed before you make one of the biggest decisions of your life.
              </p>

              <!-- Next Steps Box -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 0 6px 6px 0; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0; color: #1e40af; font-size: 16px; font-weight: bold;">Your next steps:</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 6px 0; color: #1e293b; font-size: 15px;">&#10003;&nbsp; <a href="https://www.santaclaritabuyersguide.com/buying-power" style="color: #2563eb; text-decoration: none; font-weight: 600;">Check your buying power</a> — see your real price range in 2 minutes</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #1e293b; font-size: 15px;">&#10003;&nbsp; <a href="https://www.santaclaritabuyersguide.com/neighborhood-quiz" style="color: #2563eb; text-decoration: none; font-weight: 600;">Take the neighborhood quiz</a> — find your best fit in 5 questions</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #1e293b; font-size: 15px;">&#10003;&nbsp; <a href="https://www.santaclaritabuyersguide.com/dpa-checker" style="color: #2563eb; text-decoration: none; font-weight: 600;">Check DPA eligibility</a> — you may qualify for $15K–$150K in assistance</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Over the next few days, I'll send you a short series of emails covering the things most buyers wish they'd known earlier — how much house you can actually afford, which neighborhoods fit different lifestyles, and the programs that help buyers close with less money out of pocket.
              </p>

              <p style="margin: 0 0 30px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                If you have questions in the meantime, just reply to this email or call <a href="tel:6614517200" style="color: #2563eb; text-decoration: none; font-weight: 600;">(661) 451-7200</a>.
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td style="text-align: center;">
                    <a href="https://www.santaclaritabuyersguide.com/neighborhoods" style="display: inline-block; background: linear-gradient(135deg, #f97316, #ea580c); color: #ffffff; text-decoration: none; padding: 16px 36px; border-radius: 6px; font-size: 16px; font-weight: bold;">Explore Santa Clarita Neighborhoods</a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                — The Santa Clarita Buyers Guide Team<br>
                <span style="color: #9ca3af;">A free resource by Kailei Media</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; border-radius: 0 0 8px 8px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center; line-height: 1.6;">
                You received this because you requested information from SantaClaritaBuyersGuide.com.<br>
                This is a free, independent buyer resource. We are not a licensed real estate brokerage.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    const confirmationText = `
Hi ${fullName.split(' ')[0]},

Thanks for reaching out to Santa Clarita Buyers Guide. We got your request and here's what happens next.

YOUR NEXT STEPS:
- Check your buying power: https://www.santaclaritabuyersguide.com/buying-power
- Take the neighborhood quiz: https://www.santaclaritabuyersguide.com/neighborhood-quiz
- Check DPA eligibility: https://www.santaclaritabuyersguide.com/dpa-checker

Over the next few days, I'll send you a short series of emails covering the things most buyers wish they'd known earlier — affordability, neighborhoods, and down payment assistance programs.

Questions? Reply to this email or call (661) 451-7200.

— The Santa Clarita Buyers Guide Team
A free resource by Kailei Media

---
You received this because you requested information from SantaClaritaBuyersGuide.com.
    `.trim()

    // Send email to recipients (using Resend if API key is available)
    if (process.env.RESEND_API_KEY) {
      try {
        // 1. Send lead notification to admin
        const notificationResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Santa Clarita Buyers Guide <onboarding@resend.dev>',
            to: ['johnkyang@outlook.com'],
            reply_to: email,
            subject: `New Lead: ${fullName} - ${timeline || buyerType || 'Inquiry'}`,
            html: emailHtml,
            text: emailText,
          }),
        })

        if (!notificationResponse.ok) {
          const errorData = await notificationResponse.json()
          console.error('Failed to send admin notification:', errorData)
        } else {
          console.log('Admin notification sent successfully')
        }

        // 2. Send buyer confirmation email
        const confirmationResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Santa Clarita Buyers Guide <onboarding@resend.dev>',
            to: [email],
            subject: `We got your request, ${fullName.split(' ')[0]} — here's what's next`,
            html: confirmationHtml,
            text: confirmationText,
          }),
        })

        if (!confirmationResponse.ok) {
          const errorData = await confirmationResponse.json()
          console.error('Failed to send buyer confirmation:', errorData)
        } else {
          console.log('Buyer confirmation sent to:', email)
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    } else {
      console.warn('RESEND_API_KEY not configured - emails will not be sent')
    }

    // 2. Send to n8n Webhook (if configured)
    if (process.env.N8N_WEBHOOK_URL) {
      try {
        console.log('Sending to n8n webhook:', process.env.N8N_WEBHOOK_URL)
        const webhookResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        const webhookData = await webhookResponse.json()
        console.log('n8n webhook response:', webhookResponse.status, webhookData)
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
      }
    } else {
      console.log('N8N_WEBHOOK_URL not configured')
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    })

  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}
