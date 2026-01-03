# Webhook Integration Summary - Santa Clarita Buyers Guide

**Status:** ✅ ACTIVE IN PRODUCTION
**Deployed:** January 2, 2025
**Webhook URL:** `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`

---

## 🌐 Website Contact Form Integration

### Current Status
✅ **LIVE** - All website form submissions automatically send to n8n webhook

### Configuration
- **Environment Variable:** `N8N_WEBHOOK_URL` set in Vercel Production
- **Code Location:** `/app/api/leads/route.ts` (lines 282-293)
- **Form Location:** `/components/forms/lead-capture-form.tsx`
- **Live URL:** https://santaclaritabuyersguide.com/contact

### Data Format Sent
```json
{
  "name": "John Smith",
  "firstName": "John",
  "lastName": "Smith",
  "email": "john@example.com",
  "phone": "(661) 555-1234",
  "interestedIn": ["Valencia", "Stevenson Ranch"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "message": "Additional comments",
  "comments": "Additional comments",
  "source": "contact-form",
  "sourcePage": "/contact",
  "consent": true,
  "submittedAt": "2025-01-02T18:30:00.000Z",
  "userAgent": "Mozilla/5.0..."
}
```

### Flow
1. User fills out contact form at https://santaclaritabuyersguide.com/contact
2. Form submits to `/api/leads` endpoint
3. API simultaneously:
   - Saves to Supabase database
   - Sends email notification to johnkyang@outlook.com
   - **Posts to n8n webhook** → Airtable
4. User sees success page

### Testing
✅ Tested on 2025-01-02 - Form successfully sends data to webhook

---

## 📞 Retell AI Voice Agent Integration

### Current Status
⚠️ **READY TO DEPLOY** - Prompt created, needs to be configured in Retell AI dashboard

### Webhook Configuration for Retell

**Function Name:** `submit_lead_to_webhook`

**Webhook URL:** `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`

**Method:** POST

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Parameters:**
```json
{
  "name": {
    "type": "string",
    "required": true,
    "description": "Full name of caller (e.g., 'Mike Johnson')"
  },
  "email": {
    "type": "string",
    "required": true,
    "description": "Email address"
  },
  "phone": {
    "type": "string",
    "required": true,
    "description": "Phone number in format (661) 555-1234"
  },
  "interestedIn": {
    "type": "array",
    "required": false,
    "description": "Array of neighborhoods: ['Valencia', 'Stevenson Ranch', 'Saugus', 'Canyon Country', 'Newhall', 'Castaic']"
  },
  "propertyType": {
    "type": "string",
    "required": false,
    "description": "One of: 'new-construction', 'resale', '55-plus', 'any'"
  },
  "buyerType": {
    "type": "string",
    "required": false,
    "description": "One of: 'first-time', 'move-up', 'senior', 'investor', 'other'"
  },
  "timeline": {
    "type": "string",
    "required": true,
    "description": "One of: '0-3-months', '3-6-months', '6-12-months', 'just-browsing'"
  },
  "comments": {
    "type": "string",
    "required": false,
    "description": "Additional notes or information from caller"
  },
  "source": {
    "type": "string",
    "required": true,
    "default": "voice-agent",
    "description": "Always set to 'voice-agent'"
  },
  "sourcePage": {
    "type": "string",
    "required": true,
    "default": "inbound-call",
    "description": "Always set to 'inbound-call'"
  },
  "submittedAt": {
    "type": "string",
    "required": true,
    "description": "ISO timestamp of submission"
  }
}
```

### Sample Voice Agent Payload
```json
{
  "name": "Mike Johnson",
  "email": "mikej2024@gmail.com",
  "phone": "(661) 555-1234",
  "interestedIn": ["Valencia", "Stevenson Ranch"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "comments": "Interested in down payment assistance programs",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-02T18:30:00.000Z"
}
```

### Voice Agent Flow
1. Caller dials Retell AI phone number
2. Voice agent qualifies lead (name, email, phone, preferences, timeline)
3. Agent triggers `submit_lead_to_webhook` function
4. Data posts to n8n webhook → Airtable
5. Agent confirms: "A Santa Clarita Buyer Advisor will reach out within 24 hours or sooner"

---

## 🔄 n8n Workflow (Your Responsibility)

Your n8n workflow should:

1. **Receive webhook POST** at:
   `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`

2. **Parse incoming data** - Both website form and voice agent send similar structure

3. **Identify source:**
   - `source: "contact-form"` → Website submission
   - `source: "voice-agent"` → Phone call submission
   - `source: "resource-download"` → PDF/resource download

4. **Map to Airtable fields** - Suggested mapping:
   ```
   Name → name (or firstName + lastName)
   Email → email
   Phone → phone
   Neighborhoods → interestedIn (array)
   Property Type → propertyType
   Buyer Type → buyerType
   Timeline → timeline
   Notes → comments or message
   Source → source
   Source Page → sourcePage
   Submitted → submittedAt
   ```

5. **Create Airtable record** in your leads table

6. **Optional: Send notifications** (Slack, email, SMS to your team)

---

## 📊 Data Comparison

| Field | Website Form | Voice Agent | Airtable Column (Suggested) |
|-------|--------------|-------------|----------------------------|
| Name | `name` or `firstName`/`lastName` | `name` | Name |
| Email | `email` | `email` | Email |
| Phone | `phone` | `phone` | Phone |
| Neighborhoods | `interestedIn` (array) | `interestedIn` (array) | Neighborhoods (multi-select) |
| Property Type | `propertyType` | `propertyType` | Property Type |
| Buyer Type | `buyerType` | `buyerType` | Buyer Type |
| Timeline | `timeline` | `timeline` | Timeline |
| Comments | `message` or `comments` | `comments` | Notes |
| Source | `"contact-form"` | `"voice-agent"` | Lead Source |
| Source Page | `sourcePage` | `"inbound-call"` | Source Page |
| Submitted | `submittedAt` | `submittedAt` | Submitted Date |

---

## ✅ Implementation Checklist

### Website Form ✅ COMPLETE
- [x] Environment variable set (`N8N_WEBHOOK_URL`)
- [x] Code deployed to production
- [x] Webhook sending on form submission
- [x] Tested and verified working

### Retell AI Voice Agent ⚠️ PENDING
- [ ] Create agent in Retell AI dashboard
- [ ] Copy prompt from this repository
- [ ] Configure `submit_lead_to_webhook` function with webhook URL
- [ ] Test with sample phone call
- [ ] Verify data appears in n8n/Airtable

### n8n Workflow (Your Side) ❓ STATUS UNKNOWN
- [ ] Webhook endpoint created at Railway
- [ ] Workflow parses incoming JSON
- [ ] Airtable integration configured
- [ ] Test with manual webhook POST
- [ ] Test with live website form submission
- [ ] Test with live voice agent call

---

## 🧪 Testing Instructions

### Test Website Form
```bash
curl -X POST https://santaclaritabuyersguide.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Lead",
    "email": "test@example.com",
    "phone": "(661) 555-0000",
    "interestedIn": ["Valencia"],
    "propertyType": "new-construction",
    "buyerType": "first-time",
    "timeline": "3-6-months",
    "message": "Test submission",
    "source": "api-test",
    "consent": true,
    "submittedAt": "2025-01-02T18:30:00.000Z"
  }'
```

Expected:
- Response: `{"success":true,"message":"Lead captured successfully"}`
- Data appears in n8n webhook logs
- Record created in Airtable

### Test Voice Agent (After Retell Setup)
1. Call your Retell AI phone number
2. Go through qualification process
3. Provide test information
4. Verify webhook receives data
5. Verify Airtable record created with `source: "voice-agent"`

---

## 📁 Related Files

- **Voice Agent Prompt:** See full prompt in previous message (copy to Retell AI)
- **Website API:** `/app/api/leads/route.ts`
- **Contact Form:** `/components/forms/lead-capture-form.tsx`
- **Environment:** `.env.local` (local), Vercel dashboard (production)

---

## 🔗 Important URLs

- **Website Form:** https://santaclaritabuyersguide.com/contact
- **API Endpoint:** https://santaclaritabuyersguide.com/api/leads
- **Webhook URL:** https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
- **Vercel Dashboard:** https://vercel.com/john-yangs-projects-475bed13/scv-buyers-guide

---

## 📞 Support

For webhook issues:
- Check n8n Railway logs
- Verify webhook URL is accessible
- Test with manual POST request
- Check Airtable API permissions

For website form issues:
- Check Vercel deployment logs
- Verify environment variable set
- Test API endpoint directly

For voice agent issues:
- Check Retell AI dashboard logs
- Verify function configuration
- Test with sample call recording

---

**Last Updated:** January 2, 2025
**Status:** Website form LIVE ✅ | Voice agent READY TO DEPLOY ⚠️
