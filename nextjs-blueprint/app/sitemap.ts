import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cestrixlearning.com';
  const now = new Date();

  // Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/white-label-apps`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-learning`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-demo`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Competitor Comparison Pages
  const competitors = ['classplus', 'teachmint', 'graphy', 'edmingle'];
  const comparisonRoutes: MetadataRoute.Sitemap = competitors.map((comp) => ({
    url: `${baseUrl}/compare/${comp}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Top Education Cities
  const cities = [
    'patna', 'kota', 'jaipur', 'sikar', 'motihari', 'lucknow',
    'indore', 'prayagraj', 'varanasi', 'ranchi', 'delhi', 'hyderabad',
    'pune', 'bhopal', 'kanpur', 'gorakhpur', 'muzaffarpur', 'gaya',
    'bhagalpur', 'jodhpur', 'ajmer', 'udaipur', 'meerut', 'agra'
  ];
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/coaching-software-in-${city}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...comparisonRoutes, ...cityRoutes];
}
