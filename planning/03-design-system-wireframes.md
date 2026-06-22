# Visual Design System And Wireframes

## Brand Direction

Kan Bonim should feel:

- Warm but not sentimental.
- Professional but not clinical.
- Faith-rooted but not heavy.
- Personal, discreet, and grounded.
- Clear enough for parents and community leaders; gentle enough for singles.

The visual language should support the metaphor of building a home and crossing difficulty with courage, without becoming overly literal or decorative.

Avoid:

- Loud wedding imagery.
- Generic stock photos of couples.
- Overly corporate blue-gray palettes.
- Overly playful dating-app styling.
- Busy backgrounds that make Hebrew text hard to read.
- Large decorative cards inside cards.

## Color Palette

Use a restrained, warm, high-contrast palette.

### Suggested Palette

| Role | Color | Notes |
|---|---|---|
| Page background | `#FAF8F3` | Soft warm off-white |
| Main text | `#22201C` | Deep warm charcoal |
| Muted text | `#6F675C` | Secondary Hebrew text |
| Primary | `#2F6F73` | Calm teal, trustworthy and fresh |
| Primary dark | `#24585B` | Hover/active CTA |
| Secondary | `#9D6B53` | Earth/clay warmth, building/home association |
| Accent | `#D8A84E` | Small highlights only |
| Border | `#E4DDD2` | Gentle structure |
| Surface | `#FFFFFF` | Forms, cards, nav |
| Success/affirming | `#587B57` | Optional form state |
| Error | `#A6423A` | Accessible error text |

Palette guidance:

- Primary teal should lead CTAs and navigation states.
- Clay should support section accents and service labels.
- Gold should be rare: small dividers, highlights, icons.
- Keep large backgrounds mostly warm neutral/white.

## Typography

Recommended Hebrew-friendly fonts:

- Primary: `Assistant`, `Noto Sans Hebrew`, or `Heebo`.
- Optional serif accent for very small brand moments: `Frank Ruhl Libre`, used sparingly.

Implementation preference:

- Use one strong sans-serif family first.
- Keep body text readable: 18px desktop, 16px mobile.
- Use comfortable line-height for Hebrew: 1.65-1.85.
- Avoid negative letter spacing.
- Avoid viewport-based font scaling.

## Layout Principles

### Desktop

- Max content width: 1120-1200px.
- Long text width: 680-760px.
- Use full-width bands, not floating page sections.
- Keep service cards compact and scannable.
- Put primary CTA visible in the header.

### Mobile

- Design mobile first.
- Sticky or easily reachable contact CTA.
- Cards stack in one column.
- Avoid tiny text and cramped buttons.
- Service navigation should be simple, not a complex mega menu.

### RTL

- `dir="rtl"` globally.
- Align Hebrew text right by default.
- Icons in buttons should follow RTL meaning.
- Form labels and errors should align right.
- Use logical CSS properties where possible.

## Component Inventory

### Header

- Logo/wordmark: כאן בונים
- Desktop nav
- Services dropdown
- CTA button
- Mobile menu button

### Mobile Menu

- Full-height or sheet-style menu.
- Clear service links.
- Phone/WhatsApp CTA at bottom.

### Hero

- Brand-first headline.
- Short promise.
- Two CTAs.
- Optional real image or carefully selected warm image.
- Should hint at next section on first viewport.

### Service Cards

Fields:

- Title
- Audience label
- Short description
- Link
- Small icon

### About Preview

- Photo of Ariel and Nechama if available.
- Short credibility copy.
- Link to full about page.

### Testimonial Cards

- Quote
- Initials/name
- Optional context
- Keep text edited lightly for spelling if approved.

### Resource Cards

- Type label: מאמר / פודקאסט / וידאו
- Title
- Date
- Short summary
- Link

### Contact CTA

- Warm closing line.
- WhatsApp/phone/email/form options.

### Footer

- Contact details.
- Service links.
- Social/podcast links.
- Copyright.

### Forms

- Inputs with visible labels.
- Select for interest area.
- Textarea.
- Privacy/discretion note.
- Clear success/error states.

## Textual Wireframe: Homepage

1. Header
   - Logo right
   - Navigation
   - CTA left on desktop

2. Hero
   - H1: כאן בונים
   - Subtitle: שידוכים, אימון וליווי לבניית קשר זוגי מתוך מודעות, רגישות ואחריות.
   - Body: short improved version of the current belief statement.
   - CTA: לשיחת היכרות
   - Secondary: הכירו את השירותים

3. Belief Section
   - Heading: זוגיות טובה לא נוצרת לבד
   - 2 short paragraphs.
   - Three principles: מודעות, רגישות, עבודה.

4. Services
   - Heading: איך אפשר לעזור?
   - Five cards.

5. Process / Trust
   - Heading: תהליך אישי, מקצועי ודיסקרטי
   - 3-4 compact points.

6. About
   - Photo
   - Ariel and Nechama short bios
   - CTA: הכירו אותנו

7. Testimonials
   - 2 testimonials.

8. Resources
   - Latest articles/podcast cards.

9. Final CTA
   - Heading: רוצים להתחיל לבנות?
   - Contact options.

10. Footer

## Textual Wireframe: Service Page

1. Header
2. Service hero
   - H1
   - One-sentence positioning
   - CTA
3. Who this is for
4. What the service includes
5. How it works
6. What you can gain
7. Relevant testimonial or founder note
8. FAQ
9. Related resources
10. Contact CTA
11. Footer

## Textual Wireframe: Resources Page

1. Header
2. Page hero
   - H1: מאמרים וסרטונים
   - Short intro about insights from the field.
3. Filters
   - הכל
   - מאמרים
   - פודקאסט
   - וידאו
4. Resource grid/list
5. Featured podcast section
6. Service CTA
7. Footer

## Textual Wireframe: About Page

1. Header
2. H1: מי אנחנו
3. Shared mission
4. Nechama bio
5. Ariel bio
6. Professional approach
7. Testimonials
8. CTA
9. Footer

## Textual Wireframe: Contact Page

1. Header
2. H1: צור קשר
3. Short discretion-focused intro
4. Contact cards:
   - WhatsApp / phone
   - Email
   - Location
5. Contact form
6. Service interest selector
7. Footer

## Accessibility Notes

- Use semantic HTML headings.
- Ensure color contrast for all text and buttons.
- Focus states visible on links, buttons, inputs.
- Button tap targets at least 44px.
- Form errors should be textual, not color only.
- All images need meaningful Hebrew alt text.
- Avoid text over busy photos unless contrast is guaranteed.
- Keyboard navigation must work in menus and forms.

## Review Before Technical Planning

- Choose whether the visual style should be more warm/traditional or more clean/professional.
- Confirm whether to use current Wix images or commission/generate/replace images.
- Confirm logo availability.
- Confirm whether testimonials may be edited.
- Confirm whether there should be a sticky mobile WhatsApp CTA.

