"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CalendarDays, Loader2 } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.service} - ${formData.company}`,
          department: formData.service,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl shadow-black/30 relative overflow-hidden"
          >
            {/* Subtle Background Gradient inside card */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <span className="inline-block px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                  Ready to Scale?
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-4"
              >
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Let&apos;s Build Your{" "}
                  <span className="gradient-text">Growth Engine</span>
                </h2>
              </motion.div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center text-slate-400 max-w-xl mx-auto mb-12"
              >
                Book a free discovery call and let our AI architects design a
                custom roadmap for your business.
              </motion.p>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-dark-800/50 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric-blue/40 focus:bg-dark-800/80 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-dark-800/50 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric-blue/40 focus:bg-dark-800/80 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-dark-800/50 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric-blue/40 focus:bg-dark-800/80 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-electric-blue/40 focus:bg-dark-800/80 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-dark-800 text-slate-400">
                      Select a service
                    </option>
                    <option value="ai" className="bg-dark-800 text-white">
                      AI Automation
                    </option>
                    <option
                      value="marketing"
                      className="bg-dark-800 text-white"
                    >
                      Performance Marketing
                    </option>
                    <option value="web" className="bg-dark-800 text-white">
                      Web & App Development
                    </option>
                    <option value="seo" className="bg-dark-800 text-white">
                      SEO & AEO
                    </option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us briefly about your project goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-dark-800/50 border border-white/5 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric-blue/40 focus:bg-dark-800/80 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-neon-cyan transition-colors group"
                  >
                    <CalendarDays size={16} />
                    <span>Or schedule directly via calendar</span>
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary text-sm px-8 py-3.5 !rounded-full group w-full sm:w-auto"
                  >
                    <span>
                      {loading
                        ? "Sending..."
                        : success
                          ? "Message Sent!"
                          : "Send Message"}
                    </span>
                    {!loading && !success && (
                      <Send
                        size={16}
                        className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                    {loading && (
                      <Loader2
                        size={16}
                        className="relative z-10 animate-spin"
                      />
                    )}
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
