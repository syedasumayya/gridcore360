"use client";

import { Target, Eye } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutMission() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <AnimateIn direction="left" delay={0}>
        <GlassCard className="border-l-4 border-l-electric-blue h-full">
          <h3 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Eye size={24} className="text-electric-blue" /> Our Vision
          </h3>
          <p className="text-slate-400 leading-relaxed">
            To become the global standard for cybernetic business infrastructure, where every company operates with the efficiency and intelligence of a well-oiled machine.
          </p>
        </GlassCard>
      </AnimateIn>

      <AnimateIn direction="right" delay={0.1}>
        <GlassCard className="border-l-4 border-l-neon-cyan h-full">
          <h3 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Target size={24} className="text-neon-cyan" /> Our Mission
          </h3>
          <p className="text-slate-400 leading-relaxed">
            To empower businesses with accessible, powerful AI systems that automate complexity, scale operations, and drive unprecedented revenue growth.
          </p>
        </GlassCard>
      </AnimateIn>
    </div>
  );
}