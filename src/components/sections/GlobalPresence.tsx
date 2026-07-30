"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading"; // <-- ADDED YOUR HEADING COMPONENT

const globalOffices = [
  {
    region: "Pakistan (HQ)",
    address: "Plaza 137, Ground Floor, Ascon Heights 1, Civic Centre, Phase 4, Bahria Town, Islamabad",
    phone: "0311 3803841",
  },
  {
    region: "United Kingdom",
    address: "21 Hastings Road, Crawley, RH10 7AL",
    phone: "+44 7308 870700",
  },
  {
    region: "United States",
    address: "45541 Hutchens Sq, 20166",
    phone: "+1 703 2234563",
  },
];

export default function GlobalPresence() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* ADDED THE PROPER SECTION HEADING */}
        <SectionHeading
          badge="Our Reach"
          title="Global"
          highlight="Presence"
          description="Strategically located offices to serve clients across continents and time zones."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {globalOffices.map((office, i) => (
            <motion.div
              key={office.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 group text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <MapPin size={16} className="text-neon-cyan" />
                <h4 className="font-heading font-semibold text-white text-sm">{office.region}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{office.address}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
                <Phone size={14} className="text-slate-600 group-hover:text-neon-cyan transition-colors" />
                <span>{office.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}