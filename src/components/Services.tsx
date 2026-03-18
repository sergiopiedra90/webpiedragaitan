import { motion } from "motion/react";
import { Globe, TrendingUp, Search, MessageSquare, Map, Landmark } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "International Trade Strategy",
      desc: "We design tailored internationalization plans that align with your company's strengths and target market dynamics.",
      items: [
        "Export plan design and execution",
        "New market identification and entry strategy",
        "Competitive positioning in global markets",
        "Strategic market diversification roadmaps"
      ],
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Export Market Development",
      desc: "End-to-end support for launching and scaling export operations across Europe, East Asia, and Western Asia.",
      items: [
        "Product-market fit assessment",
        "Supply chain organization and coordination",
        "International logistics planning",
        "Market launch execution in target destinations"
      ],
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Commercial Intelligence",
      desc: "Data-driven insights and analysis to make strategic, well-informed decisions in complex international markets.",
      items: [
        "Global trend analysis and market monitoring",
        "Customized market studies",
        "Geopolitical risk assessment",
        "Country-specific business culture advisory"
      ],
      icon: <Search className="h-8 w-8" />
    },
    {
      title: "International Negotiation Support",
      desc: "Expert representation in high-stakes commercial negotiations with multinational corporations and institutions.",
      items: [
        "Annual contract negotiation management",
        "Representation before international conglomerates",
        "Strategic commercial accompaniment",
        "Dispute resolution and conciliation"
      ],
      icon: <MessageSquare className="h-8 w-8" />
    },
    {
      title: "Strategic Market Entry",
      desc: "Comprehensive coordination from supplier organization to product launch in target markets worldwide.",
      items: [
        "Producer and supplier organization",
        "Logistics and distribution coordination",
        "Retail and distribution channel development",
        "Brand positioning in destination markets"
      ],
      icon: <Map className="h-8 w-8" />
    },
    {
      title: "Commercial Diplomacy",
      desc: "Facilitating institutional relationships and bilateral agreements that open doors for trade expansion.",
      items: [
        "Bilateral trade negotiations",
        "Institutional facilitation and mediation",
        "International commercial conflict resolution",
        "Government-to-business liaison support"
      ],
      icon: <Landmark className="h-8 w-8" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our Services</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Comprehensive International Trade Solutions</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            From strategic planning to market execution, we provide the full spectrum of advisory services needed to succeed in international commerce.
          </p>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col gap-6 rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 text-lg text-slate-600">{s.desc}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.items.map((item, j) => (
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
