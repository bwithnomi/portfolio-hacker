"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Folder, FileCode } from "lucide-react";
import { useState } from "react";

type Category = "all" | "fullstack" | "web3";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "all" },
    { value: "fullstack", label: "fullstack" },
    { value: "web3", label: "web3" },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <TerminalWindow title="projects">
        <div className="space-y-6">
          {/* Category filter as command */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[#00cc33]">$</span>
            <span className="text-[#00ff41]">filter</span>
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1 text-xs font-mono border transition-all ${
                  selectedCategory === cat.value
                    ? "border-[#00ff41] bg-[#00ff41]/10 text-[#00ff41]"
                    : "border-[#00ff41]/30 text-[#00cc33] hover:border-[#00ff41]/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* List command */}
          <div className="text-[#00cc33]">
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">ls -la</span>{" "}
            <span className="text-[#00ffff]">/projects/</span>
          </div>

          {/* File listing */}
          <div className="space-y-2 font-mono text-sm">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 text-[#00cc33] text-xs pb-2 border-b border-[#00ff41]/30">
              <div className="col-span-1">TYPE</div>
              <div className="col-span-5">NAME</div>
              <div className="col-span-3">TECH</div>
              <div className="col-span-3">LINKS</div>
            </div>

            {/* Projects */}
            {filteredProjects.map((project, index) => {
              const isWeb3 = project.category === "web3";
              const isExpanded = expandedId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-12 gap-2 items-start py-2 border-b border-[#00ff41]/10 hover:bg-[#00ff41]/5 transition-colors cursor-pointer group"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Type */}
                  <div className="col-span-1 flex items-center">
                    {isWeb3 ? (
                      <Folder className="w-4 h-4 text-[#00ffff]" />
                    ) : (
                      <FileCode className="w-4 h-4 text-[#00ff41]" />
                    )}
                  </div>

                  {/* Name */}
                  <div className="col-span-5">
                    <div className="text-[#00ff41] font-semibold group-hover:text-[#00ffff] transition-colors">
                      {project.title}
                    </div>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-[#00cc33] text-xs"
                      >
                        {project.longDescription}
                      </motion.div>
                    )}
                  </div>

                  {/* Tech */}
                  <div className="col-span-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#00cc33] border border-[#00ff41]/30 px-1"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs text-[#00cc33]">+{project.technologies.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="col-span-3 flex gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#00ff41] hover:text-[#00ffff] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#00ff41] hover:text-[#00ffff] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {isExpanded && (
                      <span className="text-[#00cc33] text-xs">[-]</span>
                    )}
                    {!isExpanded && (
                      <span className="text-[#00cc33] text-xs">[+]</span>
                    )}
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="col-span-12 mt-2 pt-2 border-t border-[#00ff41]/30"
                    >
                      <div className="text-[#00cc33] text-xs mb-2">Highlights:</div>
                      <ul className="space-y-1 ml-4">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-[#00cc33] text-xs flex items-start gap-2">
                            <span className="text-[#00ff41]">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Terminal prompt */}
          <div className="mt-6 pt-4 border-t border-[#00ff41]/30">
            <div className="text-[#00cc33] text-xs">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">_</span>
              <TerminalCursor />
            </div>
          </div>
        </div>
      </TerminalWindow>
    </SectionWrapper>
  );
}
