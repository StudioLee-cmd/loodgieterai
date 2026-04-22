import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Loodgieters", url: "/chatbot" },
            { text: "Voice AI voor Loodgieters", url: "/voice-ai" },
            { text: "SEO voor Loodgieters", url: "/seo" },
            { text: "Social Media voor Loodgieters", url: "/social-media" },
            { text: "Reviews voor Loodgieters", url: "/reviews" },
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
