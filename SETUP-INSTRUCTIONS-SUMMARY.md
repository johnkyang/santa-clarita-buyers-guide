# Setup Instructions Summary
**Santa Clarita Buyers Guide - Unified Data Configuration**

---

## 🎯 What Changed?

Your website contact form was sending different field names than what n8n and Retell AI expected. This caused data mismatches where:
- **Neighborhoods weren't showing up** (form sent `preferredNeighborhoods`, Retell expected `interestedIn`)
- **Bedrooms weren't captured** (Retell wasn't collecting this)
- **Budget wasn't captured** (Retell wasn't collecting this)

**✅ FIXED:** All systems now use the SAME field names.

---

## 📚 Documents Created

I've created 4 documents to help you configure everything:

### 1. **UNIFIED-DATA-STRUCTURE.md**
📖 **Reference Guide**
- Master list of all fields across all systems
- Valid values for each field
- Data type requirements
- Sample complete lead JSON

**Use this when:** You need to know what fields exist and what values are allowed

---

### 2. **N8N-CONFIGURATION.md**
⚙️ **n8n Setup Instructions**
- Complete webhook configuration
- Airtable field mapping (step-by-step)
- Node configuration examples
- Test commands
- Troubleshooting guide

**Use this to:** Set up your n8n workflow to receive data and save to Airtable

---

### 3. **RETELL-AI-UPDATED-PROMPT.md**
🎙️ **Voice Agent Prompt**
- Complete Retell AI system prompt
- Updated with correct field names
- Professional conversation flow
- Question handling examples
- Edge case management

**Use this to:** Copy/paste into Retell AI agent configuration

---

### 4. **RETELL-AI-WEBHOOK-FUNCTION.md**
🔗 **Retell Webhook Function**
- Exact JSON schema for webhook function
- Sample test payloads
- Function configuration settings
- Error troubleshooting

**Use this to:** Configure the webhook function in Retell AI dashboard

---

## 🚀 What You Need To Do

### Step 1: Configure n8n (Your Workflow)

1. Open `N8N-CONFIGURATION.md`
2. Follow the "Airtable Field Mapping" section
3. Update your n8n workflow to use the correct field names:
   - `firstName` (not `name`)
   - `lastName` (not `name`)
   - `preferredNeighborhoods` (not `interestedIn`)
   - `budgetMin` and `budgetMax` (new fields)
   - `bedrooms` (new field)
   - `comments` (not `message`)

4. Ensure your Airtable has these columns:
   - First Name (Single line text)
   - Last Name (Single line text)
   - Email (Email)
   - Phone (Phone number)
   - Budget Min (Number)
   - Budget Max (Number)
   - Bedrooms (Number)
   - Neighborhoods (Multiple select: Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, Castaic)
   - Buyer Type (Single select: First-Time Buyer, Investor, Relocating, Downsizing, Upsizing, Other)
   - Timeline (Single select: Immediately (0-30 days), 1-3 Months, 3-6 Months, 6-12 Months, Just Browsing)
   - Comments (Long text)
   - Lead Source (Single select: website-contact-form, voice-agent)
   - Source Page (Single line text)
   - Submitted Date (Date)

5. **ACTIVATE your workflow** (toggle ON in n8n)

6. Test with this command:
```bash
curl -X POST \
  https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "661-555-0000",
    "budgetMin": 500000,
    "budgetMax": 750000,
    "bedrooms": 3,
    "preferredNeighborhoods": ["Valencia", "Stevenson Ranch"],
    "buyerType": "first-time",
    "timeline": "3-6-months",
    "comments": "This is a test",
    "source": "website-contact-form",
    "sourcePage": "/contact",
    "submittedAt": "2025-01-03T10:00:00.000Z"
  }'
```

7. Verify record appears in Airtable with ALL fields populated

---

### Step 2: Update Retell AI (Voice Agent)

1. Log into https://retell.ai

2. Open your Santa Clarita Buyers Guide agent (or create new one)

3. **Copy ENTIRE prompt** from `RETELL-AI-UPDATED-PROMPT.md`
   - Select all (Cmd+A)
   - Copy (Cmd+C)
   - Paste into Retell AI "System Prompt" field

4. **Configure webhook function:**
   - Open `RETELL-AI-WEBHOOK-FUNCTION.md`
   - Follow the "Function Configuration" section
   - Name: `submit_lead_to_webhook`
   - URL: `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`
   - Method: POST
   - Headers: `{"Content-Type": "application/json"}`
   - **Copy the EXACT JSON schema** from the document

5. **Test the function** in Retell AI dashboard
   - Use one of the sample payloads from the document
   - Verify 200 OK response

6. **Make a test call**
   - Call your Retell AI number
   - Go through the qualification process
   - Check n8n execution history
   - Verify Airtable record created with `source: "voice-agent"`

---

### Step 3: Test Website Form

1. Go to https://santaclaritabuyersguide.com/contact

2. Fill out the complete form:
   - First & Last Name
   - Email
   - Phone
   - Budget range
   - Number of bedrooms
   - Select multiple neighborhoods
   - Select buyer type
   - Select timeline
   - Add comments

3. Submit form

4. Check n8n execution history - should show new execution

5. Check Airtable - new record should appear with:
   - All fields populated correctly
   - Neighborhoods as array (multiple values)
   - Bedrooms as number
   - Budget Min/Max as numbers
   - Source: "website-contact-form"

---

## ✅ Success Criteria

You'll know everything is working when:

### Website Form ✅
- Form submits successfully
- n8n shows execution in history
- Airtable record created
- ALL fields populated (including neighborhoods, bedrooms, budget)
- Source = "website-contact-form"

### Retell AI Voice Agent ✅
- Agent collects all information smoothly
- Agent spells back email address
- Agent defers questions to advisor
- Webhook function executes
- n8n shows execution
- Airtable record created
- Source = "voice-agent"

### Airtable ✅
- Neighborhoods show as multiple chips
- Budget shows as numbers (not text)
- Bedrooms shows as number
- Timeline shows as dropdown value
- Both website and voice agent records look consistent

---

## 🆘 If Something Doesn't Work

### Website form not sending data?
1. Check Vercel deployment logs: `npx vercel logs --prod`
2. Look for "n8n webhook response: 200"
3. If missing, check environment variable is set

### n8n not receiving data?
1. Check workflow is ACTIVATED (toggle ON)
2. Check webhook URL matches exactly
3. Test with curl command from N8N-CONFIGURATION.md

### Airtable records incomplete?
1. Check field mappings in n8n (see N8N-CONFIGURATION.md)
2. Verify Airtable column types match (Number for numbers, Multiple Select for arrays)
3. Check n8n execution details for errors

### Retell AI not calling webhook?
1. Verify function is configured correctly
2. Test function in Retell AI dashboard
3. Check function schema matches exactly (see RETELL-AI-WEBHOOK-FUNCTION.md)
4. Review call transcript for errors

---

## 📞 Quick Reference

### Webhook URL
```
https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
```

### Website
```
https://santaclaritabuyersguide.com/contact
```

### Required Fields (All Systems)
- firstName
- lastName
- email
- timeline

### Optional But Important
- phone
- budgetMin + budgetMax
- bedrooms
- preferredNeighborhoods
- buyerType
- comments

---

## 📋 Final Checklist

- [ ] Read UNIFIED-DATA-STRUCTURE.md for field definitions
- [ ] Configure n8n workflow using N8N-CONFIGURATION.md
- [ ] Map all Airtable fields correctly
- [ ] Activate n8n workflow
- [ ] Test n8n with curl command
- [ ] Update Retell AI system prompt (RETELL-AI-UPDATED-PROMPT.md)
- [ ] Configure Retell AI webhook function (RETELL-AI-WEBHOOK-FUNCTION.md)
- [ ] Test Retell AI function in dashboard
- [ ] Make test call to Retell AI
- [ ] Submit test form on website
- [ ] Verify both create Airtable records correctly
- [ ] All fields populated including neighborhoods, bedrooms, budget

---

**Questions?**
Reference the specific document for each system:
- **Field definitions** → UNIFIED-DATA-STRUCTURE.md
- **n8n setup** → N8N-CONFIGURATION.md
- **Retell AI prompt** → RETELL-AI-UPDATED-PROMPT.md
- **Retell AI function** → RETELL-AI-WEBHOOK-FUNCTION.md

**Last Updated:** January 3, 2026
**Status:** Ready to configure ✅
