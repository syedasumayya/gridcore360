"use client";

import  AnimateIn  from "@/components/ui/AnimateIn";

const principles = [
  {
    num: "01",
    title: "Context Over Code",
    desc: "We don't write a line of code until we deeply understand the specific compliance requirements, buyer journeys, and legacy tech stack of your specific sector."
  },
  {
    num: "02",
    title: "Compliance By Default",
    desc: "Whether it's HIPAA in healthcare or SOC2 in finance, our architectures are built to meet your industry's strict regulations from day one, not bolted on later."
  },
  {
    num: "03",
    title: "Adaptive Buying Funnels",
    desc: "A B2B software sales cycle is 6 months; a retail cycle is 5 minutes. We engineer funnels that adapt to the exact rhythm of your market."
  },
  {
    num: "04",
    title: "Legacy System Integration",
    desc: "We don't force you to rip out your old tools. Our AI acts as the connective tissue between your existing industry software and modern growth engines."
  }
];

export default function IndustryPrinciples() {
  return (
    <section className="section-padding pb-10">
      <div className="container-custom mx-auto">
        
        {/* Header */}
        <AnimateIn className="mb-14 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest glass text-slate-400 mb-6 border border-white/5">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            How we build for <span className="gradient-text">your sector.</span>
          </h2>
                      <p className="text-base text-slate-400 max-w-2xl mx-auto">
              Every industry has a different heartbeat. We do not use generic templates; we engineer systems that speak your market language.
            </p>
        </AnimateIn>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative glass rounded-2xl p-8 sm:p-10 h-full border border-white/5 hover:border-electric-blue/20 transition-all duration-500">
                
                {/* Large Faded Number */}
                <span className="absolute top-4 right-6 font-heading text-8xl font-black text-white/[0.03] select-none pointer-events-none">
                  {item.num}
                </span>

                <span className="inline-block text-xs font-bold text-neon-cyan tracking-widest mb-4 font-mono">
                  {item.num}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}