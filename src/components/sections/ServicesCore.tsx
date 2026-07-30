// 
"use client";

import { motion } from "framer-motion";
import { Bot, Target, Code2, Headphones, CheckCircle2 } from "lucide-react"; // Added Headphones
import AnimateIn from "@/components/ui/AnimateIn";

const coreServices = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Eliminate manual bottlenecks. We engineer intelligent workflows that operate 24/7, reducing human error and scaling your operations without scaling your headcount.",
    features: ["Custom LLM Integrations", "Predictive Lead Scoring", "Automated Customer Onboarding", "Intelligent Data Routing"],
    visual: "ai" 
  },
  {
    icon: Headphones, // <-- ADDED BPO HERE
    title: "BPO & Global Support",
    desc: "Outsource operations to our elite global support team. We handle customer service, technical support, and back-office operations so you can focus on core growth.",
    features: ["24/7 Multichannel Support", "Dedicated Offshore Teams", "Quality Assurance (QA) Protocols", "Scalable Ticketing Systems"],
    visual: "bpo"
  },
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "High-ROI ad campaigns engineered for massive scale. We don't just manage ads; we build autonomous acquisition systems that drive down CAC while maximizing LTV.",
    features: ["Multi-Channel Ad Architecture", "Dynamic Creative Optimization", "Real-Time Bid Adjustments", "Predictive Audience Targeting"],
    visual: "marketing"
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Lightning-fast, futuristic digital experiences built to convert. We use modern tech stacks to ensure your platforms are scalable, secure, and beautiful.",
    features: ["Next.js & React Ecosystems", "Native iOS/Android Apps", "Headless CMS Architecture", "Enterprise-Grade Security"],
    visual: "web"
  }
];

// Fake UI Components to replace images
function FakeVisual({ type }: { type: string }) {
  if (type === "ai") {
    return (
      <div className="glass-strong rounded-xl p-4 font-mono text-xs text-left h-full border border-white/5 overflow-hidden">
        <div className="flex gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-red-500/80"/><div className="w-2 h-2 rounded-full bg-yellow-500/80"/><div className="w-2 h-2 rounded-full bg-green-500/80"/></div>
        <div className="space-y-2 text-slate-500">
          <p><span className="text-neon-cyan">const</span> agent = <span className="text-electric-blue">AI.runPipeline</span>();</p>
          <p><span className="text-neon-cyan">await</span> agent.processLeads();</p>
          <p className="text-green-400/80"> Output: 342 leads scored</p>
          <p><span className="text-neon-cyan">return</span> data.optimize();</p>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-[50px]" />
      </div>
    );
  }
  
  // <-- ADDED BPO VISUAL HERE
  if (type === "bpo") {
    return (
      <div className="glass-strong rounded-xl p-5 h-full border border-white/5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500">Active Agents</span>
          <span className="text-xs text-neon-cyan font-mono bg-neon-cyan/10 px-2 py-0.5 rounded">Online</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between glass rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-neon-cyan/20 flex items-center justify-center text-[8px] text-neon-cyan">JD</div>
              <span className="text-xs text-slate-300">John D.</span>
            </div>
            <div className="w-16 h-1.5 bg-dark-600 rounded-full"><div className="w-3/4 h-full bg-neon-cyan rounded-full"></div></div>
          </div>
          <div className="flex items-center justify-between glass rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center text-[8px] text-electric-blue">SK</div>
              <span className="text-xs text-slate-300">Sarah K.</span>
            </div>
            <div className="w-16 h-1.5 bg-dark-600 rounded-full"><div className="w-1/2 h-full bg-electric-blue rounded-full"></div></div>
          </div>
          <div className="flex items-center justify-between glass rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center text-[8px] text-cyber-purple">MR</div>
              <span className="text-xs text-slate-300">Mike R.</span>
            </div>
            <div className="w-16 h-1.5 bg-dark-600 rounded-full"><div className="w-full h-full bg-cyber-purple rounded-full"></div></div>
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-electric-blue/10 blur-[40px]" />
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="glass-strong rounded-xl p-5 h-full border border-white/5 relative overflow-hidden">
        <div className="text-xs text-slate-500 mb-4 flex justify-between"><span>Acquisition Cost</span><span className="text-neon-cyan">-$42% ↓</span></div>
        <div className="flex items-end gap-3 h-24">
          {[40, 65, 45, 80, 70, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-electric-blue to-neon-cyan opacity-80" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-4 flex justify-between text-xs"><span className="text-slate-600">Week 1</span><span className="text-slate-600">Week 6</span></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-electric-blue/10 blur-[40px]" />
      </div>
    );
  }
  return (
    <div className="glass-strong rounded-xl p-4 h-full border border-white/5 overflow-hidden">
      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/><div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/></div>
        <div className="flex-1 bg-dark-700 rounded px-2 py-1 text-[10px] text-slate-500 ml-2">gridcore360.app</div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded w-3/4"></div>
        <div className="h-8 bg-electric-blue/10 rounded border border-electric-blue/20 flex items-center justify-center text-[10px] text-electric-blue font-medium">Hero Component</div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="h-12 bg-white/5 rounded"></div>
          <div className="h-12 bg-white/5 rounded"></div>
          <div className="h-12 bg-white/5 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCore() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {coreServices.map((service, i) => (
        <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
          
          {/* Text Content */}
          <AnimateIn direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-cyan border border-neon-cyan/20">
                <service.icon size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Service {i + 1}</span>
            </div>
            
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              {service.title}
            </h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {service.desc}
            </p>

            <ul className="space-y-3">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-neon-cyan flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Visual / Fake UI */}
          <AnimateIn direction={i % 2 === 0 ? "right" : "left"} className={`relative ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
            <div className="relative">
              <FakeVisual type={service.visual} />
              {/* Background glow for the visual */}
              <div className={`absolute -inset-4 blur-3xl opacity-20 pointer-events-none ${i === 0 ? "bg-neon-cyan" : i === 1 ? "bg-electric-blue" : i === 2 ? "bg-cyber-purple" : "bg-neon-cyan"}`} />
            </div>
          </AnimateIn>

        </div>
      ))}
    </div>
  );
}