"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Removed the extra imports
import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap, Code2, Server, Globe, UserCheck } from "lucide-react";
import HeroGlobe from "@/components/ui/HeroGlobe";

// Main Stats (The big numbers like 150+, 98%, 3x, 24/7)
const mainStats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 3, suffix: "x", label: "Average ROI" },
  { value: 24, suffix: "/7", label: "AI Support" },
];

// Secondary Stats (The glass boxes with icons)
const secondaryStats = [
  { icon: Code2, value: 50, suffix: "+", label: "Automations" },
  { icon: Globe, value: 30, suffix: "+", label: "Sites Launched" },
  { icon: Server, value: 20, suffix: "+", label: "Integrations" },
  { icon: UserCheck, value: 15, suffix: "+", label: "Enterprise Partners" },
  { icon: GraduationCap, value: 200, suffix: "+", label: "Students Trained" },
];

// FIXED: The red lines were happening here
// REPLACE YOUR OLD AnimatedCounter WITH THIS EXACT CODE:
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Rotating Globe */}
      <HeroGlobe />
      
      {/* Subtle Color Orbs */}
      <div className="glow-orb w-[800px] h-[800px] bg-electric-blue top-[-300px] left-[-300px] opacity-10" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-purple bottom-[-200px] right-[-200px] opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-electric-blue/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Sparkles size={14} className="text-neon-cyan" />
              AI-Powered Business Growth
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Cybernetic Growth
            <br />
            <span className="gradient-text">Solutions</span> for the
            <br />
            Modern Enterprise
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            We integrate AI automation, performance marketing, and advanced
            analytics to transform your business into an intelligent, scalable
            powerhouse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          >
            <Link href="/contact" className="btn-primary text-base px-10 py-4 group shadow-[0_0_40px_rgba(0,102,255,0.3)]">
              <span>Book a Discovery Call</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-secondary text-base px-10 py-4 border-slate-600 hover:border-electric-blue/50">
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* NEW: Main Stats Row (Big Animated Numbers) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          >
            {mainStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-heading font-bold text-white mb-1 font-mono tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* NEW: Secondary Stats Row (Glass Boxes with Icons) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 overflow-x-auto pb-4"
          >
            {secondaryStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-xl px-5 py-4 sm:px-6 flex items-center gap-3 flex-shrink-0 cursor-default border border-transparent hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-neon-cyan/10 transition-colors">
                  <stat.icon size={18} className="text-neon-cyan transition-transform group-hover:scale-110" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-heading font-bold text-white leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}