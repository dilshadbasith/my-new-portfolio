import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "PROJ_01",
    title: "Neural Nexus",
    description: "A decentralized AI training platform utilizing distributed computing power for neural network optimization.",
    tags: ["Next.js", "TensorFlow.js", "WebRTC"],
    image: "/project-thumb.png",
    github: "#",
    live: "#",
  },
  {
    id: "PROJ_02",
    title: "Cyber Vault",
    description: "Secure digital asset management system with biometric authentication and quantum-resistant encryption.",
    tags: ["React", "Rust", "WebAssembly"],
    image: "/project-thumb.png",
    github: "#",
    live: "#",
  },
  {
    id: "PROJ_03",
    title: "Void Scraper",
    description: "High-performance data extraction tool designed for deep web analysis and pattern recognition.",
    tags: ["Node.js", "Puppeteer", "MongoDB"],
    image: "/project-thumb.png",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 bg-background-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[25%] h-[25%] bg-accent-cyan/5 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-xs font-bold tracking-[0.8em] text-primary uppercase mb-2">
            System Modules
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Operational Units
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              <div className="data-log-panel rounded-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                {/* Decorative Elements */}
                <div className="scanline absolute top-0 left-0 z-20 pointer-events-none"></div>
                <div className="corner-bracket absolute top-0 left-0 border-t border-l z-20"></div>
                <div className="corner-bracket absolute bottom-0 right-0 border-b border-r z-20"></div>
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden border-b border-primary/20">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-2 right-2 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-primary/30">
                    <span className="text-[10px] font-mono text-accent-cyan tracking-widest">
                      {project.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 font-mono mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 border border-primary/20 rounded text-primary/80 bg-primary/5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-accent-cyan transition-colors uppercase tracking-wider font-medium"
                    >
                      <FaGithub className="text-lg" />
                      <span>Source</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-accent-cyan transition-colors uppercase tracking-wider font-medium ml-auto"
                    >
                      <span>Deploy</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
