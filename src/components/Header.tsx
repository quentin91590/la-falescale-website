import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const UK_FLAG = "https://flagcdn.com/w40/gb.png";
const FR_FLAG = "https://flagcdn.com/w40/fr.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', labelKey: 'accueil' },
    { path: '/le-gite', labelKey: 'gite' },
    { path: '/activites', labelKey: 'activites' },
    { path: '/acces', labelKey: 'acces' },
    { path: '/reservation', labelKey: 'reserver' },
    { path: '/contact', labelKey: 'contact' },
  ];

  const nextLang = i18n.language === 'fr' ? 'en' : 'fr';
  const ariaLabel = nextLang === 'en'
    ? "Switch to English"
    : "Passer en français";

  const flagIcons = (
    <img
      src={nextLang === 'en' ? UK_FLAG : FR_FLAG}
      alt={nextLang === 'en' ? "UK" : "FR"}
      className="w-5 h-5 min-w-[20px] flex-shrink-0 rounded-sm"
    />
  );
  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-shadow transition-[padding] duration-300
        bg-cream ${isScrolled ? 'shadow-lg backdrop-blur-md py-2' : 'py-4'}
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo à gauche */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo La Falescale"
              className="h-16 w-auto object-contain self-center hover:scale-105 transition-transform duration-200 sm:h-16 h-12"
            />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8 mr-6">
            {navItems.map(({ path, labelKey }) => (
              <Link
                key={path}
                to={path}
                className={`relative font-medium transition-colors duration-200 hover:text-savoyard ${
                  location.pathname === path
                    ? 'text-savoyard'
                    : 'text-warm-brown'
                }`}
              >
                {t(labelKey)}
                {location.pathname === path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-savoyard rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* BOUTONS DROITE (lang + hamburger mobile) */}
          <div className="flex items-center gap-2">
            {/* Langue switch */}
            <button
              onClick={toggleLanguage}
              className={`
                flex items-center justify-center px-3 py-2 
                bg-white rounded-lg shadow hover:bg-savoyard/10 
                border border-savoyard/30 transition
                flex-shrink-0 min-w-[40px]
              `}
              aria-label={ariaLabel}
            >
              {flagIcons}
            </button>
            {/* Hamburger mobile (md:hidden) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-savoyard/10 transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-warm-brown" />
              ) : (
                <Menu className="w-6 h-6 text-warm-brown" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream/95 backdrop-blur-md shadow-lg border-t border-savoyard/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(({ path, labelKey }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors duration-200 hover:text-savoyard ${
                    location.pathname === path
                      ? 'text-savoyard'
                      : 'text-warm-brown'
                  }`}
                >
                  {t(labelKey)}
                </Link>
              ))}
              {/* Retiré : Pas de bouton langue ici */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
