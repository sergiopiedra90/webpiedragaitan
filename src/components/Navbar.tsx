import { Menu, X, Languages, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languageNames = {
    en: "English",
    es: "Español",
    fr: "Français",
  };

  const navLinks = [
    { name: t('nav.home'), id: "home" },
    { name: t('nav.about'), id: "about" },
    { name: t('nav.services'), id: "services" },
    { name: t('nav.markets'), id: "markets" },
    { name: t('nav.experience'), id: "experience" },
    { name: t('nav.insights'), id: "insights" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    setIsLangDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLangDropdownOpen && (
        <div 
          className="fixed inset-0 z-[45] bg-transparent" 
          onClick={() => setIsLangDropdownOpen(false)}
        />
      )}
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
            
            {/* Desktop Language Dropdown Menu */}
            <div className="relative z-50">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 py-1.5 px-4 text-xs font-semibold text-white/90 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
                id="language-dropdown-trigger-desktop"
              >
                <Languages className="h-3.5 w-3.5 text-white/70" id="language-icon-desktop" />
                <span>{languageNames[language]}</span>
                <ChevronDown className={`h-3 w-3 text-white/50 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} id="chevron-icon-desktop" />
              </button>

              {isLangDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 origin-top-right rounded-2xl border border-white/10 bg-[#040720]/95 p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
                  id="language-dropdown-menu-desktop"
                >
                  {(Object.keys(languageNames) as Array<keyof typeof languageNames>).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        language === lang 
                          ? 'bg-white text-[#040720]' 
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                      id={`lang-option-${lang}`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#040720] transition-transform hover:scale-105 active:scale-95"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile Menu Toggle & Selector */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="relative z-50">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 py-1 px-3 text-xs font-semibold text-white/90 backdrop-blur-md transition-all"
                id="language-dropdown-trigger-mobile"
              >
                <Languages className="h-3.5 w-3.5 text-white/70" id="language-icon-mobile" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 text-white/50 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} id="chevron-icon-mobile" />
              </button>

              {isLangDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-32 origin-top-right rounded-2xl border border-white/10 bg-[#040720]/95 p-1.5 shadow-xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  id="language-dropdown-menu-mobile"
                >
                  {(Object.keys(languageNames) as Array<keyof typeof languageNames>).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`flex w-full items-center rounded-xl px-3 py-1.5 text-left text-xs font-semibold transition-colors ${
                        language === lang 
                          ? 'bg-white text-[#040720]' 
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                      id={`lang-option-mobile-${lang}`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
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
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
