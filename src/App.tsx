import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Markets from "./components/Markets";
import Experience from "./components/Experience";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "markets":
        return <Markets />;
      case "experience":
        return <Experience />;
      case "insights":
        return <Insights />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#040720] selection:bg-blue-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-[#040720] py-20 text-white/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <img 
                src="https://image2url.com/r2/default/images/1773664375174-b9c5aa83-5db8-4d2f-8684-ee782926a6f6.png" 
                alt="PGA Logo" 
                className="h-16 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="mt-6 max-w-sm text-lg">
                Strategic international trade advisory connecting Costa Rican enterprises to global markets since 2002.
              </p>
            </div>
            <div>
              <h4 className="mb-6 font-bold text-white">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Markets", "Experience", "Insights", "Contact"].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => {
                        setCurrentPage(page.toLowerCase());
                        window.scrollTo(0, 0);
                      }} 
                      className="hover:text-white"
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold text-white">Contact</h4>
              <ul className="space-y-4">
                <li>piedra.gaitan.asociados@gmail.com</li>
                <li>San José, Costa Rica</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 border-t border-white/5 pt-8 text-sm">
            <p>© {new Date().getFullYear()} Piedra Gaitán & Asociados. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
