"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What makes GridCore360 different from a standard marketing agency?",
    a: "We are a technology-first growth partner. While standard agencies focus on manual campaigns, we engineer AI-driven ecosystems that automate operations, predict customer behavior, and scale your business autonomously.",
  },
  {
    q: "How quickly can we expect to see results?",
    a: "Depending on the service, our AI automation workflows show efficiency gains within the first 14 days. For performance marketing and SEO, significant ROI and traffic increases are typically visible within 45-60 days.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "We design cybernetic solutions that scale. Whether you are a fast-growing startup or a Fortune 500 enterprise, our modular tech stack adapts to your exact size and bandwidth requirements.",
  },
  {
    q: "What technologies do you use for AI Automation?",
    a: "We utilize a combination of custom LLM integrations, advanced NLP, computer vision, and proprietary machine learning models tailored specifically to your operational bottlenecks.",
  },
  {
    q: "Is there a long-term contract required?",
    a: "No. We operate on flexible, performance-based agreements. We believe our results will keep you as a partner, not a piece of paper.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-electric-blue bottom-0 right-[-100px] opacity-10" />

      <div className="container-custom mx-auto max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about partnering with GridCore360."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => toggle(i)}
              className="glass rounded-xl cursor-pointer group hover:border-electric-blue/30 transition-colors duration-300 overflow-hidden"
            >
              {/* Question */}
              <div className="flex items-center justify-between p-5">
                <h3 className="font-heading text-base sm:text-lg font-medium text-white pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-neon-cyan" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}