import { NextResponse } from 'next/server'

export async function GET() {
  const webhookUrl = process.env.N8N_WEBHOOK_URL
  const resendKey = process.env.RESEND_API_KEY

  return NextResponse.json({
    webhookConfigured: !!webhookUrl,
    webhookUrl: webhookUrl ? webhookUrl.substring(0, 50) + '...' : 'NOT SET',
    resendConfigured: !!resendKey,
    environment: process.env.VERCEL_ENV || 'development',
  })
}
