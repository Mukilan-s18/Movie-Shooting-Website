# SEO AI Website Kit Rules

Comprehensive technical SEO, performance, rendering, structured data, and accessibility guidelines for AI agents.

## 1. Technical SEO & Indexation

- Every route must define a unique, keyword-optimized `<title>` (under 60 characters) and `<meta name="description">` (between 120 and 160 characters).
- Every route must supply a self-referential canonical `<link rel="canonical" href="...">` tag to eliminate duplicate indexing penalties.
- Include complete Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`, `og:locale`) and Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) metadata.
- Maintain a dynamic, valid XML Sitemap at `/sitemap.xml` with `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`.
- Configure `robots.txt` with explicit crawl rules for major search engines and social crawlers (Googlebot, Bingbot, Applebot, Twitterbot, WhatsApp).

## 2. Structured Data (Schema.org)

- Provide dual-graph JSON-LD structured data on all pages where applicable:
  - LocalBusiness / MovieStudio / ProfessionalService with physical address, geo-coordinates, telephone, price range, and opening hours.
  - FAQPage schema with verified rich snippet questions and answers to win expandable accordion positions on Google mobile search.

## 3. Performance & Core Web Vitals (CWV)

- Largest Contentful Paint (LCP): Preconnect critical font origins, set explicit width/height or aspect ratios on hero images, and keep render-blocking resources minimal.
- Cumulative Layout Shift (CLS): Reserve space for dynamic elements and images. Never inject dynamic banners without reserved min-heights.
- Interaction to Next Paint (INP): Ensure client handlers respond in under 100ms. Avoid heavy synchronous scripting during user interactions.

## 4. Accessibility (WCAG 2.2 AA)

- Provide descriptive `alt` attributes on all image elements.
- Maintain visible focus rings and accessible touch targets (minimum 44x44 CSS pixels on interactive controls).
- Enforce clean color contrast ratios (at least 4.5:1 for normal text and 3:1 for large display text).
- Use semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`) with proper heading hierarchy (one H1 per view, logical H2/H3 nesting).

## 5. Security & Legal Compliance

- Provide a clear 404 Not Found error page with navigation paths to recovery.
- Include accessible Privacy Policy (`/privacy`), Terms of Service (`/terms`), and Cookie Policy (`/cookies`) pages.
- Enforce strict HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`).
- Secure all secrets: never hardcode or commit API keys, tokens, or private credentials into source repositories.
