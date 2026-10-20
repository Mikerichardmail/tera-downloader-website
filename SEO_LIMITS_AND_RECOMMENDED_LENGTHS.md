# SEO Master Reference: Limits, Recommended Lengths & Best Practices (2026)

This document serves as the complete reference manual for all on-page, technical, social, and performance SEO elements, their hard limits, recommended lengths, and implementation standards.

---

## 1. Quick Reference Cheat Sheet

| SEO Element | Minimum | Recommended / Ideal | Maximum (Truncation) | Critical Impact |
|---|---|---|---|---|
| **Page Title (`<title>`)** | 30 chars | **50 – 60 chars** (~580px) | 65 chars | 🔴 High (Direct ranking & CTR) |
| **Meta Description** | 100 chars | **120 – 155 chars** (~960px) | 160 chars | 🔴 High (SERP CTR & Snippets) |
| **Primary Heading (`<h1>`)** | 15 chars | **20 – 70 chars** (1 per page) | 80 chars | 🔴 High (Relevance & Structure) |
| **Subheadings (`<h2>`, `<h3>`)** | 10 chars | **20 – 60 chars** | 80 chars | 🟡 Medium (Content scanning) |
| **URL Slug / Permalink** | 3 words | **3 – 5 words** (< 50 chars) | 75 chars | 🟡 Medium (Clean crawl path) |
| **Image Alt Text (`alt=""`)** | 10 chars | **40 – 100 chars** | 125 chars | 🟡 Medium (Accessibility & Images) |
| **Tool / Landing Page Content** | 250 words | **400 – 700 words** | None | 🔴 High (Avoids thin content) |
| **Blog / Guide Content** | 600 words | **800 – 1,500+ words** | None | 🔴 High (Helpful Content / EEAT) |
| **BLUF Opening Summary (GEO)** | 30 words | **50 – 80 words** | 120 words | 🔴 High (AI Overviews & Snippets) |
| **OpenGraph Title (`og:title`)** | 30 chars | **40 – 60 chars** | 65 chars | 🟢 Low-Med (Social Shares CTR) |
| **OpenGraph Description** | 60 chars | **80 – 120 chars** | 155 chars | 🟢 Low-Med (Social Shares CTR) |
| **OpenGraph Image Dimensions** | 600x315 px | **1200 x 630 px** (1.91:1) | 8 MB | 🟢 Low-Med (Visual previews) |
| **XML Sitemap URL Count** | 1 URL | **1,000 – 10,000 URLs** | 50,000 URLs / 50MB | 🔴 High (Crawl discovery) |

---

## 2. On-Page Metadata & Header Elements

### 2.1 Page Title Tag (`<title>`)
* **Optimal Length:** 50 to 60 characters (approximately 580 to 600 pixels on desktop Google SERP).
* **Hard Limit:** Google truncates titles longer than 60–65 characters with ellipses (`...`). Titles under 30 characters are considered too short and miss secondary keyword opportunities.
* **Format Formula:**
  ```text
  [Primary Keyword] – [Action / Unique Value] | [Brand Name]
  ```
* **Examples:**
  * ✅ *Good (54 chars):* `TeraBox Downloader – Free Online Video & File Grabber`
  * ❌ *Too Long (87 chars - truncated):* `TeraBox Link Downloader – Download Files from TeraBox Links Online Free | TeraLinkGrabber`
  * ❌ *Too Short (18 chars):* `TeraBox Downloader`

---

### 2.2 Meta Description (`<meta name="description">`)
* **Optimal Length:** 120 to 155 characters (up to ~960 pixels on desktop, ~680 pixels on mobile).
* **Hard Limit:** Anything beyond 160 characters gets truncated on desktop. Below 100 characters leaves valuable snippet real estate empty.
* **Best Practice:** Include the primary keyword, an active verb, unique value proposition, and a clear call-to-action (CTA).
* **Format Formula:**
  ```text
  [Action + Primary Keyword]. [Key benefit or differentiator, e.g., no login or app required]. [Call to action, e.g., Paste your link now].
  ```
* **Example:**
  * ✅ *Optimal (152 chars):* `Free online TeraBox Downloader. Download and stream videos, files, and ZIP archives from any TeraBox link at high speed without app installation or login.`

---

### 2.3 Primary Heading (`<h1>`)
* **Limit:** Exactly **one `<h1>` per page**.
* **Optimal Length:** 20 to 70 characters (3 to 8 words).
* **Best Practice:** Must clearly state the page purpose and match the primary search intent. Never leave empty, never hide behind CSS, and avoid duplicating the exact title tag character-for-character if a cleaner phrasing fits.

---

### 2.4 Subheadings (`<h2>` through `<h6>`)
* **Hierarchy Rule:** Never skip heading levels (e.g. jumping from `<h1>` directly to `<h3>` is an accessibility and semantic SEO violation).
* **Usage:**
  * `<h2>`: Major content sections (Step-by-step guides, FAQs, Features).
  * `<h3>`: Sub-points within an `<h2>` block.
* **Length:** 20 to 60 characters. Keep them concise and scannable.

---

### 2.5 URL Slugs & Permalinks
* **Optimal Length:** 3 to 5 words (< 50 characters).
* **Rules:**
  * All lowercase characters (`/terabox-video-downloader`, NOT `/TeraBox-Video-Downloader`).
  * Hyphen-separated (never underscores `_` or spaces `%20`).
  * Strip stop words (`and`, `the`, `of`, `to`) unless essential for clarity.
  * Avoid deep nested paths (keep within 1–2 directory levels: `example.com/blog/slug` or `example.com/slug`).

---

## 3. Content Depth & Quality Standards (Google Helpful Content & GEO)

### 3.1 Word Count Guidelines
Search engines do not rank pages solely based on word count, but thin content is penalized by Google's Helpful Content System.

* **Online Tools / Utilities:** **300 – 600 words** minimum. Must include usage instructions, FAQs, supported formats, and troubleshooting.
* **Informational Blog Posts:** **800 – 1,500 words**. Must offer comprehensive, non-repetitive advice with original takeaways.
* **Pillar Guides / Comprehensive Tutorials:** **1,500 – 3,000+ words**.
* **Legal Pages (Privacy, Terms, DMCA):** **250 – 500 words** minimum.

---

### 3.2 Generative Engine Optimization (GEO) & BLUF
To appear in Google AI Overviews, Perplexity, and ChatGPT Search results:
* **BLUF Principle (Bottom Line Up Front):** Provide a direct, factual answer or summary in the first **50 to 80 words** (first 1–2 paragraphs).
* **Structured Q&A Format:** Use clear question headings followed immediately by concise 1–2 sentence answers before expanding.

---

## 4. Structured Data (JSON-LD Schemas)

Structured data gives search engine robots explicit clues about the meaning of a page.

| Schema Type | Recommended Page Types | Required Fields |
|---|---|---|
| **`WebApplication`** | Downloader / Web tools | `name`, `operatingSystem`, `applicationCategory`, `offers` |
| **`HowTo`** | Step-by-step instructions | `name`, `step` (each with `name`, `text`, `url`) |
| **`FAQPage`** | Tool & Guide FAQ sections | `mainEntity` array of `Question` and `acceptedAnswer` |
| **`Article`** | Blog guides & tutorials | `headline`, `author`, `publisher`, `datePublished`, `mainEntityOfPage` |
| **`BreadcrumbList`** | All subpages & articles | `itemListElement` with `position`, `name`, `item` (URL) |

---

## 5. Media & Image SEO Limits

* **Image Alt Text:** **40 to 100 characters** (screen readers often stop announcing after 125 characters).
  * ❌ *Bad:* `alt="image"` or `alt="terabox download terabox video terabox free"`
  * ✅ *Good:* `alt="TeraLinkGrabber video link input interface with instant Telegram button"`
* **Image Format:** Use modern WebP or AVIF formats.
* **Dimensions:** Always specify explicit `width` and `height` attributes or CSS aspect ratios to avoid Cumulative Layout Shift (CLS).
* **File Size:**
  * Hero / Banners: < 150 KB
  * Standard Article Images: < 80 KB
  * Icons & UI Elements: < 15 KB (SVG preferred)

---

## 6. Social Media & Open Graph Tags

When links are shared on Telegram, WhatsApp, Twitter, or Facebook, these tags control the preview card:

* **`og:title`:** 40 – 60 characters.
* **`og:description`:** 80 – 120 characters (concise teaser).
* **`og:image`:** Exactly **1200 x 630 pixels** (aspect ratio 1.91:1). Recommended format: PNG or WebP, under 300 KB.
* **`twitter:card`:** `summary_large_image` for rich preview cards.

---

## 7. Technical SEO & Core Web Vitals Thresholds

| Metric | Google Standard (Good) | Needs Improvement | Poor |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | **$\le 2.5$ seconds** | 2.5s – 4.0s | $> 4.0$ seconds |
| **INP (Interaction to Next Paint)** | **$\le 200$ ms** | 200ms – 500ms | $> 500$ ms |
| **CLS (Cumulative Layout Shift)** | **$\le 0.1$** | 0.1 – 0.25 | $> 0.25$ |
| **Server Response Time (TTFB)** | **$\le 800$ ms** (ideally < 200ms) | 800ms – 1.8s | $> 1.8$ seconds |
| **HTTPS Security** | **100% enforced** | Mixed content | HTTP only |
| **Canonical Link** | **Self-referencing HTTPS** | Missing | Mismatched protocol |
| **Mobile Viewport** | `width=device-width, initial-scale=1` | Fixed width | Missing |

---

## 8. Summary Checklist for Every New Page

Before publishing any new tool, blog post, or page, verify:
- [ ] Title is between 50 and 60 characters and starts with the target keyword.
- [ ] Meta description is between 120 and 155 characters with a clear CTA.
- [ ] Exactly one `<h1>` tag with proper `<h2>` and `<h3>` nested hierarchy.
- [ ] URL slug is short, lowercase, and hyphenated.
- [ ] Self-referencing `<link rel="canonical" href="https://teralinkgrabber.com/...">` present.
- [ ] Content has at least 300 words (tools) or 800 words (articles).
- [ ] JSON-LD schema (`WebApplication`, `Article`, `FAQPage`, `BreadcrumbList`) included.
- [ ] All `<img>` tags have descriptive `alt` attributes and explicit dimensions.
- [ ] OpenGraph and Twitter tags include title, description, and 1200x630 image.
- [ ] Included in `sitemap.xml` with `robots.txt` granting crawl access.
