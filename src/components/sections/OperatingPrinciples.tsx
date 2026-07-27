"use client";

import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const principles = [
  {
    num: "01",
    title: "Automate Before You Scale",
    desc: "If a process can be automated, it must be automated before we scale it. We don't throw manual labor at growth bottlenecks; we engineer AI systems to eliminate them entirely."
  },
  {
    num: "02",
    title: "No Black Boxes",
    desc: "Clients shouldn't need a PhD to understand their growth engine. We translate complex cybernetic systems into plain business terms. If you don't understand it, we failed."
  },
  {
    num: "03",
    title: "Data Wins Arguments",
    desc: "Opinions don't scale; data does. Every strategy, campaign, and automation workflow we deploy is backed by real-time analytics, not assumptions or guesswork."
  },
  {
    num: "04",
    title: "Proactive, Not Reactive",
    desc: "We don't wait for a campaign to break to fix it. Our predictive AI models identify drop-offs before they happen, ensuring your growth engine never stalls."
  }
];

export default function OperatingPrinciples() {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom mx-auto">
        
        {/* Header */}
        <AnimateIn className="mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            The operating principles, <span className="gradient-text">on the wall.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            The non-negotiable rules that dictate how we engineer growth for every single client.
          </p>
        </AnimateIn>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative glass rounded-2xl p-8 sm:p-10 h-full border border-white/5 hover:border-electric-blue/20 transition-all duration-500">
                
                {/* Large Faded Number in Background */}
                <span className="absolute top-4 right-6 font-heading text-8xl font-black text-white/[0.03] select-none pointer-events-none">
                  {item.num}
                </span>

                {/* Small Number Label */}
                <span className="inline-block text-xs font-bold text-neon-cyan tracking-widest mb-4 font-mono">
                  {item.num}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}