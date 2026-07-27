// "use client";

// import { motion } from "framer-motion";
// import {
//   Bot,
//   Search,
//   Target,
//   Code2,
//   Users,
//   Palette,
//   Headphones,
//   Lightbulb,
//   LineChart,
//   ArrowUpRight,
//   Smartphone, // Added for Mobile Dev
//   Gamepad2,   // Added for Game Dev
// } from "lucide-react";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GlassCard from "@/components/ui/GlassCard";

// const services = [
//   {
//     icon: Bot,
//     title: "AI Automation",
//     desc: "Eliminate manual bottlenecks with intelligent workflows that run 24/7.",
//     color: "text-neon-cyan",
//   },
//   {
//     icon: Search,
//     title: "SEO & AEO",
//     desc: "Dominate search engines and AI answers to drive organic traffic.",
//     color: "text-electric-blue",
//   },
//   {
//     icon: Target,
//     title: "Performance Marketing",
//     desc: "High-ROI ad campaigns engineered for scale and conversion.",
//     color: "text-cyber-purple",
//   },
//   {
//     icon: Code2,
//     title: "Website Development",
//     desc: "Lightning-fast, futuristic web apps built with modern tech stacks.",
//     color: "text-neon-cyan",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Development",
//     desc: "Native and cross-platform apps that deliver seamless user experiences on iOS and Android.",
//     color: "text-electric-blue",
//   },
//   {
//     icon: Gamepad2,
//     title: "Game Development",
//     desc: "Immersive gaming experiences built with cutting-edge graphics and interactive storytelling.",
//     color: "text-cyber-purple",
//   },
//   {
//     icon: Users,
//     title: "CRM Solutions",
//     desc: "Centralize customer data and automate your sales pipeline.",
//     color: "text-neon-cyan",
//   },
//   {
//     icon: Palette,
//     title: "Branding & Content",
//     desc: "Craft a visual identity and narrative that demands attention.",
//     color: "text-electric-blue",
//   },
//   {
//     icon: Headphones,
//     title: "BPO & Support",
//     desc: "Outsource operations to our expert global support team.",
//     color: "text-cyber-purple",
//   },
//   {
//     icon: Lightbulb,
//     title: "Business Consulting",
//     desc: "Strategic insights to pivot, scale, and future-proof your business.",
//     color: "text-neon-cyan",
//   },
//   {
//     icon: LineChart,
//     title: "Analytics & Reporting",
//     desc: "Real-time dashboards that turn raw data into actionable growth.",
//     color: "text-electric-blue",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="relative section-padding overflow-hidden">
//       {/* Background Glow */}
//       <div className="glow-orb w-[600px] h-[600px] bg-electric-blue top-0 right-[-200px] opacity-10" />

//       <div className="container-custom mx-auto">
//         <SectionHeading
//           badge="What We Do"
//           title="Core Services"
//           highlight="Powered by AI"
//           description="We provide end-to-end cybernetic solutions designed to automate, scale, and optimize every facet of your enterprise."
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, i) => (
//             <GlassCard key={i} delay={i * 0.05} className="group h-full">
//               <div className="flex flex-col h-full">
//                 {/* Icon */}
//                 <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors duration-300">
//                   <service.icon size={24} className={service.color} />
//                 </div>

//                 {/* Text Content */}
//                 <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-slate-400 leading-relaxed flex-grow">
//                   {service.desc}
//                 </p>

//                 {/* Hover Arrow */}
//                 <div className="mt-5 flex items-center text-sm text-slate-500 group-hover:text-neon-cyan transition-colors duration-300">
//                   <span>Learn more</span>
//                   <ArrowUpRight
//                     size={16}
//                     className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
//                   />
//                 </div>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Bot, Target, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const topServices = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Eliminate manual bottlenecks with intelligent workflows that operate 24/7 without human error.",
    color: "text-neon-cyan",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "High-ROI ad campaigns engineered for massive scale, precision targeting, and conversion.",
    color: "text-electric-blue",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Lightning-fast, futuristic digital experiences built with cutting-edge tech stacks.",
    color: "text-cyber-purple",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-electric-blue top-0 right-[-200px] opacity-10" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="What We Do"
          title="Core Capabilities"
          highlight="That Drive Growth"
          description="We don't just offer services; we engineer intelligent systems designed to scale your enterprise."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topServices.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group h-full border border-transparent hover:border-electric-blue/20">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.2)] transition-all duration-500">
                  <service.icon size={28} className={service.color} />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA to Full Services Page */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-secondary text-sm inline-flex group"
          >
            <span>Explore All 11 Services</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}