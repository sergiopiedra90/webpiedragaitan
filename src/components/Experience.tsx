import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = t('experience.items');

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('experience.badge')}</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('experience.title')}</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            {t('experience.desc')}
          </p>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {experiences.map((exp: any, i: number) => (
              <div key={i} className="rounded-3xl border border-slate-100 p-10 transition-all hover:border-blue-200 hover:bg-blue-50/20">
                <h3 className="text-2xl font-bold text-blue-600">{exp.category}</h3>
                <ul className="mt-8 space-y-4">
                  {exp.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-lg text-slate-700">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
