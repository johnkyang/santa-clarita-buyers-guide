# Retell AI Voice Agent - Quick Setup Guide
**Santa Clarita Buyers Guide**

---

## Step 1: Create New Agent in Retell AI Dashboard

1. Log into https://retell.ai
2. Click **"Create Agent"**
3. Name: `Santa Clarita Buyers Guide - Inbound Lead Qualification`

---

## Step 2: Configure Agent Settings

### General Settings
- **Voice:** Choose professional female or male voice (recommend: "Emily" or "Michael")
- **Language:** English (US)
- **Agent Type:** Inbound
- **Temperature:** 0.7 (balanced creativity)

---

## Step 3: Add System Prompt

Copy the **entire prompt** from the section titled:
**"SANTA CLARITA BUYERS GUIDE - INBOUND LEAD QUALIFICATION AGENT"**

(The full prompt is in your previous conversation or in WEBHOOK-INTEGRATION-SUMMARY.md)

---

## Step 4: Configure Webhook Function

### Function Configuration

**Function Name:** `submit_lead_to_webhook`

**Description:** Submits lead information to n8n webhook which syncs data to Airtable CRM

**Type:** HTTP Request / Webhook

**URL:**
```
https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
```

**Method:** POST

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

### Function Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full name of caller (e.g., 'Mike Johnson')"
    },
    "email": {
      "type": "string",
      "description": "Email address"
    },
    "phone": {
      "type": "string",
      "description": "Phone number in format (661) 555-1234"
    },
    "interestedIn": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of neighborhoods: Valencia, Stevenson Ranch, Saugus, Canyon Country, Newhall, Castaic"
    },
    "propertyType": {
      "type": "string",
      "description": "One of: new-construction, resale, 55-plus, any"
    },
    "buyerType": {
      "type": "string",
      "description": "One of: first-time, move-up, senior, investor, other"
    },
    "timeline": {
      "type": "string",
      "description": "One of: 0-3-months, 3-6-months, 6-12-months, just-browsing"
    },
    "comments": {
      "type": "string",
      "description": "Additional notes or information from caller"
    },
    "source": {
      "type": "string",
      "description": "Always set to 'voice-agent'"
    },
    "sourcePage": {
      "type": "string",
      "description": "Always set to 'inbound-call'"
    },
    "submittedAt": {
      "type": "string",
      "description": "ISO timestamp of submission"
    }
  },
  "required": ["name", "email", "phone", "timeline", "source", "sourcePage", "submittedAt"]
}
```

### Sample Test Payload (for testing function)

```json
{
  "name": "Test Caller",
  "email": "test@example.com",
  "phone": "(661) 555-0000",
  "interestedIn": ["Valencia"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "comments": "This is a test call",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-02T18:30:00.000Z"
}
```

---

## Step 5: Set Dynamic Variables

In the Retell AI dashboard, configure these variables:

- `{{current_time_Pacific}}` → Current time in Pacific timezone
- `{{user_number}}` → Caller's phone number from caller ID

(Retell should have these pre-built)

---

## Step 6: Configure Phone Number

1. Get a phone number from Retell (or port your existing number)
2. Assign the number to this agent
3. Configure business hours: Monday-Friday, 9am-6pm Pacific (or 24/7)

---

## Step 7: Test the Agent

### Test Scenarios

**Scenario 1: Happy Path**
- Call the number
- Provide all information smoothly
- Verify webhook receives data
- Check Airtable for new record

**Scenario 2: Email Spelling**
- Give complex email (john.smith_51@gmail.com)
- Verify agent spells it back correctly: "J - O - H - N - dot - S - M - I - T - H - underscore - five - one - at - gmail - dot - com"

**Scenario 3: Questions Deflection**
- Ask: "What's the best school in Valencia?"
- Agent should defer to advisor: "That's a great question. Our Santa Clarita Buyer Advisors have deep expertise on Valencia schools..."

**Scenario 4: Financing Question**
- Ask: "Can you help me get pre-approved?"
- Agent should defer: "We work with down payment assistance specialists who will be happy to help you with financing options..."

**Scenario 5: Missing Information**
- Refuse to give email, only provide phone
- Agent should still proceed and submit with phone only

**Scenario 6: Multiple Neighborhoods**
- Say: "I'm interested in Valencia, Stevenson Ranch, and Saugus"
- Verify all three appear in webhook payload array

---

## Step 8: Review Call Transcripts

After each test call:

1. Download call transcript from Retell dashboard
2. Check for issues:
   - ❌ Agent asks multiple questions at once
   - ❌ Agent repeats timezone multiple times
   - ❌ Agent uses same enthusiastic word repeatedly
   - ❌ Agent doesn't spell email correctly
   - ❌ Agent gives real estate advice instead of deferring

3. If issues found, refine prompt and re-test

---

## Step 9: Verify n8n/Airtable Integration

After test call:

1. Check n8n webhook logs on Railway
2. Verify incoming POST request received
3. Check Airtable for new record
4. Confirm all fields populated correctly:
   - Name
   - Email
   - Phone
   - Neighborhoods (array)
   - Property Type
   - Buyer Type
   - Timeline
   - Comments
   - Source = "voice-agent"
   - Source Page = "inbound-call"

---

## Step 10: Go Live

Once testing is successful:

1. Update business hours/availability
2. Add phone number to website
3. Update Google Business Profile with new number
4. Monitor first few calls closely
5. Collect feedback and refine prompt as needed

---

## 📊 Expected Call Flow

**1. Greeting (5-10 seconds)**
> "Thank you for calling Santa Clarita Buyers Guide. This is Sarah. How can I help you today?"

**2. Information Gathering (2-4 minutes)**
- Name
- Email (with spelling confirmation)
- Phone
- Neighborhoods
- Property type
- Buyer type
- Timeline (MOST IMPORTANT)
- Additional comments

**3. Questions Handling (as needed)**
- Defer all specific questions to advisor
- Reassure caller they'll get expert help

**4. Confirmation & Close (30 seconds)**
> "Perfect. I have everything I need. A Santa Clarita Buyer Advisor will reach out to you within 24 hours or sooner at [phone/email]. Thank you for calling Santa Clarita Buyers Guide. We look forward to helping you."

**Total Call Time:** 3-5 minutes

---

## 🚨 Common Issues & Solutions

### Issue: Agent asks multiple questions at once
**Solution:** Add emphasis in prompt: "Ask ONLY ONE question at a time"

### Issue: Agent doesn't spell email back
**Solution:** Check that email confirmation is in "Example Interactions"

### Issue: Agent gives real estate advice
**Solution:** Strengthen "Handling Questions" section with more examples

### Issue: Webhook not receiving data
**Solution:**
1. Test webhook URL directly with curl
2. Check Retell function configuration
3. Verify payload structure matches schema

### Issue: Agent talks too much
**Solution:** Add to prompt: "Keep responses to 1-2 short sentences maximum"

---

## 📞 Support Contacts

- **Retell AI Support:** support@retell.ai
- **n8n/Railway Issues:** Check Railway logs at https://railway.app
- **Website Issues:** Check Vercel logs

---

## 📋 Checklist

- [ ] Agent created in Retell AI
- [ ] System prompt added (full prompt from document)
- [ ] Webhook function configured with URL
- [ ] Function parameters set up (JSON schema)
- [ ] Dynamic variables configured
- [ ] Phone number assigned
- [ ] Test call completed (happy path)
- [ ] Test call with email spelling
- [ ] Test call with questions deflection
- [ ] Webhook data verified in n8n logs
- [ ] Airtable record created successfully
- [ ] Source field = "voice-agent" confirmed
- [ ] Ready for production

---

**Last Updated:** January 2, 2025
**Next Steps:** Complete checklist above, then go live!
