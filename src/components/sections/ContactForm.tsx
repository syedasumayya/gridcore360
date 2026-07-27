"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", department: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", department: "", message: "" });
        setTimeout(() => setSuccess(false), 4000); // Hide success message after 4s
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="h-full" hover={false}>
      <div className="flex items-center gap-3 mb-6">
        <Send size={24} className="text-electric-blue" />
        <h3 className="font-heading text-xl font-bold text-white">Send Us a Message</h3>
      </div>
      <p className="text-sm text-slate-400 mb-6">Have a specific project in mind? Drop us the details and our team will get back to you within 24 hours.</p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue/50 transition-colors" />
          <input type="email" required placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue/50 transition-colors" />
        </div>
        
        <input type="text" required placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue/50 transition-colors" />
        
        <select required value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-electric-blue/50 transition-colors appearance-none">
          <option value="">Select Department</option>
          <option value="sales">Sales & Growth</option>
          <option value="support">Technical Support</option>
          <option value="partnerships">Partnerships</option>
          <option value="other">Other</option>
        </select>

        <textarea required rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue/50 transition-colors resize-none"></textarea>

        <button type="submit" disabled={loading} className="btn-primary text-sm w-full sm:w-auto">
          <span>{loading ? "Sending..." : success ? "Message Sent! ✅" : "Send Message"}</span>
          {!loading && !success && <Send size={16} className="relative z-10" />}
          {loading && <Loader2 size={16} className="relative z-10 animate-spin" />}
        </button>
      </form>
    </GlassCard>
  );
}