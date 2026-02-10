
import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.loodgieter-ai.nl';

    // Static pages
    const staticRoutes = [
        '',
        '/review-pakket',
        '/gratis-scan',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog posts
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
