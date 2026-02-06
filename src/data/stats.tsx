import { BsTelephone, BsCameraVideo, BsFileText, BsCalendarCheck, BsShare, BsEnvelope } from "react-icons/bs";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20 Min bellen",
        icon: <BsTelephone size={34} className="text-blue-500" />,
        description: "10 Credits"
    },
    {
        title: "1 Video AI Reel",
        icon: <BsCameraVideo size={34} className="text-pink-500" />,
        description: "40 Credits"
    },
    {
        title: "1 SEO Blog",
        icon: <BsFileText size={34} className="text-green-600" />,
        description: "30 Credits"
    },
    {
        title: "1 Setter AI Afspraak",
        icon: <BsCalendarCheck size={34} className="text-purple-500" />,
        description: "15 Credits"
    },
    {
        title: "1 Social Post",
        icon: <BsShare size={34} className="text-orange-500" />,
        description: "15 Credits"
    },
    {
        title: "10 Email Drafts",
        icon: <BsEnvelope size={34} className="text-gray-500" />,
        description: "2 Credits"
    }
];