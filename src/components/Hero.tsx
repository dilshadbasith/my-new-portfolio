"use client";

import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";

export default function Hero() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-background-dark">
        {/* Radial Glows */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-magenta/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 2,
          }}
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay opacity-40"></div>
        {/* Subtle Particles */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#258cf4]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent-magenta rounded-full shadow-[0_0_8px_#ff00ff] opacity-60"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#258cf4]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0.5,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 flex-1">
        <div className="relative w-full @container">
          {/* Decorative Corner Accents */}
          <motion.div
            className="corner-bracket top-0 left-0 border-t-2 border-l-2"
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.div
            className="corner-bracket top-0 right-0 border-t-2 border-r-2"
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          />
          <motion.div
            className="corner-bracket bottom-0 left-0 border-b-2 border-l-2"
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.div
            className="corner-bracket bottom-0 right-0 border-b-2 border-r-2"
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />

          {/* Hero Glass Card */}
          <motion.div
            className="hero-glass-card rounded-xl p-8 md:p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden mx-4 md:mx-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Scanline effect */}
            <div className="scanline"></div>
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center justify-center gap-2 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="h-[1px] w-12 bg-primary/50"></span>
                <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase">
                  I am
                </span>
                <span className="h-[1px] w-12 bg-primary/50"></span>
              </motion.div>
              <motion.h1
                className="text-white text-5xl md:text-8xl font-bold leading-none tracking-[-0.04em] uppercase drop-shadow-[0_0_15px_rgba(37,140,244,0.3)]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                Dilshad
                <br />
                <motion.span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.8)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Basith
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-[#90adcb] text-xs md:text-base font-medium tracking-[0.3em] uppercase max-w-xl mx-auto mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Front-End Creative & Interactive Developer
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-4 justify-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a
                href="/DILSHAD-BASITH-reactdev.pdf"
                download
                className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(37,140,244,0.6)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="truncate flex items-center gap-1">
                  Resume <HiOutlineDownload className="text-xl" />
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 border border-white/20 bg-white/5 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="truncate">Contact</span>
              </motion.a>
            </motion.div>

            {/* Tech Stack Sub-panel */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center gap-8 text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                className="flex items-center gap-2 group cursor-crosshair"
                whileHover={{ y: -2 }}
              >
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">
                  view_in_ar
                </span>
                <span className="text-[10px] font-bold tracking-widest group-hover:text-white transition-colors">
                  REACT.JS
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 group cursor-crosshair"
                whileHover={{ y: -2 }}
              >
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">
                  deployed_code
                </span>
                <span className="text-[10px] font-bold tracking-widest group-hover:text-white transition-colors">
                  NEXT.JS
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Stats / HUD Elements */}
      <motion.div
        className="relative z-10 w-full max-w-6xl flex justify-between items-end pb-8 text-white/40 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-primary/60">
            System Core
          </span>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-none">
                25.0°C
              </span>
              <span className="text-[8px] uppercase">Temp</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-none">
                98%
              </span>
              <span className="text-[8px] uppercase">Uptime</span>
            </div>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="hidden lg:flex flex-col items-end gap-1">
            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-primary/60">
              Geo-Location
            </span>
            <span
              className="text-xs font-bold text-white uppercase"
              data-location="Neo-Tokyo"
            >
              35.6895° N, 139.6917° E
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-primary/60">
              Identity Ref
            </span>
            <span className="text-xs font-bold text-white uppercase">
              AD-001-X
            </span>
          </div>
        </div>
      </motion.div>

      {/* Decorative HUD Graphic */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none">
        <div className="flex flex-col gap-2">
          <motion.div
            className="w-1 h-12 bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-1 h-4 bg-primary/40"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 0.5,
            }}
          />
          <motion.div
            className="w-1 h-8 bg-primary"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 1,
            }}
          />
        </div>
      </div>
      <div className="fixed top-1/2 right-4 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none">
        <div className="flex flex-col gap-2 items-end">
          <motion.div
            className="w-8 h-[1px] bg-primary"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          />
          <motion.div
            className="w-12 h-[1px] bg-primary/40"
            animate={{ scaleX: [0.7, 1, 0.7] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 0.5,
            }}
          />
          <motion.div
            className="w-10 h-[1px] bg-primary"
            animate={{ scaleX: [0.6, 1, 0.6] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
