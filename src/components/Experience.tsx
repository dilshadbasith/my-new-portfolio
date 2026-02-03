export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-magenta/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-bold tracking-[0.8em] text-primary uppercase mb-2">
            Temporal Logs
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Career Milestones
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
        </div>

        <div className="relative w-full flex justify-center py-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] circuit-line opacity-40"></div>
          <div className="relative w-full max-w-3xl flex flex-col gap-16">
            {/* Experience Item 1 */}
            <div className="relative flex md:flex-row flex-col items-center w-full">
              <div className="md:w-1/2 w-full md:pr-12 md:text-right hidden md:block">
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2024
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  Present
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="circuit-node size-4 rounded-full bg-accent-cyan cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/20"></div>
              </div>

              <div className="md:w-1/2 w-full md:pl-12 flex justify-center md:justify-start">
                <div className="w-full max-w-sm">
                  <div className="data-log-panel p-6 rounded-lg relative overflow-hidden group">
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
                          Built dynamic web apps using React.js and Next.js. Developed the official company website focusing on SEO and performance.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Designed reusable UI components with Tailwind CSS & Shadcn/UI, improving development speed and consistency.
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
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex md:flex-row flex-col items-center w-full">
              <div className="md:w-1/2 w-full md:pr-12 flex justify-center md:justify-end">
                <div className="w-full max-w-sm">
                  <div className="data-log-panel p-6 rounded-lg relative overflow-hidden">
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
                          Specialized in Front-End Development with React.js. Contributed to a 20% increase in team proficiency.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-cyan text-[10px] mt-1">
                          &gt;&gt;
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-mono">
                          Collaborated with cross-functional teams to deliver scalable web solutions.
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
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="circuit-node size-4 rounded-full bg-accent-cyan/60 cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/10"></div>
              </div>

              <div className="md:w-1/2 w-full md:pl-12 md:text-left hidden md:block">
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2023
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  2024
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative flex md:flex-row flex-col items-center w-full">
              <div className="md:w-1/2 w-full md:pr-12 md:text-right hidden md:block">
                <span className="text-3xl font-bold text-primary/40 font-mono">
                  2020
                </span>
                <div className="text-[10px] tracking-widest text-white/40 uppercase">
                  2023
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="circuit-node size-4 rounded-full bg-accent-cyan/40 cursor-pointer hover:scale-125 transition-transform duration-300 ring-4 ring-primary/5"></div>
              </div>

              <div className="md:w-1/2 w-full md:pl-12 flex justify-center md:justify-start">
                <div className="w-full max-w-sm">
                  <div className="data-log-panel p-6 rounded-lg relative overflow-hidden">
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
                          Completed graduation with a strong foundation in computer science and software development.
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
                  </div>
                </div>
              </div>
            </div>
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
