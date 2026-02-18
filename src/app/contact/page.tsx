"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function Contact() {
    return (
        <>
            {/* Background Layer - Consistent with Theme */}
            <div className="fixed inset-0 z-0 bg-background-dark overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-magenta/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 grid-overlay opacity-60"></div>
            </div>

            {/* Decorative HUD Elements */}
            <motion.div
                className="fixed top-6 left-6 z-50 pointer-events-none hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-tighter text-primary">
                            COMMS_ONLINE // PORT:22
                        </span>
                    </div>
                </div>
            </motion.div>

            <section id="contact" className="relative z-10 flex flex-col min-h-screen">
                <main className="flex-1 flex items-center justify-center px-4 py-8">
                    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Information */}
                        <div className="space-y-8 lg:pt-8 lg:order-1">
                            <motion.div
                                className="space-y-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex items-center gap-4 text-primary mb-2"
                                    variants={fadeInUp}
                                    custom={0}
                                >
                                    <span className="h-[1px] w-8 bg-primary/40"></span>
                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                                        Signal: Strong
                                    </span>
                                </motion.div>
                                <motion.h1
                                    className="text-5xl md:text-7xl font-bold uppercase leading-none text-white break-words"
                                    variants={fadeInUp}
                                    custom={1}
                                >
                                    Get In <br />
                                    <span
                                        className="text-transparent"
                                        style={{
                                            WebkitTextStroke: "1px rgba(37, 140, 244, 0.8)",
                                        }}
                                    >
                                        Touch
                                    </span>
                                </motion.h1>
                                <motion.p
                                    className="text-[#90adcb] font-mono text-sm leading-relaxed border-l-2 border-primary/30 pl-4 max-w-md"
                                    variants={fadeInUp}
                                    custom={2}
                                >
                                    <span className="text-primary mr-2">&gt;</span> Channel Open.{" "}
                                    <br />
                                    Ready to collaborate on high-impact digital experiences. Send
                                    a secure transmission below.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="grid gap-4 w-full max-w-md"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <a
                                    href="mailto:dilshadbasith01@gmail.com"
                                    className="block" // Using anchor needed for mailto
                                >
                                    <motion.div
                                        className="about-glass-card p-4 rounded-lg flex items-center gap-4 group hover:border-primary/50 transition-colors cursor-pointer"
                                        variants={fadeInUp}
                                        custom={3}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="bg-primary/10 p-3 rounded text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <FaEnvelope className="text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">
                                                Email Frequency
                                            </div>
                                            <div className="text-white font-mono text-sm break-all">
                                                dilshadbasith01@gmail.com
                                            </div>
                                        </div>
                                    </motion.div>
                                </a>

                                <motion.div
                                    className="about-glass-card p-4 rounded-lg flex items-center gap-4 group hover:border-primary/50 transition-colors"
                                    variants={fadeInUp}
                                    custom={4}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="bg-primary/10 p-3 rounded text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">
                                            Base Location
                                        </div>
                                        <div className="text-white font-mono text-sm">
                                            Kerala, India
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-4 pt-2"
                                    variants={fadeInUp}
                                    custom={5}
                                >
                                    <motion.a
                                        href="https://github.com/dilshadbasith"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-4 rounded text-white/60 hover:text-white hover:bg-black/40 hover:border-primary/50 transition-all"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-2xl" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/dilshad-basith/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-4 rounded text-white/60 hover:text-white hover:bg-black/40 hover:border-primary/50 transition-all"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin className="text-2xl" />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column: Form */}
                        <motion.div
                            className="relative lg:order-2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <div className="corner-bracket -top-3 -left-3 border-t-2 border-l-2 w-8 h-8 opacity-50"></div>
                            <div className="corner-bracket -bottom-3 -right-3 border-b-2 border-r-2 w-8 h-8 opacity-50"></div>

                            <div
                                className="hero-glass-card p-6 md:p-8 rounded-xl border border-white/10 relative z-10 backdrop-blur-xl"
                                style={{ transform: "translateZ(0)" }}
                            >
                                <div className="scanline"></div>
                                <form
                                    className="space-y-6"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest text-primary/80 uppercase flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                                            Identity / Name
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm transition-all focus:bg-black/60 placeholder:text-white/20"
                                            placeholder="Enter identification code..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest text-primary/80 uppercase flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                                            Signal Source / Email
                                        </label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm transition-all focus:bg-black/60 placeholder:text-white/20"
                                            placeholder="Enter return address..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest text-primary/80 uppercase flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                                            Data Payload / Message
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm transition-all resize-none focus:bg-black/60 placeholder:text-white/20"
                                            placeholder="Enter transmission data..."
                                        ></textarea>
                                    </div>
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-primary text-xs text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-primary/80 transition-opacity flex items-center justify-center gap-2 group cursor-pointer"
                                        style={{ transform: "translateZ(0)" }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Transmit Data</span>
                                        <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                                            send
                                        </span>
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </main>

                <motion.footer
                    className="w-full max-w-7xl mx-auto px-6 pb-6 flex justify-between items-end border-t border-white/5 pt-4 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                                Status
                            </span>
                            <span className="text-xs font-mono text-white">LISTENING...</span>
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-white/20 tracking-widest">
                        SECURE_CHANNEL_ESTABLISHED
                    </div>
                </motion.footer>
            </section>
        </>
    );
}
