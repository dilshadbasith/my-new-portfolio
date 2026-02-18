"use client";

import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <nav className="glass-dock px-6 py-3 rounded-full flex items-center justify-between w-full max-w-2xl pointer-events-auto relative">
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="size-6 text-primary">
            <FaCode className="text-2xl" />
          </div>
          <span className="text-white font-bold tracking-widest text-sm">
            DEV
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1,
                ease: "easeOut" as const,
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Hamburger Button */}
          <button
            className="md:hidden text-primary focus:outline-none z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 glass-dock rounded-2xl flex flex-col gap-6 items-center md:hidden"
              initial={{ opacity: 0, scale: 0.95, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                    ease: "easeOut" as const,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
