"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <TerminalWindow title="certificates">
        <div className="space-y-6">
          {/* Command prompt */}
          <div className="text-[#00cc33]">
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">openssl verify</span>{" "}
            <span className="text-[#00ffff]">certificates/</span>
          </div>

          {/* Certificates listing */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-2 border-[#00ff41]/50 pl-4 py-3 hover:bg-[#00ff41]/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#00ff41]" />
                      <span className="text-[#00ff41] font-semibold">{cert.title}</span>
                    </div>
                    <div className="text-[#00cc33] text-sm mb-1">
                      Issuer: <span className="text-[#00ffff]">{cert.issuer}</span>
                    </div>
                    <div className="text-[#00cc33] text-xs">
                      Year: <span className="text-[#00ff41]">{cert.year}</span>
                    </div>
                  </div>
                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00ff41] hover:text-[#00ffff] transition-colors flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
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
