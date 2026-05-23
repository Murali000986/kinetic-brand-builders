export type Story = {
  id: string;
  category: string; // Used for eyebrow e.g. "AI AGENT / FINANCE"
  industry: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  content: {
    overview: string;
    challenge: string;
    solution: string;
    benefits: string;
  };
};

export const STORIES: Story[] = [
  {
    id: "ai-agent-finance",
    category: "AI AGENT / FINANCE",
    industry: "Banking & Financial Services",
    title: "Automating Tier-1 Support with a Custom AI Agent",
    description: "How we built a secure, LLM-powered autonomous agent that resolves 85% of customer queries instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Deployed a custom LLM-powered AI agent integrated directly with core banking APIs.",
      "Handles 85% of tier-1 support queries autonomously without human intervention.",
      "Average response time dropped from 45 minutes to under 2 seconds."
    ],
    quote: {
      text: "Our customer satisfaction scores have never been higher. The AI agent doesn't just answer questions; it resolves complex account issues instantaneously.",
      author: "Sarah Jenkins",
      role: "Head of Customer Experience, FinServe"
    },
    content: {
      overview: "FinServe is one of Europe's fastest-growing digital banks. As their customer base expanded to over 2 million active users, their traditional support infrastructure struggled to keep pace, leading to long wait times and frustrated customers.",
      challenge: "The primary challenge was scale. FinServe relied heavily on manual data entry and human routing. During peak hours or market volatility events, support queues would back up, resulting in 45-minute average wait times. Expanding the human support team linearly was not economically viable.",
      solution: "BASK developed and deployed a custom, securely-hosted Large Language Model (LLM) agent. This AI agent was deeply integrated with FinServe's core banking APIs, allowing it to perform actions like blocking cards, disputing transactions, and resetting credentials. Complex or emotional queries are seamlessly handed off to human agents with full context.",
      benefits: "The AI agent now handles 85% of all incoming tier-1 support tickets autonomously. Response times have dropped to under 2 seconds, and the human support team is now able to focus entirely on high-value, complex problem-solving, improving employee morale and reducing churn."
    }
  },
  {
    id: "web-dev-saas",
    category: "WEB DEVELOPMENT / SAAS",
    industry: "Software & Technology",
    title: "Building a High-Performance Marketing Site for a SaaS Unicorn",
    description: "Redesigning and rebuilding a corporate website with React and Next.js, resulting in a 200% increase in lead generation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    highlights: [
      "Rebuilt the entire frontend architecture using React, Next.js, and Framer Motion.",
      "Achieved a perfect 100/100 Lighthouse score for performance and accessibility.",
      "Integrated a headless CMS allowing the marketing team to deploy pages in minutes."
    ],
    content: {
      overview: "A rapidly growing SaaS unicorn needed a website that reflected their market-leading position. Their old WordPress site was sluggish, hard to maintain, and failing to convert high-value enterprise leads.",
      challenge: "The marketing team was handcuffed by rigid templates, and developers spent more time managing plugins than building features. The slow page load speeds were also negatively impacting their SEO rankings.",
      solution: "BASK completely redesigned the user experience, focusing on micro-interactions and a premium aesthetic. We engineered a blazing-fast static site using Next.js, seamlessly connected to a Sanity headless CMS to empower the marketing team.",
      benefits: "The new platform delivered a 200% increase in qualified enterprise leads within the first quarter. Marketing can now launch A/B tested landing pages independently, and organic search traffic has grown by 45% due to improved core web vitals."
    }
  },
  {
    id: "ecommerce-retail",
    category: "ECOMMERCE / RETAIL",
    industry: "Retail & Consumer Goods",
    title: "Scaling a D2C Brand with Headless Shopify",
    description: "Creating a lightning-fast headless commerce experience that doubled mobile conversion rates.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Decoupled the frontend using a headless Shopify architecture powered by Next.js.",
      "Page load times reduced from 4.2 seconds to 0.8 seconds globally.",
      "Mobile conversion rates increased by over 100% post-launch."
    ],
    quote: {
      text: "Moving to a headless setup gave us the creative freedom we lacked. The speed is incredible, and our customers are spending more time exploring our collections.",
      author: "Elena Rodriguez",
      role: "E-commerce Director, Aura Home"
    },
    content: {
      overview: "Aura Home is a premium direct-to-consumer homeware brand. With a massive surge in mobile traffic following successful social media campaigns, their existing monolithic ecommerce platform became a bottleneck for growth.",
      challenge: "Aura Home's legacy platform was extremely slow, heavily bloated with third-party apps, and rigid. This resulted in a poor mobile experience, leading to high bounce rates.",
      solution: "BASK led a complete replatforming initiative. We implemented a headless commerce architecture, keeping Shopify for backend processing but building a custom, lightning-fast frontend using Next.js and Vercel. We integrated a modern CMS to give the marketing team complete visual control.",
      benefits: "The performance gains were immediate. Mobile conversion rates increased by 140% within the first month. The marketing team now operates independently, launching new campaigns in hours rather than weeks."
    }
  },
  {
    id: "video-editing-creators",
    category: "VIDEO EDITING / CREATOR ECONOMY",
    industry: "Media & Entertainment",
    title: "High-Retention Video Editing for Top YouTube Creators",
    description: "Delivering fast-paced, highly engaging post-production that boosted average view duration by 40%.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Implemented a standardized post-production pipeline for rapid turnaround times.",
      "Used advanced motion graphics, sound design, and pacing techniques to maximize retention.",
      "Helped the channel grow from 1M to 3M subscribers in under a year."
    ],
    content: {
      overview: "A top-tier tech YouTube channel was struggling to maintain their upload schedule without sacrificing editing quality. They needed a reliable post-production partner to handle their massive raw footage.",
      challenge: "The creator was spending 40+ hours editing a single video, limiting their ability to shoot new content. They needed an editing style that was fast-paced, informative, and visually stunning to retain the modern viewer's attention.",
      solution: "BASK deployed a dedicated team of video editors and motion graphics artists. We developed a custom asset library and established a seamless cloud-based workflow for proxy editing, allowing us to turn around polished, 15-minute videos in 48 hours.",
      benefits: "By taking over post-production, the creator doubled their output volume. Our focus on retention-driven editing techniques—such as strategic b-roll, dynamic text tracking, and immersive sound design—resulted in a 40% increase in average view duration."
    }
  },
  {
    id: "video-shoot-lifestyle",
    category: "VIDEO SHOOT / LIFESTYLE",
    industry: "Apparel & Lifestyle",
    title: "Cinematic Brand Film Production for a Premium Lifestyle Brand",
    description: "End-to-end video production, from storyboarding to shooting on RED cameras, capturing the essence of luxury.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
    highlights: [
      "Full-scale production including location scouting, casting, and multi-day shoots.",
      "Shot in stunning 8K resolution using cinema-grade RED digital cameras.",
      "Generated over 5 million impressions across social media ad campaigns."
    ],
    quote: {
      text: "The final film was nothing short of breathtaking. BASK understood our brand's DNA instantly and translated it into a visual masterpiece.",
      author: "Marcus Thorne",
      role: "Creative Director, Veloce"
    },
    content: {
      overview: "Veloce, a high-end activewear brand, needed a flagship brand film to launch their new summer collection. They wanted a visually striking piece that communicated performance, luxury, and movement.",
      challenge: "Coordinating a multi-location shoot with professional athletes required meticulous planning. The brand needed the footage to work not just as a 2-minute film, but as dozens of micro-assets for TikTok, Instagram, and YouTube Shorts.",
      solution: "BASK handled the entire production process. We developed a cinematic storyboard, secured stunning coastal locations, and assembled a world-class camera crew. We shot specifically with multiple aspect ratios in mind to ensure every platform had native-looking content.",
      benefits: "The resulting brand film became the centerpiece of Veloce's most successful launch to date. The modular approach to shooting allowed us to deliver over 50 unique social assets, driving over 5 million impressions and a massive spike in direct sales."
    }
  },
  {
    id: "software-dev-logistics",
    category: "SOFTWARE DEV / LOGISTICS",
    industry: "Logistics & Supply Chain",
    title: "Custom Dashboard and Logistics Management Platform",
    description: "Engineering a bespoke web application to track thousands of daily shipments with real-time WebSocket data.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Built a unified internal dashboard with real-time GPS and customs data via WebSockets.",
      "Engineered a scalable Node.js backend capable of processing millions of data points daily.",
      "Saved over 10,000 operational hours annually through automated routing intelligence."
    ],
    content: {
      overview: "Vertex Logistics manages complex, high-value international shipments. As global supply chains became more volatile, their operational teams were overwhelmed by manual tracking using spreadsheets and legacy ERP software.",
      challenge: "Tracking international shipments required staff to constantly check multiple partner portals. Data was siloed, making it impossible to identify bottlenecks or provide clients with accurate ETAs without hours of manual investigation.",
      solution: "BASK designed and engineered a custom logistics management platform. We built a robust backend that aggregates API feeds from dozens of shipping lines and customs agencies. The React-based frontend visualizes this data in real-time, highlighting delayed shipments instantly.",
      benefits: "The custom software eliminated 90% of manual tracking tasks. The automated routing intelligence and real-time alerts have saved Vertex over 10,000 operational hours annually, allowing them to scale their operations without proportionally increasing headcount."
    }
  }
];
