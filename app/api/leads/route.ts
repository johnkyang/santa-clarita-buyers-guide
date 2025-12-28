import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Email configuration
const LEAD_EMAIL_RECIPIENTS = [
  'jyang@loandepot.com',
  'johnkyang@outlook.com',
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      interestedIn,
      propertyType,
      buyerType,
      timeline,
      message,
      source,
      consent,
      submittedAt,
    } = body

    // Validate required fields
    if (!name || !email || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1. Save to Supabase
    try {
      const supabase = await createClient()

      // Split name into first and last name
      const nameParts = name.trim().split(' ')
      const firstName = nameParts[0] || name
      const lastName = nameParts.slice(1).join(' ') || ''

      const { error } = await supabase
        .from('leads')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          preferred_neighborhoods: interestedIn,
          buyer_type: buyerType || null,
          timeline,
          comments: message || null,
          source_page: source,
        })

      if (error) {
        console.error('Supabase insert error:', error)
      }
    } catch (supabaseError) {
      console.error('Supabase error:', supabaseError)
    }

    // 2. Send Email to Recipients
    const emailBody = `
New Lead from Santa Clarita Buyers Guide
========================================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Interested In: ${Array.isArray(interestedIn) ? interestedIn.join(', ') : interestedIn}
Property Type: ${propertyType}
Buyer Type: ${buyerType || 'Not specified'}
Timeline: ${timeline}

Message:
${message || 'No additional message'}

---
Source Page: ${source}
Submitted: ${submittedAt}
Consent Given: ${consent ? 'Yes' : 'No'}

---
This lead was generated from SantaClaritaBuyersGuide.com
A Kailei Media property
    `.trim()

    // Send email to both recipients (using Resend if API key is available)
    if (process.env.RESEND_API_KEY) {
      try {
        await Promise.all(
          LEAD_EMAIL_RECIPIENTS.map(async (recipient) => {
            const emailResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
              },
              body: JSON.stringify({
                from: 'leads@santaclaritabuyersguide.com',
                to: recipient,
                subject: `New Lead: ${name} - ${timeline}`,
                text: emailBody,
              }),
            })

            if (!emailResponse.ok) {
              console.error(`Failed to send email to ${recipient}`)
            }
          })
        )
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    }

    // 3. Send to n8n Webhook (if configured)
    if (process.env.N8N_WEBHOOK_URL) {
      try {
        await fetch(process.env.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
      }
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
