# ✅ FINAL CONFIGURATION - Copy/Paste Ready
**Your Actual Website Form Fields**

---

## 📋 Your Website Form Has These Fields

Based on your actual deployed form at santaclaritabuyersguide.com:

### Required Fields:
- `name` (Full Name - single field)
- `email`
- `interestedIn` (Neighborhoods - array/checkboxes)
- `propertyType` (Looking For dropdown)
- `timeline` (When are you looking to buy?)
- `consent` (Checkbox - website only)

### Optional Fields:
- `phone`
- `buyerType` (I Am A dropdown)
- `message` (Additional Information text area)

---

## 🔗 Step 1: Update Your n8n Workflow

In your n8n workflow, map these fields to Airtable:

```
Name: {{ $json.name }}
Email: {{ $json.email }}
Phone: {{ $json.phone }}
Neighborhoods: {{ $json.interestedIn }}
Property Type: {{ $json.propertyType }}
Buyer Type: {{ $json.buyerType }}
Timeline: {{ $json.timeline }}
Additional Info: {{ $json.message }}
Lead Source: {{ $json.source }}
Source Page: {{ $json.sourcePage }}
Submitted: {{ $json.submittedAt }}
```

### Airtable Column Types:
- **Neighborhoods** → Multiple Select with options: Valencia, Stevenson Ranch, Saugus, Canyon Country, Newhall, Castaic, Not Sure Yet
- **Property Type** → Single Select with options: new-construction, resale, 55-plus, any
- **Buyer Type** → Single Select with options: first-time, move-up, senior, investor, other
- **Timeline** → Single Select with options: 0-3-months, 3-6-months, 6-12-months, just-browsing
- **Lead Source** → Single Select with options: homepage, contact-form, voice-agent

---

## 🎙️ Step 2: Updated Retell AI Webhook Function

Copy this JSON schema into Retell AI webhook function configuration:

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
      "description": "Email address - must spell back for confirmation"
    },
    "phone": {
      "type": "string",
      "description": "Phone number in format: (661) 555-1234"
    },
    "interestedIn": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["Valencia", "Stevenson Ranch", "Saugus", "Canyon Country", "Newhall", "Castaic", "Not Sure Yet"]
      },
      "description": "Array of neighborhoods caller is interested in"
    },
    "propertyType": {
      "type": "string",
      "enum": ["new-construction", "resale", "55-plus", "any"],
      "description": "Type of property: new-construction, resale, 55-plus, or any"
    },
    "buyerType": {
      "type": "string",
      "enum": ["first-time", "move-up", "senior", "investor", "other"],
      "description": "Type of buyer: first-time, move-up, senior, investor, or other"
    },
    "timeline": {
      "type": "string",
      "enum": ["0-3-months", "3-6-months", "6-12-months", "just-browsing"],
      "description": "Purchase timeline - REQUIRED"
    },
    "message": {
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
      "format": "date-time",
      "description": "ISO timestamp"
    }
  },
  "required": ["name", "email", "interestedIn", "propertyType", "timeline", "source", "sourcePage", "submittedAt"]
}
```

**Webhook URL:** `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`

**Method:** POST

**Headers:** `{"Content-Type": "application/json"}`

---

## 🎙️ Step 3: Updated Retell AI Voice Agent Prompt

### Information to Gather (In Order):

1. **Full Name** ✅ REQUIRED
   - Get full name as ONE field
   - Example: "Can I get your full name?" → "Mike Johnson"

2. **Email** ✅ REQUIRED
   - ALWAYS spell back for confirmation
   - Example: "M-I-K-E dot J-O-H-N-S-O-N at gmail dot com. Is that correct?"

3. **Phone** (Optional)
   - Example: "What's the best phone number to reach you?"

4. **Neighborhoods (interestedIn)** ✅ REQUIRED
   - Must select at least ONE
   - Options: Valencia, Stevenson Ranch, Saugus, Canyon Country, Newhall, Castaic, Not Sure Yet
   - Example: "Which neighborhoods are you interested in?"

5. **Property Type** ✅ REQUIRED
   - Options: new-construction, resale, 55-plus, any
   - Example: "Are you looking for new construction, resale homes, 55+ communities, or any type?"

6. **Buyer Type** (Optional)
   - Options: first-time, move-up, senior, investor, other
   - Example: "Are you a first-time buyer, move-up buyer, senior, investor, or something else?"

7. **Timeline** ✅ REQUIRED (Most Important!)
   - Options: 0-3-months, 3-6-months, 6-12-months, just-browsing
   - Example: "What's your timeline? Are you looking in the next 3 months, 6 months, or just browsing?"

8. **Additional Information (message)** (Optional)
   - Example: "Is there anything else important I should pass along to your advisor?"

### Function Call Example:

```json
{
  "name": "Mike Johnson",
  "email": "mike.johnson@gmail.com",
  "phone": "(661) 555-1234",
  "interestedIn": ["Valencia", "Stevenson Ranch"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "message": "Interested in homes near good schools",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-03T18:30:00.000Z"
}
```

---

## 🧪 Test Your Setup

###Test website form:
1. Go to https://santaclaritabuyersguide.com
2. Fill out form completely
3. Submit
4. Check n8n execution history
5. Verify Airtable record created with ALL fields

### Test n8n directly:
```bash
curl -X POST \
  https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "(661) 555-0000",
    "interestedIn": ["Valencia", "Stevenson Ranch"],
    "propertyType": "new-construction",
    "buyerType": "first-time",
    "timeline": "3-6-months",
    "message": "This is a test",
    "source": "homepage",
    "sourcePage": "/",
    "submittedAt": "2025-01-03T10:00:00.000Z"
  }'
```

Expected response: `{"message":"Workflow was started"}`

---

## ✅ Final Checklist

- [ ] n8n workflow updated with correct field names (`interestedIn`, `propertyType`, `message`)
- [ ] Airtable columns match field names
- [ ] Airtable "Neighborhoods" is Multiple Select type
- [ ] Airtable "Property Type", "Buyer Type", "Timeline" are Single Select
- [ ] All dropdown options added to Airtable
- [ ] n8n workflow ACTIVATED (toggle ON)
- [ ] Test curl command successful
- [ ] Test website form submission successful
- [ ] Airtable record shows all fields populated
- [ ] Retell AI webhook function configured with new JSON schema
- [ ] Retell AI voice agent updated to collect correct fields
- [ ] Test Retell AI call successful

---

**Status:** ✅ Website API Updated & Deployed (Jan 3, 2026)

**Next:** Update your n8n and Retell AI configurations using the info above!
