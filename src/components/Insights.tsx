import { motion } from "motion/react";
import { Search, Lightbulb, TrendingUp, Globe, Building2, Briefcase } from "lucide-react";

export default function Insights() {
  const framework = [
    { title: "Global Trend Analysis", desc: "Monitoring shifting trade patterns, consumer preferences, and emerging market opportunities to stay ahead of competition.", icon: <TrendingUp className="h-6 w-6" /> },
    { title: "Customized Market Studies", desc: "In-depth, tailored research into specific markets, sectors, and product categories for informed market entry decisions.", icon: <Search className="h-6 w-6" /> },
    { title: "Geopolitical Monitoring", desc: "Tracking political developments, trade agreements, and regulatory changes that impact international commerce.", icon: <Globe className="h-6 w-6" /> },
    { title: "Country Risk Assessment", desc: "Evaluating political, economic, and operational risks to protect investments and ensure sustainable market presence.", icon: <Building2 className="h-6 w-6" /> },
    { title: "Business Culture Advisory", desc: "Providing cultural intelligence essential for successful negotiations and relationship-building in foreign markets.", icon: <Briefcase className="h-6 w-6" /> },
  ];

  const leadership = [
    { title: "Dubai as a Strategic Export Hub", category: "Market Strategy", desc: "Dubai represents a strategic platform for diversifying Costa Rican exports toward high-purchasing-power markets across the Middle East, Africa, and Southeast Asia." },
    { title: "The Belt and Road Opportunity", category: "Commercial Diplomacy", desc: "Costa Rica's adhesion to China's Belt and Road Initiative opens new corridors for trade, investment, and institutional cooperation with Asia's largest economy." },
    { title: "From Intermediary to Strategic Partner", category: "Thought Leadership", desc: "The evolution of international trade advisory from transactional brokerage to comprehensive strategic partnership redefines how companies approach global expansion." },
    { title: "Agroindustrial Export Excellence", category: "Sector Focus", desc: "Costa Rica's premium agroindustrial products — from organic pineapple to specialty coffee — continue to capture attention in Europe's most demanding retail markets." },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Insights & Intelligence</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Strategic Perspectives on Global Trade</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            PGA positions itself as a strategic firm — not an intermediary — through deep commercial intelligence and thought leadership.
          </p>

          {/* Intelligence Framework */}
          <div className="mt-24">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Commercial Intelligence</h3>
            <h4 className="mt-2 text-3xl font-bold">Our Intelligence Framework</h4>
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
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Thought Leadership</h3>
            <h4 className="mt-2 text-3xl font-bold">Strategic Perspectives</h4>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {leadership.map((l, i) => (
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
