# Schema Validation Checklist

Use this checklist to validate all Schema.org structured data on the Santa Clarita Buyers Guide website.

## Validation Tools

1. **Google Rich Results Test** (Primary)
   - URL: https://search.google.com/test/rich-results
   - Tests if schemas are eligible for rich results in Google Search

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates against the official Schema.org specification

3. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Shows schema errors and warnings across your entire site

---

## Pages to Validate

### 1. Homepage (LocalBusiness Schema)
- **URL**: `https://santaclaritabuyersguide.com`
- **Schema Type**: `RealEstateAgent` (LocalBusiness)
- **Expected Rich Results**: Knowledge Panel, Business Info

**Checklist:**
- [ ] Schema is present in page source
- [ ] No errors in Rich Results Test
- [ ] Business name is correct
- [ ] Address is complete
- [ ] Phone number is valid
- [ ] Opening hours display correctly (not Base64 encoded)
- [ ] Logo image URL is accessible

---

### 2. Neighborhood Pages (BreadcrumbList + Place)
Test each neighborhood page:

| Page | URL |
|------|-----|
| Valencia | `https://santaclaritabuyersguide.com/neighborhoods/valencia` |
| Newhall | `https://santaclaritabuyersguide.com/neighborhoods/newhall` |
| Saugus | `https://santaclaritabuyersguide.com/neighborhoods/saugus` |
| Canyon Country | `https://santaclaritabuyersguide.com/neighborhoods/canyon-country` |
| Stevenson Ranch | `https://santaclaritabuyersguide.com/neighborhoods/stevenson-ranch` |
| Castaic | `https://santaclaritabuyersguide.com/neighborhoods/castaic` |

**Checklist for each:**
- [ ] BreadcrumbList schema is present
- [ ] Breadcrumb path is: Home > Neighborhoods > [Name]
- [ ] All URLs are valid and accessible
- [ ] No duplicate breadcrumb items

---

### 3. Guide Pages (Article + FAQ + BreadcrumbList)
Test key guide pages:

| Page | URL |
|------|-----|
| First-Time Buyer | `https://santaclaritabuyersguide.com/guides/first-time-buyer` |
| Down Payment Assistance | `https://santaclaritabuyersguide.com/down-payment-assistance` |
| New Construction | `https://santaclaritabuyersguide.com/guides/new-construction` |
| 55+ Communities | `https://santaclaritabuyersguide.com/guides/55-plus-communities` |
| Resale | `https://santaclaritabuyersguide.com/guides/resale` |
| Reverse Mortgage | `https://santaclaritabuyersguide.com/guides/reverse-mortgage` |

**Checklist for each:**
- [ ] Article schema is present (if applicable)
- [ ] FAQ schema is present (if FAQs exist on page)
- [ ] BreadcrumbList schema is present
- [ ] All required fields are populated
- [ ] Dates are in ISO 8601 format

---

### 4. Blog Pages (Article Schema)

| Page | URL |
|------|-----|
| Market Report | `https://santaclaritabuyersguide.com/blog/santa-clarita-market-report-january-2025` |
| CalHFA Dream For All | `https://santaclaritabuyersguide.com/blog/calhfa-dream-for-all-2026-what-to-know` |
| Westridge Guide | `https://santaclaritabuyersguide.com/blog/valencia-westridge-neighborhood-guide` |

**Checklist for each:**
- [ ] Article schema is present
- [ ] Headline matches page title
- [ ] datePublished is valid
- [ ] dateModified is valid
- [ ] Author information is complete
- [ ] Publisher information is complete

---

### 5. Comparison Pages
| Page | URL |
|------|-----|
| Valencia vs Stevenson Ranch | `https://santaclaritabuyersguide.com/compare/valencia-vs-stevenson-ranch` |
| Valencia vs Newhall | `https://santaclaritabuyersguide.com/compare/valencia-vs-newhall` |
| Saugus vs Canyon Country | `https://santaclaritabuyersguide.com/compare/saugus-vs-canyon-country` |

**Checklist for each:**
- [ ] BreadcrumbList schema is present
- [ ] No validation errors

---

## Common Schema Errors to Watch For

### 1. Missing Required Fields
- `@context` must be `https://schema.org`
- `@type` must be a valid Schema.org type
- Required properties for each type must be present

### 2. Invalid URLs
- All URLs must be absolute (start with https://)
- URLs must be accessible (no 404 errors)
- Image URLs must return valid images

### 3. Invalid Dates
- Dates must be in ISO 8601 format: `YYYY-MM-DDTHH:mm:ssZ`
- Example: `2025-01-15T10:30:00Z`

### 4. Encoding Issues
- Text should not be Base64 encoded
- Special characters should be properly escaped in JSON

### 5. Duplicate Schemas
- Each page should have only one of each schema type
- Exception: Multiple FAQ questions are expected

---

## Validation Report Template

```
Date: [DATE]
Tested By: [NAME]

Page: [URL]
Schema Types Found: [LIST]

Errors:
- [ERROR 1]
- [ERROR 2]

Warnings:
- [WARNING 1]

Status: [ ] Pass / [ ] Fail

Notes:
[ADDITIONAL NOTES]
```

---

## Setting Up Google Search Console Monitoring

1. Go to https://search.google.com/search-console
2. Add and verify your property: `santaclaritabuyersguide.com`
3. Navigate to: Enhancements > [Schema Type]
4. Review any errors or warnings
5. Set up email alerts for new issues

### Schema Types to Monitor in GSC:
- [ ] Breadcrumbs
- [ ] FAQs
- [ ] Articles
- [ ] Local Business
- [ ] Sitelinks Search Box

---

## Quick Test Commands

### View Page Source for Schemas
In browser, view page source and search for:
```
application/ld+json
```

### Test with curl
```bash
curl -s https://santaclaritabuyersguide.com | grep -o '<script type="application/ld+json">.*</script>'
```

---

## Validation Schedule

| Frequency | Task |
|-----------|------|
| Weekly | Check Google Search Console for new errors |
| Monthly | Full validation of all key pages |
| After Deploy | Validate any pages with schema changes |
| Quarterly | Review and update this checklist |

---

## Last Validated

| Page Type | Last Validated | Status | Notes |
|-----------|----------------|--------|-------|
| Homepage | | | |
| Neighborhoods | | | |
| Guides | | | |
| Blog | | | |
| Comparisons | | | |

---

## Contact

For schema issues or questions, contact the development team.
