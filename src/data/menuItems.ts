import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Loodgieters", url: "/chatbot-voor-loodgieters" },
            { text: "Voice AI voor Loodgieters", url: "/voice-ai-voor-loodgieters" },
            { text: "SEO voor Loodgieters", url: "/seo-voor-loodgieters" },
            { text: "Social Media voor Loodgieters", url: "/social-media-voor-loodgieters" },
            { text: "Reviews voor Loodgieters", url: "/reviews-voor-loodgieters" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
