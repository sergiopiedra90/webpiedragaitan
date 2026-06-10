import { motion } from "motion/react";
import { Globe, TrendingUp, Search, MessageSquare, Map, Landmark } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = t('services.items');
  const icons = [
    <TrendingUp className="h-8 w-8" />,
    <Globe className="h-8 w-8" />,
    <Search className="h-8 w-8" />,
    <MessageSquare className="h-8 w-8" />,
    <Map className="h-8 w-8" />,
    <Landmark className="h-8 w-8" />
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('services.badge')}</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('services.title')}</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            {t('services.desc')}
          </p>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {services.map((s: any, i: number) => (
              <div key={i} className="flex flex-col gap-6 rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  {icons[i % icons.length]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 text-lg text-slate-600">{s.desc}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
