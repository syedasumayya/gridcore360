"use client";

import {
  Car,
  HeartPulse,
  HardHat,
  Building2,
  Truck,
  ShoppingCart,
  GraduationCap,
  Monitor,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const industries = [
  { icon: Car, name: "Automotive" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: HardHat, name: "Construction" },
  { icon: Building2, name: "Real Estate" },
  { icon: Truck, name: "Logistics" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: GraduationCap, name: "Education" },
  { icon: Monitor, name: "Technology" },
  { icon: UtensilsCrossed, name: "Hospitality" },
  { icon: Landmark, name: "Finance" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative section-padding overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-cyan bottom-0 left-[-100px] opacity-10" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="Industries"
          title="Sectors We"
          highlight="Transform"
          description="We deliver specialized cybernetic growth solutions tailored to the unique demands of these high-impact industries."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {industries.map((industry, i) => (
            <GlassCard
              key={i}
              delay={i * 0.05}
              className="group flex flex-col items-center justify-center text-center py-10 px-4 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-4 group-hover:shadow-[0_0_25px_rgba(0,102,255,0.3)] transition-all duration-500">
                <industry.icon
                  size={26}
                  className="text-slate-400 group-hover:text-neon-cyan transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                {industry.name}
              </h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}