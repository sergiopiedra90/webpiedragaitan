import { motion } from "motion/react";
import { Shield, Target, Leaf, Award, Calendar } from "lucide-react";

export default function About() {
  const principles = [
    { title: "Excellence", desc: "We pursue the highest standards of professional quality in every engagement.", icon: <Award className="h-6 w-6" /> },
    { title: "Integrity", desc: "Transparency and ethical conduct form the foundation of every relationship.", icon: <Shield className="h-6 w-6" /> },
    { title: "Sustainability", desc: "Committed to environmentally responsible and long-term commercial strategies.", icon: <Leaf className="h-6 w-6" /> },
    { title: "Client Focus", desc: "Every strategy is designed around our clients' unique goals and challenges.", icon: <Target className="h-6 w-6" /> },
  ];

  const milestones = [
    { year: "2002", event: "Founded in Costa Rica as a specialized international trade advisory firm." },
    { year: "2002", event: "Became exclusive purchasing agent for ANDROS Group in Central America and the Caribbean." },
    { year: "2002", event: "Launched CHINA YA program with CADEXCO to promote Costa Rica–China trade relations." },
    { year: "2007", event: "Costa Rica–China diplomatic relations established — a process PGA helped catalyze." },
    { year: "2008", event: "Advised Costa Rican national banks on strategic banking relationships with Chinese institutions." },
    { year: "2011", event: "Began advisory role with DAEWOO BUS-AMERICA for luxury bus exports." },
    { year: "2018", event: "Designed and executed the PICARD organic frozen pineapple export program across 1,000+ European stores." },
    { year: "2018", event: "Participated in Costa Rica's adhesion to China's Belt and Road Initiative." },
    { year: "Today", event: "Managing $7M+ in annual export contracts, expanding into Dubai and GCC markets." },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About the Firm</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Two Decades of Strategic Global Impact</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <p className="text-xl leading-relaxed text-slate-600">
              Piedra Gaitán & Asociados has built a reputation as one of Costa Rica's most trusted international trade advisory firms, 
              blending strategic vision with deep cultural understanding of global markets.
            </p>
            <p className="text-xl leading-relaxed text-slate-600">
              PGA offers a strategic vision of international business with comprehensive solutions in commercial architecture and engineering, 
              successfully driving Costa Rican export companies through their internationalization process and into new global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & What Sets Us Apart */}
      <section className="mt-24 bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">Our Philosophy</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Our approach is grounded in principles of service quality, respect for human dignity, environmental responsibility, and complete transparency. 
                These values have enabled us to build stable, profitable, and sustainable commercial relationships that span decades.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">What Sets Us Apart</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We distinguish ourselves through our capacity to develop international commercial intelligence strategies, 
                supported by an extensive network of contacts and a profound understanding of business culture in the world's leading markets.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                PGA continues to lead the way in the international expansion of Costa Rican export companies, 
                consolidating its position as a benchmark in international trade advisory through strategic vision, global market experience, 
                and a firm commitment to excellence, ethics, innovation, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Principles</h2>
            <h3 className="mt-4 text-4xl font-bold">Our Core Values</h3>
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
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Our Journey</h2>
            <h3 className="mt-4 text-4xl font-bold">Key Milestones</h3>
          </div>
          <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-white/10 md:before:left-1/2">
            {milestones.map((m, i) => (
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
