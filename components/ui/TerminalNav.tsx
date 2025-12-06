"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Award, 
  FileText, 
  Mail
} from "lucide-react";

const navItems = [
  { id: "hero", label: "home", icon: Home, command: "cd ~" },
  { id: "about", label: "about", icon: User, command: "cat about.txt" },
  { id: "experience", label: "experience", icon: Briefcase, command: "history" },
  { id: "projects", label: "projects", icon: Code2, command: "ls -la projects/" },
  { id: "skills", label: "skills", icon: Award, command: "npm list" },
  { id: "certifications", label: "certs", icon: FileText, command: "openssl verify" },
  { id: "contact", label: "contact", icon: Mail, command: "send_message" },
];

export function TerminalNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const current = sections.find(
        section => section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        style={{ opacity }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Terminal window container */}
          <div className="terminal-window p-2">
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-2 px-2 pb-1 border-b border-[#00ff41]/30">
              <span className="text-[#00ff41] text-xs font-mono">nav</span>
              <span className="text-[#00cc33] text-xs font-mono">noman@portfolio</span>
            </div>

            {/* Navigation Items */}
            <div className="space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00ff41]"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Nav Item */}
                    <motion.button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative w-full text-left px-2 py-1.5 text-xs font-mono transition-all duration-300 ${
                        isActive
                          ? "bg-[#00ff41]/10 text-[#00ff41]"
                          : "text-[#00cc33] hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                      }`}
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-3 h-3" />
                        <span className="text-[#00cc33]">$</span>
                        <span>{item.command}</span>
                      </div>
                    </motion.button>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black border border-[#00ff41]/50 opacity-0 pointer-events-none whitespace-nowrap z-50 group-hover:opacity-100"
                      style={{
                        boxShadow: "0 0 10px rgba(0, 255, 65, 0.3)",
                      }}
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs font-mono text-[#00ff41]">
                        {item.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Terminal prompt at bottom */}
            <div className="mt-2 pt-2 border-t border-[#00ff41]/30">
              <div className="text-[#00cc33] text-xs font-mono px-2">
                <span className="text-[#00cc33]">$</span>{" "}
                <span className="text-[#00ff41]">_</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

