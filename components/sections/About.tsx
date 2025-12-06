"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TerminalCursor } from "../ui/TerminalCursor";
import { stats, personalInfo } from "@/lib/data";
import { 
  Briefcase, 
  Code2, 
  Users, 
  Award,
  Zap,
  TrendingDown,
  Gauge,
  Shield,
} from "lucide-react";

const statIcons = {
  experience: Briefcase,
  projects: Code2,
  clients: Users,
  technologies: Award,
};

const achievements = [
  {
    icon: Zap,
    title: "Microservices Migration",
    description: "Migrated monolithic architecture to microservices, reducing deployment time by 60%",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description: "Optimized AWS infrastructure, reducing costs by 20%",
  },
  {
    icon: Gauge,
    title: "Performance Boost",
    description: "Implemented Redis caching and optimized queries, improving API response time by 30%",
  },
  {
    icon: Shield,
    title: "Security Enhancement",
    description: "Designed secure OAuth2.0 auth flows and encrypted sensitive data, reducing security incidents",
  },
];

function AnimatedCounter({ target, suffix = "" }: Readonly<{ target: string; suffix?: string }>) {
  return <span>{target}{suffix}</span>;
}

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle=""
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="relative">
        <TerminalWindow title="about.txt" className="mb-8">
          <div className="space-y-4">
            {/* Command prompt */}
            <div className="text-[#00cc33]">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">cat about.txt</span>
            </div>

            {/* About content */}
            <div className="text-[#00cc33] space-y-3 pl-4">
              <p className="text-[#00ff41]">
                {personalInfo.name}
              </p>
              <p className="text-[#00cc33]">
                {personalInfo.summary}
              </p>
            </div>

            {/* Stats command */}
            <div className="mt-6 pt-4 border-t border-[#00ff41]/30">
              <div className="text-[#00cc33] mb-4">
                <span className="text-[#00cc33]">$</span>{" "}
                <span className="text-[#00ff41]">ls -lah /stats/</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(stats).map(([key, value], index) => {
                  const Icon = statIcons[key as keyof typeof statIcons];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-[#00ff41]/30 p-4 bg-black/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#00ff41]" />
                        <span className="text-[#00cc33] text-xs uppercase">{key}</span>
                      </div>
                      <div className="text-2xl font-bold text-[#00ff41] font-mono">
                        <AnimatedCounter target={value} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Achievements */}
        <TerminalWindow title="achievements.log">
          <div className="space-y-4">
            <div className="text-[#00cc33]">
              <span className="text-[#00cc33]">$</span>{" "}
              <span className="text-[#00ff41]">tail -f achievements.log</span>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-[#00ff41]/50 pl-4 py-2"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-[#00ff41] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-[#00ff41] font-semibold mb-1">
                          {achievement.title}
                        </div>
                        <div className="text-[#00cc33] text-sm">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-[#00ff41]/30">
              <div className="text-[#00cc33] text-xs">
                <span className="text-[#00cc33]">$</span>{" "}
                <span className="text-[#00ff41]">_</span>
                <TerminalCursor />
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </SectionWrapper>
  );
}
