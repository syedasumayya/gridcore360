"use client";

import { motion } from "framer-motion";
import { Globe, Laptop, Rocket, GraduationCap, Heart, Users, CalendarDays, DollarSign } from "lucide-react";

const perks = [
  { icon: Globe, title: "Work From Anywhere", desc: "Our team spans 12+ countries. Work from home, a cafe, or the beach.", color: "text-neon-cyan" },
  { icon: Laptop, title: "Top-Tier Gear", desc: "MacBook Pro, 4K monitors, and any software licenses you need.", color: "text-electric-blue" },
  { icon: Rocket, title: "Unlimited Growth", desc: "Dedicated learning budgets and clear promotion tracks for your career.", color: "text-cyber-purple" },
  { icon: GraduationCap, title: "Learning Budgets", desc: "Courses, conferences, and certifications fully sponsored by us.", color: "text-neon-cyan" },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and mental health coverage for you and your family.", color: "text-electric-blue" },
  { icon: Users, title: "Elite Team", desc: "Work alongside industry veterans and brilliant tech prodigies.", color: "text-cyber-purple" },
  { icon: CalendarDays, title: "Flexible PTO", desc: "Take the time you need. We measure output, not hours at a desk.", color: "text-neon-cyan" },
  { icon: DollarSign, title: "Competitive Equity", desc: "We believe early team members deserve a stake in the upside.", color: "text-electric-blue" },
];

export default function CareersLifeAtGridCore() {
  return (
    <div className="mt-16 pt-12 border-t border-white/5">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl font-bold text-white"
        >
          Why You all <span className="gradient-text">Love It Here</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base"
        >
          We do not just offer jobs; we offer an environment where you can do the best work of your life.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {perks.map((perk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-5 text-center cursor-default group border border-transparent hover:border-electric-blue/30 hover:shadow-[0_0_25px_rgba(0,102,255,0.15)] transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className={`w-12 h-12 rounded-xl glass mx-auto mb-4 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all`}
            >
              <perk.icon size={22} className={`transition-colors duration-300 ${perk.color} group-hover:scale-110`} />
            </motion.div>
            
            <h4 className="font-heading text-sm font-semibold text-white group-hover:gradient-text transition-all duration-300 mb-2">
              {perk.title}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {perk.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}