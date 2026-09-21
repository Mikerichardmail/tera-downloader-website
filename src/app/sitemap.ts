import { MetadataRoute } from 'next';
import { toolsData } from '@/data/toolsData';
import { blogPosts } from '@/data/blogData';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teralinkgrabber.com';
  const currentDate = new Date().toISOString();

  // 1. Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. All 9 Core Tool Pages
  toolsData.forEach((tool) => {
    routes.push({
      url: `${siteUrl}/${tool.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // 3. Blog Articles
  blogPosts.forEach((post) => {
    routes.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.publishedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 4. Policy Pages
  routes.push(
    {
      url: `${siteUrl}/dmca`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  );

  return routes;
}
