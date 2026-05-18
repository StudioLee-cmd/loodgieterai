/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/uurtarief-loodgieter-zzp-rekenmethode-cijfers-2026', destination: '/', permanent: true },
            { source: '/blog/riool-relining-zonder-graven-loodgieter-premium-specialisme', destination: '/', permanent: true },
            { source: '/blog/iba-installatie-septische-tank-buitengebied-loodgieter-specialisme', destination: '/', permanent: true },
            { source: '/blog/tuin-drainage-installatie-loodgieter-specialisme', destination: '/', permanent: true },
            { source: '/blog/waterontharder-installatie-upsell-loodgieter', destination: '/', permanent: true },
            { source: '/blog/sanitair-badkamer-renovatie-loodgieter-high-ticket', destination: '/', permanent: true },
            { source: '/blog/verduurzaming-loodgieter-warmtepompen', destination: '/', permanent: true },
            { source: '/blog/robot-loodgieter-lekkage', destination: '/', permanent: true },
        ];
    },
};

export default nextConfig;
