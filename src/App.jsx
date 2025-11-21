import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import x from "./icons/x.png";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

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

                < br />

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
                  <p className="text-sm mt-2 text-white/75">
                    Intelligence (human and artificial),
                    technology,
                    cultural history,
                    and philosophy.
                  </p>
                </div>

                < br />

                <div className="mt-6">
                  <h4 className="text-xs text-white/75">Recent notes</h4>
                  <ul className="mt-3 space-y-3 text-sm">

                    <li className="flex justify-between items-start">
                      <a href="#" className="">
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

                < br />
                < br />

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

                < br />
                <p className="text-xs text-white">ricardoleitaopedro@gmail.com</p>
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
