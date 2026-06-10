import { motion } from "motion/react";
import { ArrowRight, Globe, Shield, Zap, Leaf, Target, TrendingUp, Users, Building2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const { t } = useLanguage();

  const impactIndicators = [
    { label: t('home.stats.experience'), value: "23+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: t('home.stats.exports'), value: "$7M+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: t('home.stats.advised'), value: "1,500+", icon: <Users className="h-5 w-5" /> },
    { label: t('home.stats.countries'), value: "15+", icon: <Globe className="h-5 w-5" /> },
  ];

  const capabilities = t('home.capabilities.items');

  const institutionalNetwork = [
    "CADEXCO", "PROCOMER", "Embassy of China in Costa Rica", "ANDROS France", "China Development Bank", "CCPIT"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_3B19637dJIcil7ONqQEfuVTSoQZ/hf_20260316_073908_bc5ccb17-1739-47c1-b697-acd3815bb872.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-blue-400">{t('home.hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            {t('home.hero.title')} <span className="font-medium italic">{t('home.hero.titleItalic')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-white/70 md:text-xl"
          >
            {t('home.hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setCurrentPage("experience")}
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#040720] transition-all hover:bg-blue-400 hover:scale-105"
            >
              {t('home.hero.cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => setCurrentPage("markets")}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
            >
              {t('home.hero.markets')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Indicators */}
      <section className="bg-[#040720] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactIndicators.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-2xl bg-white/5 p-3 text-blue-400">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-white md:text-4xl">{stat.value}</span>
                <span className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="bg-white py-24 text-[#040720]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('home.about.badge')}</h2>
              <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{t('home.about.title')}</h3>
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                {t('home.about.p1')}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {t('home.about.p2')}
              </p>
              <button 
                onClick={() => setCurrentPage("about")}
                className="mt-10 flex items-center gap-2 font-bold text-blue-600 hover:underline"
              >
                {t('home.about.cta')} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="rounded-3xl bg-slate-50 p-10">
              <h4 className="mb-6 text-xl font-bold">{t('home.about.valuesTitle')}</h4>
              <ul className="space-y-4">
                {t('home.about.values').map((val: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <Shield className="h-5 w-5 text-blue-500" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-slate-50 py-24 text-[#040720]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('home.capabilities.badge')}</h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{t('home.capabilities.title')}</h3>
            <p className="mt-4 text-xl text-slate-600">{t('home.capabilities.desc')}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap: any, i: number) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <h4 className="mb-3 text-xl font-bold">{cap.title}</h4>
                <p className="text-slate-600">{cap.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => setCurrentPage("services")}
              className="rounded-full bg-[#040720] px-10 py-4 font-bold text-white transition-transform hover:scale-105"
            >
              {t('home.capabilities.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-[#040720] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">{t('home.reach.badge')}</h2>
              <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{t('home.reach.title')}</h3>
              <p className="mt-6 text-lg text-white/60">{t('home.reach.desc')}</p>
              <div className="mt-10 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-400">{t('home.reach.europe')}</h4>
                  <p className="mt-2 text-white/70">{t('home.reach.europeDesc')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-400">{t('home.reach.eastAsia')}</h4>
                  <p className="mt-2 text-white/70">{t('home.reach.eastAsiaDesc')}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-400">{t('home.reach.westAsia')}</h4>
                  <p className="mt-2 text-white/70">{t('home.reach.westAsiaDesc')}</p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage("markets")}
                className="mt-12 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-bold backdrop-blur-sm transition-all hover:bg-white/10"
              >
                {t('home.reach.cta')}
              </button>
            </div>
            <div className="relative flex min-h-[400px] items-stretch lg:h-full">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
              <img 
                src="https://image2url.com/r2/default/images/1773679193442-5668ad6b-0bf3-45a5-8c6d-f3da35e3fc60.png" 
                alt="International Markets" 
                className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Network */}
      <section className="bg-white py-24 text-[#040720]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('home.network.badge')}</h2>
            <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{t('home.network.title')}</h3>
            <p className="mt-4 text-xl text-slate-600">{t('home.network.desc')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {institutionalNetwork.map((name, i) => (
              <div key={i} className="flex items-center justify-center rounded-xl bg-slate-50 px-8 py-4 font-bold text-slate-400 grayscale transition-all hover:grayscale-0">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 text-white">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">{t('home.cta.title')}</h2>
          <p className="mt-6 text-xl text-blue-100">{t('home.cta.desc')}</p>
          <button 
            onClick={() => setCurrentPage("contact")}
            className="mt-10 rounded-full bg-white px-10 py-4 font-bold text-[#040720] transition-transform hover:scale-105"
          >
            {t('home.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}
