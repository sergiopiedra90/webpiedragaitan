import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      category: "Export Program Development",
      items: [
        "Designed comprehensive export programs for agroindustrial products targeting European and Asian markets.",
        "Coordinated full supply chains from producer organization to international logistics and market launch.",
        "Managed annual contracts exceeding US$7 million in concretized exports in the last year alone.",
        "Successfully launched Costa Rican organic frozen pineapple in 1,000+ European retail points through the PICARD program."
      ]
    },
    {
      category: "Commercial Diplomacy Initiatives",
      items: [
        "Created and led the CHINA YA program — a pioneering initiative that promoted Costa Rica–China diplomatic and commercial ties.",
        "Facilitated Costa Rica's adhesion to the Belt and Road Initiative (2018).",
        "Maintained high-level institutional relationships with the Chinese Embassy in Costa Rica since 2007.",
        "Recognized by PROCOMER, regional business chambers, and Chinese political institutions including the CCPIT."
      ]
    },
    {
      category: "Strategic Advisory Roles",
      items: [
        "Exclusive purchasing agent for ANDROS Group across Central America and the Caribbean since 2002.",
        "Direct advisory to the presidency of DAEWOO BUS-AMERICA (2011–2016) for luxury bus export strategy.",
        "Advised Costa Rica's Banco Nacional and Banco de Costa Rica on strategic Chinese banking partnerships.",
        "Secured a US$40 million banking agreement in favor of BCR through institutional facilitation."
      ]
    },
    {
      category: "International Negotiation Support",
      items: [
        "Annual contract negotiation management for major export clients, providing close commercial advisory.",
        "Successfully mediated the RECOPE–CNPC dispute, preventing a potential US$50M international claim.",
        "Facilitated the orderly liquidation of SORESCO through strategic, confidential negotiation.",
        "Positioned as a trusted strategic partner beyond the traditional intermediary role."
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Strategic Experience</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Proven Impact Across Global Markets</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            A portfolio of strategic initiatives spanning trade development, commercial diplomacy, and high-stakes international negotiation.
          </p>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {experiences.map((exp, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 p-10 transition-all hover:border-blue-200 hover:bg-blue-50/20">
                <h3 className="text-2xl font-bold text-blue-600">{exp.category}</h3>
                <ul className="mt-8 space-y-4">
                  {exp.items.map((item, j) => (
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
