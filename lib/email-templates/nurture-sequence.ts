// Email nurture sequence — Emails 2-5
// Email 1 (confirmation) is sent inline in app/api/leads/route.ts
// These are scheduled at: Day 2, Day 4, Day 7, Day 10

export interface NurtureEmail {
  subject: string
  previewText: string
  html: string
  text: string
}

const FROM = 'Santa Clarita Buyers Guide <hello@santaclaritabuyersguide.com>'
const REPLY_TO = 'johnkyang@outlook.com'

export { FROM as NURTURE_FROM, REPLY_TO as NURTURE_REPLY_TO }

// ─── Email 2 — Day 2 ─────────────────────────────────────────────────────────
// Subject: The 6 Santa Clarita neighborhoods (and who each one is really for)

export function buildEmail2(firstName: string): NurtureEmail {
  const subject = 'The 6 Santa Clarita neighborhoods (and who each one is really for)'
  const previewText = "Valencia and Canyon Country are $200K apart. Here's why — and which is right for you."

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td style="padding:40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin:0 auto;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

          <tr>
            <td style="background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);padding:30px;border-radius:8px 8px 0 0;text-align:center;">
              <p style="margin:0 0 8px 0;color:#dbeafe;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Santa Clarita Buyers Guide</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;line-height:1.3;">The 6 Santa Clarita Neighborhoods</h1>
              <p style="margin:8px 0 0 0;color:#bfdbfe;font-size:15px;">And who each one is really for</p>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 30px;">
              <p style="margin:0 0 16px 0;color:#374151;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
              <p style="margin:0 0 20px 0;color:#374151;font-size:15px;line-height:1.7;">A lot of buyers come to Santa Clarita thinking of it as one place. It's actually six very different communities — and choosing the wrong one is one of the most common (and expensive) mistakes buyers make.</p>
              <p style="margin:0 0 20px 0;color:#1e293b;font-size:15px;font-weight:bold;">Here's the quick breakdown:</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr><td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;"><strong style="color:#1e40af;">Valencia</strong> — The most polished community in the valley. Master-planned paseos (walking paths through greenbelts), top-rated schools, well-maintained homes. Prices run $800K–$1.1M+. <em>Best for families who want the full package.</em></td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;"><strong style="color:#1e40af;">Stevenson Ranch</strong> — Upscale, quieter, excellent schools. A bit more private than Valencia. Prices are slightly lower. <em>Best for buyers who want quality without the HOA-heavy atmosphere.</em></td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;"><strong style="color:#1e40af;">Saugus</strong> — More affordable than Valencia, diverse home styles. Some of the best elementary schools in the valley. <em>Best for growing families watching their budget.</em></td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;"><strong style="color:#1e40af;">Canyon Country</strong> — The most affordable area in SCV. Mix of newer and older homes. More space for the money. <em>Best for buyers who prioritize square footage over prestige.</em></td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #e5e7eb;"><strong style="color:#1e40af;">Newhall</strong> — Old Town Newhall has walkable streets, restaurants, and local character rare for SCV. Prices are rising as the area develops. <em>Best for buyers who want something with a real neighborhood feel.</em></td></tr>
                <tr><td style="padding:14px 16px;"><strong style="color:#1e40af;">Castaic</strong> — Growing fast with newer master-planned communities. One of the most affordable options with modern construction. <em>Best for buyers who want new builds at lower prices.</em></td></tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="text-align:center;">
                    <a href="https://www.santaclaritabuyersguide.com/neighborhood-quiz" style="display:inline-block;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Take the 5-Question Neighborhood Quiz</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px 0;color:#6b7280;font-size:14px;">Or go deep on any neighborhood: <a href="https://www.santaclaritabuyersguide.com/neighborhoods" style="color:#2563eb;text-decoration:none;">Browse all neighborhood guides</a></p>
              <p style="margin:24px 0 0 0;color:#6b7280;font-size:14px;">— The Santa Clarita Buyers Guide Team</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#f8fafc;padding:16px 30px;border-radius:0 0 8px 8px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;line-height:1.6;">You received this because you requested information from SantaClaritaBuyersGuide.com.<br>This is a free, independent buyer resource. We are not a licensed real estate brokerage.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = `Hi ${firstName},

A lot of buyers come to Santa Clarita thinking of it as one place. It's actually six very different communities — and choosing the wrong one is one of the most common (and expensive) mistakes buyers make.

Here's the quick breakdown:

Valencia — The most polished community in the valley. Master-planned paseos, top-rated schools, well-maintained homes. Prices run $800K–$1.1M+. Best for families who want the full package.

Stevenson Ranch — Upscale, quieter, excellent schools. A bit more private than Valencia. Prices are slightly lower. Best for buyers who want quality without the HOA-heavy atmosphere.

Saugus — More affordable than Valencia, diverse home styles. Some of the best elementary schools in the valley. Best for growing families watching their budget.

Canyon Country — The most affordable area in SCV. Mix of newer and older homes. More space for the money. Best for buyers who prioritize square footage over prestige.

Newhall — Old Town Newhall has walkable streets, restaurants, and local character rare for SCV. Prices are rising as the area develops. Best for buyers who want something with a real neighborhood feel.

Castaic — Growing fast with newer master-planned communities. One of the most affordable options with modern construction. Best for buyers who want new builds at lower prices.

The best way to figure out which one fits you: https://www.santaclaritabuyersguide.com/neighborhood-quiz

Or browse all neighborhood guides: https://www.santaclaritabuyersguide.com/neighborhoods

— The Santa Clarita Buyers Guide Team`

  return { subject, previewText, html, text }
}

// ─── Email 3 — Day 4 ─────────────────────────────────────────────────────────
// Subject: How much house can you actually afford in Santa Clarita?

export function buildEmail3(firstName: string): NurtureEmail {
  const subject = 'How much house can you actually afford in Santa Clarita?'
  const previewText = "Not the \"3x your income\" rule. The actual number lenders use."

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td style="padding:40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin:0 auto;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

          <tr>
            <td style="background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);padding:30px;border-radius:8px 8px 0 0;text-align:center;">
              <p style="margin:0 0 8px 0;color:#dbeafe;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Santa Clarita Buyers Guide</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;line-height:1.3;">How Much House Can You Actually Afford?</h1>
              <p style="margin:8px 0 0 0;color:#bfdbfe;font-size:15px;">Not the "3x income" rule. The real number lenders use.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 30px;">
              <p style="margin:0 0 16px 0;color:#374151;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
              <p style="margin:0 0 20px 0;color:#374151;font-size:15px;line-height:1.7;">Here's something most buyers don't know until they're already in escrow: lenders don't care how much money you make. They care about your <strong>Debt-to-Income ratio</strong> — the percentage of your gross monthly income that goes toward all debt payments, including your future mortgage.</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#eff6ff;border-left:4px solid #2563eb;border-radius:0 6px 6px 0;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 10px 0;color:#1e40af;font-size:15px;font-weight:bold;">The DTI ceilings that control your budget:</p>
                    <p style="margin:0 0 6px 0;color:#1e293b;font-size:15px;">Conventional loan max DTI: <strong>43%</strong></p>
                    <p style="margin:0;color:#1e293b;font-size:15px;">FHA loan max DTI: <strong>46.99%</strong></p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px 0;color:#374151;font-size:15px;line-height:1.7;">That ceiling controls everything. One car payment can cost you $80,000–$100,000 in buying power.</p>

              <p style="margin:0 0 12px 0;color:#1e293b;font-size:15px;font-weight:bold;">Real example — $150,000 household income:</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;border:1px solid #e5e7eb;border-radius:6px;">
                <tr style="background-color:#f8fafc;">
                  <td style="padding:10px 16px;font-size:13px;font-weight:bold;color:#64748b;border-bottom:1px solid #e5e7eb;">Scenario</td>
                  <td style="padding:10px 16px;font-size:13px;font-weight:bold;color:#64748b;border-bottom:1px solid #e5e7eb;">Conventional</td>
                  <td style="padding:10px 16px;font-size:13px;font-weight:bold;color:#64748b;border-bottom:1px solid #e5e7eb;">FHA</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;border-bottom:1px solid #e5e7eb;">$700/mo in existing debt</td>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;border-bottom:1px solid #e5e7eb;">~$680,000</td>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;border-bottom:1px solid #e5e7eb;">~$750,000</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;">$0 in existing debt</td>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;">~$785,000</td>
                  <td style="padding:12px 16px;font-size:14px;color:#374151;">~$855,000</td>
                </tr>
              </table>

              <p style="margin:0 0 12px 0;color:#1e293b;font-size:15px;font-weight:bold;">What most buyers miss:</p>
              <ul style="margin:0 0 24px 0;padding-left:20px;color:#374151;font-size:15px;line-height:1.8;">
                <li>Property taxes in Santa Clarita average 1.25%+ annually</li>
                <li>HOA fees in master-planned communities run $150–$400/month</li>
                <li>Closing costs are typically $16,000–$24,000 on an $800K home — on top of your down payment</li>
              </ul>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="text-align:center;">
                    <a href="https://www.santaclaritabuyersguide.com/buying-power" style="display:inline-block;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Calculate Your Real Buying Power</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;color:#6b7280;font-size:14px;">— The Santa Clarita Buyers Guide Team</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#f8fafc;padding:16px 30px;border-radius:0 0 8px 8px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;line-height:1.6;">You received this because you requested information from SantaClaritaBuyersGuide.com.<br>This is a free, independent buyer resource. We are not a licensed real estate brokerage.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = `Hi ${firstName},

Here's something most buyers don't know until they're already in escrow: lenders don't care how much money you make. They care about your Debt-to-Income ratio — the percentage of your gross monthly income that goes toward all debt payments, including your future mortgage.

- Conventional loan max DTI: 43%
- FHA loan max DTI: 46.99%

That ceiling controls everything. One car payment can cost you $80,000–$100,000 in buying power.

Real example — $150,000 household income:

If you have $700/month in existing debt (car payment, student loans, etc.):
- Conventional loan: max purchase price around $680,000
- FHA loan: max purchase price around $750,000

If you have $0 in existing debt:
- Conventional: up to $785,000
- FHA: up to $855,000

What most buyers miss:
- Property taxes in Santa Clarita average 1.25%+ annually
- HOA fees in master-planned communities run $150–$400/month
- Closing costs are typically $16,000–$24,000 on an $800K home — on top of your down payment

Use our buying power calculator to see your exact number:
https://www.santaclaritabuyersguide.com/buying-power

— The Santa Clarita Buyers Guide Team`

  return { subject, previewText, html, text }
}

// ─── Email 4 — Day 7 ─────────────────────────────────────────────────────────
// Subject: You might qualify for up to $150,000 in down payment help

export function buildEmail4(firstName: string): NurtureEmail {
  const subject = 'You might qualify for up to $150,000 in down payment help'
  const previewText = "Most buyers assume they won't qualify. Most are wrong."

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td style="padding:40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin:0 auto;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

          <tr>
            <td style="background:linear-gradient(135deg,#10b981 0%,#059669 100%);padding:30px;border-radius:8px 8px 0 0;text-align:center;">
              <p style="margin:0 0 8px 0;color:#d1fae5;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Santa Clarita Buyers Guide</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;line-height:1.3;">Up to $150,000 in Down Payment Help</h1>
              <p style="margin:8px 0 0 0;color:#a7f3d0;font-size:15px;">Most buyers assume they won't qualify. Most are wrong.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 30px;">
              <p style="margin:0 0 16px 0;color:#374151;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
              <p style="margin:0 0 20px 0;color:#374151;font-size:15px;line-height:1.7;">Here's one of the most overlooked facts in Santa Clarita real estate: California has some of the most generous down payment assistance programs in the country — and most buyers either don't know they exist or assume they don't qualify.</p>
              <p style="margin:0 0 20px 0;color:#1e293b;font-size:15px;font-weight:bold;">Here are the four main programs:</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:16px;background-color:#f0fdf4;border-left:4px solid #10b981;border-radius:0 6px 6px 0;margin-bottom:12px;">
                    <p style="margin:0 0 6px 0;font-size:15px;font-weight:bold;color:#065f46;">CalHFA Dream For All</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">Up to 20% of the purchase price (max $150,000). No monthly payment. Designed for first-generation homebuyers. Uses a lottery — you have to be ready when the window opens.</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f0fdf4;border-left:4px solid #10b981;border-radius:0 6px 6px 0;margin-bottom:12px;">
                    <p style="margin:0 0 6px 0;font-size:15px;font-weight:bold;color:#065f46;">CalHFA MyHome</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">Up to 3.5% of the purchase price as a deferred loan. No monthly payment, zero interest. Available year-round through CalHFA-approved lenders. Good for first-time buyers who don't qualify for Dream For All.</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f0fdf4;border-left:4px solid #10b981;border-radius:0 6px 6px 0;margin-bottom:12px;">
                    <p style="margin:0 0 6px 0;font-size:15px;font-weight:bold;color:#065f46;">GSFA Platinum</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">Up to 5% of the loan amount as a true grant — no repayment ever. Works for move-up buyers too, not just first-timers. One of the most overlooked programs in the valley.</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f0fdf4;border-left:4px solid #10b981;border-radius:0 6px 6px 0;">
                    <p style="margin:0 0 6px 0;font-size:15px;font-weight:bold;color:#065f46;">CalHFA ZIP</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">Up to $30,000 for closing costs. Zero interest, deferred until you sell or refinance. Stacks with MyHome.</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px 0;color:#374151;font-size:15px;line-height:1.7;"><strong>Income limits are higher than you think.</strong> For LA County, the CalHFA limit for a 2-person household is approximately $177,000. GSFA limits are even higher.</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="text-align:center;">
                    <a href="https://www.santaclaritabuyersguide.com/dpa-checker" style="display:inline-block;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Check Your DPA Eligibility (4 Questions)</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px 0;color:#6b7280;font-size:14px;">P.S. Our full DPA guide: <a href="https://www.santaclaritabuyersguide.com/blog/down-payment-assistance-programs-santa-clarita-2026" style="color:#2563eb;text-decoration:none;">Down Payment Assistance Programs in Santa Clarita (2026)</a></p>
              <p style="margin:24px 0 0 0;color:#6b7280;font-size:14px;">— The Santa Clarita Buyers Guide Team</p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#f8fafc;padding:16px 30px;border-radius:0 0 8px 8px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;line-height:1.6;">You received this because you requested information from SantaClaritaBuyersGuide.com.<br>This is a free, independent buyer resource. We are not a licensed real estate brokerage.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = `Hi ${firstName},

Here's one of the most overlooked facts in Santa Clarita real estate: California has some of the most generous down payment assistance programs in the country — and most buyers either don't know they exist or assume they don't qualify.

Here are the four main programs:

CalHFA Dream For All
Up to 20% of the purchase price (max $150,000). No monthly payment. Designed for first-generation homebuyers. Uses a lottery — you have to be ready when the window opens.

CalHFA MyHome
Up to 3.5% of the purchase price as a deferred loan. No monthly payment, zero interest. Available year-round through CalHFA-approved lenders. Good for first-time buyers who don't qualify for Dream For All.

GSFA Platinum
Up to 5% of the loan amount as a true grant — no repayment ever. Works for move-up buyers too, not just first-timers. One of the most overlooked programs in the valley.

CalHFA ZIP
Up to $30,000 for closing costs. Zero interest, deferred until you sell or refinance. Stacks with MyHome.

Income limits are higher than you think. For LA County, the CalHFA limit for a 2-person household is approximately $177,000. GSFA limits are even higher.

Check if you qualify in 4 questions — it takes 2 minutes:
https://www.santaclaritabuyersguide.com/dpa-checker

P.S. Our full DPA guide: https://www.santaclaritabuyersguide.com/blog/down-payment-assistance-programs-santa-clarita-2026

— The Santa Clarita Buyers Guide Team`

  return { subject, previewText, html, text }
}

// ─── Email 5 — Day 10 ────────────────────────────────────────────────────────
// Subject: {{first_name}}, where are you in your home search?

export function buildEmail5(firstName: string): NurtureEmail {
  const subject = `${firstName}, where are you in your home search?`
  const previewText = "No pressure — just checking in to see if we can help."

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checking in on your home search</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td style="padding:40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin:0 auto;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

          <tr>
            <td style="background:linear-gradient(135deg,#2563eb 0%,#1e40af 100%);padding:30px;border-radius:8px 8px 0 0;text-align:center;">
              <p style="margin:0 0 8px 0;color:#dbeafe;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Santa Clarita Buyers Guide</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;line-height:1.3;">${firstName}, Where Are You in Your Home Search?</h1>
              <p style="margin:8px 0 0 0;color:#bfdbfe;font-size:15px;">No pressure — just checking in.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:36px 30px;">
              <p style="margin:0 0 16px 0;color:#374151;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
              <p style="margin:0 0 24px 0;color:#374151;font-size:15px;line-height:1.7;">I've sent you a few emails over the past week and a half — neighborhoods, affordability, down payment programs. I hope at least some of it was useful.</p>
              <p style="margin:0 0 24px 0;color:#374151;font-size:15px;line-height:1.7;">I'm checking in because most buyers at this stage have one of three things going on:</p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;background-color:#eff6ff;border-radius:6px;margin-bottom:12px;">
                    <p style="margin:0 0 8px 0;font-size:15px;font-weight:bold;color:#1e40af;">"I'm still early in the process."</p>
                    <p style="margin:0 0 12px 0;font-size:14px;color:#374151;line-height:1.6;">That's completely fine. Most serious buyers spend 3–6 months in research mode before they're ready to move. The best thing you can do right now is get pre-approved so you know your real budget.</p>
                    <a href="https://www.santaclaritabuyersguide.com/blog/how-much-house-can-i-afford-santa-clarita-2026" style="color:#2563eb;text-decoration:none;font-size:14px;font-weight:600;">Read: How Much House Can You Afford in Santa Clarita? &rarr;</a>
                  </td>
                </tr>
                <tr><td style="height:12px;"></td></tr>
                <tr>
                  <td style="padding:20px;background-color:#fff7ed;border-radius:6px;margin-bottom:12px;">
                    <p style="margin:0 0 8px 0;font-size:15px;font-weight:bold;color:#c2410c;">"I've lost offers and I'm frustrated."</p>
                    <p style="margin:0 0 12px 0;font-size:14px;color:#374151;line-height:1.6;">This is more common than you think in Santa Clarita. Well-priced homes in Valencia and Stevenson Ranch routinely get 4–8 offers. There are strategies that work — and they don't require paying over the odds.</p>
                    <a href="https://www.santaclaritabuyersguide.com/blog/how-to-win-bidding-war-santa-clarita-2026" style="color:#ea580c;text-decoration:none;font-size:14px;font-weight:600;">Read: How to Win a Bidding War in Santa Clarita &rarr;</a>
                  </td>
                </tr>
                <tr><td style="height:12px;"></td></tr>
                <tr>
                  <td style="padding:20px;background-color:#f0fdf4;border-radius:6px;">
                    <p style="margin:0 0 8px 0;font-size:15px;font-weight:bold;color:#065f46;">"I'm ready to talk to someone."</p>
                    <p style="margin:0 0 0 0;font-size:14px;color:#374151;line-height:1.6;">If you want to connect with a buyer's agent who knows the Santa Clarita market — someone who won't pressure you or waste your time — I can help with that. Just reply to this email and let me know what's going on.</p>
                  </td>
                </tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="text-align:center;">
                    <a href="tel:6614517200" style="display:inline-block;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Call (661) 451-7200</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;color:#6b7280;font-size:14px;">— The Santa Clarita Buyers Guide Team<br><span style="color:#9ca3af;">No pitch, no obligation — just a conversation about what makes sense for your situation.</span></p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#f8fafc;padding:16px 30px;border-radius:0 0 8px 8px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;line-height:1.6;">You received this because you requested information from SantaClaritaBuyersGuide.com.<br>This is a free, independent buyer resource. We are not a licensed real estate brokerage.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = `Hi ${firstName},

I've sent you a few emails over the past week and a half — neighborhoods, affordability, down payment programs. I hope at least some of it was useful.

I'm checking in because most buyers at this stage have one of three things going on:

"I'm still early in the process."
That's completely fine. Most serious buyers spend 3–6 months in research mode before they're ready to move. The best thing you can do right now is get pre-approved so you know your real budget, and stay close to the market so you recognize a good deal when you see one.

Read: How Much House Can You Afford in Santa Clarita?
https://www.santaclaritabuyersguide.com/blog/how-much-house-can-i-afford-santa-clarita-2026

"I've lost offers and I'm frustrated."
This is more common than you think in Santa Clarita. Well-priced homes in Valencia and Stevenson Ranch routinely get 4–8 offers. There are strategies that work — and they don't require paying over the odds.

Read: How to Win a Bidding War in Santa Clarita
https://www.santaclaritabuyersguide.com/blog/how-to-win-bidding-war-santa-clarita-2026

"I'm ready to talk to someone."
If you want to connect with a buyer's agent who knows the Santa Clarita market — someone who won't pressure you or waste your time — I can help with that. Just reply to this email and let me know what's going on. Or call (661) 451-7200.

— The Santa Clarita Buyers Guide Team`

  return { subject, previewText, html, text }
}

// ─── Schedule helper ─────────────────────────────────────────────────────────
// Returns ISO 8601 date string N days from now (for Resend scheduledAt)

export function daysFromNow(days: number): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
}
