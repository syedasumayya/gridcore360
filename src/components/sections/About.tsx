// "use client";

// import { motion } from "framer-motion";
// import { Cpu, TrendingUp, Shield } from "lucide-react";

// const features = [
//   {
//     icon: Cpu,
//     title: "AI-First Approach",
//     desc: "We embed artificial intelligence into every layer of your business operations.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Scalable Systems",
//     desc: "Infrastructure designed to grow seamlessly with your enterprise demands.",
//   },
//   {
//     icon: Shield,
//     title: "Data-Driven Security",
//     desc: "Enterprise-grade security protocols protecting your critical assets 24/7.",
//   },
// ];

// export default function About() {
//   return (
//     <section id="about" className="relative section-padding overflow-hidden">
//       {/* Background Accents */}
//       <div className="glow-orb w-[500px] h-[500px] bg-cyber-purple top-1/2 left-[-200px] -translate-y-1/2 opacity-10" />
      
//       <div className="container-custom mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7 }}
//           >
//             <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-neon-cyan mb-6 border border-neon-cyan/20">
//               Who We Are
//             </span>
            
//             <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//               Redefining Growth Through{" "}
//               <span className="gradient-text">Cybernetic Intelligence</span>
//             </h2>
            
//             <p className="text-slate-400 text-lg leading-relaxed mb-8">
//               GridCore360 isn’t just a marketing agency—we are a global technology 
//               and business solutions partner. We engineer AI-powered ecosystems that 
//               automate workflows, optimize performance, and drive explosive, 
//               sustainable growth for modern enterprises.
//             </p>

//             <div className="space-y-6">
//               {features.map((feature, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.15 }}
//                   className="flex gap-4 items-start group"
//                 >
//                   <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:border-electric-blue/30 transition-colors duration-300">
//                     <feature.icon size={22} className="text-neon-cyan" />
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-semibold text-white mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-slate-400 leading-relaxed">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Visual - Pure CSS Futuristic Graphic */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative flex items-center justify-center min-h-[500px]"
//           >
//             {/* Outer Glowing Ring */}
//             <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-electric-blue shadow-[0_0_20px_rgba(0,102,255,0.8)]" />
//             </div>
            
//             {/* Middle Ring */}
//             <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-cyber-purple/20 animate-[spin_15s_linear_infinite_reverse]">
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-cyber-purple shadow-[0_0_20px_rgba(123,47,255,0.8)]" />
//             </div>

//             {/* Core Glass Card */}
//             <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full glass-strong flex items-center justify-center gradient-border shadow-[0_0_60px_rgba(0,102,255,0.15)]">
//               <div className="text-center">
//                 <div className="text-4xl sm:text-5xl font-heading font-bold gradient-text">360°</div>
//                 <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">Growth</div>
//               </div>
//             </div>

//             {/* Floating Data Points */}
//             <motion.div
//               animate={{ y: [-10, 10, -10] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-10 right-10 glass px-3 py-2 rounded-lg text-xs text-neon-cyan font-mono"
//             >
//               AI.Active
//             </motion.div>
            
//             <motion.div
//               animate={{ y: [10, -10, 10] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-10 left-10 glass px-3 py-2 rounded-lg text-xs text-electric-blue font-mono"
//             >
//               Sys.Optimized
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI & BPO Synergy",
    desc: "We embed artificial intelligence and expert global operations into every layer of your business processes.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    desc: "Dedicated support teams and infrastructure designed to grow seamlessly with your enterprise demands.",
  },
  {
    icon: Shield,
    title: "Data-Driven Security",
    desc: "Enterprise-grade security protocols protecting your critical assets 24/7.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-cyber-purple top-1/2 left-[-200px] -translate-y-1/2 opacity-10" />
      
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-neon-cyan mb-6 border border-neon-cyan/20">
              Who We Are
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Redefining Growth Through{" "}
              <span className="gradient-text">Cybernetic Intelligence</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              GridCore360 is not just a marketing agency. We are a global technology, 
              BPO, and business solutions partner. We engineer AI-powered ecosystems and 
              dedicated offshore teams that automate workflows, optimize performance, 
              and drive explosive, sustainable growth for modern enterprises.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:border-electric-blue/30 transition-colors duration-300">
                    <feature.icon size={22} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[500px]"
          >
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-electric-blue/20 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-electric-blue shadow-[0_0_20px_rgba(0,102,255,0.8)]" />
            </div>
            
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-cyber-purple/20 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-cyber-purple shadow-[0_0_20px_rgba(123,47,255,0.8)]" />
            </div>

            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full glass-strong flex items-center justify-center gradient-border shadow-[0_0_60px_rgba(0,102,255,0.15)]">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-heading font-bold gradient-text">360°</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">Growth</div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass px-3 py-2 rounded-lg text-xs text-neon-cyan font-mono"
            >
              AI.Active
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 glass px-3 py-2 rounded-lg text-xs text-electric-blue font-mono"
            >
              Sys.Optimized
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}