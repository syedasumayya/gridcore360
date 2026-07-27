"use client";

import { Search, Smartphone, Gamepad2, Users, Palette, Headphones, Lightbulb, LineChart, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const secondaryServices = [
  { icon: Search, title: "SEO & AEO", desc: "Dominate search engines and AI-generated answers.", color: "text-electric-blue" },
  { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform apps for iOS and Android.", color: "text-neon-cyan" },
  { icon: Gamepad2, title: "Game Development", desc: "Immersive gaming experiences with cutting-edge graphics.", color: "text-cyber-purple" },
  { icon: Users, title: "CRM Solutions", desc: "Centralize customer data and automate sales pipelines.", color: "text-electric-blue" },
  { icon: Palette, title: "Branding & Content", desc: "Craft a visual identity that demands attention.", color: "text-neon-cyan" },
  { icon: Headphones, title: "BPO & Support", desc: "Outsource operations to our expert global support team.", color: "text-cyber-purple" },
  { icon: Lightbulb, title: "Business Consulting", desc: "Strategic insights to pivot and scale your business.", color: "text-electric-blue" },
  { icon: LineChart, title: "Analytics & Reporting", desc: "Real-time dashboards turning data into growth.", color: "text-neon-cyan" },
];

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {secondaryServices.map((service, i) => (
        <GlassCard key={i} delay={i * 0.05} className="group h-full border border-transparent hover:border-electric-blue/20">
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] transition-all duration-500">
              <service.icon size={22} className={service.color} />
            </div>
            <h3 className="font-heading text-base font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-4">{service.desc}</p>
            <div className="flex items-center text-xs text-slate-600 group-hover:text-neon-cyan transition-colors">
              <span>Learn more</span>
              <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}