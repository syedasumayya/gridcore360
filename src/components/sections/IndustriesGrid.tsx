"use client";

import { Car, HeartPulse, HardHat, Building2, Truck, ShoppingCart, GraduationCap, Monitor, UtensilsCrossed, Landmark } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const industries = [
  { icon: Car, title: "Automotive", desc: "Driving leads for dealerships and automakers through AI-powered ad targeting and predictive analytics." },
  { icon: HeartPulse, title: "Healthcare", desc: "Navigating strict compliance while generating high-quality patient leads and automating scheduling." },
  { icon: HardHat, title: "Construction", desc: "Building robust digital presences that win massive B2B contracts and streamline visibility." },
  { icon: Building2, title: "Real Estate", desc: "Automating property listings, virtual tour funnels, and hyper-local SEO for ready-to-buy clients." },
  { icon: Truck, title: "Logistics", desc: "Optimizing supply chain visibility and automating client acquisition for freight enterprises." },
  { icon: ShoppingCart, title: "Retail", desc: "Unifying online and offline commerce with AI-driven inventory predictions and marketing." },
  { icon: GraduationCap, title: "Education", desc: "Scaling student enrollments through targeted funnels and automating course delivery ecosystems." },
  { icon: Monitor, title: "Technology", desc: "Propelling SaaS and tech startups with aggressive performance marketing and growth frameworks." },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Filling rooms and tables with dynamic pricing algorithms and omnichannel reputation management." },
  { icon: Landmark, title: "Finance", desc: "Generating high-net-worth leads and building trust through data-driven, compliant ecosystems." },
];

export default function IndustriesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {industries.map((ind, i) => (
        <GlassCard key={i} delay={i * 0.05} className="group flex gap-6 items-start">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.2)] transition-all duration-500">
            <ind.icon size={30} className="text-neon-cyan" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">{ind.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{ind.desc}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}