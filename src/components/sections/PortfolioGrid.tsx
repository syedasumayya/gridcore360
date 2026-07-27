"use client";

import { ArrowUpRight, BarChart3 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const portfolioItems = [
  { title: "TechFlow SaaS Scale-Up", category: "Technology / Marketing", desc: "Integrated AI automation with aggressive performance marketing to scale their B2B platform.", metric: "340% ROI", gradient: "from-electric-blue/20 to-cyber-purple/20" },
  { title: "Zenith Healthcare Leads", category: "Healthcare / SEO", desc: "Built a compliant, SEO-optimized funnel that tripled their qualified patient appointments.", metric: "3x Leads", gradient: "from-neon-cyan/20 to-electric-blue/20" },
  { title: "Luxe Retail Rebrand", category: "Retail / Branding", desc: "Complete digital transformation and branding overhaul resulting in massive online sales growth.", metric: "$2M Revenue", gradient: "from-cyber-purple/20 to-neon-cyan/20" },
  { title: "AutoEdge Dealer Network", category: "Automotive / AI", desc: "Deployed predictive AI models to automate lead scoring for a 50-location dealership network.", metric: "60% Less CAC", gradient: "from-electric-blue/20 to-neon-cyan/20" },
];

export default function PortfolioGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {portfolioItems.map((item, i) => (
        <GlassCard key={i} delay={i * 0.1} className="group overflow-hidden p-0">
          <div className={`h-56 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
            <div className="text-center">
              <BarChart3 size={40} className="text-white/20 mx-auto mb-2" />
              <span className="text-3xl font-heading font-bold text-white/80">{item.metric}</span>
            </div>
            <div className="absolute inset-0 bg-dark-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <span className="text-xs uppercase tracking-wider text-neon-cyan font-medium">{item.category}</span>
            <h3 className="font-heading text-xl font-semibold text-white mt-2 mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}