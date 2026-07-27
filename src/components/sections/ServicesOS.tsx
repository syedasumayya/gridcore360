"use client";

import { motion } from "framer-motion";
import { Users, LayoutDashboard, FolderKanban, TrendingUp, FileText, ClipboardList, Bot, Plus } from "lucide-react";

const modules = [
  { icon: Users, name: "CRM Systems", color: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/20" },
  { icon: LayoutDashboard, name: "Client Portals", color: "text-electric-blue", bg: "bg-electric-blue/10", border: "border-electric-blue/20" },
  { icon: FolderKanban, name: "Project Mgmt", color: "text-cyber-purple", bg: "bg-cyber-purple/10", border: "border-cyber-purple/20" },
  { icon: TrendingUp, name: "Deal Flow", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { icon: FileText, name: "Doc Hub", color: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/20" },
  { icon: ClipboardList, name: "Data Forms", color: "text-cyber-purple", bg: "bg-cyber-purple/10", border: "border-cyber-purple/20" },
  { icon: Bot, name: "AI Agents", color: "text-electric-blue", bg: "bg-electric-blue/10", border: "border-electric-blue/20" },
];

export default function ServicesOS() {
  return (
    <section className="py-20 relative">
      {/* Subtle top fade line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            One Unified System. <span className="gradient-text">Anything you need.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            All our tools talk to each other. Build a customized operating system tailored exactly to your enterprise workflow.
          </p>
        </motion.div>

        {/* Scrolling Module Row */}
        <div className="flex gap-5 overflow-x-auto pb-6 px-2 snap-x snap-mandatory scrollbar-hide">
          
          {modules.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex-shrink-0 snap-center group cursor-pointer"
            >
              <div className={`w-36 h-36 sm:w-40 sm:h-40 rounded-2xl glass border ${mod.border} flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] group-hover:scale-105`}>
                <div className={`w-14 h-14 rounded-xl ${mod.bg} flex items-center justify-center`}>
                  <mod.icon size={28} className={mod.color} />
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors text-center px-2 leading-tight">
                  {mod.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Custom "Plus" Module */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: modules.length * 0.05 }}
            className="flex-shrink-0 snap-center group cursor-pointer"
          >
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:border-neon-cyan/40 group-hover:scale-105">
              <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-neon-cyan/30 transition-colors">
                <Plus size={28} className="text-slate-500 group-hover:text-neon-cyan transition-colors" />
              </div>
              <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors text-center px-2 leading-tight">
                Custom Build
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Inline style to hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}