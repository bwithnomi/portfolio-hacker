"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { MatrixRainCanvas } from "../three/MatrixRain";
import { TypingAnimation } from "../ui/TypingAnimation";
import { TerminalCursor } from "../ui/TerminalCursor";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden terminal-scanline py-16 md:py-24 lg:py-32">
      <MatrixRainCanvas />
      
      {/* Terminal grid overlay */}
      <div className="absolute inset-0 terminal-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-mono"
        >
          {/* Terminal Prompt */}
          <motion.div
            className="mb-4 text-[#00ff41] text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#00cc33]">noman@portfolio:~$</span>{" "}
            <span className="text-[#00ff41]">whoami</span>
          </motion.div>

          {/* Name with typing animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-[#00ff41] terminal-glitch"
            data-text={personalInfo.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypingAnimation
              text={personalInfo.name}
              speed={100}
              delay={800}
              className="text-[#00ff41] drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]"
            />
          </motion.h1>

          {/* Role as terminal output */}
          <motion.div
            className="mb-6 text-[#00cc33] text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">role</span>
            <TerminalCursor />
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10 md:mb-12 text-[#00ff41]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <TypingAnimation
              text={personalInfo.role}
              speed={50}
              delay={2000}
            />
          </motion.h2>

          {/* Stats as terminal commands */}
          <motion.div
            className="mb-10 md:mb-12 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <div className="text-[#00cc33] text-sm md:text-base mb-4">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">stats</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#00cc33]">
              <div className="border border-[#00ff41]/30 p-4 bg-black/50">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff41] font-mono mb-1">6+</div>
                <div className="text-xs text-[#00cc33] uppercase">Years</div>
              </div>
              <div className="border border-[#00ff41]/30 p-4 bg-black/50">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff41] font-mono mb-1">50+</div>
                <div className="text-xs text-[#00cc33] uppercase">Projects</div>
              </div>
              <div className="border border-[#00ff41]/30 p-4 bg-black/50">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff41] font-mono mb-1">30+</div>
                <div className="text-xs text-[#00cc33] uppercase">Clients</div>
              </div>
              <div className="border border-[#00ff41]/30 p-4 bg-black/50">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff41] font-mono mb-1">✓</div>
                <div className="text-xs text-[#00cc33] uppercase">Available</div>
              </div>
            </div>
          </motion.div>

          {/* Social Links as terminal commands */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <div className="text-[#00cc33] text-sm mb-2 w-full text-center">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">connect</span>
            </div>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              email
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 inline mr-2" />
              github
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4 inline mr-2" />
              linkedin
            </motion.a>
          </motion.div>

          {/* CTA Buttons as terminal commands */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="terminal-button min-w-[200px] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              cd projects
            </motion.a>
            <motion.a
              href="#contact"
              className="terminal-button min-w-[200px] text-center border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              send_message
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pb-4 md:pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="text-[#00ff41] text-xs font-mono mb-2">
              $ scroll_down
            </div>
            <ArrowDown className="w-6 h-6 text-[#00ff41] group-hover:text-[#00cc33] transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
