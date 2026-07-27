"use client";

import { Heart, Globe, Laptop, Rocket } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and mental health coverage." },
  { icon: Globe, title: "Remote First", desc: "Work from anywhere in the world. We measure output, not hours." },
  { icon: Laptop, title: "Top Tier Gear", desc: "MacBook Pros, 4K monitors, and whatever tools you need." },
  { icon: Rocket, title: "Unlimited Growth", desc: "Dedicated learning budgets and clear promotion tracks." },
];

export default function CareersPerks() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {perks.map((perk, i) => (
        <GlassCard key={i} delay={i * 0.1} className="text-center">
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4">
            <perk.icon size={26} className="text-neon-cyan" />
          </div>
          <h4 className="font-heading text-base font-semibold text-white mb-2">{perk.title}</h4>
          <p className="text-sm text-slate-400">{perk.desc}</p>
        </GlassCard>
      ))}
    </div>
  );
}