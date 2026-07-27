"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogFeatured() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="grid md:grid-cols-2">
        {/* Fake Image Area */}
        <div className="h-64 md:h-auto bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 flex items-center justify-center">
          <span className="text-6xl font-heading font-bold text-white/10">BLOG</span>
        </div>
        
        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-wider text-neon-cyan font-medium bg-neon-cyan/10 px-3 py-1 rounded-full">AI & Automation</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock size={12} /> 5 min read
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
            How AI Agents Are Replacing Traditional Marketing Funnels in 2025
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Discover why forward-thinking enterprises are ditching static funnels for dynamic, AI-driven customer acquisition ecosystems...
          </p>
          <Link href="#" className="flex items-center gap-2 text-sm text-electric-blue hover:text-neon-cyan transition-colors font-medium">
            Read Full Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 