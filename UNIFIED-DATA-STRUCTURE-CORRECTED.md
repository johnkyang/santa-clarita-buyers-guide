# Santa Clarita Buyers Guide - Unified Data Structure
**CORRECTED - Matches Actual Website Form**

---

## 📋 Standard Lead Data Fields

This is the **single source of truth** for all lead data across:
- Website Contact Form (lead-capture-form.tsx)
- n8n Webhook
- Retell AI Voice Agent
- Airtable CRM

---

## Actual Form Fields

### Contact Information

| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `name` | string | ✅ Yes | Full name (single field) | "John Smith" |
| `email` | string | ✅ Yes | Email address | "john@example.com" |
| `phone` | string | ⚠️ Optional | Phone number | "(661) 555-1234" |

### Property Preferences

| Field Name | Type | Required | Description | Valid Values |
|------------|------|----------|-------------|--------------|
| `interestedIn` | array | ✅ Yes | Array of neighborhoods interested in | ["Valencia", "Stevenson Ranch"] |
| `propertyType` | string | ✅ Yes | Type of property looking for | See below |
| `timeline` | string | ✅ Yes | Purchase timeline | See below |

**Valid Neighborhoods (interestedIn):**
- `"Valencia"`
- `"Stevenson Ranch"`
- `"Saugus"`
- `"Canyon Country"`
- `"Newhall"`
- `"Castaic"`
- `"Not Sure Yet"`

**Valid Property Types:**
- `"new-construction"` - New Construction
- `"resale"` - Resale Home
- `"55-plus"` - 55+ Community
- `"any"` - Any Type

**Valid Timelines:**
- `"0-3-months"` - 0-3 Months
- `"3-6-months"` - 3-6 Months
- `"6-12-months"` - 6-12 Months
- `"just-browsing"` - Just Browsing

### Buyer Profile

| Field Name | Type | Required | Description | Valid Values |
|------------|------|----------|-------------|--------------|
| `buyerType` | string | ⚠️ Optional | Type of buyer | See below |
| `message` | string | ⚠️ Optional | Additional comments/information | "Looking for homes near schools" |

**Valid Buyer Types:**
- `"first-time"` - First-Time Buyer
- `"move-up"` - Move-Up Buyer
- `"senior"` - Senior/55+
- `"investor"` - Investor
- `"other"` - Other

### System Fields (Auto-populated)

| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `source` | string | ⚠️ Auto | Lead source identifier | "homepage", "contact-form", or "voice-agent" |
| `sourcePage` | string | ⚠️ Auto | Specific page URL | "/contact" or "inbound-call" |
| `consent` | boolean | ✅ Yes (website only) | User consent to be contacted | true |
| `submittedAt` | string | ⚠️ Auto | ISO timestamp | "2025-01-03T18:30:00.000Z" |

---

## 📤 Sample Complete Lead JSON

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "(661) 555-1234",
  "interestedIn": ["Valencia", "Stevenson Ranch"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "message": "Looking for 3-4 bedroom homes near good schools with a backyard",
  "source": "homepage",
  "sourcePage": "/",
  "consent": true,
  "submittedAt": "2025-01-03T18:30:00.000Z"
}
```

---

## 📤 Minimal Lead (Required Fields Only)

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "interestedIn": ["Valencia"],
  "propertyType": "any",
  "timeline": "just-browsing",
  "source": "contact-form",
  "consent": true,
  "submittedAt": "2025-01-03T18:30:00.000Z"
}
```

---

## ⚠️ Important Rules

1. **Field names are case-sensitive** - Use exact spelling
2. **`name` is a single field** - Full name, NOT firstName/lastName
3. **`interestedIn` is REQUIRED** - Must be an array with at least one neighborhood
4. **`propertyType` is REQUIRED** - Must be one of the 4 valid values
5. **`timeline` is REQUIRED** - Must be one of the 4 valid values
6. **Arrays must use proper format** - `["Valencia"]` not `"Valencia"`
7. **Enums must match exactly** - `"first-time"` not `"First Time"`
8. **Timestamps must be ISO 8601** - `"2025-01-03T18:30:00.000Z"`

---

## 🔄 System-Specific Notes

### Website Contact Form
- Uses `lead-capture-form.tsx`
- All required fields must be filled
- Consent checkbox is REQUIRED
- Automatically adds `source`, `sourcePage`, `consent`, `submittedAt`
- Redirects to `/thank-you` page on success

### n8n Webhook
- Receives POST requests at: `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`
- Expects JSON body with above fields
- Forwards to Airtable

### Retell AI Voice Agent
- Collects same fields conversationally
- Should ask for full name (single field, not split)
- Must collect at least one neighborhood for `interestedIn`
- Must set `source: "voice-agent"` and `sourcePage: "inbound-call"`
- Consent field not needed for voice agent

### Airtable
- Maps received fields to Airtable columns
- `interestedIn` should be Multiple Select field
- `propertyType`, `buyerType`, `timeline`, `source` should be Single Select fields

---

**Last Updated:** January 3, 2026
**Version:** 2.0 (Corrected to match actual deployed form)
