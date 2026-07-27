"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "340%", label: "Increase in ROI" },
  { icon: Users, value: "50,000+", label: "New Qualified Leads" },
  { icon: Zap, value: "60%", label: "Reduction in CAC" },
];

export default function CaseStudy() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-neon-cyan top-0 left-[-200px] opacity-10" />

      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Fake Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 gradient-border">
              {/* Top Bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-dark-700 flex items-center px-3">
                  <span className="text-[10px] text-slate-500 font-mono">gridcore360.client-dashboard.com</span>
                </div>
              </div>
              
              {/* Fake Chart Area */}
              <div className="bg-dark-800/50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400">Performance Marketing ROI</span>
                  <span className="text-xs text-neon-cyan font-mono">+340%</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[20, 35, 25, 50, 45, 70, 60, 85, 75, 95, 100].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-electric-blue to-neon-cyan opacity-80" 
                      style={{ height: `${h}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>

              {/* Fake Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-dark-800/50 rounded-lg p-3">
                  <div className="text-[10px] text-slate-500 mb-1">Conversions</div>
                  <div className="text-sm font-bold text-white">12,459</div>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-3">
                  <div className="text-[10px] text-slate-500 mb-1">Revenue</div>
                  <div className="text-sm font-bold text-neon-cyan">$1.2M</div>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-3">
                  <div className="text-[10px] text-slate-500 mb-1">Active AI</div>
                  <div className="text-sm font-bold text-cyber-purple">Online</div>
                </div>
              </div>
            </div>
            
            {/* Background glow for the dashboard */}
            <div className="absolute -inset-4 bg-electric-blue/5 blur-3xl -z-10 rounded-3xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-neon-cyan mb-6 border border-neon-cyan/20">
              Featured Case Study
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              How We Scaled a <span className="gradient-text">SaaS Enterprise</span> by 340% in 6 Months
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              By integrating our AI automation with aggressive performance marketing, 
              we completely rebuilt their lead funnel and slashed their cost-per-acquisition in half.
            </p>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <stat.icon size={22} className="text-neon-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}