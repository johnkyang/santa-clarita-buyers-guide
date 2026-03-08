# Santa Clarita Buyers Guide - Unified Data Structure
**All Systems Field Mapping (Website, n8n, Retell AI)**

---

## 📋 Standard Lead Data Fields

This is the **single source of truth** for all lead data across:
- Website Contact Form
- n8n Webhook
- Retell AI Voice Agent
- Airtable CRM

---

## Field Definitions

### Contact Information

| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `firstName` | string | ✅ Yes | First name | "John" |
| `lastName` | string | ✅ Yes | Last name | "Doe" |
| `email` | string | ✅ Yes | Email address | "john@example.com" |
| `phone` | string | ⚠️ Optional | Phone number | "661-555-1234" |

### Property Preferences

| Field Name | Type | Required | Description | Valid Values |
|------------|------|----------|-------------|--------------|
| `budgetMin` | number | ⚠️ Optional | Minimum budget in dollars | 500000 |
| `budgetMax` | number | ⚠️ Optional | Maximum budget in dollars | 750000 |
| `bedrooms` | number | ⚠️ Optional | Number of bedrooms desired | 1, 2, 3, 4, 5 |
| `preferredNeighborhoods` | array | ⚠️ Optional | Array of neighborhood names | ["Valencia", "Stevenson Ranch"] |

**Valid Neighborhoods:**
- `"Valencia"`
- `"Newhall"`
- `"Saugus"`
- `"Canyon Country"`
- `"Stevenson Ranch"`
- `"Castaic"`

### Buyer Profile

| Field Name | Type | Required | Description | Valid Values |
|------------|------|----------|-------------|--------------|
| `buyerType` | string | ⚠️ Optional | Type of buyer | See below |
| `timeline` | string | ⚠️ Optional | Purchase timeline | See below |

**Valid Buyer Types:**
- `"first-time"` - First-Time Buyer
- `"investor"` - Investor
- `"relocating"` - Relocating
- `"downsizing"` - Downsizing
- `"upsizing"` - Upsizing/Move-up
- `"other"` - Other

**Valid Timelines:**
- `"immediately"` - Immediately (0-30 days)
- `"1-3-months"` - 1-3 Months
- `"3-6-months"` - 3-6 Months
- `"6-12-months"` - 6-12 Months
- `"just-browsing"` - Just Browsing

### Additional Information

| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `comments` | string | ⚠️ Optional | Additional notes/questions | "Looking for homes near good schools" |
| `source` | string | ⚠️ Auto | Lead source identifier | "website-contact-form" or "voice-agent" |
| `sourcePage` | string | ⚠️ Auto | Specific page/location | "/contact" or "inbound-call" |
| `submittedAt` | string | ⚠️ Auto | ISO timestamp | "2025-01-02T18:30:00.000Z" |

---

## 📤 Sample Complete Lead JSON

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "661-555-1234",
  "budgetMin": 500000,
  "budgetMax": 750000,
  "bedrooms": 3,
  "preferredNeighborhoods": ["Valencia", "Stevenson Ranch"],
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "comments": "Looking for homes near good schools with a backyard",
  "source": "website-contact-form",
  "sourcePage": "/contact",
  "submittedAt": "2025-01-02T18:30:00.000Z"
}
```

---

## 🔄 System-Specific Notes

### Website Contact Form
- Uses React Hook Form with Zod validation
- All fields validated on client-side before submission
- Sends POST to `/api/leads`
- Automatically adds `source` and `sourcePage`

### n8n Webhook
- Receives POST requests at: `https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc`
- Expects JSON body with above fields
- Forwards to Airtable (field mapping configured in n8n)

### Retell AI Voice Agent
- Collects same fields conversationally
- Must set `source: "voice-agent"` and `sourcePage: "inbound-call"`
- Uses webhook function to submit to same n8n endpoint

### Airtable
- Maps received fields to Airtable columns
- Some fields may be renamed for Airtable display
- All fields should be configured as proper field types (Single Line Text, Number, Multiple Select, etc.)

---

## ⚠️ Important Rules

1. **Field names are case-sensitive** - Use exact spelling (e.g., `firstName` not `first_name`)
2. **Arrays must use proper format** - `["Valencia"]` not `"Valencia"`
3. **Numbers must be numbers** - `500000` not `"500000"`
4. **Enums must match exactly** - `"first-time"` not `"First Time"`
5. **Timestamps must be ISO 8601** - `"2025-01-02T18:30:00.000Z"`

---

**Last Updated:** January 3, 2026
**Version:** 1.0
