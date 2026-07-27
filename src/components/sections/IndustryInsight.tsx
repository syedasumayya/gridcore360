"use client";

import { Brain, HeartPulse, Building2, ShoppingCart, Monitor } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const domains = [
  {
    icon: HeartPulse,
    industry: "Healthcare",
    color: "text-neon-cyan",
    truth: "Generic AI ignores strict HIPAA compliance and complex patient journeys, causing more harm than good."
  },
  {
    icon: Building2,
    industry: "Real Estate",
    color: "text-electric-blue",
    truth: "Static CRMs fail to capture the hyper-local micro-trends that actually close high-ticket property deals."
  },
  {
    icon: Monitor,
    industry: "B2B SaaS",
    color: "text-cyber-purple",
    truth: "Off-the-shelf analytics can't track multi-touch attribution across 6+ month enterprise sales cycles."
  },
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    color: "text-neon-cyan",
    truth: "Basic bots can't dynamically adjust pricing or inventory based on real-time competitor stock levels."
  },
];

export default function IndustryInsight() {
  return (
    <section className="section-padding pb-10">
      <div className="container-custom mx-auto">
        
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Brain size={14} className="text-neon-cyan" />
              The Problem
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              AI without <span className="gradient-text">domain context</span> is just math.
            </h2>
           <p className="text-lg text-slate-400 leading-relaxed">
  A generic marketing bot does not know the difference between a HIPAA violation and a real estate lead. We embed deep industry intelligence into every system we build.
</p>
          </div>
        </AnimateIn>

        {/* Domain Truths Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {domains.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full group">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-dark-800/50 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300`}>
                    <item.icon size={22} className={item.color} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                      {item.industry}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}