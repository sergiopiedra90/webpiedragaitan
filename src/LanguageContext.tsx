import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage') as Language;
      if (saved && ['en', 'es', 'fr'].includes(saved)) return saved;
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if key missing in current language
        let fallback: any = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk]) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: any = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      markets: "Markets",
      experience: "Experience",
      insights: "Insights",
      contact: "Contact"
    },
    footer: {
      desc: "Strategic international trade advisory connecting Costa Rican enterprises to global markets since 2002.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved."
    },
    home: {
      hero: {
        badge: "Strategic International Advisory",
        title: "Driving Global Expansion for",
        titleItalic: "Visionary Export Companies",
        desc: "Over two decades of strategic advisory in international trade, connecting Costa Rican enterprises to Europe, Asia, and beyond.",
        cta: "Our Experience",
        markets: "Explore Markets"
      },
      stats: {
        experience: "Years of Experience",
        exports: "Annual Exports Managed",
        advised: "Entrepreneurs Advised",
        countries: "Countries Served"
      },
      about: {
        badge: "About the Firm",
        title: "A Trusted Partner in International Commerce",
        p1: "Founded in 2002, Piedra Gaitán & Asociados (PGA) is a Costa Rican firm specializing in strategic international trade advisory. With a solid reputation built on excellence, professionalism, and ethics, PGA has become the trusted ally for leading national and international export companies.",
        p2: "Our philosophy rests on service quality, transparency in every operation, and a strong orientation toward sustainable, profitable commercial relationships.",
        cta: "Learn More About Us",
        valuesTitle: "Our Core Values",
        values: [
          "Excellence & Professionalism",
          "Ethical Business Conduct",
          "Environmental Responsibility",
          "Client-Centered Strategy",
          "Sustainable Growth"
        ]
      },
      capabilities: {
        badge: "What We Do",
        title: "Strategic Capabilities",
        desc: "Comprehensive solutions in commercial architecture and international business engineering.",
        cta: "View All Services",
        items: [
          { title: "International Trade Strategy", desc: "Comprehensive export strategies tailored for global market entry and expansion." },
          { title: "Export Market Development", desc: "Identifying and capturing high-value opportunities in Europe, East Asia, and Western Asia." },
          { title: "Commercial Intelligence", desc: "Data-driven market analysis, trend monitoring, and risk assessment for informed decisions." },
          { title: "International Negotiation", desc: "Expert representation and contract negotiation with multinational corporations." },
          { title: "Commercial Diplomacy", desc: "Bridging institutional relationships to facilitate bilateral trade agreements." },
          { title: "Strategic Market Entry", desc: "End-to-end coordination from supply chain to product launch in target markets." }
        ]
      },
      reach: {
        badge: "Global Reach",
        title: "International Markets Expertise",
        desc: "Deep knowledge of business culture and trade dynamics across three continents.",
        cta: "Explore Markets",
        europe: "Europe",
        europeDesc: "France · Italy · Portugal · UK · Scandinavia",
        eastAsia: "East Asia",
        eastAsiaDesc: "China · Japan · South Korea",
        westAsia: "Western Asia",
        westAsiaDesc: "Dubai · UAE · GCC Markets"
      },
      network: {
        badge: "Institutional Network",
        title: "Strategic Partnerships & Collaborations",
        desc: "Trusted relationships with leading institutions and organizations."
      },
      cta: {
        title: "Become Our Strategic Ally in Your Internationalization Journey",
        desc: "Let's explore how PGA can accelerate your global expansion with proven strategies and deep market expertise.",
        button: "Contact Us Today"
      }
    },
    about: {
      badge: "About the Firm",
      title: "Two Decades of Strategic Global Impact",
      p1: "Piedra Gaitán & Asociados has built a reputation as one of Costa Rica's most trusted international trade advisory firms, blending strategic vision with deep cultural understanding of global markets.",
      p2: "PGA offers a strategic vision of international business with comprehensive solutions in commercial architecture and engineering, successfully driving Costa Rican export companies through their internationalization process and into new global markets.",
      philosophy: {
        title: "Our Philosophy",
        desc: "Our approach is grounded in principles of service quality, respect for human dignity, environmental responsibility, and complete transparency. These values have enabled us to build stable, profitable, and sustainable commercial relationships that span decades."
      },
      differentiation: {
        title: "What Sets Us Apart",
        p1: "We distinguish ourselves through our capacity to develop international commercial intelligence strategies, supported by an extensive network of contacts and a profound understanding of business culture in the world's leading markets.",
        p2: "PGA continues to lead the way in the international expansion of Costa Rican export companies, consolidating its position as a benchmark in international trade advisory through strategic vision, global market experience, and a firm commitment to excellence, ethics, innovation, and sustainable development."
      },
      principles: {
        badge: "Principles",
        title: "Our Core Values",
        items: [
          { title: "Excellence", desc: "We pursue the highest standards of professional quality in every engagement." },
          { title: "Integrity", desc: "Transparency and ethical conduct form the foundation of every relationship." },
          { title: "Sustainability", desc: "Committed to environmentally responsible and long-term commercial strategies." },
          { title: "Client Focus", desc: "Every strategy is designed around our clients' unique goals and challenges." }
        ]
      },
      journey: {
        badge: "Our Journey",
        title: "Key Milestones",
        milestones: [
          { year: "2002", event: "Founded in Costa Rica as a specialized international trade advisory firm." },
          { year: "2002", event: "Became exclusive purchasing agent for ANDROS Group in Central America and the Caribbean." },
          { year: "2002", event: "Launched CHINA YA program with CADEXCO to promote Costa Rica–China trade relations." },
          { year: "2007", event: "Costa Rica–China diplomatic relations established — a process PGA helped catalyze." },
          { year: "2008", event: "Advised Costa Rican national banks on strategic banking relationships with Chinese institutions." },
          { year: "2011", event: "Began advisory role with DAEWOO BUS-AMERICA for luxury bus exports." },
          { year: "2018", event: "Designed and executed the PICARD organic frozen pineapple export program across 1,000+ European stores." },
          { year: "2018", event: "Participated in Costa Rica's adhesion to China's Belt and Road Initiative." },
          { year: "Today", event: "Managing $7M+ in annual export contracts, expanding into Dubai and GCC markets." }
        ]
      }
    },
    services: {
      badge: "Our Services",
      title: "Comprehensive International Trade Solutions",
      desc: "From strategic planning to market execution, we provide the full spectrum of advisory services needed to succeed in international commerce.",
      items: [
        {
          title: "International Trade Strategy",
          desc: "We design tailored internationalization plans that align with your company's strengths and target market dynamics.",
          items: ["Export plan design and execution", "New market identification and entry strategy", "Competitive positioning in global markets", "Strategic market diversification roadmaps"]
        },
        {
          title: "Export Market Development",
          desc: "End-to-end support for launching and scaling export operations across Europe, East Asia, and Western Asia.",
          items: ["Product-market fit assessment", "Supply chain organization and coordination", "International logistics planning", "Market launch execution in target destinations"]
        },
        {
          title: "Commercial Intelligence",
          desc: "Data-driven insights and analysis to make strategic, well-informed decisions in complex international markets.",
          items: ["Global trend analysis and market monitoring", "Customized market studies", "Geopolitical risk assessment", "Country-specific business culture advisory"]
        },
        {
          title: "International Negotiation Support",
          desc: "Expert representation in high-stakes commercial negotiations with multinational corporations and institutions.",
          items: ["Annual contract negotiation management", "Representation before international conglomerates", "Strategic commercial accompaniment", "Dispute resolution and conciliation"]
        },
        {
          title: "Strategic Market Entry",
          desc: "Comprehensive coordination from supplier organization to product launch in target markets worldwide.",
          items: ["Producer and supplier organization", "Logistics and distribution coordination", "Retail and distribution channel development", "Brand positioning in destination markets"]
        },
        {
          title: "Commercial Diplomacy",
          desc: "Facilitating institutional relationships and bilateral agreements that open doors for trade expansion.",
          items: ["Bilateral trade negotiations", "Institutional facilitation and mediation", "International commercial conflict resolution", "Government-to-business liaison support"]
        }
      ]
    },
    markets: {
      badge: "International Markets",
      title: "Global Expertise, Local Understanding",
      desc: "Over 23 years of cultivating deep knowledge of business culture, trade dynamics, and commercial opportunities across three continents.",
      europe: {
        title: "Europe",
        countries: "France · Italy · Portugal · UK · Scandinavia · Spain · Poland · Germany",
        p1: "Exclusive purchasing agent for the ANDROS Group — one of Europe's largest food conglomerates — operating across France, Spain, Poland, Italy, Germany, the UK, and China since 2002.",
        p2: "Designed and executed the PICARD organic frozen pineapple program, reaching 1,000+ retail points across France.",
        p3: "Extensive experience in exporting premium agroindustrial products including IQF frozen pineapple, specialty coffee, frozen fruit juices and purées, and dairy products."
      },
      eastAsia: {
        title: "East Asia",
        countries: "China · Japan · South Korea",
        p1: "Pioneered the CHINA YA program (2002) — a landmark initiative promoting diplomatic and commercial ties between Costa Rica and China, culminating in diplomatic relations in 2007.",
        p2: "Advised 1,500+ Costa Rican and Central American entrepreneurs on conducting business in China over seven years.",
        p3: "Facilitated strategic banking relationships between Costa Rican national banks and Chinese institutions including China Development Bank, Bank of China, ICBC, and Agricultural Bank of China — securing a US$40M agreement for BCR.",
        p4: "Played a key role in Costa Rica's adhesion to China's Belt and Road Initiative (2018).",
        p5: "Strategically managed the RECOPE–CNPC conciliation process, averting a potential US$50M international dispute."
      },
      westAsia: {
        title: "Western Asia",
        countries: "Dubai · UAE · GCC Markets",
        p1: "Developing a strategic vision to enter the UAE market by leveraging Dubai as a central logistics and commercial hub connecting West Asia, Africa, and Southeast Asia.",
        p2: "Participation strategy for major trade fairs including Gulfood.",
        p3: "Exploring connections with free trade zones such as JAFZA.",
        p4: "Building alliances with halal-certified distributors.",
        p5: "Commercial intelligence for accessing high-purchasing-power GCC markets."
      }
    },
    experience: {
      badge: "Strategic Experience",
      title: "Proven Impact Across Global Markets",
      desc: "A portfolio of strategic initiatives spanning trade development, commercial diplomacy, and high-stakes international negotiation.",
      items: [
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
      ]
    },
    insights: {
      badge: "Insights & Intelligence",
      title: "Strategic Perspectives on Global Trade",
      desc: "PGA positions itself as a strategic firm — not an intermediary — through deep commercial intelligence and thought leadership.",
      intelligence: {
        badge: "Commercial Intelligence",
        title: "Our Intelligence Framework",
        items: [
          { title: "Global Trend Analysis", desc: "Monitoring shifting trade patterns, consumer preferences, and emerging market opportunities to stay ahead of competition." },
          { title: "Customized Market Studies", desc: "In-depth, tailored research into specific markets, sectors, and product categories for informed market entry decisions." },
          { title: "Geopolitical Monitoring", desc: "Tracking political developments, trade agreements, and regulatory changes that impact international commerce." },
          { title: "Country Risk Assessment", desc: "Evaluating political, economic, and operational risks to protect investments and ensure sustainable market presence." },
          { title: "Business Culture Advisory", desc: "Providing cultural intelligence essential for successful negotiations and relationship-building in foreign markets." }
        ]
      },
      leadership: {
        badge: "Thought Leadership",
        title: "Strategic Perspectives",
        items: [
          { title: "Dubai as a Strategic Export Hub", category: "Market Strategy", desc: "Dubai represents a strategic platform for diversifying Costa Rican exports toward high-purchasing-power markets across the Middle East, Africa, and Southeast Asia." },
          { title: "The Belt and Road Opportunity", category: "Commercial Diplomacy", desc: "Costa Rica's adhesion to China's Belt and Road Initiative opens new corridors for trade, investment, and institutional cooperation with Asia's largest economy." },
          { title: "From Intermediary to Strategic Partner", category: "Thought Leadership", desc: "The evolution of international trade advisory from transactional brokerage to comprehensive strategic partnership redefines how companies approach global expansion." },
          { title: "Agroindustrial Export Excellence", category: "Sector Focus", desc: "Costa Rica's premium agroindustrial products — from organic pineapple to specialty coffee — continue to capture attention in Europe's most demanding retail markets." }
        ]
      }
    },
    contact: {
      badge: "Contact",
      title: "Start a Strategic Conversation",
      desc: "Whether you're exploring new markets or seeking to strengthen your export operations, we're ready to discuss how PGA can support your international growth.",
      emailLabel: "Email",
      locationLabel: "Location",
      form: {
        title: "Request a Consultation",
        desc: "Fill out the form below and our advisory team will respond promptly.",
        name: "Full Name *",
        company: "Company *",
        country: "Country *",
        industry: "Industry / Sector",
        email: "Email *",
        interest: "Strategic Interest *",
        interestPlaceholder: "Select your area of interest",
        interests: {
          trade: "International Trade Strategy",
          export: "Export Market Development",
          intelligence: "Commercial Intelligence",
          negotiation: "International Negotiation",
          diplomacy: "Commercial Diplomacy",
          entry: "Strategic Market Entry",
          other: "Other"
        },
        message: "Message",
        submit: "Submit Consultation Request",
        success: "Thank you for your request. We will contact you soon."
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      markets: "Mercados",
      experience: "Experiencia",
      insights: "Perspectivas",
      contact: "Contacto"
    },
    footer: {
      desc: "Asesoría estratégica en comercio internacional conectando empresas costarricenses con mercados globales desde 2002.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    },
    home: {
      hero: {
        badge: "Asesoría Internacional Estratégica",
        title: "Impulsando la Expansión Global para",
        titleItalic: "Empresas Exportadoras Visionarias",
        desc: "Más de dos décadas de asesoría estratégica en comercio internacional, conectando empresas costarricenses con Europa, Asia y más allá.",
        cta: "Nuestra Experiencia",
        markets: "Explorar Mercados"
      },
      stats: {
        experience: "Años de Experiencia",
        exports: "Exportaciones Anuales Gestionadas",
        advised: "Emprendedores Asesorados",
        countries: "Países Atendidos"
      },
      about: {
        badge: "Sobre la Firma",
        title: "Un Socio de Confianza en el Comercio Internacional",
        p1: "Fundada en 2002, Piedra Gaitán & Asociados (PGA) es una firma costarricense especializada en asesoría estratégica de comercio internacional. Con una sólida reputación construida sobre la excelencia, el profesionalismo y la ética, PGA se ha convertido en el aliado de confianza para empresas exportadoras nacionales e internacionales líderes.",
        p2: "Nuestra filosofía se basa en la calidad del servicio, la transparencia en cada operación y una fuerte orientación hacia relaciones comerciales sostenibles y rentables.",
        cta: "Conozca Más Sobre Nosotros",
        valuesTitle: "Nuestros Valores Fundamentales",
        values: [
          "Excelencia y Profesionalismo",
          "Conducta Empresarial Ética",
          "Responsabilidad Ambiental",
          "Estrategia Centrada en el Cliente",
          "Crecimiento Sostenible"
        ]
      },
      capabilities: {
        badge: "Qué Hacemos",
        title: "Capacidades Estratégicas",
        desc: "Soluciones integrales en arquitectura comercial e ingeniería de negocios internacionales.",
        cta: "Ver Todos los Servicios",
        items: [
          { title: "Estrategia de Comercio Internacional", desc: "Estrategias de exportación integrales adaptadas para la entrada y expansión en mercados globales." },
          { title: "Desarrollo de Mercados de Exportación", desc: "Identificación y captura de oportunidades de alto valor en Europa, Asia Oriental y Asia Occidental." },
          { title: "Inteligencia Comercial", desc: "Análisis de mercado basado en datos, monitoreo de tendencias y evaluación de riesgos para decisiones informadas." },
          { title: "Negociación Internacional", desc: "Representación experta y negociación de contratos con corporaciones multinacionales." },
          { title: "Diplomacia Comercial", desc: "Puente en las relaciones institucionales para facilitar acuerdos comerciales bilaterales." },
          { title: "Entrada Estratégica al Mercado", desc: "Coordinación de extremo a extremo desde la cadena de suministro hasta el lanzamiento del producto en los mercados objetivo." }
        ]
      },
      reach: {
        badge: "Alcance Global",
        title: "Experiencia en Mercados Internacionales",
        desc: "Profundo conocimiento de la cultura empresarial y la dinámica comercial en tres continentes.",
        cta: "Explorar Mercados",
        europe: "Europa",
        europeDesc: "Francia · Italia · Portugal · Reino Unido · Escandinavia",
        eastAsia: "Asia Oriental",
        eastAsiaDesc: "China · Japón · Corea del Sur",
        westAsia: "Asia Occidental",
        westAsiaDesc: "Dubái · Emiratos Árabes Unidos · Mercados del CCG"
      },
      network: {
        badge: "Red Institucional",
        title: "Alianzas Estratégicas y Colaboraciones",
        desc: "Relaciones de confianza con instituciones y organizaciones líderes."
      },
      cta: {
        title: "Conviértase en Nuestro Aliado Estratégico en su Viaje de Internacionalización",
        desc: "Exploremos cómo PGA puede acelerar su expansión global con estrategias probadas y una profunda experiencia en el mercado.",
        button: "Contáctenos Hoy"
      }
    },
    about: {
      badge: "Sobre la Firma",
      title: "Dos Décadas de Impacto Global Estratégico",
      p1: "Piedra Gaitán & Asociados ha construido una reputación como una de las firmas de asesoría de comercio internacional más confiables de Costa Rica, combinando visión estratégica con un profundo entendimiento cultural de los mercados globales.",
      p2: "PGA ofrece una visión estratégica de los negocios internacionales con soluciones integrales en arquitectura y ingeniería comercial, impulsando con éxito a las empresas exportadoras costarricenses a través de su proceso de internacionalización y hacia nuevos mercados globales.",
      philosophy: {
        title: "Nuestra Filosofía",
        desc: "Nuestro enfoque se fundamenta en principios de calidad de servicio, respeto a la dignidad humana, responsabilidad ambiental y transparencia total. Estos valores nos han permitido construir relaciones comerciales estables, rentables y sostenibles que abarcan décadas."
      },
      differentiation: {
        title: "Lo que nos Diferencia",
        p1: "Nos distinguimos por nuestra capacidad para desarrollar estrategias de inteligencia comercial internacional, respaldadas por una extensa red de contactos y un profundo conocimiento de la cultura empresarial en los principales mercados del mundo.",
        p2: "PGA continúa liderando el camino en la expansión internacional de las empresas exportadoras costarricenses, consolidando su posición como referente en la asesoría de comercio internacional a través de la visión estratégica, la experiencia en el mercado global y un firme compromiso con la excelencia, la ética, la innovación y el desarrollo sostenible."
      },
      principles: {
        badge: "Principios",
        title: "Nuestros Valores Fundamentales",
        items: [
          { title: "Excelencia", desc: "Buscamos los más altos estándares de calidad profesional en cada compromiso." },
          { title: "Integridad", desc: "La transparencia y la conducta ética forman la base de cada relación." },
          { title: "Sostenibilidad", desc: "Comprometidos con estrategias comerciales ambientalmente responsables y a largo plazo." },
          { title: "Enfoque al Cliente", desc: "Cada estrategia está diseñada en torno a las metas y desafíos únicos de nuestros clientes." }
        ]
      },
      journey: {
        badge: "Nuestro Viaje",
        title: "Hitos Clave",
        milestones: [
          { year: "2002", event: "Fundada en Costa Rica como una firma especializada en asesoría de comercio internacional." },
          { year: "2002", event: "Se convirtió en agente de compras exclusivo para el Grupo ANDROS en Centroamérica y el Caribe." },
          { year: "2002", event: "Lanzó el programa CHINA YA con CADEXCO para promover las relaciones comerciales Costa Rica–China." },
          { year: "2007", event: "Se establecieron relaciones diplomáticas Costa Rica–China, un proceso que PGA ayudó a catalizar." },
          { year: "2008", event: "Asesoró a bancos nacionales costarricenses sobre relaciones bancarias estratégicas con instituciones chinas." },
          { year: "2011", event: "Inició el rol de asesoría con DAEWOO BUS-AMERICA para exportaciones de autobuses de lujo." },
          { year: "2018", event: "Diseñó y ejecutó el programa de exportación de piña orgánica congelada PICARD en más de 1,000 tiendas europeas." },
          { year: "2018", event: "Participó en la adhesión de Costa Rica a la Iniciativa de la Franja y la Ruta de China." },
          { year: "Hoy", event: "Gestionando más de $7M en contratos de exportación anuales, expandiéndose a Dubái y los mercados del CCG." }
        ]
      }
    },
    services: {
      badge: "Nuestros Servicios",
      title: "Soluciones Integrales de Comercio Internacional",
      desc: "Desde la planificación estratégica hasta la ejecución en el mercado, brindamos el espectro completo de servicios de asesoría necesarios para tener éxito en el comercio internacional.",
      items: [
        {
          title: "Estrategia de Comercio Internacional",
          desc: "Diseñamos planes de internacionalización a medida que se alinean con las fortalezas de su empresa y la dinámica del mercado objetivo.",
          items: ["Diseño y ejecución de planes de exportación", "Identificación de nuevos mercados y estrategia de entrada", "Posicionamiento competitivo en mercados globales", "Hojas de ruta estratégicas para la diversificación de mercados"]
        },
        {
          title: "Desarrollo de Mercados de Exportación",
          desc: "Soporte integral para el lanzamiento y escalado de operaciones de exportación en Europa, Asia Oriental y Asia Occidental.",
          items: ["Evaluación de ajuste producto-mercado", "Organización y coordinación de la cadena de suministro", "Planificación logística internacional", "Ejecución del lanzamiento al mercado en destinos objetivo"]
        },
        {
          title: "Inteligencia Comercial",
          desc: "Perspectivas y análisis basados en datos para tomar decisiones estratégicas y bien informadas en mercados internacionales complejos.",
          items: ["Análisis de tendencias globales y monitoreo de mercado", "Estudios de mercado personalizados", "Evaluación de riesgos geopolíticos", "Asesoría en cultura empresarial específica de cada país"]
        },
        {
          title: "Soporte en Negociación Internacional",
          desc: "Representación experta en negociaciones comerciales de alto nivel con corporaciones e instituciones multinacionales.",
          items: ["Gestión de negociación de contratos anuales", "Representación ante conglomerados internacionales", "Acompañamiento comercial estratégico", "Resolución de disputas y conciliación"]
        },
        {
          title: "Entrada Estratégica al Mercado",
          desc: "Coordinación integral desde la organización de proveedores hasta el lanzamiento del producto en mercados objetivo en todo el mundo.",
          items: ["Organización de productores y proveedores", "Coordinación de logística y distribución", "Desarrollo de canales de venta minorista y distribución", "Posicionamiento de marca en mercados de destino"]
        },
        {
          title: "Diplomacia Comercial",
          desc: "Facilitando relaciones institucionales y acuerdos bilaterales que abren puertas para la expansión comercial.",
          items: ["Negociaciones comerciales bilaterales", "Facilitación y mediación institucional", "Resolución de conflictos comerciales internacionales", "Soporte de enlace entre gobierno y empresas"]
        }
      ]
    },
    markets: {
      badge: "Mercados Internacionales",
      title: "Experiencia Global, Entendimiento Local",
      desc: "Más de 23 años cultivando un profundo conocimiento de la cultura empresarial, la dinámica comercial y las oportunidades comerciales en tres continentes.",
      europe: {
        title: "Europa",
        countries: "Francia · Italia · Portugal · Reino Unido · Escandinavia · España · Polonia · Alemania",
        p1: "Agente de compras exclusivo para el Grupo ANDROS — uno de los conglomerados de alimentos más grandes de Europa — operando en Francia, España, Polonia, Italia, Alemania, el Reino Unido y China desde 2002.",
        p2: "Diseñó y ejecutó el programa de piña orgánica congelada PICARD, llegando a más de 1,000 puntos de venta en toda Francia.",
        p3: "Amplia experiencia en la exportación de productos agroindustriales premium, incluyendo piña congelada IQF, café de especialidad, jugos y purés de frutas congelados y productos lácteos."
      },
      eastAsia: {
        title: "Asia Oriental",
        countries: "China · Japón · Corea del Sur",
        p1: "Pionero del programa CHINA YA (2002) — una iniciativa histórica que promovió los lazos diplomáticos y comerciales entre Costa Rica y China, culminando en relaciones diplomáticas en 2007.",
        p2: "Asesoró a más de 1,500 empresarios costarricenses y centroamericanos sobre cómo hacer negocios en China durante siete años.",
        p3: "Facilitó relaciones bancarias estratégicas entre bancos nacionales costarricenses e instituciones chinas, incluyendo el Banco de Desarrollo de China, el Banco de China, el ICBC y el Banco Agrícola de China, asegurando un acuerdo de US$40M para el BCR.",
        p4: "Desempeñó un papel clave en la adhesión de Costa Rica a la Iniciativa de la Franja y la Ruta de China (2018).",
        p5: "Gestionó estratégicamente el proceso de conciliación RECOPE–CNPC, evitando una potencial disputa internacional de US$50M."
      },
      westAsia: {
        title: "Asia Occidental",
        countries: "Dubái · Emiratos Árabes Unidos · Mercados del CCG",
        p1: "Desarrollando una visión estratégica para entrar en el mercado de los EAU aprovechando Dubái como un centro logístico y comercial central que conecta Asia Occidental, África y el Sudeste Asiático.",
        p2: "Estrategia de participación en las principales ferias comerciales, incluyendo Gulfood.",
        p3: "Explorando conexiones con zonas de libre comercio como JAFZA.",
        p4: "Construyendo alianzas con distribuidores certificados halal.",
        p5: "Inteligencia comercial para acceder a los mercados del CCG de alto poder adquisitivo."
      }
    },
    experience: {
      badge: "Experiencia Estratégica",
      title: "Impacto Probado en Mercados Globales",
      desc: "Un portafolio de iniciativas estratégicas que abarcan el desarrollo comercial, la diplomacia comercial y la negociación internacional de alto nivel.",
      items: [
        {
          category: "Desarrollo de Programas de Exportación",
          items: [
            "Diseñó programas integrales de exportación para productos agroindustriales dirigidos a mercados europeos y asiáticos.",
            "Coordinó cadenas de suministro completas desde la organización de productores hasta la logística internacional y el lanzamiento al mercado.",
            "Gestionó contratos anuales que superan los US$7 millones en exportaciones concretadas solo en el último año.",
            "Lanzó con éxito piña orgánica congelada costarricense en más de 1,000 puntos de venta europeos a través del programa PICARD."
          ]
        },
        {
          category: "Iniciativas de Diplomacia Comercial",
          items: [
            "Creó y lideró el programa CHINA YA — una iniciativa pionera que promovió los lazos diplomáticos y comerciales entre Costa Rica y China.",
            "Facilitó la adhesión de Costa Rica a la Iniciativa de la Franja y la Ruta (2018).",
            "Mantuvo relaciones institucionales de alto nivel con la Embajada de China en Costa Rica desde 2007.",
            "Reconocido por PROCOMER, cámaras empresariales regionales e instituciones políticas chinas, incluyendo el CCPIT."
          ]
        },
        {
          category: "Roles de Asesoría Estratégica",
          items: [
            "Agente de compras exclusivo para el Grupo ANDROS en Centroamérica y el Caribe desde 2002.",
            "Asesoría directa a la presidencia de DAEWOO BUS-AMERICA (2011–2016) para la estrategia de exportación de autobuses de lujo.",
            "Asesoró al Banco Nacional de Costa Rica y al Banco de Costa Rica sobre alianzas bancarias chinas estratégicas.",
            "Aseguró un acuerdo bancario de US$40 millones a favor del BCR a través de la facilitación institucional."
          ]
        },
        {
          category: "Soporte en Negociación Internacional",
          items: [
            "Gestión de negociación de contratos anuales para importantes clientes de exportación, brindando una estrecha asesoría comercial.",
            "Medió con éxito en la disputa RECOPE–CNPC, evitando una potencial reclamación internacional de US$50M.",
            "Facilitó la liquidación ordenada de SORESCO a través de una negociación estratégica y confidencial.",
            "Posicionado como un socio estratégico de confianza más allá del rol tradicional de intermediario."
          ]
        }
      ]
    },
    insights: {
      badge: "Perspectivas e Inteligencia",
      title: "Perspectivas Estratégicas sobre el Comercio Global",
      desc: "PGA se posiciona como una firma estratégica — no un intermediario — a través de una profunda inteligencia comercial y liderazgo de pensamiento.",
      intelligence: {
        badge: "Inteligencia Comercial",
        title: "Nuestro Marco de Inteligencia",
        items: [
          { title: "Análisis de Tendencias Globales", desc: "Monitoreo de patrones comerciales cambiantes, preferencias de los consumidores y oportunidades de mercados emergentes para mantenerse por delante de la competencia." },
          { title: "Estudios de Mercado Personalizados", desc: "Investigación profunda y a medida en mercados, sectores y categorías de productos específicos para decisiones de entrada al mercado informadas." },
          { title: "Monitoreo Geopolítico", desc: "Seguimiento de desarrollos políticos, acuerdos comerciales y cambios regulatorios que impactan el comercio internacional." },
          { title: "Evaluación de Riesgo País", desc: "Evaluación de riesgos políticos, económicos y operativos para proteger las inversiones y asegurar una presencia sostenible en el mercado." },
          { title: "Asesoría en Cultura Empresarial", desc: "Proporcionando inteligencia cultural esencial para negociaciones exitosas y la construcción de relaciones en mercados extranjeros." }
        ]
      },
      leadership: {
        badge: "Liderazgo de Pensamiento",
        title: "Perspectivas Estratégicas",
        items: [
          { title: "Dubái como Hub Estratégico de Exportación", category: "Estrategia de Mercado", desc: "Dubái representa una plataforma estratégica para diversificar las exportaciones costarricenses hacia mercados de alto poder adquisitivo en todo el Medio Oriente, África y el Sudeste Asiático." },
          { title: "La Oportunidad de la Franja y la Ruta", category: "Diplomacia Comercial", desc: "La adhesión de Costa Rica a la Iniciativa de la Franja y la Ruta de China abre nuevos corredores para el comercio, la inversión y la cooperación institucional con la economía más grande de Asia." },
          { title: "De Intermediario a Socio Estratégico", category: "Liderazgo de Pensamiento", desc: "La evolución de la asesoría en comercio internacional de corretaje transaccional a asociación estratégica integral redefine cómo las empresas abordan la expansión global." },
          { title: "Excelencia en Exportación Agroindustrial", category: "Enfoque Sectorial", desc: "Los productos agroindustriales premium de Costa Rica — desde la piña orgánica hasta el café de especialidad — continúan captando la atención en los mercados minoristas más exigentes de Europa." }
        ]
      }
    },
    contact: {
      badge: "Contacto",
      title: "Inicie una Conversación Estratégica",
      desc: "Ya sea que esté explorando nuevos mercados o buscando fortalecer sus operaciones de exportación, estamos listos para discutir cómo PGA puede apoyar su crecimiento internacional.",
      emailLabel: "Correo Electrónico",
      locationLabel: "Ubicación",
      form: {
        title: "Solicite una Consulta",
        desc: "Complete el formulario a continuación y nuestro equipo de asesoría responderá a la brevedad.",
        name: "Nombre Completo *",
        company: "Empresa *",
        country: "País *",
        industry: "Industria / Sector",
        email: "Correo Electrónico *",
        interest: "Interés Estratégico *",
        interestPlaceholder: "Seleccione su área de interés",
        interests: {
          trade: "Estrategia de Comercio Internacional",
          export: "Desarrollo de Mercados de Exportación",
          intelligence: "Inteligencia Comercial",
          negotiation: "Negociación Internacional",
          diplomacy: "Diplomacia Comercial",
          entry: "Entrada Estratégica al Mercado",
          other: "Otro"
        },
        message: "Mensaje",
        submit: "Enviar Solicitud de Consulta",
        success: "Gracias por su solicitud. Nos pondremos en contacto con usted pronto."
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      markets: "Marchés",
      experience: "Expérience",
      insights: "Perspectives",
      contact: "Contact"
    },
    footer: {
      desc: "Conseil stratégique en commerce international connectant les entreprises costariciennes aux marchés mondiaux depuis 2002.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      rights: "Tous droits réservés."
    },
    home: {
      hero: {
        badge: "Conseil International Stratégique",
        title: "Stimuler l'Expansion Mondiale pour les",
        titleItalic: "Entreprises d'Exportation Visionnaires",
        desc: "Plus de deux décennies de conseil stratégique en commerce international, connectant les entreprises costariciennes à l'Europe, l'Asie et au-delà.",
        cta: "Notre Expérience",
        markets: "Explorer les Marchés"
      },
      stats: {
        experience: "Années d'Expérience",
        exports: "Exportations Annuelles Gérées",
        advised: "Entrepreneurs Conseillés",
        countries: "Pays Desservis"
      },
      about: {
        badge: "À Propos du Cabinet",
        title: "Un Partenaire de Confiance dans le Commerce International",
        p1: "Fondé en 2002, Piedra Gaitán & Asociados (PGA) est un cabinet costaricien spécialisé dans le conseil stratégique en commerce international. Avec une solide réputation bâtie sur l'excellence, le professionnalisme et l'éthique, PGA est devenu l'allié de confiance des principales entreprises d'exportation nationales et internationales.",
        p2: "Notre philosophie repose sur la qualité du service, la transparence dans chaque opération et une forte orientation vers des relations commerciales durables et rentables.",
        cta: "En Savoir Plus Sur Nous",
        valuesTitle: "Nos Valeurs Fondamentales",
        values: [
          "Excellence et Professionnalisme",
          "Conduite Éthique des Affaires",
          "Responsabilité Environnementale",
          "Stratégie Centrée sur le Client",
          "Croissance Durable"
        ]
      },
      capabilities: {
        badge: "Ce Que Nous Faisons",
        title: "Capacités Stratégiques",
        desc: "Solutions complètes en architecture commerciale et ingénierie des affaires internationales.",
        cta: "Voir Tous les Services",
        items: [
          { title: "Stratégie de Commerce International", desc: "Stratégies d'exportation complètes adaptées à l'entrée et à l'expansion sur les marchés mondiaux." },
          { title: "Développement de Marchés d'Exportation", desc: "Identifier et saisir des opportunités à haute valeur en Europe, en Asie de l'Est et en Asie de l'Ouest." },
          { title: "Intelligence Commerciale", desc: "Analyse de marché basée sur les données, suivi des tendances et évaluation des risques pour des décisions éclairées." },
          { title: "Négociation Internationale", desc: "Représentation experte et négociation de contrats avec des corporations multinationales." },
          { title: "Diplomatie Commerciale", desc: "Établir des relations institutionnelles pour faciliter les accords commerciaux bilatéraux." },
          { title: "Entrée Stratégique sur le Marché", desc: "Coordination de bout en bout, de la chaîne d'approvisionnement au lancement du produit sur les marchés cibles." }
        ]
      },
      reach: {
        badge: "Portée Mondiale",
        title: "Expertise des Marchés Internationaux",
        desc: "Connaissance approfondie de la culture d'entreprise et de la dynamique commerciale sur trois continents.",
        cta: "Explorer les Marchés",
        europe: "Europe",
        europeDesc: "France · Italie · Portugal · Royaume-Uni · Scandinavie",
        eastAsia: "Asie de l'Est",
        eastAsiaDesc: "Chine · Japon · Corée du Sud",
        westAsia: "Asie de l'Ouest",
        westAsiaDesc: "Dubaï · Émirats Arabes Unis · Marchés du CCG"
      },
      network: {
        badge: "Réseau Institutionnel",
        title: "Partenariats et Collaborations Stratégiques",
        desc: "Relations de confiance avec des institutions et organisations de premier plan."
      },
      cta: {
        title: "Devenez Notre Allié Stratégique dans Votre Parcours d'Internationalisation",
        desc: "Explorons comment PGA peut accélérer votre expansion mondiale avec des stratégies éprouvées et une expertise approfondie du marché.",
        button: "Contactez-nous Aujourd'hui"
      }
    },
    about: {
      badge: "À Propos du Cabinet",
      title: "Deux Décennies d'Impact Mondial Stratégique",
      p1: "Piedra Gaitán & Asociados s'est forgé une réputation comme l'un des cabinets de conseil en commerce international les plus fiables du Costa Rica, alliant vision stratégique et profonde compréhension culturelle des marchés mondiaux.",
      p2: "PGA offre une vision stratégique des affaires internationales avec des solutions complètes en architecture et ingénierie commerciale, guidant avec succès les entreprises d'exportation costariciennes à travers leur processus d'internationalisation vers de nouveaux marchés mondiaux.",
      philosophy: {
        title: "Notre Philosophie",
        desc: "Notre approche est ancrée dans les principes de qualité de service, de respect de la dignité humaine, de responsabilité environnementale et de transparence totale. Ces valeurs nous ont permis de bâtir des relations commerciales stables, rentables et durables depuis des décennies."
      },
      differentiation: {
        title: "Ce Qui Nous Distingue",
        p1: "Nous nous distinguons par notre capacité à développer des stratégies d'intelligence commerciale internationale, appuyées par un vaste réseau de contacts et une compréhension profonde de la culture des affaires dans les principaux marchés mondiaux.",
        p2: "PGA continue d'ouvrir la voie à l'expansion internationale des entreprises d'exportation costariciennes, consolidant sa position de référence dans le conseil en commerce international grâce à une vision stratégique, une expérience du marché mondial et un engagement ferme envers l'excellence, l'éthique, l'innovation et le développement durable."
      },
      principles: {
        badge: "Principes",
        title: "Nos Valeurs Fondamentales",
        items: [
          { title: "Excellence", desc: "Nous visons les plus hauts standards de qualité professionnelle dans chaque mission." },
          { title: "Intégrité", desc: "La transparence et la conduite éthique constituent le fondement de chaque relation." },
          { title: "Durabilité", desc: "Engagés dans des stratégies commerciales respectueuses de l'environnement et à long terme." },
          { title: "Focus Client", desc: "Chaque stratégie est conçue autour des objectifs et défis uniques de nos clients." }
        ]
      },
      journey: {
        badge: "Notre Parcours",
        title: "Jalons Clés",
        milestones: [
          { year: "2002", event: "Fondé au Costa Rica en tant que cabinet de conseil spécialisé en commerce international." },
          { year: "2002", event: "Devenu agent d'achat exclusif pour le Groupe ANDROS en Amérique Centrale et dans les Caraïbes." },
          { year: "2002", event: "Lancé le programme CHINA YA avec CADEXCO pour promouvoir les relations commerciales Costa Rica–Chine." },
          { year: "2007", event: "Établissement des relations diplomatiques Costa Rica–Chine — un processus que PGA a aidé à catalyser." },
          { year: "2008", event: "Conseillé les banques nationales costariciennes sur les relations bancaires stratégiques avec les institutions chinoises." },
          { year: "2011", event: "Début du rôle de conseil auprès de DAEWOO BUS-AMERICA pour les exportations de bus de luxe." },
          { year: "2018", event: "Conçu et exécuté le programme d'exportation d'ananas surgelé biologique PICARD dans plus de 1 000 magasins européens." },
          { year: "2018", event: "Participé à l'adhésion du Costa Rica à l'Initiative de la Franja et de la Route de la Chine." },
          { year: "Aujourd'hui", event: "Gestion de plus de 7 millions de dollars de contrats d'exportation annuels, expansion vers Dubaï et les marchés du CCG." }
        ]
      }
    },
    services: {
      badge: "Nos Services",
      title: "Solutions Complètes de Commerce International",
      desc: "De la planification stratégique à l'exécution sur le marché, nous fournissons tout le spectre des services de conseil nécessaires pour réussir dans le commerce international.",
      items: [
        {
          title: "Stratégie de Commerce International",
          desc: "Nous concevons des plans d'internationalisation sur mesure qui s'alignent sur les forces de votre entreprise et la dynamique du marché cible.",
          items: ["Conception et exécution de plans d'exportation", "Identification de nouveaux marchés et stratégie d'entrée", "Positionnement compétitif sur les marchés mondiaux", "Feuilles de route stratégiques pour la diversification des marchés"]
        },
        {
          title: "Développement de Marchés d'Exportation",
          desc: "Support de bout en bout pour le lancement et la mise à l'échelle des opérations d'exportation en Europe, en Asie de l'Est et en Asie de l'Ouest.",
          items: ["Évaluation de l'adéquation produit-marché", "Organisation et coordination de la chaîne d'approvisionnement", "Planification logistique internationale", "Exécution du lancement sur le marché dans les destinations cibles"]
        },
        {
          title: "Intelligence Commerciale",
          desc: "Perspectives et analyses basées sur les données pour prendre des décisions stratégiques et bien informées sur des marchés internationaux complexes.",
          items: ["Analyse des tendances mondiales et suivi du marché", "Études de marché personnalisées", "Évaluation des risques géopolitiques", "Conseil en culture d'entreprise spécifique au pays"]
        },
        {
          title: "Support à la Négociation Internationale",
          desc: "Représentation experte dans les négociations commerciales à enjeux élevés avec des corporations et institutions multinationales.",
          items: ["Gestion de la négociation des contrats annuels", "Représentation devant les conglomérats internationaux", "Accompagnement commercial stratégique", "Résolution de litiges et conciliation"]
        },
        {
          title: "Entrée Stratégique sur le Marché",
          desc: "Coordination complète, de l'organisation des fournisseurs au lancement du produit sur les marchés cibles du monde entier.",
          items: ["Organisation des producteurs et fournisseurs", "Coordination de la logistique et de la distribution", "Développement des canaux de vente au détail et de distribution", "Positionnement de la marque sur les marchés de destination"]
        },
        {
          title: "Diplomatie Commerciale",
          desc: "Faciliter les relations institutionnelles et les accords bilatéraux qui ouvrent des portes à l'expansion commerciale.",
          items: ["Négociations commerciales bilatérales", "Facilitation et médiation institutionnelle", "Résolution de conflits commerciaux internationaux", "Soutien à la liaison gouvernement-entreprise"]
        }
      ]
    },
    markets: {
      badge: "Marchés Internationaux",
      title: "Expertise Mondiale, Compréhension Locale",
      desc: "Plus de 23 ans de culture d'une connaissance approfondie de la culture d'entreprise, de la dynamique commerciale et des opportunités commerciales sur trois continents.",
      europe: {
        title: "Europe",
        countries: "France · Italie · Portugal · Royaume-Uni · Scandinavie · Espagne · Pologne · Allemagne",
        p1: "Agent d'achat exclusif pour le Groupe ANDROS — l'un des plus grands conglomérats alimentaires d'Europe — opérant en France, en Espagne, en Pologne, en Italie, en Allemagne, au Royaume-Uni et en Chine depuis 2002.",
        p2: "Conçu et exécuté le programme d'ananas surgelé biologique PICARD, atteignant plus de 1 000 points de vente à travers la France.",
        p3: "Vaste expérience dans l'exportation de produits agro-industriels de qualité supérieure, notamment l'ananas surgelé IQF, le café de spécialité, les jus et purées de fruits surgelés et les produits laitiers."
      },
      eastAsia: {
        title: "Asie de l'Est",
        countries: "Chine · Japon · Corée du Sud",
        p1: "Pionnier du programme CHINA YA (2002) — une initiative historique promouvant les liens diplomatiques et commerciaux entre le Costa Rica et la Chine, aboutissant à des relations diplomatiques en 2007.",
        p2: "Conseillé plus de 1 500 entrepreneurs costariciens et centraméricains sur la conduite des affaires en Chine pendant sept ans.",
        p3: "Facilité les relations bancaires stratégiques entre les banques nationales costariciennes et les institutions chinoises, notamment la China Development Bank, la Bank of China, l'ICBC et l'Agricultural Bank of China — obtenant un accord de 40 millions de dollars US pour le BCR.",
        p4: "Joué un rôle clé dans l'adhésion du Costa Rica à l'Initiative de la Franja et de la Route de la Chine (2018).",
        p5: "Géré stratégiquement le processus de conciliation RECOPE–CNPC, évitant un litige international potentiel de 50 millions de dollars US."
      },
      westAsia: {
        title: "Asie de l'Ouest",
        countries: "Dubaï · Émirats Arabes Unis · Marchés du CCG",
        p1: "Développement d'une vision stratégique pour entrer sur le marché des Émirats Arabes Unis en utilisant Dubaï comme hub logistique et commercial central reliant l'Asie de l'Ouest, l'Afrique et l'Asie du Sud-Est.",
        p2: "Stratégie de participation aux grands salons professionnels, notamment Gulfood.",
        p3: "Exploration des connexions avec les zones de libre-échange telles que JAFZA.",
        p4: "Construction d'alliances avec des distributeurs certifiés halal.",
        p5: "Intelligence commerciale pour accéder aux marchés du CCG à fort pouvoir d'achat."
      }
    },
    experience: {
      badge: "Expérience Stratégique",
      title: "Impact Éprouvé sur les Marchés Mondiaux",
      desc: "Un portefeuille d'initiatives stratégiques couvrant le développement commercial, la diplomatie commerciale et la négociation internationale à enjeux élevés.",
      items: [
        {
          category: "Développement de Programmes d'Exportation",
          items: [
            "Conçu des programmes d'exportation complets pour des produits agro-industriels ciblant les marchés européens et asiatiques.",
            "Coordonné des chaînes d'approvisionnement complètes, de l'organisation des producteurs à la logistique internationale et au lancement sur le marché.",
            "Géré des contrats annuels dépassant 7 millions de dollars US d'exportations concrétisées au cours de la seule année dernière.",
            "Lancé avec succès l'ananas surgelé biologique costaricien dans plus de 1 000 points de vente européens via le programme PICARD."
          ]
        },
        {
          category: "Initiatives de Diplomatie Commerciale",
          items: [
            "Créé et dirigé le programme CHINA YA — une initiative pionnière qui a promu les liens diplomatiques et commerciaux entre le Costa Rica et la Chine.",
            "Facilité l'adhésion du Costa Rica à l'Initiative de la Franja et de la Route (2018).",
            "Maintenu des relations institutionnelles de haut niveau avec l'Ambassade de Chine au Costa Rica depuis 2007.",
            "Reconnu par PROCOMER, les chambres de commerce régionales et les institutions politiques chinoises, y compris le CCPIT."
          ]
        },
        {
          category: "Rôles de Conseil Stratégique",
          items: [
            "Agent d'achat exclusif pour le Groupe ANDROS en Amérique Centrale et dans les Caraïbes depuis 2002.",
            "Conseil direct auprès de la présidence de DAEWOO BUS-AMERICA (2011–2016) pour la stratégie d'exportation de bus de luxe.",
            "Conseillé le Banco Nacional et le Banco de Costa Rica sur les partenariats bancaires chinois stratégiques.",
            "Obtenu un accord bancaire de 40 millions de dollars US en faveur du BCR grâce à la facilitation institutionnelle."
          ]
        },
        {
          category: "Support à la Négociation Internationale",
          items: [
            "Gestion de la négociation des contrats annuels pour les gros clients d'exportation, fournissant un conseil commercial étroit.",
            "Médié avec succès le différend RECOPE–CNPC, évitant une réclamation internationale potentielle de 50 millions de dollars US.",
            "Facilité la liquidation ordonnée de SORESCO par une négociation stratégique et confidentielle.",
            "Positionné comme un partenaire stratégique de confiance au-delà du rôle traditionnel d'intermédiaire."
          ]
        }
      ]
    },
    insights: {
      badge: "Perspectives et Intelligence",
      title: "Perspectives Stratégiques sur le Commerce Mondial",
      desc: "PGA se positionne comme un cabinet stratégique — pas un intermédiaire — grâce à une intelligence commerciale profonde et un leadership éclairé.",
      intelligence: {
        badge: "Intelligence Commerciale",
        title: "Notre Cadre d'Intelligence",
        items: [
          { title: "Analyse des Tendances Mondiales", desc: "Suivi de l'évolution des schémas commerciaux, des préférences des consommateurs et des opportunités des marchés émergents pour rester en tête de la concurrence." },
          { title: "Études de Marché Personnalisées", desc: "Recherche approfondie et sur mesure sur des marchés, secteurs et catégories de produits spécifiques pour des décisions d'entrée sur le marché éclairées." },
          { title: "Suivi Géopolitique", desc: "Suivi des développements politiques, des accords commerciaux et des changements réglementaires qui impactent le commerce international." },
          { title: "Évaluation du Risque Pays", desc: "Évaluation des risques politiques, économiques et opérationnels pour protéger les investissements et assurer une présence durable sur le marché." },
          { title: "Conseil en Culture d'Entreprise", desc: "Fournir l'intelligence culturelle essentielle pour des négociations réussies et l'établissement de relations sur les marchés étrangers." }
        ]
      },
      leadership: {
        badge: "Leadership Éclairé",
        title: "Perspectives Stratégiques",
        items: [
          { title: "Dubaï comme Hub d'Exportation Stratégique", category: "Stratégie de Marché", desc: "Dubaï représente une plateforme stratégique pour diversifier les exportations costariciennes vers des marchés à fort pouvoir d'achat à travers le Moyen-Orient, l'Afrique et l'Asie du Sud-Est." },
          { title: "L'Opportunité de la Franja et de la Route", category: "Diplomatie Commerciale", desc: "L'adhésion du Costa Rica à l'Initiative de la Franja et de la Route de la Chine ouvre de nouveaux couloirs pour le commerce, l'investissement et la coopération institutionnelle avec la plus grande économie d'Asie." },
          { title: "D'Intermédiaire à Partenaire Stratégique", category: "Leadership Éclairé", desc: "L'évolution du conseil en commerce international, du courtage transactionnel au partenariat stratégique global, redéfinit la manière dont les entreprises abordent l'expansion mondiale." },
          { title: "Excellence de l'Exportation Agro-industrielle", category: "Focus Sectoriel", desc: "Les produits agro-industriels de qualité supérieure du Costa Rica — de l'ananas biologique au café de spécialité — continuent de capter l'attention sur les marchés de détail les plus exigeants d'Europe." }
        ]
      }
    },
    contact: {
      badge: "Contact",
      title: "Initiez une Conversation Stratégique",
      desc: "Que vous exploriez de nouveaux marchés ou cherchiez à renforcer vos opérations d'exportation, nous sommes prêts à discuter de la manière dont PGA peut soutenir votre croissance internationale.",
      emailLabel: "E-mail",
      locationLabel: "Localisation",
      form: {
        title: "Demander une Consultation",
        desc: "Remplissez le formulaire ci-dessous et notre équipe de conseillers vous répondra rapidement.",
        name: "Nom Complet *",
        company: "Entreprise *",
        country: "Pays *",
        industry: "Industrie / Secteur",
        email: "E-mail *",
        interest: "Intérêt Stratégique *",
        interestPlaceholder: "Sélectionnez votre domaine d'intérêt",
        interests: {
          trade: "Stratégie de Commerce International",
          export: "Développement de Marchés d'Exportation",
          intelligence: "Intelligence Commerciale",
          negotiation: "Négociation Internationale",
          diplomacy: "Diplomatie Commerciale",
          entry: "Entrée Stratégique sur le Marché",
          other: "Autre"
        },
        message: "Message",
        submit: "Envoyer la Demande de Consultation",
        success: "Merci pour votre demande. Nous vous contacterons bientôt."
      }
    }
  }
};
