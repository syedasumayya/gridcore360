"use client";

import { useState } from "react";
import { CalendarDays, Clock, User, Mail, Loader2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export default function AppointmentBooking() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;
    setLoading(true);

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, time: selectedTime }),
      });

      if (res.ok) {
        setSuccess(true);
        setSelectedTime(null);
        setFormData({ name: "", email: "", date: "" });
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="h-full" hover={false}>
      <div className="flex items-center gap-3 mb-6">
        <CalendarDays size={24} className="text-neon-cyan" />
        <h3 className="font-heading text-xl font-bold text-white">Book a Discovery Call</h3>
      </div>
      <p className="text-sm text-slate-400 mb-6">Pick a date and time that works best for you. Our AI strategists will reach out confirmed.</p>
      
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" required placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 transition-colors" />
          </div>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="email" required placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 transition-colors" />
          </div>
        </div>

        <div className="relative">
          <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input 
            required
            type="date" 
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            className="w-full bg-dark-800/50 border border-white/5 rounded-lg pl-10 pr-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-neon-cyan/50 transition-colors [color-scheme:dark]"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-slate-500" />
            <span className="text-sm text-slate-400">Select Time</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  selectedTime === time
                    ? "bg-neon-cyan/10 border-neon-cyan/50 text-neon-cyan shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                    : "bg-dark-800/30 border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          className="btn-primary w-full text-sm mt-2"
          disabled={!selectedTime || loading}
        >
          <span>{loading ? "Booking..." : success ? "Call Booked! ✅" : "Confirm Booking"}</span>
          {!loading && !success && <CalendarDays size={16} className="relative z-10" />}
          {loading && <Loader2 size={16} className="relative z-10 animate-spin" />}
        </button>
        {(!selectedTime && !success) && <p className="text-xs text-slate-600 text-center -mt-3">Please select a time slot to continue.</p>}
      </form>
    </GlassCard>
  );
}