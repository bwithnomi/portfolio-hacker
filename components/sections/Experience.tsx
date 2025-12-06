"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { experience } from "@/lib/data";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <TerminalWindow title="history.log">
        <div className="space-y-6">
          {/* Command prompt */}
          <div className="text-[#00cc33]">
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">history | grep "job"</span>
          </div>

          {/* Experience entries */}
          <div className="space-y-4">
            {experience.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-[#00ff41]/50 pl-4 pb-4"
                >
                  {/* Command */}
                  <div className="text-[#00cc33] mb-2">
                    <span className="text-[#00cc33]">$</span>{" "}
                    <span className="text-[#00ff41]">job</span>{" "}
                    <span className="text-[#00ffff]">--company</span>{" "}
                    <span className="text-[#00cc33]">"{exp.company}"</span>{" "}
                    <span className="text-[#00ffff]">--role</span>{" "}
                    <span className="text-[#00cc33]">"{exp.title}"</span>
                  </div>

                  {/* Output */}
                  <div className="text-[#00cc33] space-y-2 ml-4">
                    <div className="text-[#00ff41] font-semibold">
                      {exp.title} @ {exp.company}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#00ff41]" />
                        <span className="text-[#00cc33]">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#00ff41]" />
                        <span className="text-[#00cc33]">{exp.location}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-3">
                      <div className="text-[#00cc33] text-xs mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs border border-[#00ff41]/30 bg-black/50 text-[#00cc33]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements - Expandable */}
                    <motion.button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="mt-3 text-[#00ff41] text-xs hover:text-[#00ffff] transition-colors flex items-center gap-2"
                    >
                      <span>{isExpanded ? "[-] Hide" : "[+] View"} Achievements</span>
                    </motion.button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 space-y-2 ml-4 border-l border-[#00ff41]/30 pl-4"
                      >
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-[#00cc33] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[#00ff41] mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
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
