import neuroSignalScreenshot from "../images/neuro-signals/screenshot2.png";
import politicalDiscourseScreenshot from "../images/political-discourse/screenshot.png";
import brumaConsultancyScreenshot from "../images/bruma-consultancy/screenshot.png";

export const projects = [
    {
        id: 1,
        title: "Neural Signals - live brainwave visualizer",
        description: "Full-stack app streaming EEG-like data over websockets and rendering  both a 2D oscilloscope and an interactive 3D brain model.",
        tech: ["React", "TypeScript", "WebSocket", "Three.js", "Node.js", "Tailwind"],
        image: neuroSignalScreenshot,
        demo: "https://neuro-signals.onrender.com/",
        code: "https://github.com/RLPedro/neuro-signals",
    },
    {
        id: 2,
        title: "Political Discourse Dashboard - news sentiment analysis",
        description: "Full‑stack, ML‑powered app analyzing news hourly across Sweden and Portugal.",
        tech: ["React", "TypeScript", "HuggingFace", "PostgreSQL", "Node.js", "Tailwind"],
        image: politicalDiscourseScreenshot,
        demo: "https://political-discourse-news-web.vercel.app/",
        code: "https://github.com/RLPedro/political-discourse-news",
    },
    {
        id: 3,
        title: "Bruma Consultancy",
        description: "Static website for Bruma Consultancy adverstising tech services.",
        tech: ["React", "TypeScript", "Next.js", "Vite", "Tailwind"],
        image: brumaConsultancyScreenshot,
        demo: "https://consulting-portfolio-ruddy.vercel.app",
        code: "https://github.com/RLPedro/consulting-portfolio",
    },
];
