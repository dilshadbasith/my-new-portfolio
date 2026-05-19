"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: "PROJ_01",
    title: "Exthgen Official Website",
    description:
      "Fully responsive, SEO-optimized company website built with Next.js to improve performance and visibility.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    image: "/company-web.png",
    github: "#",
    live: "https://exthgen.com",
  },
  {
    id: "PROJ_02",
    title: "Brickly Web",
    description:
      "High-performance web app for streamlining business operations including Finance, HR, and Org Management.",
    tags: ["React JS", "Redux", "Tailwind CSS"],
    image: "/brickly.png",
    github: "#",
    live: "https://app.brickly.ai",
  },
  {
    id: "PROJ_03",
    title: "Vehicify Web",
    description:
      "Modern logistics platform for fleet management with real-time tracking and mobile-friendly interfaces.",
    tags: ["React JS", "TypeScript", "Shadcn UI"],
    image: "/vehicify.png",
    github: "#",
    live: "https://vehicify-prod.web.app/",
  },
  {
    id: "PROJ_04",
    title: "Brickly ERP",
    description: "Comprehensive Solution for Business Management.",
    tags: ["React JS", "Redux", "Material UI"],
    image: "/erp.png",
    github: "#",
    live: "https://erp-landing.brickly.ai/",
  },
  {
    id: "PROJ_05",
    title: "PMRC Edifice",
    description:
      "A responsive corporate website built for PMRC Edifice to showcase their construction services and projects.",
    tags: ["Next JS", "Tailwind CSS", "Shadcn UI"],
    image: "/pmrc.png",
    github: "#",
    live: "https://pmr.construction/",
  },
  {
    id: "PROJ_06",
    title: "Brickly Ai",
    description:
      "A responsive corporate website built for Brickly Ai to showcase their services and projects.",
    tags: ["Next JS", "Tailwind CSS", "Framer Motion"],
    image: "/bricklyai.png",
    github: "#",
    live: "https://brickly.ai/",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="work"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 bg-background-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-blob top-[20%] right-[-5%] w-[30%] h-[30%] bg-primary/5"></div>
        <div className="bg-blob bottom-[10%] left-[-5%] w-[25%] h-[25%] bg-accent-cyan/5"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-xs font-bold tracking-[0.8em] text-primary uppercase mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            System Modules
          </motion.h2>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Operational Units
          </h1>
          <motion.div
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 w-full"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)]"
              variants={item}
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
                  <div className="absolute top-2 right-2 z-20 bg-black/80 px-2 py-1 rounded border border-primary/30">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-accent-cyan transition-colors uppercase tracking-wider font-medium"
                    >
                      {/* <FaGithub className="text-lg" />
                      <span>Source</span> */}
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-accent-cyan transition-colors uppercase tracking-wider font-medium ml-auto"
                    >
                      <span>Live</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
