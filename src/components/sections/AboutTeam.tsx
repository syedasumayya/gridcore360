"use client";

import GlassCard from "@/components/ui/GlassCard";

const team = [
  { name: "Alex Rivera", role: "CEO & Founder", initial: "AR" },
  { name: "Sarah Chen", role: "Chief AI Officer", initial: "SC" },
  { name: "David Brooks", role: "Head of Growth", initial: "DB" },
  { name: "Elena Volkov", role: "Lead Architect", initial: "EV" },
];

export default function AboutTeam() {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-bold text-white mb-4">Meet the <span className="gradient-text">Minds</span> Behind the Tech</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-12">A select team of industry veterans and tech prodigies.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {team.map((t, i) => (
          <div key={i} className="group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-cyber-purple flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transition-all duration-300">
              {t.initial}
            </div>
            <h4 className="font-heading font-semibold text-white">{t.name}</h4>
            <p className="text-sm text-slate-500">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}