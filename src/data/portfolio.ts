export const PROFILE = {
  name: "Bhushan Pawar",
  headline: "CSE Student • Developer • AI Enthusiast • Future Blockchain Developer",
  description:
    "I build interactive web experiences and AI-powered applications while exploring Web3, blockchain, and emerging technologies.",
  location: "Vidisha, Madhya Pradesh, India",
  github: "https://github.com/bhushzn",
  githubHandle: "bhushzn",
  linkedin: "https://www.linkedin.com/in/bhushan-pawar-b450812b2",
  emailPlaceholder: "bhushanpawar109876@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "PYTHON",
  "AI",
  "UI/UX",
  "GITHUB",
  "WEB3",
  "BLOCKCHAIN",
];

export const PROJECT_GROUPS = ["Web", "AI", "Web3", "Blockchain"] as const;
export type ProjectGroup = (typeof PROJECT_GROUPS)[number];

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  groups: ProjectGroup[];
  featured?: boolean;
  links: { label: string; href: string }[];
  detail: {
    overview: string;
    problem: string;
    solution: string;
    technology: string;
    features: string[];
    architecture: string;
    status: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "shieldlens-ai",
    index: "01",
    title: "ShieldLens AI",
    category: "AI • Cybersecurity • Browser Extension",
    description:
      "An AI-powered phishing detection concept designed to identify suspicious websites, QR codes and digital threats.",
    tags: ["React", "AI", "Python", "MongoDB", "Browser Extension"],
    groups: ["AI", "Web"],
    featured: true,
    links: [
      { label: "Live Demo ↗", href: "#" },
      { label: "GitHub ↗", href: "https://github.com/bhushzn" },
    ],
    detail: {
      overview:
        "ShieldLens AI is a concept project exploring how AI models can assist everyday users in spotting phishing attempts across websites and QR codes.",
      problem:
        "Phishing pages and malicious QR codes are increasingly hard to distinguish from legitimate ones, especially on mobile.",
      solution:
        "A browser-extension style interface backed by an analysis service that scores links and QR destinations before a user interacts with them.",
      technology: "React, Python, AI/LLM analysis, MongoDB, browser extension APIs.",
      features: [
        "URL and QR code inspection flow",
        "Risk scoring with human-readable explanations",
        "Extension-style lightweight UI",
        "Persistence layer for scan history",
      ],
      architecture:
        "Extension UI → analysis API → model/heuristic scoring layer → MongoDB store. (Editable placeholder — refine as the project evolves.)",
      status: "In development — placeholder section, update with real outcomes when available.",
    },
  },
  {
    id: "barter-buddies",
    index: "02",
    title: "BarterBuddies",
    category: "Web App • Education • Gamification",
    description:
      "A fun and educational platform where students exchange skills through challenges and quizzes.",
    tags: ["React", "Supabase", "Vercel AI"],
    groups: ["Web", "AI"],
    links: [
      { label: "View Project ↗", href: "#" },
      { label: "GitHub ↗", href: "https://github.com/bhushzn" },
    ],
    detail: {
      overview:
        "Designed a gamified system for students to learn from each other, focusing on a clean design, fair play, and mobile-friendly experience.",
      problem: "Traditional learning can lack engagement and peer-to-peer interaction.",
      solution:
        "A platform where students exchange skills using challenges, leaderboards, and MCQ testing.",
      technology: "React, Supabase, Vercel AI",
      features: [
        "Skill swapping logic",
        "Leaderboards",
        "MCQ testing",
        "Gamified learning experience"
      ],
      architecture: "React frontend with Supabase backend and Vercel AI integration.",
      status: "Successfully built and showcased.",
    },
  },
  {
    id: "python-voice-assistant",
    index: "03",
    title: "Python Voice Assistant",
    category: "Python • AI • Automation",
    description:
      "A Python-based voice assistant created to explore voice interaction, automation and AI-assisted experiences.",
    tags: ["Python", "AI", "Voice", "Automation"],
    groups: ["AI"],
    links: [
      { label: "View Project ↗", href: "#" },
      { label: "GitHub ↗", href: "https://github.com/bhushzn" },
    ],
    detail: {
      overview:
        "A desktop voice assistant built in Python to experiment with speech interfaces and task automation.",
      problem: "Repetitive desktop tasks and information lookups take time.",
      solution: "A voice-driven command loop that maps spoken intents to scripted actions.",
      technology: "Python, speech recognition, text-to-speech, automation scripting.",
      features: ["Voice command recognition", "Spoken responses", "Automation routines"],
      architecture: "Audio input → intent parsing → command dispatch → spoken output.",
      status: "Personal learning project — placeholder content.",
    },
  },
  {
    id: "interactive-media-lab",
    index: "04",
    title: "Interactive Media Lab",
    category: "Creative Development • Web Audio • Canvas",
    description:
      "An experimental interactive experience combining audio, lyrics, animation and canvas-based interactions.",
    tags: ["React", "Canvas", "Web Audio", "Animation"],
    groups: ["Web"],
    links: [{ label: "Explore ↗", href: "#" }],
    detail: {
      overview:
        "A creative sandbox exploring audio-reactive visuals, synced lyrics and canvas animation in the browser.",
      problem: "Creative web experiences are a great way to push motion and rendering skills.",
      solution: "A playground pairing the Web Audio API with canvas rendering and timed text.",
      technology: "React, Canvas API, Web Audio API, animation timing.",
      features: ["Audio-reactive visuals", "Synced lyric timeline", "Canvas particle rendering"],
      architecture: "Audio graph → analyser node → requestAnimationFrame canvas renderer.",
      status: "Experimental — placeholder content.",
    },
  },
];

export const SKILL_GROUPS = [
  {
    title: "FRONTEND",
    items: [
      { name: "React", note: "Used for building interactive web applications and portfolio experiences." },
      { name: "JavaScript", note: "Core language for browser logic, DOM work and experiments." },
      { name: "TypeScript", note: "Typed components and safer application architecture." },
      { name: "HTML", note: "Semantic, accessible document structure." },
      { name: "CSS", note: "Layout, motion and responsive design fundamentals." },
      { name: "Tailwind CSS", note: "Design-system driven styling for fast, consistent UI." },
    ],
  },
  {
    title: "PROGRAMMING",
    items: [
      { name: "Python", note: "Automation, AI experiments and the voice assistant project." },
      { name: "JavaScript", note: "Application logic across web projects." },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "LLMs", note: "Exploring language models for product-style features." },
      { name: "Prompt Engineering", note: "Designing reliable prompts for consistent model output." },
      { name: "AI Integration", note: "Wiring model APIs into real application flows." },
      { name: "AI-assisted development", note: "Using AI tooling to build and review faster." },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { name: "Git", note: "Version control for every project." },
      { name: "GitHub", note: "Public repositories and building in the open." },
      { name: "VS Code", note: "Primary development environment." },
      { name: "Vercel", note: "Deploying frontend projects." },
      { name: "Netlify", note: "Static hosting for experiments." },
    ],
  },
  {
    title: "DESIGN",
    items: [
      { name: "UI/UX", note: "Interface structure, hierarchy and usability." },
      { name: "Responsive Design", note: "Layouts that hold up from 320px to ultrawide." },
      { name: "Visual Design", note: "Type, spacing and colour systems." },
    ],
  },
  {
    title: "EXPLORING",
    items: [
      { name: "Web3", note: "Learning decentralised application patterns." },
      { name: "Blockchain", note: "Studying fundamentals and network mechanics." },
      { name: "Smart Contracts", note: "Reading and writing contract logic." },
      { name: "Solidity", note: "Currently learning contract development." },
    ],
  },
];

export const EXPLORING = [
  {
    title: "AI",
    icon: "brain" as const,
    items: ["LLM Applications", "AI Agents", "AI Integration", "Prompt Engineering"],
  },
  {
    title: "BLOCKCHAIN",
    icon: "blocks" as const,
    items: ["Web3", "Smart Contracts", "Ethereum", "Solidity"],
  },
  {
    title: "CREATIVE DEVELOPMENT",
    icon: "sparkles" as const,
    items: ["Motion", "Canvas", "Web Audio", "Interactive UI"],
  },
];

export const JOURNEY = [
  {
    year: "2025",
    title: "B.Tech CSE",
    text: "Started Computer Science & Engineering journey at Samrat Ashok Technological Institute, Vidisha.",
  },
  {
    year: "2026",
    title: "AI / Development",
    text: "Worked on AI-assisted development and application projects.",
  },
  {
    year: "2026",
    title: "ShieldLens AI",
    text: "Worked on an AI-powered cybersecurity/phishing detection project.",
  },
  {
    year: "2026",
    title: "Hackathons & Technical Activities",
    text: "Participated in technical projects, presentations and competitions.",
  },
  {
    year: "NEXT",
    title: "Blockchain Development",
    text: "Deepening knowledge of Web3, blockchain and smart contract development.",
  },
];

export const ABOUT_TIMELINE = [
  { year: "2025", text: "Started B.Tech CSE" },
  { year: "2026", text: "Built AI-powered projects" },
  { year: "2026", text: "Worked on ShieldLens AI" },
  { year: "2026", text: "Participated in technical/hackathon activities" },
  { year: "NEXT", text: "Deepening skills in Web3 & Blockchain" },
];

export const ACHIEVEMENTS = [
  {
    icon: "award" as const,
    title: "Student Ambassador Program",
    year: "2026",
    text: "Selected to represent and support student technical community activities.",
  },
  {
    icon: "shield" as const,
    title: "Project Showcase",
    year: "2025",
    text: "Successfully built and showcased BarterBuddies.",
  },
  {
    icon: "code" as const,
    title: "Hackathon & Technical Projects",
    year: "2026",
    text: "Participation in hackathons and coding challenges.",
  },
  {
    icon: "flag" as const,
    title: "AI Tools Exploration",
    year: "2025",
    text: "Started exploring Vercel AI, Lovable AI, and prompt engineering.",
  },
  {
    icon: "mic" as const,
    title: "Continuous Learning",
    year: "2025",
    text: "Actively learning new technologies and improving coding skills.",
  },
];
