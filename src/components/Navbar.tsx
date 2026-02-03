"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <nav className="glass-dock px-6 py-3 rounded-full flex items-center justify-between w-full max-w-2xl pointer-events-auto relative">
        <Link href="#home" className="flex items-center gap-3 cursor-pointer">
          <div className="size-6 text-primary">
            <FaCode className="text-2xl" />
          </div>
          <span className="text-white font-bold tracking-widest text-sm">
            DEV
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            href="#work"
          >
            Work
          </Link>
          <Link
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
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
        <div
          className={`absolute top-full left-0 right-0 mt-4 mx-4 p-6 glass-dock rounded-2xl flex flex-col gap-6 items-center md:hidden transition-all duration-300 origin-top ${isMenuOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
            }`}
        >
          <Link
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
            href="#work"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors w-full text-center py-2"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
