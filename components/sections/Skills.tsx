"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { skills } from "@/lib/data";

export function Skills() {
  const allSkills = [...skills.languages, ...skills.infrastructure];

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <TerminalWindow title="package.json">
        <div className="space-y-6">
          {/* Command prompt */}
          <div className="text-[#00cc33]">
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">npm list --depth=0</span>
          </div>

          {/* Languages & Frameworks */}
          <div>
            <div className="text-[#00ff41] font-semibold mb-3">
              Languages & Frameworks
            </div>
            <div className="space-y-2 ml-4">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-1 border-b border-[#00ff41]/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#00cc33]">├─</span>
                    <span className="text-[#00ff41]">{skill.name.toLowerCase()}@</span>
                    <span className="text-[#00cc33]">{skill.level}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-black border border-[#00ff41]/30">
                      <motion.div
                        className="h-full bg-[#00ff41]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                    <span className="text-[#00cc33] text-xs">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="mt-6">
            <div className="text-[#00ff41] font-semibold mb-3">
              Infrastructure & DevOps
            </div>
            <div className="space-y-2 ml-4">
              {skills.infrastructure.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between py-1 border-b border-[#00ff41]/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#00cc33]">├─</span>
                    <span className="text-[#00ffff]">{skill.name.toLowerCase()}@</span>
                    <span className="text-[#00cc33]">{skill.level}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-black border border-[#00ffff]/30">
                      <motion.div
                        className="h-full bg-[#00ffff]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                    <span className="text-[#00cc33] text-xs">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 pt-4 border-t border-[#00ff41]/30">
            <div className="text-[#00cc33] text-xs mb-2">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">npm list --depth=0 | wc -l</span>
            </div>
            <div className="text-[#00ff41] ml-4">
              Total packages: {allSkills.length}
            </div>
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
