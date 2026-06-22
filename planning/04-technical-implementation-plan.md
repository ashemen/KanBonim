# Technical Implementation Plan

## Current Workspace State

The project folder is currently empty except for this planning package. It is not a Git repository at the time of this planning pass.

No Next.js code, package files, or assets have been created yet.

## Recommended Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Static or mostly static rendering
- Hebrew RTL-first layout
- Metadata API for SEO
- Markdown/MDX or structured TypeScript content files for resources

## Recommended Project Architecture

Suggested future structure:

```text
kanbonim.co.il/
  app/
    layout.tsx
    globals.css
    page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    services/
      page.tsx
      [slug]/
        page.tsx
    resources/
      page.tsx
      [slug]/
        page.tsx
    robots.ts
    sitemap.ts
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-menu.tsx
    sections/
      hero.tsx
      services-grid.tsx
      testimonials.tsx
      contact-cta.tsx
      about-preview.tsx
      resources-preview.tsx
    ui/
      button.tsx
      card.tsx
      input.tsx
      textarea.tsx
  content/
    site.ts
    services.ts
    resources.ts
    testimonials.ts
  lib/
    metadata.ts
    schema.ts
    utils.ts
  public/
    images/
    icons/
```

## Routing Plan

| Route | Page |
|---|---|
| `/` | Homepage |
| `/services` | Services overview |
| `/services/effective-matchmaking` | שדכנות אפקטיבית |
| `/services/coaching` | אימון רווקים ורווקות |
| `/services/workshops` | סדנאות לפגישות ושידוכים |
| `/services/lectures` | הרצאות |
| `/services/community-matchmakers` | הכשרת שדכנים בקהילה |
| `/resources` | Articles/videos/podcast index |
| `/resources/[slug]` | Resource detail |
| `/about` | About Ariel and Nechama |
| `/contact` | Contact page |

Optional redirects from old Wix paths should be added later.

## Component Breakdown

### Layout Components

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `PageShell` if useful

### Section Components

- `HomeHero`
- `BeliefSection`
- `ServicesGrid`
- `ProcessHighlights`
- `AboutPreview`
- `TestimonialsSection`
- `ResourcesPreview`
- `ContactCta`

### Page-Specific Components

- `ServiceHero`
- `ServiceProcess`
- `ServiceFaq`
- `ResourceCard`
- `ResourceFilters`
- `ContactForm`

### UI Components

- `Button`
- `Card`
- `Badge`
- `Input`
- `Textarea`
- `Select`

Keep abstractions small until repetition is real.

## Content Strategy

Use structured TypeScript content at first. This is simpler than adding a CMS and keeps the first rebuild fast and stable.

### `content/services.ts`

Fields:

- `slug`
- `title`
- `navTitle`
- `summary`
- `audience`
- `heroCta`
- `sections`
- `processSteps`
- `outcomes`
- `faqs`
- `seo`

### `content/resources.ts`

Fields:

- `slug`
- `type`
- `title`
- `date`
- `author`
- `excerpt`
- `body`
- `externalUrl`
- `image`
- `topics`
- `relatedServiceSlugs`
- `seo`

### `content/testimonials.ts`

Fields:

- `name`
- `quote`
- `context`

### Future CMS Option

If ongoing article publishing is important, later migrate resources to:

- MDX files, or
- a headless CMS, or
- a lightweight admin flow.

For the initial build, structured files are enough.

## SEO Implementation Plan

### Metadata

Use Next.js Metadata API for:

- Title templates
- Descriptions
- Canonicals
- Open Graph
- Twitter/X cards if needed

### Technical SEO

- `app/sitemap.ts`
- `app/robots.ts`
- Canonical domain: `https://www.kanbonim.co.il`
- Redirect old Wix URLs to new routes where possible.

### Structured Data

Generate JSON-LD:

- Site-wide `Organization` or `ProfessionalService`
- `Person` for Ariel and Nechama
- `Service` on service pages
- `Article` or `BlogPosting` on resources
- `FAQPage` where FAQs are included

### Hebrew Search

- Hebrew H1/H2 text.
- Natural Hebrew metadata.
- Internal links with descriptive Hebrew labels.
- Descriptive Hebrew image alt text.

## RTL And Hebrew Implementation

Set globally:

- `<html lang="he" dir="rtl">`

CSS principles:

- Use logical properties like `margin-inline`, `padding-inline`, `inset-inline`.
- Avoid hardcoded left/right unless truly directional.
- Test mobile nav in RTL.
- Use `text-align: start`.
- Ensure icons point in the correct RTL direction.

## Image And Asset Plan

### Existing Wix Assets

Current visible assets include:

- Brand/home imagery.
- Service images.
- Photo of Ariel and Nechama.
- Blog thumbnails.
- Social/podcast icons.

Recommended process:

1. Download/export original image assets from Wix if available.
2. Rename files with stable English filenames.
3. Store under `public/images`.
4. Use Hebrew `alt` text.
5. Optimize dimensions before launch.

If original assets are not available:

- Replace generic service images with tasteful, domain-appropriate imagery.
- Prioritize real founder photo over stock-like visuals.

## Contact Implementation Options

### Option A: Contact CTAs Only

- WhatsApp link
- Phone links
- Email link

Fastest and very reliable.

### Option B: Static Form Provider

- Formspree, Basin, Getform, or similar.

Good for static hosting.

### Option C: Next.js API Route

- Server action/API route sends email.
- Requires deployment environment and email provider.

Best if you want full control, but more setup.

Recommended initial choice:

- Use direct WhatsApp/phone/email plus a simple form if deployment target supports it.

## Analytics And Tracking

Recommended:

- Google Search Console.
- Privacy-friendly analytics or Google Analytics, depending on preference.
- Track CTA clicks:
  - WhatsApp
  - phone
  - email
  - form submit

Avoid:

- Heavy tracking scripts before launch.
- Overcomplicated dashboards.

## Implementation Phases

### Phase 1: Scaffold

- Create Next.js project in the current folder.
- Add TypeScript and Tailwind.
- Set global Hebrew RTL.
- Add base metadata.

### Phase 2: Content And Data

- Add structured service, testimonial, resource, and site content files.
- Clean and migrate current Wix text.
- Add placeholder asset references.

### Phase 3: Core Layout

- Header, footer, mobile menu.
- Button/card/form primitives.
- Global responsive layout and theme.

### Phase 4: Pages

- Homepage.
- Services overview.
- Service detail pages.
- About.
- Resources index/detail.
- Contact.

### Phase 5: SEO And Redirects

- Metadata for all pages.
- JSON-LD.
- Sitemap and robots.
- Old URL redirects.

### Phase 6: QA

- Mobile/desktop visual pass.
- RTL checks.
- Accessibility pass.
- Link checks.
- Build and lint.

## Risks And Assumptions

Risks:

- Original Wix images may not be easily available.
- Some event/survey information may be outdated.
- Contact form requires deployment-specific decisions.
- Old Hebrew Wix URLs need redirect handling.

Assumptions:

- The five current services remain active.
- Hebrew is the only required language for launch.
- The website can be mostly static.
- Kan Bonim wants a professional services website, not a booking marketplace.

## Open Questions Before Coding

- Should the site use English slugs or Hebrew slugs?
- What is the preferred primary CTA: WhatsApp, phone, form, or all three?
- Should `/about` and `/contact` be separate pages at launch?
- Should the survey remain in the new website?
- Are current Wix images available as originals?
- What deployment target will be used?

