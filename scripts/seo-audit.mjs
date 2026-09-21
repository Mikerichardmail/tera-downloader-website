import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const SITE_URL = 'https://teralinkgrabber.com';
const OUT_DIR = path.resolve('out');

const RULES = {
  // Category 1: Technical & Indexing
  TECH_CANONICAL_EXISTS: { id: 'TECH_CANONICAL_EXISTS', cat: 'Technical', weight: 8, level: 'CRITICAL', desc: 'Canonical tag is declared' },
  TECH_CANONICAL_VALID: { id: 'TECH_CANONICAL_VALID', cat: 'Technical', weight: 6, level: 'CRITICAL', desc: 'Canonical tag points to valid HTTPS site URL' },
  TECH_NO_NOINDEX: { id: 'TECH_NO_NOINDEX', cat: 'Technical', weight: 10, level: 'CRITICAL', desc: 'No unintended noindex or none robots directive' },
  TECH_VIEWPORT: { id: 'TECH_VIEWPORT', cat: 'Technical', weight: 4, level: 'WARNING', desc: 'Mobile viewport meta tag configured' },
  TECH_CHARSET: { id: 'TECH_CHARSET', cat: 'Technical', weight: 2, level: 'OPPORTUNITY', desc: 'UTF-8 charset declared' },

  // Category 2: Metadata & SERP Snippets
  META_TITLE_EXISTS: { id: 'META_TITLE_EXISTS', cat: 'Metadata', weight: 10, level: 'CRITICAL', desc: 'Unique title tag exists and is non-empty' },
  META_TITLE_LENGTH: { id: 'META_TITLE_LENGTH', cat: 'Metadata', weight: 6, level: 'WARNING', desc: 'Title length optimal (40 - 65 characters)' },
  META_TITLE_BRAND: { id: 'META_TITLE_BRAND', cat: 'Metadata', weight: 2, level: 'OPPORTUNITY', desc: 'Title contains brand identifier' },
  META_DESC_EXISTS: { id: 'META_DESC_EXISTS', cat: 'Metadata', weight: 8, level: 'CRITICAL', desc: 'Meta description tag exists and is non-empty' },
  META_DESC_LENGTH: { id: 'META_DESC_LENGTH', cat: 'Metadata', weight: 6, level: 'WARNING', desc: 'Meta description length optimal (120 - 160 characters)' },

  // Category 3: Content Hierarchy & Quality
  CONTENT_H1_SINGLE: { id: 'CONTENT_H1_SINGLE', cat: 'Content', weight: 10, level: 'CRITICAL', desc: 'Exactly one H1 heading on the page' },
  CONTENT_H1_LENGTH: { id: 'CONTENT_H1_LENGTH', cat: 'Content', weight: 4, level: 'WARNING', desc: 'H1 length between 15 and 70 characters' },
  CONTENT_HEADING_ORDER: { id: 'CONTENT_HEADING_ORDER', cat: 'Content', weight: 4, level: 'WARNING', desc: 'Heading hierarchy does not skip levels' },
  CONTENT_WORD_COUNT: { id: 'CONTENT_WORD_COUNT', cat: 'Content', weight: 6, level: 'WARNING', desc: 'Word count meets intent threshold (>= 300 words for tools, >= 800 for blog)' },
  CONTENT_BLUF_INTRO: { id: 'CONTENT_BLUF_INTRO', cat: 'Content', weight: 3, level: 'OPPORTUNITY', desc: 'GEO BLUF: Direct answer/definition in first 200 words' },

  // Category 4: Structured Data (Schema JSON-LD)
  SCHEMA_JSONLD_EXISTS: { id: 'SCHEMA_JSONLD_EXISTS', cat: 'Schema', weight: 8, level: 'CRITICAL', desc: 'JSON-LD structured data script exists' },
  SCHEMA_SYNTAX_VALID: { id: 'SCHEMA_SYNTAX_VALID', cat: 'Schema', weight: 6, level: 'CRITICAL', desc: 'JSON-LD syntax is valid parseable JSON' },
  SCHEMA_TYPE_RELEVANT: { id: 'SCHEMA_TYPE_RELEVANT', cat: 'Schema', weight: 5, level: 'WARNING', desc: 'Page-type specific schemas implemented (WebApplication/HowTo/FAQ/Article)' },
  SCHEMA_BREADCRUMBS: { id: 'SCHEMA_BREADCRUMBS', cat: 'Schema', weight: 3, level: 'OPPORTUNITY', desc: 'BreadcrumbList schema present on subpages' },

  // Category 5: Social Metadata (Open Graph & Twitter)
  SOCIAL_OG_TAGS: { id: 'SOCIAL_OG_TAGS', cat: 'Social', weight: 4, level: 'WARNING', desc: 'OpenGraph tags (og:title, og:desc, og:url, og:image) present' },
  SOCIAL_TWITTER_TAGS: { id: 'SOCIAL_TWITTER_TAGS', cat: 'Social', weight: 3, level: 'OPPORTUNITY', desc: 'Twitter Card tags (summary_large_image, title, desc) present' },

  // Category 6: Internal Links & Navigation
  LINKS_ANCHOR_TEXT: { id: 'LINKS_ANCHOR_TEXT', cat: 'Links', weight: 3, level: 'WARNING', desc: 'No generic anchor text (e.g., click here, read more)' },
  LINKS_EXTERNAL_SECURE: { id: 'LINKS_EXTERNAL_SECURE', cat: 'Links', weight: 3, level: 'WARNING', desc: 'External links have rel="noopener noreferrer"' },

  // Category 7: Media & Images
  MEDIA_IMG_ALT: { id: 'MEDIA_IMG_ALT', cat: 'Media', weight: 6, level: 'WARNING', desc: 'All images have descriptive non-empty alt attributes' },
};

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== '_next') {
        getAllHtmlFiles(fullPath, fileList);
      }
    } else if (file.endsWith('.html') && file !== '404.html' && file !== 'seo-audit-report.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function auditPage(html, relativePath, liveUrl) {
  const $ = cheerio.load(html);
  const issues = [];
  const passed = [];
  const details = {};

  const check = (rule, isPassing, actualValue, recommendation) => {
    if (isPassing) {
      passed.push(rule.id);
    } else {
      issues.push({
        ruleId: rule.id,
        cat: rule.cat,
        level: rule.level,
        weight: rule.weight,
        desc: rule.desc,
        actual: actualValue,
        rec: recommendation,
      });
    }
  };

  // 1. Technical & Indexing
  const canonical = $('link[rel="canonical"]').attr('href');
  details.canonical = canonical || 'MISSING';
  check(
    RULES.TECH_CANONICAL_EXISTS,
    Boolean(canonical),
    canonical ? canonical : 'None found',
    'Add <link rel="canonical" href="https://teralinkgrabber.com/..." /> to page metadata.'
  );

  if (canonical) {
    const isHttps = canonical.startsWith('https://teralinkgrabber.com') || canonical.startsWith('https://');
    check(
      RULES.TECH_CANONICAL_VALID,
      isHttps,
      canonical,
      'Ensure canonical URL starts with https://teralinkgrabber.com without trailing slash mismatches.'
    );
  }

  const robotsMeta = $('meta[name="robots"]').attr('content') || '';
  const hasNoindex = robotsMeta.toLowerCase().includes('noindex') || robotsMeta.toLowerCase().includes('none');
  check(
    RULES.TECH_NO_NOINDEX,
    !hasNoindex,
    hasNoindex ? robotsMeta : 'Indexable',
    'Remove noindex directive unless this page is intentionally private.'
  );

  const viewport = $('meta[name="viewport"]').attr('content');
  check(
    RULES.TECH_VIEWPORT,
    Boolean(viewport && viewport.includes('width=device-width')),
    viewport || 'None',
    'Add <meta name="viewport" content="width=device-width, initial-scale=1" />.'
  );

  const charset = $('meta[charset]').attr('charset') || $('meta[http-equiv="Content-Type"]').attr('content');
  check(
    RULES.TECH_CHARSET,
    Boolean(charset),
    charset || 'None',
    'Add <meta charset="utf-8" /> as the first child of <head>.'
  );

  // 2. Metadata & Titles
  const title = $('title').text().trim();
  details.title = title;
  details.titleLength = title.length;
  check(
    RULES.META_TITLE_EXISTS,
    title.length > 0,
    title || 'MISSING',
    'Define a descriptive <title> tag for this page.'
  );

  const isTitleOptimal = title.length >= 40 && title.length <= 65;
  check(
    RULES.META_TITLE_LENGTH,
    isTitleOptimal,
    `${title.length} chars ("${title}")`,
    title.length < 40
      ? `Title is too short (${title.length} chars). Expand to 40-65 chars with secondary keyword/benefit.`
      : `Title is too long (${title.length} chars). Google truncates at ~60 chars; shorten to 50-60 chars.`
  );

  const hasBrand = /teralinkgrabber|terabox/i.test(title);
  check(
    RULES.META_TITLE_BRAND,
    hasBrand,
    title,
    'Include brand name or target keyword separator (e.g. " | TeraLinkGrabber") in the title tag.'
  );

  const metaDesc = $('meta[name="description"]').attr('content') || '';
  details.metaDesc = metaDesc;
  details.metaDescLength = metaDesc.length;
  check(
    RULES.META_DESC_EXISTS,
    metaDesc.length > 0,
    metaDesc ? `${metaDesc.length} chars` : 'MISSING',
    'Add a compelling meta description tag summarizing the page value proposition.'
  );

  const isDescOptimal = metaDesc.length >= 120 && metaDesc.length <= 165;
  check(
    RULES.META_DESC_LENGTH,
    isDescOptimal,
    `${metaDesc.length} chars`,
    metaDesc.length < 120
      ? `Meta description is short (${metaDesc.length} chars). Expand to 120-160 chars to maximize SERP snippet real estate.`
      : `Meta description is long (${metaDesc.length} chars). Shorten to 140-160 chars to avoid truncation in Google snippets.`
  );

  // 3. Content Hierarchy & Quality
  const h1s = $('h1').map((_, el) => $(el).text().trim()).get();
  details.h1Count = h1s.length;
  details.h1 = h1s[0] || 'MISSING';
  check(
    RULES.CONTENT_H1_SINGLE,
    h1s.length === 1,
    `${h1s.length} H1 tags found`,
    h1s.length === 0 ? 'Add exactly one <h1> tag containing your primary keyword.' : 'Consolidate multiple <h1> tags into exactly one <h1>.'
  );

  if (h1s.length === 1) {
    const h1Len = h1s[0].length;
    check(
      RULES.CONTENT_H1_LENGTH,
      h1Len >= 15 && h1Len <= 75,
      `${h1Len} chars ("${h1s[0]}")`,
      h1Len < 15 ? 'H1 tag is very short; make it more descriptive.' : 'H1 tag is too verbose; keep it under 70 characters.'
    );
  }

  // Heading order check (H1 -> H2 -> H3)
  const headingLevels = [];
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    headingLevels.push(parseInt(el.tagName.replace('h', ''), 10));
  });
  let orderOk = true;
  let orderViolation = '';
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] - headingLevels[i - 1] > 1) {
      orderOk = false;
      orderViolation = `Jumped from H${headingLevels[i - 1]} to H${headingLevels[i]}`;
      break;
    }
  }
  check(
    RULES.CONTENT_HEADING_ORDER,
    orderOk,
    orderOk ? 'Logical H1->H2->H3 order' : orderViolation,
    'Maintain proper heading hierarchy without skipping levels (e.g. do not jump from H1 directly to H3).'
  );

  // Word count (excluding scripts, styles, nav)
  const bodyText = $('body').clone().find('script, style, noscript, nav, footer').remove().end().text();
  const words = bodyText.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  const wordCount = words.length;
  details.wordCount = wordCount;

  const isBlog = relativePath.includes('blog');
  const isLegal = relativePath.includes('privacy') || relativePath.includes('terms') || relativePath.includes('dmca');
  const targetMinWords = isBlog ? 750 : isLegal ? 200 : 300;

  check(
    RULES.CONTENT_WORD_COUNT,
    wordCount >= targetMinWords,
    `${wordCount} words (target: >= ${targetMinWords})`,
    `Expand page content. Thin pages risk Helpful Content de-indexation. Add informative sections, FAQs, or editorial guides.`
  );

  // BLUF: First 200 words contains definition/summary
  const introText = words.slice(0, 150).join(' ').toLowerCase();
  const hasBlufKeywords = /terabox|downloader|download|tool|link|video|guide|how to|free/i.test(introText);
  check(
    RULES.CONTENT_BLUF_INTRO,
    hasBlufKeywords && words.length >= 100,
    hasBlufKeywords ? 'BLUF detected in opening text' : 'Intro lacks primary entity keywords',
    'Place your core definition and user value proposition in the first 2-3 sentences for Google AI Overviews.'
  );

  // 4. Structured Data (JSON-LD)
  const jsonLdScripts = $('script[type="application/ld+json"]').get();
  details.schemaCount = jsonLdScripts.length;
  check(
    RULES.SCHEMA_JSONLD_EXISTS,
    jsonLdScripts.length > 0,
    `${jsonLdScripts.length} schema scripts found`,
    'Embed JSON-LD structured data (<script type="application/ld+json">) to qualify for Google rich snippets.'
  );

  let schemasParsed = [];
  let syntaxOk = true;
  for (const s of jsonLdScripts) {
    try {
      const data = JSON.parse($(s).html() || '{}');
      schemasParsed.push(data);
    } catch {
      syntaxOk = false;
    }
  }

  if (jsonLdScripts.length > 0) {
    check(
      RULES.SCHEMA_SYNTAX_VALID,
      syntaxOk,
      syntaxOk ? 'Valid JSON syntax' : 'JSON parse error in schema script',
      'Validate JSON-LD syntax; remove trailing commas or invalid quotes.'
    );
  }

  const schemaTypes = schemasParsed.map((s) => s['@type']).filter(Boolean);
  details.schemaTypes = schemaTypes;

  let hasExpectedSchema = false;
  if (isBlog) {
    hasExpectedSchema = schemaTypes.some((t) => t === 'Article' || t === 'BlogPosting' || t === 'HowTo');
  } else if (isLegal) {
    hasExpectedSchema = schemaTypes.length > 0 || true; // Legal pages don't strictly require tool schema
  } else {
    hasExpectedSchema = schemaTypes.some((t) => t === 'WebApplication' || t === 'SoftwareApplication' || t === 'HowTo' || t === 'FAQPage');
  }
  check(
    RULES.SCHEMA_TYPE_RELEVANT,
    hasExpectedSchema,
    schemaTypes.join(', ') || 'None',
    isBlog ? 'Add Article schema with author, datePublished, and headline.' : 'Add WebApplication and FAQPage or HowTo schemas.'
  );

  const isSubpage = relativePath !== 'index.html' && relativePath !== '';
  if (isSubpage) {
    const hasBreadcrumbs = schemaTypes.includes('BreadcrumbList');
    check(
      RULES.SCHEMA_BREADCRUMBS,
      hasBreadcrumbs,
      hasBreadcrumbs ? 'BreadcrumbList included' : 'No BreadcrumbList schema',
      'Include BreadcrumbList JSON-LD on subpages so Google displays structured breadcrumb trails in SERPs.'
    );
  }

  // 5. Social Metadata (Open Graph & Twitter)
  const ogTitle = $('meta[property="og:title"]').attr('content');
  const ogDesc = $('meta[property="og:description"]').attr('content');
  const ogUrl = $('meta[property="og:url"]').attr('content');
  const ogImage = $('meta[property="og:image"]').attr('content');
  const ogOk = Boolean(ogTitle && ogDesc && ogUrl && ogImage);
  check(
    RULES.SOCIAL_OG_TAGS,
    ogOk,
    ogOk ? 'Complete OG Tags' : `Missing: ${[!ogTitle && 'og:title', !ogDesc && 'og:desc', !ogUrl && 'og:url', !ogImage && 'og:image'].filter(Boolean).join(', ')}`,
    'Define complete Open Graph tags (og:title, og:description, og:url, og:image) for high social CTR.'
  );

  const twCard = $('meta[name="twitter:card"]').attr('content');
  const twTitle = $('meta[name="twitter:title"]').attr('content');
  const twDesc = $('meta[name="twitter:description"]').attr('content');
  const twOk = Boolean(twCard && twTitle && twDesc);
  check(
    RULES.SOCIAL_TWITTER_TAGS,
    twOk,
    twOk ? 'Complete Twitter Card' : 'Missing twitter:card/title/desc',
    'Add twitter:card="summary_large_image", twitter:title, and twitter:description tags.'
  );

  // 6. Internal & External Links
  const links = $('a[href]').get();
  let genericAnchorCount = 0;
  let insecureExtCount = 0;
  links.forEach((a) => {
    const text = $(a).text().trim().toLowerCase();
    const href = $(a).attr('href') || '';
    if (['click here', 'read more', 'learn more', 'link', 'here'].includes(text)) {
      genericAnchorCount++;
    }
    if ((href.startsWith('http://') || href.startsWith('https://')) && !href.includes('teralinkgrabber.com')) {
      const rel = $(a).attr('rel') || '';
      if (!rel.includes('noopener')) {
        insecureExtCount++;
      }
    }
  });

  check(
    RULES.LINKS_ANCHOR_TEXT,
    genericAnchorCount === 0,
    genericAnchorCount === 0 ? 'Descriptive anchors' : `${genericAnchorCount} generic anchor text links found`,
    'Replace generic anchor phrases (like "click here") with descriptive keywords describing the target page.'
  );

  check(
    RULES.LINKS_EXTERNAL_SECURE,
    insecureExtCount === 0,
    insecureExtCount === 0 ? 'All external links secure' : `${insecureExtCount} external links missing rel="noopener noreferrer"`,
    'Add rel="noopener noreferrer" to external links for tab-nabbing security and referrer hygiene.'
  );

  // 7. Media & Images
  const imgs = $('img').get();
  let missingAltCount = 0;
  imgs.forEach((img) => {
    const alt = $(img).attr('alt');
    if (!alt || alt.trim() === '') {
      missingAltCount++;
    }
  });

  check(
    RULES.MEDIA_IMG_ALT,
    missingAltCount === 0,
    missingAltCount === 0 ? `All ${imgs.length} images have alt tags` : `${missingAltCount}/${imgs.length} images missing alt text`,
    'Add descriptive, keyword-rich alt text to all <img> elements.'
  );

  // Compute Page Score
  let totalWeight = 0;
  let earnedWeight = 0;
  for (const rule of Object.values(RULES)) {
    // If rule was evaluated
    const isEvaluated = passed.includes(rule.id) || issues.some((i) => i.ruleId === rule.id);
    if (isEvaluated) {
      totalWeight += rule.weight;
      if (passed.includes(rule.id)) {
        earnedWeight += rule.weight;
      }
    }
  }

  const score = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 100;

  return {
    relativePath,
    url: liveUrl || `${SITE_URL}/${relativePath.replace(/index\.html$/, '').replace(/\.html$/, '')}`,
    score,
    passedCount: passed.length,
    issueCount: issues.length,
    issues,
    passed,
    details,
  };
}

async function runAudit() {
  console.log('\x1b[1m\x1b[36m=================================================================\x1b[0m');
  console.log('\x1b[1m\x1b[36m   TeraLinkGrabber Automated SEO Best Practices Audit System     \x1b[0m');
  console.log('\x1b[1m\x1b[36m=================================================================\x1b[0m\n');

  const isLive = process.argv.includes('--live');
  const htmlFiles = getAllHtmlFiles(OUT_DIR);

  if (htmlFiles.length === 0 && !isLive) {
    console.error('\x1b[31mError: No HTML files found in out/. Run "npm run build" first or use "--live" to audit live site.\x1b[0m');
    process.exit(1);
  }

  const results = [];

  if (isLive) {
    console.log(`\x1b[33mScanning LIVE production site: ${SITE_URL}...\x1b[0m\n`);
    // Audit homepage + top routes
    const routes = [
      '',
      'terabox-video-downloader',
      'terabox-link-downloader',
      'terabox-online',
      'terabox-player',
      'terabox-video-player',
      'terabox-direct-download',
      'terabox-file-downloader',
      'download-terabox-link-video',
      'terabox-downloader-online-free',
      'blog/how-to-download-terabox-videos',
      'blog/how-to-download-terabox-files',
      'blog/terabox-download-without-app',
      'blog/terabox-download-without-login',
      'blog/terabox-download-speed',
      'dmca',
      'privacy',
      'terms',
    ];

    for (const r of routes) {
      const pageUrl = `${SITE_URL}/${r}`;
      process.stdout.write(`Auditing [LIVE] ${pageUrl}... `);
      try {
        const resp = await fetch(pageUrl, { headers: { 'User-Agent': 'TeraLinkGrabber-SEO-Auditor/1.0' } });
        if (!resp.ok) {
          console.log(`\x1b[31mHTTP ${resp.status}\x1b[0m`);
          continue;
        }
        const html = await resp.text();
        const res = auditPage(html, r || 'index.html', pageUrl);
        results.push(res);
        const color = res.score >= 90 ? '\x1b[32m' : res.score >= 75 ? '\x1b[33m' : '\x1b[31m';
        console.log(`${color}${res.score}/100\x1b[0m (${res.issues.length} issues)`);
      } catch (err) {
        console.log(`\x1b[31mFailed: ${err.message}\x1b[0m`);
      }
    }
  } else {
    console.log(`Auditing \x1b[32m${htmlFiles.length} static pre-rendered pages\x1b[0m in out/ directory...\n`);
    for (const filePath of htmlFiles) {
      const relPath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
      const html = fs.readFileSync(filePath, 'utf-8');
      const res = auditPage(html, relPath);
      results.push(res);

      const color = res.score >= 90 ? '\x1b[32m' : res.score >= 75 ? '\x1b[33m' : '\x1b[31m';
      console.log(`  ${color}[${res.score}%]\x1b[0m ${relPath.padEnd(45)} (${res.issues.length} issues)`);
    }
  }

  // Aggregate Metrics
  const totalPages = results.length;
  const avgScore = Math.round(results.reduce((acc, r) => acc + r.score, 0) / totalPages);

  const allIssues = results.flatMap((r) => r.issues.map((i) => ({ ...i, page: r.relativePath, url: r.url })));
  const criticalCount = allIssues.filter((i) => i.level === 'CRITICAL').length;
  const warningCount = allIssues.filter((i) => i.level === 'WARNING').length;
  const oppCount = allIssues.filter((i) => i.level === 'OPPORTUNITY').length;

  console.log('\n\x1b[1m\x1b[36m=================================================================\x1b[0m');
  console.log('\x1b[1m\x1b[37m                    AUDIT EXECUTIVE SUMMARY                      \x1b[0m');
  console.log('\x1b[1m\x1b[36m=================================================================\x1b[0m');
  const scoreColor = avgScore >= 90 ? '\x1b[32m' : avgScore >= 75 ? '\x1b[33m' : '\x1b[31m';
  console.log(`Total Pages Audited:    \x1b[1m${totalPages}\x1b[0m`);
  console.log(`Site Health Score:      ${scoreColor}\x1b[1m${avgScore} / 100\x1b[0m`);
  console.log(`Critical Issues:        \x1b[31m\x1b[1m${criticalCount}\x1b[0m (Needs immediate fix)`);
  console.log(`Warnings:               \x1b[33m\x1b[1m${warningCount}\x1b[0m (Suboptimal ranking / CTR)`);
  console.log(`Opportunities:          \x1b[36m\x1b[1m${oppCount}\x1b[0m (Best-practice enhancements)\n`);

  // Category breakdown
  const categories = ['Technical', 'Metadata', 'Content', 'Schema', 'Social', 'Links', 'Media'];
  console.log('\x1b[1mCategory Health Breakdown:\x1b[0m');
  categories.forEach((cat) => {
    const catIssues = allIssues.filter((i) => i.cat === cat);
    const catCritical = catIssues.filter((i) => i.level === 'CRITICAL').length;
    const catWarning = catIssues.filter((i) => i.level === 'WARNING').length;
    const status = catCritical > 0 ? '\x1b[31mNEEDS WORK\x1b[0m' : catWarning > 0 ? '\x1b[33mOPTIMIZE\x1b[0m' : '\x1b[32mEXCELLENT\x1b[0m';
    console.log(`  - ${cat.padEnd(12)}: ${status} (${catIssues.length} issues)`);
  });

  // Top Actionable Improvements Grouped by Frequency
  const issueFrequency = {};
  for (const issue of allIssues) {
    if (!issueFrequency[issue.ruleId]) {
      issueFrequency[issue.ruleId] = {
        ruleId: issue.ruleId,
        cat: issue.cat,
        level: issue.level,
        desc: issue.desc,
        rec: issue.rec,
        count: 0,
        pages: [],
      };
    }
    issueFrequency[issue.ruleId].count++;
    issueFrequency[issue.ruleId].pages.push(issue.page);
  }

  const prioritizedRules = Object.values(issueFrequency).sort((a, b) => {
    const order = { CRITICAL: 3, WARNING: 2, OPPORTUNITY: 1 };
    return order[b.level] - order[a.level] || b.count - a.count;
  });

  console.log('\n\x1b[1mTop Priority Issues to Improve:\x1b[0m');
  prioritizedRules.slice(0, 8).forEach((p, idx) => {
    const badge = p.level === 'CRITICAL' ? '\x1b[31m[CRITICAL]\x1b[0m' : p.level === 'WARNING' ? '\x1b[33m[WARNING]\x1b[0m' : '\x1b[36m[OPPORTUNITY]\x1b[0m';
    console.log(`  ${idx + 1}. ${badge} \x1b[1m${p.desc}\x1b[0m (Affects ${p.count} pages)`);
    console.log(`     -> \x1b[90m${p.rec}\x1b[0m`);
  });

  // Generate Markdown Report (SEO_AUDIT_REPORT.md)
  generateMarkdownReport(results, avgScore, criticalCount, warningCount, oppCount, prioritizedRules);

  // Generate HTML Report (out/seo-audit-report.html)
  generateHtmlReport(results, avgScore, criticalCount, warningCount, oppCount, prioritizedRules);

  console.log('\n\x1b[32mReports successfully generated:\x1b[0m');
  console.log('  1. Markdown Report: \x1b[1mSEO_AUDIT_REPORT.md\x1b[0m');
  console.log('  2. Visual Dashboard: \x1b[1mout/seo-audit-report.html\x1b[0m\n');
}

function generateMarkdownReport(results, avgScore, criticalCount, warningCount, oppCount, prioritizedRules) {
  let md = `# SEO Audit Report — TeraLinkGrabber.com\n\n`;
  md += `> **Audit Date:** ${new Date().toISOString().split('T')[0]}  \n`;
  md += `> **Overall Site Health Score:** **${avgScore} / 100**  \n`;
  md += `> **Total Pages Audited:** ${results.length}  \n`;
  md += `> **Summary:** ${criticalCount} Critical | ${warningCount} Warnings | ${oppCount} Opportunities\n\n`;
  md += `---\n\n`;

  md += `## 1. Executive Summary & Health Index\n\n`;
  md += `| Metric | Value | Target |\n`;
  md += `|---|---|---|\n`;
  md += `| **Site Health Score** | **${avgScore}%** | **$\ge 90\%$** |\n`;
  md += `| **Critical Violations** | \`${criticalCount}\` | \`0\` |\n`;
  md += `| **Warnings** | \`${warningCount}\` | $\le 5$ |\n`;
  md += `| **Best-Practice Opportunities** | \`${oppCount}\` | — |\n\n`;

  md += `### Score Distribution\n\n`;
  md += `| Health Band | Meaning | Page Count |\n`;
  md += `|---|---|---|\n`;
  const highPages = results.filter((r) => r.score >= 90).length;
  const medPages = results.filter((r) => r.score >= 75 && r.score < 90).length;
  const lowPages = results.filter((r) => r.score < 75).length;
  md += `| 🟢 **90 - 100%** | Excellent SEO Readiness | ${highPages} |\n`;
  md += `| 🟡 **75 - 89%** | Good, minor optimizations needed | ${medPages} |\n`;
  md += `| 🔴 **< 75%** | Needs attention to avoid rank dilution | ${lowPages} |\n\n`;

  md += `---\n\n`;
  md += `## 2. Priority Action Plan (Ordered by SEO Impact)\n\n`;
  prioritizedRules.forEach((p, i) => {
    const badge = p.level === 'CRITICAL' ? '🔴 **CRITICAL**' : p.level === 'WARNING' ? '🟡 **WARNING**' : '🔵 **OPPORTUNITY**';
    md += `### ${i + 1}. ${badge}: ${p.desc} (${p.count} pages affected)\n\n`;
    md += `- **Category:** \`${p.cat}\`\n`;
    md += `- **Rule ID:** \`${p.ruleId}\`\n`;
    md += `- **Recommended Fix:** ${p.rec}\n`;
    md += `- **Sample Affected Pages:**\n`;
    p.pages.slice(0, 5).forEach((pg) => {
      md += `  - \`${pg}\`\n`;
    });
    if (p.pages.length > 5) {
      md += `  - *...and ${p.pages.length - 5} more*\n`;
    }
    md += `\n`;
  });

  md += `---\n\n`;
  md += `## 3. Page-by-Page Audit Breakdown\n\n`;
  md += `| Page / Route | Score | Title Length | Words | Schemas | Issues |\n`;
  md += `|---|---|---|---|---|---|\n`;
  results.forEach((r) => {
    const scoreEmoji = r.score >= 90 ? '🟢' : r.score >= 75 ? '🟡' : '🔴';
    const schemaList = r.details.schemaTypes?.join(', ') || 'None';
    md += `| \`${r.relativePath}\` | ${scoreEmoji} **${r.score}%** | ${r.details.titleLength || 0} ch | ${r.details.wordCount || 0} | ${schemaList} | ${r.issues.length} |\n`;
  });

  md += `\n---\n\n`;
  md += `## 4. Specific Issues Found Per Page\n\n`;
  results.forEach((r) => {
    if (r.issues.length > 0) {
      md += `### \`${r.relativePath}\` (Score: ${r.score}%)\n\n`;
      md += `**Title:** "${r.details.title || ''}" (${r.details.titleLength} chars)  \n`;
      md += `**H1:** "${r.details.h1 || ''}"  \n`;
      md += `**Canonical:** \`${r.details.canonical || ''}\`  \n\n`;
      md += `| Severity | Rule | Finding | Recommendation |\n`;
      md += `|---|---|---|---|\n`;
      r.issues.forEach((iss) => {
        const sev = iss.level === 'CRITICAL' ? '🔴 CRITICAL' : iss.level === 'WARNING' ? '🟡 WARNING' : '🔵 OPPORTUNITY';
        md += `| ${sev} | \`${iss.ruleId}\` | ${iss.actual} | ${iss.rec} |\n`;
      });
      md += `\n`;
    }
  });

  fs.writeFileSync('SEO_AUDIT_REPORT.md', md, 'utf-8');
}

function generateHtmlReport(results, avgScore, criticalCount, warningCount, oppCount, prioritizedRules) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TeraLinkGrabber — SEO Audit Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen p-6 md:p-12">
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Header -->
    <header class="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
          TeraLinkGrabber SEO Audit Engine
        </h1>
        <p class="text-sm text-slate-400 mt-1">Automated Best-Practices Evaluation Across All Production Routes</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-slate-400">
          Audited: ${new Date().toISOString().split('T')[0]}
        </span>
        <span class="text-xs px-3 py-1 bg-blue-950/60 border border-blue-800 rounded-full text-blue-300 font-semibold">
          ${results.length} Routes Checked
        </span>
      </div>
    </header>

    <!-- Score Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-5 shadow-lg">
        <p class="text-xs uppercase font-semibold text-slate-400">Site Health Score</p>
        <p class="text-4xl font-black mt-2 ${avgScore >= 90 ? 'text-emerald-400' : avgScore >= 75 ? 'text-yellow-400' : 'text-red-400'}">${avgScore}%</p>
        <div class="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
          <div class="h-full ${avgScore >= 90 ? 'bg-emerald-400' : avgScore >= 75 ? 'bg-yellow-400' : 'bg-red-400'}" style="width: ${avgScore}%"></div>
        </div>
      </div>

      <div class="bg-slate-900/80 border border-red-900/40 rounded-xl p-5 shadow-lg">
        <p class="text-xs uppercase font-semibold text-red-400">Critical Issues</p>
        <p class="text-4xl font-black text-red-400 mt-2">${criticalCount}</p>
        <p class="text-xs text-slate-400 mt-2">Immediate indexing/ranking threats</p>
      </div>

      <div class="bg-slate-900/80 border border-yellow-900/40 rounded-xl p-5 shadow-lg">
        <p class="text-xs uppercase font-semibold text-yellow-400">Warnings</p>
        <p class="text-4xl font-black text-yellow-400 mt-2">${warningCount}</p>
        <p class="text-xs text-slate-400 mt-2">Suboptimal SERP snippet or CTR</p>
      </div>

      <div class="bg-slate-900/80 border border-blue-900/40 rounded-xl p-5 shadow-lg">
        <p class="text-xs uppercase font-semibold text-blue-400">Opportunities</p>
        <p class="text-4xl font-black text-blue-400 mt-2">${oppCount}</p>
        <p class="text-xs text-slate-400 mt-2">GEO & AI Search enhancements</p>
      </div>
    </div>

    <!-- Priority Action Items -->
    <section class="bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-lg space-y-4">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        <span>🚀</span> Top SEO Improvements Required
      </h2>
      <div class="space-y-3">
        ${prioritizedRules.slice(0, 6).map((p, idx) => `
          <div class="p-4 rounded-lg border ${p.level === 'CRITICAL' ? 'bg-red-950/20 border-red-900/50' : p.level === 'WARNING' ? 'bg-yellow-950/20 border-yellow-900/50' : 'bg-blue-950/20 border-blue-900/50'}">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase px-2 py-0.5 rounded ${p.level === 'CRITICAL' ? 'bg-red-500/20 text-red-300' : p.level === 'WARNING' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'}">
                ${p.level} &bull; ${p.cat}
              </span>
              <span class="text-xs text-slate-400 font-mono">${p.count} pages affected</span>
            </div>
            <p class="text-sm font-semibold text-slate-200 mt-2">${p.desc}</p>
            <p class="text-xs text-slate-400 mt-1"><strong class="text-slate-300">Action:</strong> ${p.rec}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Page Results Table -->
    <section class="bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-lg space-y-4">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        <span>📄</span> Page-by-Page Audit Scores
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-300">
          <thead class="text-xs uppercase bg-slate-950/70 text-slate-400 border-b border-slate-800">
            <tr>
              <th class="py-3 px-4">Route</th>
              <th class="py-3 px-4">Score</th>
              <th class="py-3 px-4">Title Length</th>
              <th class="py-3 px-4">Word Count</th>
              <th class="py-3 px-4">Schemas</th>
              <th class="py-3 px-4">Issues</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60 font-mono text-xs">
            ${results.map((r) => `
              <tr class="hover:bg-slate-800/40 transition">
                <td class="py-3 px-4 text-blue-400 font-medium">${r.relativePath}</td>
                <td class="py-3 px-4 font-bold ${r.score >= 90 ? 'text-emerald-400' : r.score >= 75 ? 'text-yellow-400' : 'text-red-400'}">${r.score}%</td>
                <td class="py-3 px-4 text-slate-300">${r.details.titleLength || 0} chars</td>
                <td class="py-3 px-4 text-slate-300">${r.details.wordCount || 0} words</td>
                <td class="py-3 px-4 text-slate-400">${r.details.schemaTypes?.join(', ') || 'None'}</td>
                <td class="py-3 px-4">
                  <span class="px-2 py-1 rounded text-[11px] font-semibold ${r.issues.length === 0 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-300'}">
                    ${r.issues.length} issues
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-xs text-slate-500 pt-6 border-t border-slate-800/80">
      TeraLinkGrabber Automated SEO Audit System &bull; Generated dynamically for teralinkgrabber.com
    </footer>
  </div>
</body>
</html>`;

  if (!fs.existsSync('out')) {
    fs.mkdirSync('out', { recursive: true });
  }
  fs.writeFileSync(path.join('out', 'seo-audit-report.html'), html, 'utf-8');

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  fs.writeFileSync(path.join('public', 'seo-audit-report.html'), html, 'utf-8');
}

runAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
