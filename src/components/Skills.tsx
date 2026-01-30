export default function Skills() {
  const skillCategories = [
    {
      id: "CAT_01",
      name: "Frontend Architecture",
      icon: "code",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Three.js / WebGL", level: 85 },
        { name: "Framer Motion", level: 88 },
      ],
    },
    {
      id: "CAT_02",
      name: "Backend Systems",
      icon: "storage",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Serverless", level: 82 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      id: "CAT_03",
      name: "Design & Tools",
      icon: "design_services",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Git / CI/CD", level: 88 },
        { name: "Blender", level: 60 },
        { name: "Adobe Suite", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-20 bg-background-dark overflow-hidden flex flex-col items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[-20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-20%] w-[50%] h-[50%] bg-accent-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-xs font-bold tracking-[0.8em] text-primary uppercase mb-2">
            System Capabilities
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Technical Arsenal
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {skillCategories.map((category) => (
            <div key={category.id} className="relative group">
              <div className="data-log-panel p-8 rounded-lg h-full relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                {/* Decorative Corners */}
                <div className="corner-bracket top-0 left-0 border-t border-l opacity-50"></div>
                <div className="corner-bracket bottom-0 right-0 border-b border-r opacity-50"></div>
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                  <div className="size-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <span className="material-symbols-outlined">{category.icon}</span>
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
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent-cyan relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
