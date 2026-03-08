# n8n Webhook Configuration
**Santa Clarita Buyers Guide - Airtable Integration**

---

## 📥 Webhook Configuration

### Webhook URL
```
https://primary-production-3c6b.up.railway.app/webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
```

### Method
`POST`

### Expected Data Format
`application/json`

---

## 📋 Incoming Webhook Fields

Configure your n8n **Webhook node** to receive these fields:

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "budgetMin": "number",
  "budgetMax": "number",
  "bedrooms": "number",
  "preferredNeighborhoods": ["array of strings"],
  "buyerType": "string",
  "timeline": "string",
  "comments": "string",
  "source": "string",
  "sourcePage": "string",
  "submittedAt": "string (ISO date)"
}
```

---

## 🗂️ Airtable Field Mapping

In your n8n **Airtable node**, map the webhook fields to Airtable columns:

### Airtable Base & Table
- **Base:** Santa Clarita Buyers Guide (or your base name)
- **Table:** Leads (or your table name)

### Field Mappings

| Airtable Column Name | n8n Expression | Field Type | Notes |
|---------------------|----------------|------------|-------|
| **First Name** | `{{ $json.firstName }}` | Single line text | Required |
| **Last Name** | `{{ $json.lastName }}` | Single line text | Required |
| **Email** | `{{ $json.email }}` | Email | Required |
| **Phone** | `{{ $json.phone }}` | Phone number | Optional |
| **Budget Min** | `{{ $json.budgetMin }}` | Number | Optional |
| **Budget Max** | `{{ $json.budgetMax }}` | Number | Optional |
| **Bedrooms** | `{{ $json.bedrooms }}` | Number | Optional |
| **Neighborhoods** | `{{ $json.preferredNeighborhoods }}` | Multiple select | Optional, array |
| **Buyer Type** | `{{ $json.buyerType }}` | Single select | Optional |
| **Timeline** | `{{ $json.timeline }}` | Single select | Optional |
| **Comments** | `{{ $json.comments }}` | Long text | Optional |
| **Source** | `{{ $json.source }}` | Single select | Auto |
| **Source Page** | `{{ $json.sourcePage }}` | Single line text | Auto |
| **Submitted At** | `{{ $json.submittedAt }}` | Date | Auto |
| **Created** | `{{ $now }}` | Created time | Auto (Airtable) |

---

## 🎯 Airtable Column Configuration

### Single Select Fields - Valid Options

**Buyer Type** (Single select):
- First-Time Buyer
- Investor
- Relocating
- Downsizing
- Upsizing
- Other

**Timeline** (Single select):
- Immediately (0-30 days)
- 1-3 Months
- 3-6 Months
- 6-12 Months
- Just Browsing

**Source** (Single select):
- website-contact-form
- voice-agent

**Neighborhoods** (Multiple select):
- Valencia
- Newhall
- Saugus
- Canyon Country
- Stevenson Ranch
- Castaic

---

## 🔧 n8n Workflow Structure

### Recommended Workflow

```
[Webhook Trigger]
    ↓
[Filter] (optional - remove test data)
    ↓
[Set Node] (optional - transform data)
    ↓
[Airtable Node] - Append Record
    ↓
[Webhook Response] - Return success
```

### Node 1: Webhook Trigger
- **Name:** Webhook - Receive Lead
- **Method:** POST
- **Path:** /webhook/b05ddb54-a6f6-44de-ba2b-20dc6d09e5cc
- **Response Mode:** When Last Node Finishes
- **Response Data:** First Entry JSON

### Node 2: Airtable - Create Record
- **Operation:** Append
- **Base:** [Your Base ID]
- **Table:** Leads
- **Fields:** Map as shown in table above

### Node 3: Webhook Response (optional)
- **Return:** JSON
- **Body:**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "recordId": "{{ $json.id }}"
}
```

---

## 🧪 Test Data

Use this sample payload to test your n8n workflow:

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
    "comments": "This is a test submission",
    "source": "website-contact-form",
    "sourcePage": "/contact",
    "submittedAt": "2025-01-02T18:30:00.000Z"
  }'
```

Expected Response:
```json
{
  "message": "Workflow was started"
}
```

---

## 📊 Data Validation Rules

In n8n, add a **Code Node** (optional) before Airtable to validate/clean data:

```javascript
// Validate required fields
if (!$input.item.json.firstName || !$input.item.json.lastName || !$input.item.json.email) {
  throw new Error('Missing required fields');
}

// Clean phone number (remove formatting)
if ($input.item.json.phone) {
  $input.item.json.phone = $input.item.json.phone.replace(/[^0-9]/g, '');
}

// Ensure neighborhoods is array
if (!Array.isArray($input.item.json.preferredNeighborhoods)) {
  $input.item.json.preferredNeighborhoods = [];
}

// Format budget for display
if ($input.item.json.budgetMin && $input.item.json.budgetMax) {
  $input.item.json.budgetDisplay = `$${$input.item.json.budgetMin.toLocaleString()} - $${$input.item.json.budgetMax.toLocaleString()}`;
}

return $input.item;
```

---

## ⚠️ Troubleshooting

### Issue: "Workflow was started" but no Airtable record

**Solutions:**
1. Check n8n execution history (click "Executions" in left sidebar)
2. Look for errors in the Airtable node
3. Verify Airtable credentials are connected
4. Check that Airtable column names match exactly

### Issue: Neighborhoods not saving

**Solutions:**
1. Ensure Airtable field is "Multiple select" type
2. Verify all neighborhood options exist in Airtable
3. Check that data is coming as array: `["Valencia"]` not `"Valencia"`

### Issue: Numbers saving as text

**Solutions:**
1. Change Airtable column type to "Number"
2. In n8n, wrap in `{{ Number($json.bedrooms) }}`

---

## 🎯 Production Checklist

- [ ] Webhook URL is correct in both website and Retell AI
- [ ] n8n workflow is **activated** (toggle ON)
- [ ] Airtable base and table selected
- [ ] All field mappings configured
- [ ] Single/Multiple select options match valid values
- [ ] Test submission successful from website
- [ ] Test submission successful from curl command
- [ ] Airtable record created with all fields populated
- [ ] Webhook returns success response

---

**Last Updated:** January 3, 2026
**Next Step:** Update Retell AI configuration (see RETELL-AI-UPDATED-PROMPT.md)
