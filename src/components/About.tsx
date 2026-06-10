import { motion } from "motion/react";
import { Shield, Target, Leaf, Award, Calendar } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const principles = [
    { title: t('about.principles.items')[0].title, desc: t('about.principles.items')[0].desc, icon: <Award className="h-6 w-6" /> },
    { title: t('about.principles.items')[1].title, desc: t('about.principles.items')[1].desc, icon: <Shield className="h-6 w-6" /> },
    { title: t('about.principles.items')[2].title, desc: t('about.principles.items')[2].desc, icon: <Leaf className="h-6 w-6" /> },
    { title: t('about.principles.items')[3].title, desc: t('about.principles.items')[3].desc, icon: <Target className="h-6 w-6" /> },
  ];

  const milestones = t('about.journey.milestones');

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('about.badge')}</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('about.title')}</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <p className="text-xl leading-relaxed text-slate-600">
              {t('about.p1')}
            </p>
            <p className="text-xl leading-relaxed text-slate-600">
              {t('about.p2')}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & What Sets Us Apart */}
      <section className="mt-24 bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">{t('about.philosophy.title')}</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {t('about.philosophy.desc')}
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">{t('about.differentiation.title')}</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {t('about.differentiation.p1')}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {t('about.differentiation.p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('about.principles.badge')}</h2>
            <h3 className="mt-4 text-4xl font-bold">{t('about.principles.title')}</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 p-8 transition-all hover:border-blue-100 hover:bg-blue-50/30">
                <div className="mb-6 text-blue-600">{p.icon}</div>
                <h4 className="mb-3 text-xl font-bold">{p.title}</h4>
                <p className="text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-[#040720] py-24 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">{t('about.journey.badge')}</h2>
            <h3 className="mt-4 text-4xl font-bold">{t('about.journey.title')}</h3>
          </div>
          <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-white/10 md:before:left-1/2">
            {milestones.map((m: any, i: number) => (
              <div key={i} className={`relative flex flex-col md:flex-row md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 h-6 w-6 rounded-full border-4 border-[#040720] bg-blue-500 md:left-1/2 md:-ml-3" />
                <div className={`mt-8 md:mt-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <span className="text-2xl font-bold text-blue-400">{m.year}</span>
                  <p className="mt-2 text-lg text-white/70">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
