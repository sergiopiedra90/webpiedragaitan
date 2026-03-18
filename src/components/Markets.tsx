import { motion } from "motion/react";

export default function Markets() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">International Markets</h1>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Global Expertise, Local Understanding</h2>
          <p className="mt-8 max-w-3xl text-xl text-slate-600">
            Over 23 years of cultivating deep knowledge of business culture, trade dynamics, and commercial opportunities across three continents.
          </p>

          <div className="mt-20 space-y-24">
            {/* Europe */}
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">Europe</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">France · Italy · Portugal · UK · Scandinavia · Spain · Poland · Germany</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>Exclusive purchasing agent for the ANDROS Group — one of Europe's largest food conglomerates — operating across France, Spain, Poland, Italy, Germany, the UK, and China since 2002.</p>
                  <p>Designed and executed the PICARD organic frozen pineapple program, reaching 1,000+ retail points across France.</p>
                  <p>Extensive experience in exporting premium agroindustrial products including IQF frozen pineapple, specialty coffee, frozen fruit juices and purées, and dairy products.</p>
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
                <h3 className="text-3xl font-bold text-blue-600">East Asia</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">China · Japan · South Korea</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>Pioneered the CHINA YA program (2002) — a landmark initiative promoting diplomatic and commercial ties between Costa Rica and China, culminating in diplomatic relations in 2007.</p>
                  <p>Advised 1,500+ Costa Rican and Central American entrepreneurs on conducting business in China over seven years.</p>
                  <p>Facilitated strategic banking relationships between Costa Rican national banks and Chinese institutions including China Development Bank, Bank of China, ICBC, and Agricultural Bank of China — securing a US$40M agreement for BCR.</p>
                  <p>Played a key role in Costa Rica's adhesion to China's Belt and Road Initiative (2018).</p>
                  <p>Strategically managed the RECOPE–CNPC conciliation process, averting a potential US$50M international dispute.</p>
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
                <h3 className="text-3xl font-bold text-blue-600">Western Asia</h3>
                <p className="mt-4 text-xl font-medium text-slate-800">Dubai · UAE · GCC Markets</p>
                <div className="mt-8 space-y-6 text-lg text-slate-600">
                  <p>Developing a strategic vision to enter the UAE market by leveraging Dubai as a central logistics and commercial hub connecting West Asia, Africa, and Southeast Asia.</p>
                  <p>Participation strategy for major trade fairs including Gulfood.</p>
                  <p>Exploring connections with free trade zones such as JAFZA.</p>
                  <p>Building alliances with halal-certified distributors.</p>
                  <p>Commercial intelligence for accessing high-purchasing-power GCC markets.</p>
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
