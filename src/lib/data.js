export const articles = [
    {
        id: "1",
        title: "India Launches New Satellite for Climate Monitoring",
        summary: "ISRO successfully launches the EOS-06 satellite, enhancing India's ocean monitoring capabilities.",
        image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Science",
        date: "2023-11-26",
        content: "The Indian Space Research Organisation (ISRO) has marked another milestone with the successful launch of the Earth Observation Satellite-06 (EOS-06). This satellite is designed to provide continuity of services for Oceansat-2 with enhanced payload specifications. The launch took place from the Satish Dhawan Space Centre in Sriharikota. The satellite will provide critical data for ocean color monitoring, sea surface temperature, and wind vector data to use in oceanography, climatology, and meteorology applications."
    },
    {
        id: "2",
        title: "Global Markets Rally as Inflation Shows Signs of Cooling",
        summary: "Stock markets across Asia and Europe surged today as new data suggests global inflation may have peaked.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Business",
        date: "2023-11-25",
        content: "Investors breathed a sigh of relief as the latest consumer price index reports from major economies showed a slower-than-expected rise in prices. This has led to speculation that central banks might ease their aggressive interest rate hikes. Technology and consumer discretionary sectors led the gains, with major indices closing 2-3% higher."
    },
    {
        id: "3",
        title: "Historic Cricket Victory: India Defeats Australia in Thriller",
        summary: "In a match that went down to the last ball, India secured a memorable victory against Australia at the MCG.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Sports",
        date: "2023-11-25",
        content: "The Melbourne Cricket Ground witnessed one of the most intense finishes in recent cricket history. Chasing a target of 300, India was in a precarious position before a stunning partnership turned the tide. The final over drama saw 15 runs needed, achieved with a six on the final delivery."
    },
    {
        id: "4",
        title: "New AI Tool Revolutionizes Coding for Beginners",
        summary: "A new generative AI platform claims to teach coding 5x faster than traditional methods.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Technology",
        date: "2023-11-24",
        content: "EdTech startup 'CodeFast' has unveiled an AI-powered tutor that adapts to each student's learning style in real-time. Early beta testers report significant improvements in understanding complex algorithms. The tool uses natural language processing to explain code logic and suggest optimizations."
    },
    {
        id: "5",
        title: "Local Festival Attracts Record Tourist Numbers",
        summary: "The annual Cultural Heritage Festival has seen a 40% increase in footfall compared to pre-pandemic levels.",
        image: "", // Testing missing image
        category: "Lifestyle",
        date: "2023-11-24",
        content: "The city came alive with colors and music as the Cultural Heritage Festival kicked off this weekend. Artisans from across the country displayed their crafts, while food stalls offered traditional delicacies. The tourism board credits the surge to a successful social media campaign."
    },
    {
        id: "6",
        title: "This is a Very Long Title Designed to Test the Layout Stability of the News Card Component When the Text Exceeds Normal Limits and Wraps to Multiple Lines",
        summary: "Testing UI resilience with edge case content. This article has an intentionally long title to verify CSS line-clamping and layout integrity.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Test",
        date: "2023-11-23",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
];

export async function getArticles() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return articles;
}

export async function getArticleById(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return articles.find(article => article.id === id);
}
