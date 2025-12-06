"use client";

import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-[#00cc33] text-sm font-mono">
            <span className="text-[#00cc33]">$</span>{" "}
            <span className="text-[#00ff41]">echo</span>{" "}
            <span className="text-[#00cc33]">"© {currentYear} {personalInfo.name}"</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

