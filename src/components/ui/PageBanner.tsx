"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function PageBanner({ badge, title, highlight, description }: PageBannerProps) {
  return (
    <section className="relative pt-48 pb-28">
      
      {/* Subtle Background Color Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* THE SPINNING CIRCLE (Simple round shape like you asked) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] pointer-events-none opacity-[0.08]"
        style={{ animation: 'spinCircle 25s linear infinite' }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Main Outer Circle */}
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" />
          {/* Middle Dashed Circle (rotates visually because of the parent) */}
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5" strokeDasharray="8 4" />
          {/* Inner Circle */}
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.5" />
          {/* Center Dot */}
          <circle cx="100" cy="100" r="2" fill="white" />
        </svg>
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-neon-cyan/20 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
          <span className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
            {badge}
          </span>
        </motion.div>

        {/* Massive Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tight"
        >
          {title} <span className="gradient-text">{highlight}</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Expanding Glow Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-full opacity-60"
        />

      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes spinCircle {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}