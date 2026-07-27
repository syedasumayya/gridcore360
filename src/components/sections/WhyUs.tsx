"use client";

import { XCircle, CheckCircle2 } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const comparisons = [
  {
    type: "bad",
    title: "Traditional Agencies",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-500/20",
    points: [
      "Rigid, manual campaign execution",
      "Generic strategies, slow to adapt",
      "You pay for hours, not results",
    ],
  },
  {
    type: "bad",
    title: "Off-The-Shelf SaaS",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-500/20",
    points: [
      "Forces you to change your workflow",
      "Disconnected data and tool silos",
      "Hidden fees stack up over time",
    ],
  },
  {
    type: "hero",
    title: "GridCore360 OS",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan/30",
    points: [
      "Engineered around your exact workflow",
      "AI-driven, scales automatically",
      "We build, run, and evolve it for you",
    ],
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-slate-400 mb-6 border border-white/5">
              The Difference
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Not an agency. <br className="hidden sm:block" />
              <span className="gradient-text">Not a traditional dev shop.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A better way to engineer cybernetic business growth.
            </p>
          </div>
        </AnimateIn>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {comparisons.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div
                className={`h-full rounded-2xl p-8 border transition-all duration-300 ${
                  item.type === "hero"
                    ? "glass-strong gradient-border shadow-[0_0_40px_rgba(0,212,255,0.15)] scale-[1.02] md:scale-105"
                    : "glass border-white/5 hover:border-white/10"
                }`}
              >
                <h3 className={`font-heading text-xl font-bold mb-8 flex items-center gap-2 ${item.type === "hero" ? "text-white" : "text-slate-300"}`}>
                  {item.title}
                </h3>
                
                <ul className="space-y-6">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      {item.type === "hero" ? (
                        <CheckCircle2 size={22} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle size={22} className={`${item.color} flex-shrink-0 mt-0.5 opacity-60`} />
                      )}
                      <span className={`text-sm leading-relaxed ${item.type === "hero" ? "text-slate-200 font-medium" : "text-slate-500"}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {item.type === "hero" && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We integrate AI automation, performance marketing, and custom development into one unified ecosystem tailored to your enterprise.
                    </p>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}