// 
"use client";

import { Bot, Target, Code2, Headphones, ArrowRight } from "lucide-react"; // Added Headphones
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const topServices = [
  {
    icon: Headphones, // BPO IS NOW FIRST
    title: "BPO & Global Support",
    desc: "Outsource operations to our expert global support team and scale your enterprise effortlessly.",
    color: "text-electric-blue",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Eliminate manual bottlenecks with intelligent workflows that operate 24/7 without human error.",
    color: "text-neon-cyan",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "High-ROI ad campaigns engineered for massive scale, precision targeting, and conversion.",
    color: "text-cyber-purple",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Lightning-fast, futuristic digital experiences built with cutting-edge tech stacks.",
    color: "text-neon-cyan",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-electric-blue top-0 right-[-200px] opacity-10" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="What We Do"
          title="Core Capabilities"
          highlight="That Drive Growth"
          description="We don't just offer services; we engineer intelligent BPO and AI systems designed to scale your enterprise."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"> {/* Changed to 4 columns to fit them nicely in one row on desktop */}
          {topServices.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group h-full border border-transparent hover:border-electric-blue/20">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.2)] transition-all duration-500">
                  <service.icon size={28} className={service.color} />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-secondary text-sm inline-flex group"
          >
            <span>Explore All 11 Services</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}