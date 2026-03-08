# Schema.org Structured Data Validation Guide
**Santa Clarita Buyers Guide**

## Overview

This guide provides instructions for validating Schema.org structured data implemented across the Santa Clarita Buyers Guide website. Proper validation ensures Google and other search engines can understand and display rich snippets for our content.

## Implemented Schema Types

Our website uses the following Schema.org types:

1. **RealEstateAgent** (LocalBusiness) - Homepage and footer
2. **BreadcrumbList** - All pages for navigation hierarchy
3. **FAQPage** - Neighborhood pages and guide pages
4. **Article** - Blog posts and guide pages
5. **EducationalOrganization** - School information on neighborhood pages

## Validation Tools

### 1. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**Best for:** Testing how Google will display your structured data in search results

**How to use:**
1. Visit https://search.google.com/test/rich-results
2. Enter your page URL or paste the HTML code
3. Click "Test URL" or "Test Code"
4. Review results for errors and warnings
5. Expand each detected schema type to verify properties

**What to check:**
- ✅ No errors (red indicators)
- ✅ Warnings are reviewed and addressed if critical
- ✅ All expected schema types are detected
- ✅ Preview shows rich result enhancement

### 2. Schema.org Validator
**URL:** https://validator.schema.org/

**Best for:** Validating JSON-LD syntax and structure

**How to use:**
1. Visit https://validator.schema.org/
2. Paste your JSON-LD code or enter URL
3. Click "Validate"
4. Review any errors or warnings
5. Ensure all required properties are present

**What to check:**
- ✅ Valid JSON-LD format
- ✅ Correct @context and @type declarations
- ✅ All required properties included
- ✅ Property values match expected types

### 3. Google Search Console
**URL:** https://search.google.com/search-console

**Best for:** Monitoring live structured data performance

**How to use:**
1. Navigate to Enhancements section
2. Click each enhancement type (FAQs, Breadcrumbs, etc.)
3. Review any errors or valid items
4. Request indexing for new/updated pages

**What to monitor:**
- Valid items count increasing
- Error items count at zero
- Warnings reviewed and addressed
- Coverage reports showing indexed pages

## Page-by-Page Validation Checklist

### Homepage (/)
**Expected Schemas:**
- [ ] RealEstateAgent (LocalBusiness)
- [ ] BreadcrumbList

**Test URL:** `https://santaclaritabuyersguide.com/`

**Critical Properties to Verify:**
- RealEstateAgent: name, description, address, telephone, email, areaServed
- BreadcrumbList: itemListElement with position and name

### Neighborhood Pages (/neighborhoods/[slug])
**Expected Schemas:**
- [ ] RealEstateAgent (LocalBusiness)
- [ ] BreadcrumbList
- [ ] FAQPage
- [ ] EducationalOrganization (one per school)

**Test URLs:**
- `https://santaclaritabuyersguide.com/neighborhoods/valencia`
- `https://santaclaritabuyersguide.com/neighborhoods/newhall`
- `https://santaclaritabuyersguide.com/neighborhoods/saugus`
- `https://santaclaritabuyersguide.com/neighborhoods/canyon-country`
- `https://santaclaritabuyersguide.com/neighborhoods/stevenson-ranch`
- `https://santaclaritabuyersguide.com/neighborhoods/castaic`

**Critical Properties to Verify:**
- FAQPage: mainEntity array with Question and Answer objects
- EducationalOrganization: name, address, aggregateRating
- BreadcrumbList: Home → Neighborhoods → [Specific Neighborhood]

### Guide Pages (/guides/*)
**Expected Schemas:**
- [ ] RealEstateAgent (LocalBusiness)
- [ ] BreadcrumbList
- [ ] FAQPage (if FAQs present)
- [ ] Article

**Critical Properties to Verify:**
- Article: headline, datePublished, dateModified, author, publisher
- FAQPage: Complete Q&A pairs

## Common Issues and Solutions

### Issue: "Missing required property"
**Solution:** Check the schema utility function to ensure all required properties are included. Refer to Schema.org documentation for required vs recommended properties.

### Issue: "Invalid property value type"
**Solution:** Verify property values match expected types (string vs number vs object). Common mistakes:
- Using number instead of string for telephone
- Using string instead of array for itemListElement
- Missing @type declarations in nested objects

### Issue: "Duplicate structured data detected"
**Solution:**
- Check for multiple script tags with same schema type
- Ensure schema is not duplicated in both component and layout
- Verify conditional rendering works correctly

### Issue: "URL mismatch in breadcrumbs"
**Solution:**
- Ensure baseUrl is consistent (with or without trailing slash)
- Verify href values in breadcrumb items start with `/`
- Check that full URLs are constructed correctly (`${baseUrl}${href}`)

### Issue: "FAQ answers too short"
**Solution:** Google recommends FAQ answers be at least 75 characters. Review and expand answers to provide meaningful, complete information.

### Issue: "Image URL returns 404"
**Solution:**
- Verify image paths are correct and files exist
- Ensure images are publicly accessible
- Use absolute URLs for images in structured data

## Validation Process for Deployments

### Pre-Deployment (Local)
1. **Build the site locally**
   ```bash
   npm run build
   ```

2. **Check TypeScript compilation**
   - Ensure no type errors related to schema properties
   - Verify all schema utility functions type correctly

3. **Manual JSON-LD inspection**
   - Start dev server: `npm run dev`
   - Visit each page type
   - View page source (Ctrl/Cmd + U)
   - Search for `application/ld+json`
   - Copy JSON and validate at validator.schema.org

### Post-Deployment (Production)
1. **Test with Google Rich Results Test**
   - Test all major page types (homepage, 2-3 neighborhoods, 1-2 guides)
   - Screenshot results showing "Valid" status
   - Document any warnings for future review

2. **Submit to Google Search Console**
   - Request indexing for updated pages
   - Monitor Enhancements section for 7-14 days
   - Address any new errors that appear

3. **Monitor Performance**
   - Track click-through rates for pages with rich snippets
   - Monitor impressions in Search Console
   - Compare performance before/after structured data implementation

## Expected Outcomes

### Google Rich Results
**Homepage:**
- Organization/LocalBusiness knowledge panel
- Breadcrumb navigation in SERPs

**Neighborhood Pages:**
- FAQ rich snippets showing Q&A in search results
- Breadcrumb navigation: Home → Neighborhoods → Valencia
- Enhanced snippets with rating stars (if reviews added later)

**Guide Pages:**
- Article rich results with publish date and author
- FAQ rich snippets (where applicable)
- Breadcrumb navigation

### Timeline
- **Immediate:** Schemas validate without errors
- **1-3 days:** Google begins detecting structured data in Search Console
- **7-14 days:** Rich snippets may start appearing in search results
- **30+ days:** Full rich snippet deployment and performance stabilization

## Maintenance and Updates

### When to Revalidate
- ✅ After any schema-related code changes
- ✅ After updating neighborhood or guide content
- ✅ When adding new page types
- ✅ If Search Console reports new errors
- ✅ Monthly spot-checks to ensure schemas remain valid

### Version Control
Document schema changes in git commits:
```bash
git commit -m "Add FAQ schema to neighborhood pages - 6 FAQs per neighborhood"
```

### Testing Checklist
Create a testing spreadsheet tracking:
- Page URL
- Expected schema types
- Validation status (Pass/Fail)
- Date tested
- Tester name
- Notes/issues

## Resources

### Official Documentation
- **Schema.org:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search/docs/appearance/structured-data
- **JSON-LD Specification:** https://json-ld.org/

### Specific Schema Types
- **RealEstateAgent:** https://schema.org/RealEstateAgent
- **LocalBusiness:** https://schema.org/LocalBusiness
- **FAQPage:** https://schema.org/FAQPage
- **BreadcrumbList:** https://schema.org/BreadcrumbList
- **Article:** https://schema.org/Article
- **EducationalOrganization:** https://schema.org/EducationalOrganization

### Google Guides
- **Structured Data Guidelines:** https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- **FAQ Rich Results:** https://developers.google.com/search/docs/appearance/structured-data/faqpage
- **Breadcrumb Rich Results:** https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

## Schema Utility Functions Reference

All schema generation functions are located in `/lib/schema.ts`:

### Available Functions
```typescript
// LocalBusiness / RealEstateAgent
generateLocalBusinessSchema(props?: LocalBusinessSchemaProps)

// Breadcrumb navigation
generateBreadcrumbSchema(props: BreadcrumbSchemaProps)

// FAQ pages
generateFAQSchema(props: FAQSchemaProps)

// Article/blog posts
generateArticleSchema(props: ArticleSchemaProps)

// Schools
generateSchoolSchema(props: SchoolSchemaProps)

// Render to JSON-LD string
renderJsonLd(schema: Record<string, unknown> | Record<string, unknown>[])
```

### Usage Example
```typescript
import { generateFAQSchema, renderJsonLd } from '@/lib/schema'

const faqSchema = generateFAQSchema({
  faqs: [
    { question: 'Question?', answer: 'Answer.' }
  ]
})

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: renderJsonLd(faqSchema) }}
/>
```

## Support and Troubleshooting

### Internal Resources
- Review `/lib/schema.ts` for schema generation logic
- Check component implementations in `/components/neighborhoods/`
- Reference this documentation for validation processes

### External Help
- **Google Search Central Community:** https://support.google.com/webmasters/community
- **Schema.org Community:** https://github.com/schemaorg/schemaorg/discussions
- **Stack Overflow:** Tag questions with `schema.org` and `structured-data`

---

**Document Version:** 1.0
**Last Updated:** January 2025
**Maintained By:** Santa Clarita Buyers Guide Development Team
