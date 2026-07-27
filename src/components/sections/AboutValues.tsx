"use client";

import { Target, Zap, Heart, Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

const values = [
  { icon: Target, title: "Precision", desc: "Data-driven decisions that eliminate guesswork." },
  { icon: Zap, title: "Innovation", desc: "Staying 10 steps ahead with cutting-edge AI." },
  { icon: Heart, title: "Partnership", desc: "Your success is our only metric of success." },
  { icon: Award, title: "Excellence", desc: "Uncompromising quality in every line of code." },
];

export default function AboutValues() {
  return (
    <div>
      <AnimateIn>
        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">Our Core <span className="gradient-text">Values</span></h2>
      </AnimateIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <GlassCard key={i} delay={i * 0.1} className="text-center">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4">
              <v.icon size={28} className="text-neon-cyan" />
            </div>
            <h4 className="font-heading text-lg font-semibold text-white mb-2">{v.title}</h4>
            <p className="text-sm text-slate-400">{v.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}