# Instructions for n8n Claude Plugin
**Copy and paste this into your n8n Claude plugin**

---

## Task: Update my n8n workflow to map incoming webhook data to Airtable

### Current Webhook URL:
```
https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
```

### Incoming Webhook Data Structure

My website form and Retell AI voice agent send data with these fields:

```json
{
  "name": "string (full name - REQUIRED)",
  "email": "string (REQUIRED)",
  "phone": "string (optional)",
  "interestedIn": ["array of neighborhood strings - REQUIRED"],
  "propertyType": "string (REQUIRED)",
  "buyerType": "string (optional)",
  "timeline": "string (REQUIRED)",
  "message": "string (optional)",
  "source": "string (auto-populated)",
  "sourcePage": "string (auto-populated)",
  "consent": "boolean (website only)",
  "submittedAt": "ISO timestamp string"
}
```

### Valid Values for Each Field

**interestedIn** (array - Multiple Select in Airtable):
- "Valencia"
- "Stevenson Ranch"
- "Saugus"
- "Canyon Country"
- "Newhall"
- "Castaic"
- "Not Sure Yet"

**propertyType** (Single Select in Airtable):
- "new-construction"
- "resale"
- "55-plus"
- "any"

**buyerType** (Single Select in Airtable):
- "first-time"
- "move-up"
- "senior"
- "investor"
- "other"

**timeline** (Single Select in Airtable):
- "0-3-months"
- "3-6-months"
- "6-12-months"
- "just-browsing"

**source** (Single Select in Airtable):
- "homepage"
- "contact-form"
- "voice-agent"

### Airtable Configuration

**Base Name:** Santa Clarita Buyers Guide (or whatever my base is named)
**Table Name:** Leads (or whatever my table is named)

**Required Airtable Columns and Field Mappings:**

| Airtable Column Name | Airtable Field Type | Map from Webhook Field | Expression |
|---------------------|---------------------|----------------------|------------|
| Name | Single line text | name | `{{ $json.name }}` |
| Email | Email | email | `{{ $json.email }}` |
| Phone | Phone number | phone | `{{ $json.phone }}` |
| Neighborhoods | **Multiple Select** | interestedIn | `{{ $json.interestedIn }}` |
| Property Type | Single Select | propertyType | `{{ $json.propertyType }}` |
| Buyer Type | Single Select | buyerType | `{{ $json.buyerType }}` |
| Timeline | Single Select | timeline | `{{ $json.timeline }}` |
| Additional Info | Long text | message | `{{ $json.message }}` |
| Lead Source | Single Select | source | `{{ $json.source }}` |
| Source Page | Single line text | sourcePage | `{{ $json.sourcePage }}` |
| Submitted Date | Date | submittedAt | `{{ $json.submittedAt }}` |

### Important Notes for Configuration:

1. **Neighborhoods field is CRITICAL** - This must be a **Multiple Select** field in Airtable, not Single Select, because it's an array
2. All Single Select fields must have the exact options listed above configured in Airtable
3. The webhook is already receiving data correctly - I just need the Airtable node configured properly
4. After updating, the workflow should return: `{"message": "Workflow was started"}`

### What I Need You To Do:

1. Update my Airtable node to map all these fields correctly
2. Ensure the Neighborhoods field is handled as an array (Multiple Select)
3. Make sure the workflow is set to respond with a success message
4. Verify the workflow will handle both website form submissions AND voice agent data (same structure)

### Sample Incoming Data for Testing:

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "(661) 555-1234",
  "interestedIn": ["Valencia", "Stevenson Ranch"],
  "propertyType": "new-construction",
  "buyerType": "first-time",
  "timeline": "3-6-months",
  "message": "Looking for homes near good schools",
  "source": "homepage",
  "sourcePage": "/",
  "consent": true,
  "submittedAt": "2025-01-03T18:30:00.000Z"
}
```

Please update my n8n workflow with these field mappings.
