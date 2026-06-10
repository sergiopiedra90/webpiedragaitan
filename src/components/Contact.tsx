import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
    alert(t('contact.form.success'));
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('contact.badge')}</h1>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('contact.title')}</h2>
              <p className="mt-8 text-xl text-slate-600">
                {t('contact.desc')}
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('contact.emailLabel')}</p>
                    <a href="mailto:piedra.gaitan.asociados@gmail.com" className="text-lg font-bold hover:text-blue-600">piedra.gaitan.asociados@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{t('contact.locationLabel')}</p>
                    <p className="text-lg font-bold">San José, Costa Rica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold">{t('contact.form.title')}</h3>
              <p className="mt-2 text-slate-600">{t('contact.form.desc')}</p>
              
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.name')} *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.company')} *</label>
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
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.country')} *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.industry')}</label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.email')} *</label>
                  <input 
                    required
                    type="email" 
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.interest')} *</label>
                  <select 
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="">{t('contact.form.interestPlaceholder')}</option>
                    <option value="International Trade Strategy">{t('contact.form.interests.trade')}</option>
                    <option value="Export Market Development">{t('contact.form.interests.export')}</option>
                    <option value="Commercial Intelligence">{t('contact.form.interests.intelligence')}</option>
                    <option value="International Negotiation">{t('contact.form.interests.negotiation')}</option>
                    <option value="Commercial Diplomacy">{t('contact.form.interests.diplomacy')}</option>
                    <option value="Strategic Market Entry">{t('contact.form.interests.entry')}</option>
                    <option value="Other">{t('contact.form.interests.other')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500">{t('contact.form.message')}</label>
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
                  {t('contact.form.submit')}
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
