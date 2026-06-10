import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Markets() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">{t('markets.badge')}</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">{t('markets.title')}</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            {t('markets.desc')}
          </p>

          <div className="mt-20 space-y-24">
            {/* Europe */}
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">{t('markets.europe.title')}</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">{t('markets.europe.countries')}</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>{t('markets.europe.p1')}</p>
                  <p>{t('markets.europe.p2')}</p>
                  <p>{t('markets.europe.p3')}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-100 overflow-hidden flex items-center justify-center h-[400px]">
                <img 
                  src="https://image2url.com/r2/default/images/1773679908396-d7bd20ca-c7fc-4cc8-9de8-a2db5cfc9635.png" 
                  alt="Europe" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* East Asia */}
            <div className="grid gap-12 lg:grid-cols-2 lg:flex-row-reverse">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold text-blue-600">{t('markets.eastAsia.title')}</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">{t('markets.eastAsia.countries')}</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>{t('markets.eastAsia.p1')}</p>
                  <p>{t('markets.eastAsia.p2')}</p>
                  <p>{t('markets.eastAsia.p3')}</p>
                  <p>{t('markets.eastAsia.p4')}</p>
                  <p>{t('markets.eastAsia.p5')}</p>
                </div>
              </div>
              <div className="lg:order-1 rounded-3xl bg-slate-100 overflow-hidden flex items-center justify-center h-[400px]">
                <img 
                  src="https://image2url.com/r2/default/images/1773679961332-5c3c366b-c280-4bbb-8d0d-1453b0829c67.png" 
                  alt="East Asia" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Western Asia */}
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">{t('markets.westAsia.title')}</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">{t('markets.westAsia.countries')}</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>{t('markets.westAsia.p1')}</p>
                  <p>{t('markets.westAsia.p2')}</p>
                  <p>{t('markets.westAsia.p3')}</p>
                  <p>{t('markets.westAsia.p4')}</p>
                  <p>{t('markets.westAsia.p5')}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-100 overflow-hidden flex items-center justify-center h-[400px]">
                <img 
                  src="https://i.ibb.co/yFV1TxCw/west-asia.png" 
                  alt="Western Asia" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
