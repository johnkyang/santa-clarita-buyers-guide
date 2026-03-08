# Retell AI Webhook Function Configuration
**Submit Lead to n8n/Airtable**

---

## 📋 Copy These Settings Into Retell AI Dashboard

When configuring the webhook function in Retell AI, use these EXACT settings:

---

## Function Configuration

### Basic Info

**Function Name:**
```
submit_lead_to_webhook
```

**Description:**
```
Submits qualified lead information to n8n webhook which syncs data to Airtable CRM
```

**Function Type:**
```
HTTP Request / Webhook
```

---

## HTTP Configuration

### URL
```
https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
```

### Method
```
POST
```

### Headers
```json
{
  "Content-Type": "application/json"
}
```

---

## Function Parameters (JSON Schema)

**⚠️ IMPORTANT: Copy this EXACT schema into Retell AI**

```json
{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "Caller's first name (required)"
    },
    "lastName": {
      "type": "string",
      "description": "Caller's last name (required)"
    },
    "email": {
      "type": "string",
      "description": "Email address - must be spelled back for confirmation (required)"
    },
    "phone": {
      "type": "string",
      "description": "Phone number in format: 661-555-1234 (optional but recommended)"
    },
    "budgetMin": {
      "type": "number",
      "description": "Minimum budget in dollars, e.g., 500000 for $500K (optional)"
    },
    "budgetMax": {
      "type": "number",
      "description": "Maximum budget in dollars, e.g., 750000 for $750K (optional)"
    },
    "bedrooms": {
      "type": "number",
      "description": "Number of bedrooms desired: 1, 2, 3, 4, or 5 (optional)"
    },
    "preferredNeighborhoods": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["Valencia", "Newhall", "Saugus", "Canyon Country", "Stevenson Ranch", "Castaic"]
      },
      "description": "Array of neighborhood names caller is interested in (optional)"
    },
    "buyerType": {
      "type": "string",
      "enum": ["first-time", "investor", "relocating", "downsizing", "upsizing", "other"],
      "description": "Type of buyer: first-time, investor, relocating, downsizing, upsizing, or other (optional)"
    },
    "timeline": {
      "type": "string",
      "enum": ["immediately", "1-3-months", "3-6-months", "6-12-months", "just-browsing"],
      "description": "Purchase timeline - MOST IMPORTANT qualifier (required)"
    },
    "comments": {
      "type": "string",
      "description": "Additional notes or information from caller (optional)"
    },
    "source": {
      "type": "string",
      "description": "Always set to 'voice-agent' (required)",
      "default": "voice-agent"
    },
    "sourcePage": {
      "type": "string",
      "description": "Always set to 'inbound-call' (required)",
      "default": "inbound-call"
    },
    "submittedAt": {
      "type": "string",
      "description": "ISO 8601 timestamp of submission (required)",
      "format": "date-time"
    }
  },
  "required": ["firstName", "lastName", "email", "timeline", "source", "sourcePage", "submittedAt"]
}
```

---

## Sample Test Payloads

### Minimal Lead (Only Required Fields)
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "timeline": "3-6-months",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-03T10:30:00.000Z"
}
```

### Complete Lead (All Fields)
```json
{
  "firstName": "Sarah",
  "lastName": "Martinez",
  "email": "sarah.martinez@example.com",
  "phone": "661-555-7890",
  "budgetMin": 600000,
  "budgetMax": 850000,
  "bedrooms": 4,
  "preferredNeighborhoods": ["Valencia", "Stevenson Ranch", "Castaic"],
  "buyerType": "upsizing",
  "timeline": "1-3-months",
  "comments": "Looking for homes with good schools and a pool. Needs 4+ bedrooms for growing family.",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-03T14:45:00.000Z"
}
```

### First-Time Buyer
```json
{
  "firstName": "Mike",
  "lastName": "Johnson",
  "email": "mike.j.2024@gmail.com",
  "phone": "661-555-1234",
  "budgetMin": 500000,
  "budgetMax": 650000,
  "bedrooms": 3,
  "preferredNeighborhoods": ["Saugus", "Canyon Country"],
  "buyerType": "first-time",
  "timeline": "6-12-months",
  "comments": "First-time buyer, interested in down payment assistance programs",
  "source": "voice-agent",
  "sourcePage": "inbound-call",
  "submittedAt": "2025-01-03T16:20:00.000Z"
}
```

---

## Expected Webhook Response

When the function succeeds, n8n should return:

```json
{
  "message": "Workflow was started"
}
```

HTTP Status: **200 OK**

---

## Testing the Function

### Step 1: Test in Retell AI Dashboard

1. Go to your agent's function configuration
2. Click "Test Function"
3. Use one of the sample payloads above
4. Verify you get 200 OK response

### Step 2: Test with curl

```bash
curl -X POST \
  https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "661-555-0000",
    "timeline": "3-6-months",
    "source": "voice-agent",
    "sourcePage": "inbound-call",
    "submittedAt": "2025-01-03T10:00:00.000Z"
  }'
```

Expected response:
```json
{"message":"Workflow was started"}
```

### Step 3: Verify in Airtable

1. Check your n8n workflow execution history
2. Verify the workflow ran successfully
3. Open your Airtable base
4. Confirm new record was created with all fields populated correctly

---

## Field Mapping Reference

| Retell Field | Type | Maps to Airtable Column |
|--------------|------|-------------------------|
| `firstName` | string | First Name |
| `lastName` | string | Last Name |
| `email` | string | Email |
| `phone` | string | Phone |
| `budgetMin` | number | Budget Min |
| `budgetMax` | number | Budget Max |
| `bedrooms` | number | Bedrooms |
| `preferredNeighborhoods` | array | Neighborhoods (Multiple Select) |
| `buyerType` | string | Buyer Type (Single Select) |
| `timeline` | string | Timeline (Single Select) |
| `comments` | string | Notes / Comments (Long Text) |
| `source` | string | Lead Source (Single Select) |
| `sourcePage` | string | Source Page |
| `submittedAt` | datetime | Submitted Date |

---

## 🚨 Common Errors & Solutions

### Error: "Required field missing"

**Cause:** One of the required fields wasn't provided

**Required Fields:**
- firstName
- lastName
- email
- timeline
- source
- sourcePage
- submittedAt

**Solution:** Ensure agent always collects these fields before calling function

---

### Error: "Invalid enum value"

**Cause:** Field value doesn't match allowed options

**Check these enums:**
- `buyerType`: Must be one of: first-time, investor, relocating, downsizing, upsizing, other
- `timeline`: Must be one of: immediately, 1-3-months, 3-6-months, 6-12-months, just-browsing
- `preferredNeighborhoods`: Must only contain: Valencia, Newhall, Saugus, Canyon Country, Stevenson Ranch, Castaic

**Solution:** Update agent prompt to use exact values

---

### Error: "Type mismatch"

**Cause:** Field has wrong data type

**Common Issues:**
- `budgetMin`/`budgetMax`/`bedrooms` sent as strings instead of numbers
  - ❌ `"budgetMin": "500000"`
  - ✅ `"budgetMin": 500000`
- `preferredNeighborhoods` sent as string instead of array
  - ❌ `"preferredNeighborhoods": "Valencia"`
  - ✅ `"preferredNeighborhoods": ["Valencia"]`

**Solution:** Ensure function call uses correct data types

---

### Error: "Webhook timeout"

**Cause:** n8n workflow took too long to respond

**Solution:**
1. Check n8n Railway logs for errors
2. Verify Airtable API is accessible
3. Simplify workflow (remove unnecessary nodes)
4. Check Railway service is running

---

## 📋 Setup Checklist

Before going live with Retell AI:

- [ ] Function created in Retell AI dashboard
- [ ] Function name: `submit_lead_to_webhook`
- [ ] Webhook URL configured correctly
- [ ] HTTP method set to POST
- [ ] Headers include Content-Type: application/json
- [ ] JSON schema pasted exactly as shown above
- [ ] Test payload executes successfully
- [ ] n8n workflow receives data
- [ ] Airtable record created
- [ ] All required fields populated
- [ ] Source shows as "voice-agent"
- [ ] Ready for live calls

---

**Last Updated:** January 3, 2026
**Version:** 2.0 (Updated to match website form fields)

**Related Documents:**
- Voice Agent Prompt: `RETELL-AI-UPDATED-PROMPT.md`
- n8n Configuration: `N8N-CONFIGURATION.md`
- Field Definitions: `UNIFIED-DATA-STRUCTURE.md`
