"use client";

import AnimateIn from "@/components/ui/AnimateIn";

export default function ContactBelief() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="container-custom mx-auto">
        <AnimateIn>
          <div className="glass-strong rounded-2xl p-8 sm:p-12 lg:p-16 gradient-border overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_1px_1fr] gap-8 md:gap-12 items-center">
              
              {/* Left Side */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-neon-cyan border border-neon-cyan/20 bg-neon-cyan/5 mb-6">
                  The GridCore Belief
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Scale-ups deserve partners who engineer{" "}
                  <span className="gradient-text">growth loops.</span>
                </h2>
              </div>

              {/* Vertical Line (Hidden on mobile, visible on desktop) */}
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {/* Right Side (Body Text) */}
              <div>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  Not agencies that hand you a monthly report and disappear. Not consultants who leave you with a 100-page PDF. We are embedded operators who treat your growth metrics as our own KPIs.
                </p>
              </div>

            </div>

            {/* Mobile Horizontal Line (Only visible on mobile) */}
            <div className="md:hidden mt-8 mb-2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}