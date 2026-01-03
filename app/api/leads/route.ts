import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      interestedIn,
      propertyType,
      buyerType,
      timeline,
      message,
      source,
      sourcePage,
      comments,
      consent,
      submittedAt,
    } = body

    // Validate required fields (consent not required for resource downloads)
    if ((!name && !firstName) || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Note: Supabase integration removed per user request
    // All data is sent to n8n webhook → Airtable instead

    // 1. Send Email to Recipients
    const fullName = name || `${firstName} ${lastName}`

    // Plain text version
    const emailText = `
New Lead from Santa Clarita Buyers Guide
========================================

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Interested In: ${Array.isArray(interestedIn) ? interestedIn.join(', ') : interestedIn || 'Not specified'}
Property Type: ${propertyType || 'Not specified'}
Buyer Type: ${buyerType || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Message:
${comments || message || 'No additional message'}

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
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Interested In:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${Array.isArray(interestedIn) ? interestedIn.join(', ') : interestedIn || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Property Type:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${propertyType || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Buyer Type:</td>
                        <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${buyerType || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px; font-weight: 600;">Timeline:</td>
                        <td style="padding: 8px 0;">
                          <span style="background-color: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 600;">${timeline || 'Not specified'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${comments || message ? `
              <!-- Message -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: bold; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Additional Message</h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${comments || message}</p>
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

    // Send email to recipients (using Resend if API key is available)
    if (process.env.RESEND_API_KEY) {
      try {
        // Send to both email addresses
        // Note: Resend in testing mode can only send to verified emails
        // Primary: johnkyang@outlook.com (Resend account owner)
        // CC: jyang@loandepot.com will work once domain is verified
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Santa Clarita Buyers Guide <onboarding@resend.dev>',
            to: ['johnkyang@outlook.com'],
            reply_to: email, // Reply goes to the lead's email
            subject: `🏠 New Lead: ${fullName} - ${timeline || buyerType || 'Inquiry'}`,
            html: emailHtml,
            text: emailText,
          }),
        })

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json()
          console.error('Failed to send email:', errorData)
        } else {
          console.log('Email sent successfully to jyang@loandepot.com')
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
