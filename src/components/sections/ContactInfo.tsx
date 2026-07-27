"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "hello@gridcore360.com", desc: "We reply within 2 hours." },
  { icon: Phone, label: "Call Us", value: "+1 (555) 360-0000", desc: "Mon-Fri, 9am to 6pm PST." },
  { icon: MapPin, label: "Headquarters", value: "San Francisco, CA", desc: "123 Innovation Blvd, Suite 400." },
];

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {contactDetails.map((item, i) => (
        <GlassCard key={i} delay={i * 0.1} className="text-center group hover:border-neon-cyan/30">
          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
            <item.icon size={24} className="text-neon-cyan" />
          </div>
          <h3 className="font-heading font-semibold text-white mb-1">{item.label}</h3>
          <p className="text-neon-cyan font-medium text-sm mb-1">{item.value}</p>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </GlassCard>
      ))}
    </div>
  );
}