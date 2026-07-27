"use client";

import { motion } from "framer-motion";
import { Search, Brain, Rocket, BarChart3, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Deep-dive into your market, competitors, and operational bottlenecks.",
  },
  {
    icon: Brain,
    title: "Strategy",
    desc: "Architect a custom AI-driven roadmap tailored to your goals.",
  },
  {
    icon: Rocket,
    title: "Execute",
    desc: "Deploy campaigns, automations, and development sprints.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    desc: "Analyze real-time data to refine and perfect performance.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    desc: "Expand operations, increase ROI, and dominate your sector.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyber-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="Our Process"
          title="From Concept to"
          highlight="Dominance"
          description="A battle-tested, 5-step cybernetic framework that transforms your business into an autonomous growth machine."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Node */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full glass-strong flex items-center justify-center group-hover:border-neon-cyan/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                    <step.icon size={32} className="text-slate-400 group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-700 border border-electric-blue/30 flex items-center justify-center text-xs font-bold text-electric-blue">
                    {i + 1}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}