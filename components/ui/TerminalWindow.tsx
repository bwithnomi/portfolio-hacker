"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showControls?: boolean;
}

export function TerminalWindow({
  children,
  title = "terminal",
  className = "",
  showControls = true,
}: TerminalWindowProps) {
  return (
    <motion.div
      className={`terminal-window terminal-scanline ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      {showControls && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff41]/30 bg-black/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff0000]" />
              <div className="w-3 h-3 rounded-full bg-[#ffff00]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff41]" />
            </div>
            <span className="text-[#00ff41] text-xs font-mono ml-2">
              {title}
            </span>
          </div>
          <div className="text-[#00cc33] text-xs font-mono">
            noman@portfolio:~$
          </div>
        </div>
      )}

      {/* Terminal Content */}
      <div className="p-4 md:p-6 font-mono text-sm text-[#00cc33] overflow-auto max-h-[600px]">
        {children}
      </div>
    </motion.div>
  );
}

