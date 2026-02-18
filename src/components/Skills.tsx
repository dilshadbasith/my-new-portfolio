"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      id: "CAT_01",
      name: "Frontend Core",
      icon: "code",
      skills: [
        { name: "React JS", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux", level: 85 },
      ],
    },
    {
      id: "CAT_02",
      name: "Backend & DB",
      icon: "storage",
      skills: [
        { name: "Strapi", level: 90 },
        { name: "Node.js / Express", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "Python / Django", level: 65 },
      ],
    },
    {
      id: "CAT_03",
      name: "Tools & Design",
      icon: "design_services",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Git / GitHub", level: 88 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full py-20 bg-background-dark overflow-hidden flex flex-col items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[-20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-20%] w-[50%] h-[50%] bg-accent-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
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
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            System Capabilities
          </motion.h2>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Technical Arsenal
          </h1>
          <motion.div
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} className="relative group" variants={item}>
              <div className="data-log-panel p-8 rounded-lg h-full relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                {/* Decorative Corners */}
                <div className="corner-bracket top-0 left-0 border-t border-l opacity-50"></div>
                <div className="corner-bracket bottom-0 right-0 border-b border-r opacity-50"></div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                  <div className="size-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <span className="material-symbols-outlined">
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-primary/60 tracking-widest mb-1">
                      {category.id}
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-mono text-white/80 group-hover/skill:text-accent-cyan transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-primary/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent-cyan relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" as const }}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
