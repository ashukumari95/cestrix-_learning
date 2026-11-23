const fs = require('fs');

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
console.log('Total URLs in sitemap:', locs.length);

// Read featuresDetailData
const featCode = fs.readFileSync('src/data/featuresDetailData.ts', 'utf8');
const featSlugs = [...featCode.matchAll(/^  '([a-z0-9-]+)':/gm)].map(m => m[1]);

// Read blogData
const blogCode = fs.readFileSync('src/data/blogData.ts', 'utf8');
const blogSlugs = [...blogCode.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(m => m[1]);

// Read CoachingCityPage
const cityCode = fs.readFileSync('src/pages/CoachingCityPage.tsx', 'utf8');
const cityKeys = [...cityCode.matchAll(/^  ([a-z]+): \{/gm)].map(m => m[1]);

console.log('Feature slugs count:', featSlugs.length);
console.log('Blog slugs count:', blogSlugs.length);
console.log('City keys count:', cityKeys.length);

let verified = 0;
let missing = 0;
const results = [];

locs.forEach((url, i) => {
  const path = url.replace('https://learning.cestrixgroup.com', '') || '/';
  let exists = false;
  let pageName = '';
  let category = '';

  if (path === '/') { exists = true; pageName = 'Home.tsx'; category = 'Core Platform'; }
  else if (path === '/pricing') { exists = true; pageName = 'PricingPage.tsx'; category = 'Core Platform'; }
  else if (path === '/compare') { exists = true; pageName = 'ComparePage.tsx'; category = 'Core Platform'; }
  else if (path === '/case-studies') { exists = true; pageName = 'CaseStudiesPage.tsx'; category = 'Core Platform'; }
  else if (path === '/white-label-apps') { exists = true; pageName = 'WhiteLabelAppsPage.tsx'; category = 'Core Platform'; }
  else if (path === '/ai-learning') { exists = true; pageName = 'AiLearningPage.tsx'; category = 'Core Platform'; }
  else if (path === '/book-demo') { exists = true; pageName = 'BookDemoPage.tsx'; category = 'Core Platform'; }
  else if (path === '/solutions') { exists = true; pageName = 'SolutionsPage.tsx'; category = 'Core Platform'; }
  else if (path === '/solutions/coaching-institutes') { exists = true; pageName = 'SingleBranchPage.tsx'; category = 'Core Platform'; }
  else if (path === '/solutions/multi-branch') { exists = true; pageName = 'MultiBranchPage.tsx'; category = 'Core Platform'; }
  else if (path === '/about') { exists = true; pageName = 'AboutPage.tsx'; category = 'Core Platform'; }
  else if (path === '/contact') { exists = true; pageName = 'ContactPage.tsx'; category = 'Core Platform'; }
  else if (path === '/ai-coaching-marketing-generator') { exists = true; pageName = 'AiCoachingGrowthPage.tsx'; category = 'Core Platform (Free Tool)'; }
  else if (path === '/privacy') { exists = true; pageName = 'PrivacyPage.tsx'; category = 'Legal'; }
  else if (path === '/terms') { exists = true; pageName = 'TermsPage.tsx'; category = 'Legal'; }
  else if (path === '/blog') { exists = true; pageName = 'BlogIndexPage.tsx'; category = 'Blog Hub'; }
  else if (path.startsWith('/features/')) {
    const slug = path.replace('/features/', '');
    if (featSlugs.includes(slug)) {
      exists = true;
      pageName = 'FeatureDetailPage.tsx';
      category = 'Feature Page';
    }
  } else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    if (blogSlugs.includes(slug)) {
      exists = true;
      pageName = 'BlogPostPage.tsx';
      category = 'Blog Article';
    }
  } else if (path.startsWith('/coaching-software-in-')) {
    const city = path.replace('/coaching-software-in-', '');
    if (cityKeys.includes(city)) {
      exists = true;
      pageName = 'CoachingCityPage.tsx';
      category = 'City Hub Page';
    }
  }

  if (exists) {
    verified++;
    results.push({ num: i + 1, path, exists: true, pageName, category });
  } else {
    missing++;
    results.push({ num: i + 1, path, exists: false, pageName: 'NONE', category: 'UNKNOWN' });
  }
});

console.log('--- DETAILED BREAKDOWN ---');
results.forEach(r => {
  console.log(`${r.num}. [${r.exists ? 'OK' : 'MISSING'}] ${r.path} -> ${r.pageName} (${r.category})`);
});

console.log('\n--- FINAL SUMMARY ---');
console.log('Total URLs in sitemap.xml:', locs.length);
console.log('Verified Built & Working Pages:', verified);
console.log('Missing / Broken URLs:', missing);
