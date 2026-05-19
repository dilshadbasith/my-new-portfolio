"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background-dark"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="bg-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10"></div>
        <div className="bg-blob bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-magenta/5"></div>
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-xs font-bold tracking-[0.8em] text-primary uppercase mb-2"
            variants={fadeInUp}
            custom={0}
          >
            Temporal Logs
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white"
            variants={fadeInUp}
            custom={1}
          >
            Career Milestones
          </motion.h1>
          <motion.div
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="relative w-full flex justify-center py-10">
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] circuit-line opacity-40"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" as const }}
          />
          <div className="relative w-full max-w-3xl flex flex-col gap-16">
            {/* Experience Item 1 */}
            <motion.div
              className="relative flex md:flex-row flex-col items-center w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="md:w-1/2 w-full md:pr-12 md:text-right hidden md:block"
                variants={slideInLeft}
              >
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2024
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  Present
                </div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="circuit-node size-4 rounded-full bg-accent-cyan cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/20"></div>
              </motion.div>

              <motion.div
                className="md:w-1/2 w-full md:pl-12 flex justify-center md:justify-start"
                variants={slideInRight}
              >
                <div className="w-full max-w-sm">
                  <motion.div
                    className="data-log-panel p-6 rounded-lg relative overflow-hidden group"
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="scanline absolute top-0 left-0"></div>
                    <div className="corner-bracket absolute top-0 left-0 border-t border-l"></div>
                    <div className="corner-bracket absolute bottom-0 right-0 border-b border-r"></div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">
                        ID: EXTHGEN_01
                      </span>
                      <span className="material-symbols-outlined text-sm text-primary/60">
                        code
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
                      Front-End Developer
                    </h3>
                    <p className="text-xs text-primary/80 font-mono mb-4">
                      @ EXTHGEN TECHNOLOGIES LLP
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Built dynamic web apps using React.js and Next.js.
                          Developed the official company website focusing on SEO
                          and performance.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Designed reusable UI components with Tailwind CSS &
                          Shadcn/UI, improving development speed and consistency.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        NEXT.JS
                      </span>
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        REACT
                      </span>
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        SHADCN
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              className="relative flex md:flex-row flex-col items-center w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="md:w-1/2 w-full md:pr-12 flex justify-center md:justify-end"
                variants={slideInLeft}
              >
                <div className="w-full max-w-sm">
                  <motion.div
                    className="data-log-panel p-6 rounded-lg relative overflow-hidden"
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="scanline absolute top-0 left-0"></div>
                    <div className="corner-bracket absolute top-0 left-0 border-t border-l"></div>
                    <div className="corner-bracket absolute bottom-0 right-0 border-b border-r"></div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">
                        ID: BRIDGEON_02
                      </span>
                      <span className="material-symbols-outlined text-sm text-primary/60">
                        terminal
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
                      MERN Stack Intern
                    </h3>
                    <p className="text-xs text-primary/80 font-mono mb-4">
                      @ BRIDGEON SOLUTIONS
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Specialized in Front-End Development with React.js.
                          Contributed to a 20% increase in team proficiency.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Collaborated with cross-functional teams to deliver
                          scalable web solutions.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        REACT
                      </span>
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        NODE.JS
                      </span>
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        MONGODB
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="circuit-node size-4 rounded-full bg-accent-cyan/60 cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/10"></div>
              </motion.div>

              <motion.div
                className="md:w-1/2 w-full md:pl-12 md:text-left hidden md:block"
                variants={slideInRight}
              >
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2023
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  2024
                </div>
              </motion.div>
            </motion.div>

            {/* Experience Item 3 */}
            <motion.div
              className="relative flex md:flex-row flex-col items-center w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="md:w-1/2 w-full md:pr-12 md:text-right hidden md:block"
                variants={slideInLeft}
              >
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2020
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  2023
                </div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="circuit-node size-4 rounded-full bg-accent-cyan/40 cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/5"></div>
              </motion.div>

              <motion.div
                className="md:w-1/2 w-full md:pl-12 flex justify-center md:justify-start"
                variants={slideInRight}
              >
                <div className="w-full max-w-sm">
                  <motion.div
                    className="data-log-panel p-6 rounded-lg relative overflow-hidden"
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <div className="scanline absolute top-0 left-0"></div>
                    <div className="corner-bracket absolute top-0 left-0 border-t border-l"></div>
                    <div className="corner-bracket absolute bottom-0 right-0 border-b border-r"></div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">
                        ID: EDU_BSC_03
                      </span>
                      <span className="material-symbols-outlined text-sm text-primary/60">
                        school
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
                      BSc Computer Science
                    </h3>
                    <p className="text-xs text-primary/80 font-mono mb-4">
                      @ EMEA COLLEGE OF ARTS AND SCIENCE
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Completed graduation with a strong foundation in
                          computer science and software development.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        CS
                      </span>
                      <span className="text-[8px] px-2 py-0.5 border border-primary/30 rounded text-primary/60">
                        ALGORITHMS
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-20 pointer-events-none">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          <span className="text-[8px] [writing-mode:vertical-lr] tracking-[0.4em] font-bold uppercase py-4">
            Timeline Index
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-t from-transparent via-primary to-transparent"></div>
        </div>
      </div>
      <div className="fixed top-1/2 right-4 -translate-y-1/2 hidden xl:flex flex-col gap-4 opacity-20 pointer-events-none items-end">
        <div className="flex flex-col gap-2 items-end">
          <div className="w-8 h-[1px] bg-primary"></div>
          <div className="w-12 h-[1px] bg-accent-cyan"></div>
          <div className="w-4 h-[1px] bg-primary"></div>
        </div>
        <div className="flex flex-col gap-1 items-end mt-4">
          <span className="text-[10px] font-mono">SEC_A // 40.2</span>
          <span className="text-[10px] font-mono">SEC_B // 12.8</span>
          <span className="text-[10px] font-mono">SEC_C // 95.0</span>
        </div>
      </div>
    </section>
  );
}
