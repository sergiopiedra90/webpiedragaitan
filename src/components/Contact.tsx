import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    country: "",
    industry: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you for your request. We will contact you soon.");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Contact</h1>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Start a Strategic Conversation</h2>
              <p className="mt-8 text-xl text-slate-600">
                Whether you're exploring new markets or seeking to strengthen your export operations, we're ready to discuss how PGA can support your international growth.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Email</p>
                    <a href="mailto:piedra.gaitan.asociados@gmail.com" className="text-lg font-bold hover:text-blue-600">piedra.gaitan.asociados@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Location</p>
                    <p className="text-lg font-bold">San José, Costa Rica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold">Request a Consultation</h3>
              <p className="mt-2 text-slate-600">Fill out the form below and our advisory team will respond promptly.</p>
              
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Company *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Country *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Industry / Sector</label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Email *</label>
                  <input 
                    required
                    type="email" 
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Strategic Interest *</label>
                  <select 
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="">Select your area of interest</option>
                    <option value="International Trade Strategy">International Trade Strategy</option>
                    <option value="Export Market Development">Export Market Development</option>
                    <option value="Commercial Intelligence">Commercial Intelligence</option>
                    <option value="International Negotiation">International Negotiation</option>
                    <option value="Commercial Diplomacy">Commercial Diplomacy</option>
                    <option value="Strategic Market Entry">Strategic Market Entry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit Consultation Request
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
