import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Markets", id: "markets" },
    { name: "Experience", id: "experience" },
    { name: "Insights", id: "insights" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full border border-white/10 bg-[#040720]/40 px-8 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick("home")}>
          <img 
            src="https://image2url.com/r2/default/images/1773664375174-b9c5aa83-5db8-4d2f-8684-ee782926a6f6.png" 
            alt="PGA Logo" 
            className="h-16 w-auto md:h-20"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-white ${
                currentPage === link.id ? "text-white" : "text-white/70"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick("contact")}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#040720] transition-transform hover:scale-105 active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 rounded-3xl bg-[#040720]/90 p-6 backdrop-blur-xl shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-lg font-medium ${
                  currentPage === link.id ? "text-white" : "text-white/70"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick("contact")}
              className="mt-2 w-full rounded-xl bg-white py-3 font-semibold text-[#040720]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
