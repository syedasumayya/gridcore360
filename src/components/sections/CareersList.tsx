"use client";

import { useState } from "react";
import { MapPin, Clock, ArrowRight, X, Send, Loader2, Upload } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const jobs = [
  { title: "Senior AI Engineer", dept: "Engineering", type: "Full-time", location: "Remote / San Francisco" },
  { title: "Performance Marketing Manager", dept: "Growth", type: "Full-time", location: "Remote" },
  { title: "Full-Stack Developer (Next.js)", dept: "Engineering", type: "Full-time", location: "Remote" },
  { title: "BPO Operations Specialist", dept: "Operations", type: "Contract", location: "On-site (London)" },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Hybrid (New York)" },
  { title: "Data Analyst", dept: "Analytics", type: "Part-time", location: "Remote" },
  { title: "DevOps Cloud Architect", dept: "Engineering", type: "Full-time", location: "Remote" },
];

export default function CareersList() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    requirements: "", 
    workPreference: "Remote",
    cv: null as File | null 
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Use FormData for file upload
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("jobTitle", selectedJob || "");
      data.append("workPreference", formData.workPreference);
      data.append("requirements", formData.requirements);
      if (formData.cv) {
        data.append("cv", formData.cv); 
      }

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: data, // No Content-Type header needed for FormData!
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setSelectedJob(null); 
          setFormData({ name: "", email: "", requirements: "", workPreference: "Remote", cv: null });
        }, 2500);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div 
            key={i} 
            className="cursor-pointer" 
            onClick={() => setSelectedJob(job.title)}
          >
            <GlassCard delay={i * 0.05} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-electric-blue/30">
              <div>
                <h3 className="font-heading text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                  <span className="bg-dark-600 px-2 py-0.5 rounded text-xs">{job.dept}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                </div>
              </div>
              <ArrowRight size={20} className="text-slate-600 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all flex-shrink-0" />
            </GlassCard>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedJob(null)}>
          <div className="glass-strong rounded-2xl p-8 max-w-lg w-full border border-white/10 relative my-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
            
            <h3 className="font-heading text-2xl font-bold text-white mb-1">Apply for {selectedJob}</h3>
            <p className="text-sm text-slate-400 mb-6">Fill out the details below to submit your application.</p>

            {success ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-neon-cyan font-heading font-semibold text-lg">Application Submitted!</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 transition-colors" />
                  <input type="email" required placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 transition-colors" />
                </div>

                <select value={formData.workPreference} onChange={(e) => setFormData({...formData, workPreference: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-neon-cyan/50 transition-colors appearance-none">
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>

                <textarea required rows={3} placeholder="Key skills, experience, and why you are a great fit..." value={formData.requirements} onChange={(e) => setFormData({...formData, requirements: e.target.value})} className="w-full bg-dark-800/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 transition-colors resize-none"></textarea>
                
                {/* PDF UPLOAD BOX */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Upload CV / Resume (PDF, DOC)</label>
                  <label className="flex items-center gap-3 w-full bg-dark-800/50 border border-dashed border-white/10 rounded-lg px-4 py-4 cursor-pointer hover:border-neon-cyan/30 transition-colors">
                    <Upload size={18} className="text-slate-500" />
                    <span className="text-sm text-slate-500 truncate">
                      {formData.cv ? formData.cv.name : "Choose a file..."}
                    </span>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      required
                      onChange={(e) => setFormData({...formData, cv: e.target.files ? e.target.files[0] : null})} 
                      className="hidden" 
                    />
                  </label>
                </div>
                
                <button type="submit" disabled={loading} className="btn-primary w-full text-sm mt-2">
                  <span>{loading ? "Uploading..." : "Submit Application"}</span>
                  {!loading && <Send size={16} className="relative z-10" />}
                  {loading && <Loader2 size={16} className="relative z-10 animate-spin" />}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}