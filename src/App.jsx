import { motion } from "framer-motion";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import x from "./icons/x.png";
import neuroSignalScreenshot from "./images/neuro-signals/screenshot2.png";
import politicalDiscourseScreenshot from "./images/political-discourse/screenshot.png";
import brumaConsultancyScreenshot from "./images/bruma-consultancy/screenshot.png"

const projects = [
  {
    id: 1,
    title: "Neural Signals - live brainwave visualizer",
    description: "A full-stack web app that streams EEG-like data over WebSockets and renders it instantly as both a classic 2D oscilloscope and a fully interactive 3D brain model.",
    tech: ["React", "Vite", "Tailwind"],
    image: neuroSignalScreenshot,
    demo: "https://neuro-signals.onrender.com/",
    code: "https://github.com/RLPedro/neuro-signals",
  },
  {
    id: 2,
    title: "Political Discourse Dashboard - news sentiment analysis",
    description: "A full‑stack, ML‑powered app analyzing news hourly across Sweden and Portugal.",
    tech: ["React", "IndexedDB", "Tailwind"],
    image: politicalDiscourseScreenshot,
    demo: "https://political-discourse-news-web.vercel.app/",
    code: "https://github.com/RLPedro/political-discourse-news",
  },
  {
    id: 3,
    title: "Bruma Consultancy",
    description: "Static website for Bruma Consultancy adverstising tech services.",
    tech: ["Node", "GraphQL", "React"],
    image: brumaConsultancyScreenshot,
    demo: "https://consulting-portfolio-ruddy.vercel.app",
    code: "https://github.com/RLPedro/consulting-portfolio",
  },
];

const SmallBadge = ({ children, href }) => {
  const inner = (
    <span className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-white/6 text-yellow-500">
      {children}
    </span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${children} (opens in new tab)`}>
      {inner}
    </a>
  ) : (
    inner
  );
};
const TechBadge = ({ children }) => {
  return (
    <span className="px-2 py-1 text-xs rounded-md bg-white/6 text-white/90">
      {children}
    </span>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      href={project.demo ?? project.url}
      target="_blank"
      rel="noreferrer"
      className="block overflow-hidden bg-[#0f1011] border-none"
      whileHover={{ translateY: -6 }}
      whileTap={{ translateY: 0 }}
      aria-label={`${project.title} — open demo`}
    >
      <div className="relative w-full h-40 md:h-44 lg:h-40 overflow-hidden bg-[#0f1011]">
        

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full
            object-cover
            object-center
            md:object-top
            scale-100
            md:scale-[1.03]
            transition-transform duration-200 ease-out
            "
          loading="lazy"
        />
      </div>

      <div className="p-4 bg-zinc-900">
        <div className="flex flex-col h-44 md:h-48">
          <div className="flex items-center justify-end gap-2">
            <SmallBadge href={project.demo}>Demo</SmallBadge>
            <SmallBadge href={project.code}>Code</SmallBadge>
          </div>

          <h3 className="mt-2 text-sm md:text-sm font-semibold">{project.title}</h3>

          <div className="mt-2">
            <p className="text-xs md:text-sm text-white/75 leading-snug line-clamp-4">
              {project.description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen text-white antialiased bg-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="pr-8 pb-8 pl-8 bg-transparent">
                <h1
                  className="text-base md:text-lg text-yellow-600 font-semibold tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ricardo leitão pedro
                </h1>

                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  Software engineer and business developer based in Sweden. 
                  Classical musician in a previous life.
                  Dad.
                </p>

                < br/>

                <h4 className="text-xs text-white/60">Experience</h4>
                <p className="mt-4 text-sm text-white/75">
                  Front-end developer @ Sensys Gatso, responsible for the Puls' user interface.
                </p>
                <p className="mt-4 text-sm text-white/75">
                  Full-stack developer @ {"</salt>"}, educated in the "hardest bootcamp in the world" and consultant after that
                </p>
                <p className="mt-4 text-sm text-white/75">
                  Lutenist and singer @ free-lancing, recorded a solo album and performing with different people around the World
                </p>

                <div className="mt-6">
                  <h4 className="text-xs text-white/60">Interests</h4>
                  <p className="text-sm mt-2">
                    Intelligence (human and artificial), 
                    history, 
                    philosophy, 
                    and computer history.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs text-white/75">Recent notes</h4>
                  <ul className="mt-3 space-y-3 text-sm">

                    <li className="flex justify-between items-start">
                      <a href="#" className="underline">
                        Coming soon ...
                      </a>
                      <span className="text-xs text-white/60">TBA, 2025</span>
                    </li>

                    {/* 
                    <li className="flex justify-between items-start">
                      <a href="#" className="underline">
                        Note about cars
                      </a>
                      <span className="text-xs text-white/60">Aug 13, 2025</span>
                    </li>
                    */}

                  </ul>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a href="https://www.linkedin.com/in/ricardoleitaopedro" target="_blank" rel="noreferrer">
                    <img className="w-7" src={linkedin} style={{ filter: "invert(75%)" }} alt="link to LinkedIn profile" />
                  </a>
                  <a href="https://x.com/ricardolpedro" target="_blank" rel="noreferrer">
                    <img className="w-7" src={x} style={{ filter: "invert(75%)" }} alt="link to X profile" />
                  </a>
                  <a href="https://www.instagram.com/ricardoleitaopedro/" target="_blank" rel="noreferrer">
                    <img className="w-7" src={instagram} style={{ filter: "invert(75%)" }} alt="link to Instagram profile" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-xs md:text-sm text-right font-semibold">selected projects</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="https://www.github.com/rlpedro" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded bg-transparent">
                View all projects
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
