import { MetadataRoute } from 'next'
import { getAllPosts } from '@/utils/posts'
import { authors } from '@/data/authors'
import { postModified, routeModified } from '@/utils/lastmod'

// Each <lastmod> is the day the page's own content last changed (src/utils/lastmod.ts, from src/data/lastmod.json,
// written by `npm run lastmod`). A page that changed after that file was written is dated on the build day.
const day = (date: string): Date => new Date(`${date.slice(0, 10)}T00:00:00Z`)

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.loodgieterai.nl'

    const posts = getAllPosts()
    // The newest article change = when the listings on / and /blog last changed
    const postDates = new Map(posts.map((p) => [p.slug, postModified(p.slug, p.date)]))
    const latestPost = Array.from(postDates.values()).reduce((max, d) => (d > max ? d : max), '1970-01-01')

    // Static routes — rarely change. Stable lastmod.
    const staticPages = [
        '/gratis-scan', '/review-pakket',
        '/tarieven', '/website-kopen', '/gratis-website',
        '/chatbot', '/voice-ai', '/seo', '/reviews', '/social-media',
        '/crm', '/automatisering', '/free-trial',
        '/privacy', '/legal', '/algemene-voorwaarden',
    ]
    const staticRoutes = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: day(routeModified(route)),
        changeFrequency: (route === '/tarieven' || route === '/gratis-website') ? 'monthly' as const : 'yearly' as const,
        priority: (route === '/tarieven' || route === '/gratis-website') ? 0.9 : 0.7,
    }))

    // Homepage — gets a "fresh" signal whenever a new article is published
    const home = [{
        url: `${baseUrl}/`,
        lastModified: day([latestPost, routeModified('/')].sort()[1]),
        changeFrequency: 'daily' as const,
        priority: 1,
    }]

    // Blog index
    const blogIndex = [{
        url: `${baseUrl}/blog`,
        lastModified: day(latestPost),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }]

    // Individual blog posts: the day each article's content last changed
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: day(postDates.get(post.slug) as string),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    // Author pages refresh when a new article by that author is added.
    const authorRoutes = authors.map((author) => {
        const authorLatest = posts
            .filter((p) => p.authorSlug === author.slug)
            .reduce((max, p) => {
                const d = postDates.get(p.slug) as string
                return d > max ? d : max
            }, '1970-01-01')
        return {
            url: `${baseUrl}/author/${author.slug}`,
            lastModified: day(authorLatest),
            changeFrequency: 'weekly' as const,
            priority: 0.3,
        }
    })

    return [...home, ...staticRoutes, ...blogIndex, ...blogRoutes, ...authorRoutes]
}
