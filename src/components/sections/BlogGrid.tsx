"use client";

import { Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const posts = [
  { title: "The Rise of AEO (Answer Engine Optimization)", category: "SEO", time: "4 min" },
  { title: "Why Performance Marketing Needs Machine Learning", category: "Marketing", time: "6 min" },
  { title: "Building Scalable CRMs with Next.js", category: "Development", time: "8 min" },
  { title: "Data Privacy in BPO: A 2025 Guide", category: "Operations", time: "5 min" },
  { title: "Hyper-Personalization in Retail Tech", category: "Retail", time: "4 min" },
  { title: "Predictive Analytics in Real Estate", category: "Finance", time: "7 min" },
];

export default function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {posts.map((post, i) => (
        <GlassCard key={i} delay={i * 0.05} className="group cursor-pointer">
          {/* Fake Thumbnail */}
          <div className="h-40 -mx-6 -mt-6 mb-5 bg-dark-700/50 rounded-t-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white/5">IMG</span>
          </div>
          
          <span className="text-xs uppercase tracking-wider text-neon-cyan font-medium">{post.category}</span>
          <h3 className="font-heading text-lg font-semibold text-white mt-2 mb-3 group-hover:gradient-text transition-all duration-300 leading-snug">
            {post.title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock size={12} /> {post.time} read
          </div>
        </GlassCard>
      ))}
    </div>
  );
}