"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Marketing",
    company: "TechFlow Inc.",
    text: "GridCore360 didn't just run ads; they rebuilt our entire growth engine. The AI automation alone saved us 40 hours a week. Absolutely game-changing.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO",
    company: "Zenith Healthcare",
    text: "Their understanding of the healthcare sector combined with cybernetic marketing strategies resulted in our highest quarter of qualified leads ever.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Luxe Retail Group",
    text: "Premium feel, premium results. They positioned our brand exactly where it needed to be. Our online sales tripled within the first quarter.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-cyber-purple bottom-0 right-[-200px] opacity-10" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Industry"
          highlight="Leaders"
          description="Don't just take our word for it. Here is what our partners have to say about the GridCore360 effect."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <GlassCard key={i} delay={i * 0.15} className="flex flex-col h-full">
              {/* Quote Icon */}
              <Quote size={32} className="text-electric-blue/20 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-neon-cyan text-neon-cyan" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-6">
                &quot;{item.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-cyber-purple flex items-center justify-center text-white font-bold text-sm">
                  {item.name.split(" ").map((n) => n.charAt(0)).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.role}, {item.company}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}