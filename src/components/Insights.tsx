import { motion } from "motion/react";
import { Search, Lightbulb, TrendingUp, Globe, Building2, Briefcase } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Insights() {
  const { t } = useLanguage();

  const framework = [
    { title: t('insights.intelligence.items.0.title'), desc: t('insights.intelligence.items.0.desc'), icon: <TrendingUp className="h-6 w-6" /> },
    { title: t('insights.intelligence.items.1.title'), desc: t('insights.intelligence.items.1.desc'), icon: <Search className="h-6 w-6" /> },
    { title: t('insights.intelligence.items.2.title'), desc: t('insights.intelligence.items.2.desc'), icon: <Globe className="h-6 w-6" /> },
    { title: t('insights.intelligence.items.3.title'), desc: t('insights.intelligence.items.3.desc'), icon: <Building2 className="h-6 w-6" /> },
    { title: t('insights.intelligence.items.4.title'), desc: t('insights.intelligence.items.4.desc'), icon: <Briefcase className="h-6 w-6" /> },
  ];

  const leadership = t('insights.leadership.items');

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('insights.badge')}</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('insights.title')}</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            {t('insights.desc')}
          </p>

          {/* Intelligence Framework */}
          <div className="mt-24">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{t('insights.intelligence.badge')}</h3>
            <h4 className="mt-2 text-3xl font-bold">{t('insights.intelligence.title')}</h4>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {framework.map((f, i) => (
                <div key={i} className="rounded-3xl bg-slate-50 p-8">
                  <div className="mb-6 text-blue-600">{f.icon}</div>
                  <h5 className="mb-3 text-xl font-bold">{f.title}</h5>
                  <p className="text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Thought Leadership */}
          <div className="mt-32">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{t('insights.leadership.badge')}</h3>
            <h4 className="mt-2 text-3xl font-bold">{t('insights.leadership.title')}</h4>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {leadership.map((l: any, i: number) => (
                <div key={i} className="group rounded-3xl border border-slate-100 p-10 transition-all hover:bg-blue-600 hover:text-white">
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600 group-hover:text-blue-200">{l.category}</span>
                  <h5 className="mt-4 text-2xl font-bold">{l.title}</h5>
                  <p className="mt-4 text-lg text-slate-600 group-hover:text-white/80">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
