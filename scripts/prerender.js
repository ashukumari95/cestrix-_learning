import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://learning.cestrixgroup.com';
const DIST_DIR = path.resolve('dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Read data
const featCode = fs.readFileSync('src/data/featuresDetailData.ts', 'utf8');
const featSlugs = [...featCode.matchAll(/^  '([a-z0-9-]+)':\s*\{/gm)].map(m => m[1]);

const blogCode = fs.readFileSync('src/data/blogData.ts', 'utf8');
const blogSlugs = [...blogCode.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(m => m[1]);

const cityCode = fs.readFileSync('src/pages/CoachingCityPage.tsx', 'utf8');
const cityKeys = [...cityCode.matchAll(/^  ([a-z]+): \{/gm)].map(m => m[1]).filter(c => c !== 'quote');

const STATIC_SEO = {
  '/': {
    title: 'Cestrix Learning — Coaching Management Software | 0% Commission',
    description: "India's leading coaching management software with 0% commission. White label mobile app for coaching institutes, zero-proxy biometric attendance sync, NTA CBT exams, and automated WhatsApp fee recovery. Top Classplus & Teachmint alternative."
  },
  '/pricing': {
    title: 'Plans & Pricing — Cestrix Learning Coaching Operating System',
    description: 'Transparent coaching software pricing: Growth (Web Panels), Pro Solutions (Play Store App + Staff APKs), and Custom Enterprise tiers with 0% platform commission.'
  },
  '/about': {
    title: 'About Cestrix Learning — Next-Gen Operating System for Educators',
    description: 'Learn how Cestrix Learning is transforming coaching institutes across India with anti-piracy video lectures, automated operations, and zero revenue commission.'
  },
  '/compare': {
    title: 'Cestrix vs Classplus & Teachmint Comparison — 0% Commission ERP',
    description: 'Detailed feature & cost comparison between Cestrix Learning, Classplus, and Teachmint. See how our 0% commission model saves institutes lakhs annually.'
  },
  '/case-studies': {
    title: 'Coaching Institute Case Studies & Success Stories — Cestrix Learning',
    description: 'See how premier coaching institutes across India recovered ₹8.5L+ in pending fees, eliminated lecture video piracy, and unified multi-branch campuses with Cestrix.'
  },
  '/white-label-apps': {
    title: 'White-Label Android & iOS Apps for Coaching — Cestrix Learning',
    description: "Launch your coaching institute's official branded mobile app on Google Play Store and Apple App Store with DRM encrypted video streaming and offline downloads."
  },
  '/contact': {
    title: 'Contact Us & Direct Enterprise Desk — Cestrix Learning',
    description: 'Connect with Cestrix institutional consultation team. Reach out via phone at +91 77650 16973 or email info@cestrixgroup.com for instant onboarding.'
  },
  '/book-demo': {
    title: 'Book Free 10-Minute Live Demo — Cestrix Learning',
    description: "Schedule a personalized 10-minute live demo of Cestrix Coaching Management Software tailored to your institute's batches, exams, and student size."
  },
  '/blog': {
    title: 'Coaching Business & Growth Blog — Cestrix Learning',
    description: 'Actionable guides, marketing playbooks, and operating strategies for coaching owners, directors, and independent educators across India.'
  },
  '/privacy': {
    title: 'Privacy Policy & Student Data Protection — Cestrix Learning',
    description: 'Read the Cestrix Learning privacy policy. Learn about our bank-grade 256-bit encryption and 100% zero-sharing guarantee for your student data.'
  },
  '/terms': {
    title: 'Terms of Service & SLA Commitments — Cestrix Learning',
    description: 'Terms of service, platform uptime commitments, and subscription policies for Cestrix Learning coaching management software.'
  }
};

const routes = [];

// Static routes
Object.keys(STATIC_SEO).forEach(route => {
  if (route !== '/') {
    routes.push({
      path: route,
      title: STATIC_SEO[route].title,
      description: STATIC_SEO[route].description
    });
  }
});

// Feature routes
featSlugs.forEach(slug => {
  // extract feature name
  const nameMatch = featCode.match(new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?name:\\s*'([^']+)'`));
  const descMatch = featCode.match(new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?description:\\s*'([^']+)'`));
  const name = nameMatch ? nameMatch[1] : slug.replace(/-/g, ' ');
  const desc = descMatch ? descMatch[1] : `Comprehensive ${name} module for coaching institutes by Cestrix Learning.`;

  routes.push({
    path: `/features/${slug}`,
    title: `${name} for Coaching Institutes — Cestrix Learning`,
    description: desc
  });
});

// Blog routes
blogSlugs.forEach(slug => {
  const titleMatch = blogCode.match(new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?title:\\s*'([^']+)'`));
  const descMatch = blogCode.match(new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?metaDescription:\\s*'([^']+)'`));
  const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
  const desc = descMatch ? descMatch[1] : `Read ${title} on Cestrix Learning Coaching Blog.`;

  routes.push({
    path: `/blog/${slug}`,
    title: `${title} — Cestrix Learning Blog`,
    description: desc
  });
});

// City routes
cityKeys.forEach(city => {
  const nameMatch = cityCode.match(new RegExp(`${city}:\\s*\\{[\\s\\S]*?name:\\s*'([^']+)'`));
  const cityName = nameMatch ? nameMatch[1] : city.charAt(0).toUpperCase() + city.slice(1);
  routes.push({
    path: `/coaching-software-in-${city}`,
    title: `Best Coaching Management Software in ${cityName} — Cestrix Learning (0% Commission)`,
    description: `Looking for top coaching management software in ${cityName}? Cestrix provides zero-proxy biometric attendance, automated WhatsApp fee recovery, NTA CBT exams, and branded mobile apps.`
  });
});

console.log(`Prerendering ${routes.length} static HTML route pages...`);

routes.forEach(({ path: routePath, title, description }) => {
  const canonicalUrl = `${DOMAIN}${routePath}`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${title}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);

  // Replace Canonical & URL
  html = html.replace(/<link rel="canonical" id="canonical-url" href=".*?" \/>/, `<link rel="canonical" id="canonical-url" href="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  // Save to target dir
  const targetDir = path.join(DIST_DIR, routePath.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
});

console.log(`Successfully prerendered ${routes.length} route pages in dist/!`);
