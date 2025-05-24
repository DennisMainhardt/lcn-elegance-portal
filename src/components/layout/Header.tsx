import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Determine if current route has a light background (needs dark text by default)
  const hasLightBackground = location.pathname === '/services' || location.pathname !== '/';

  // Determine text color based on scroll state and route
  const getTextColor = () => {
    if (hasLightBackground) {
      return 'text-beauty-charcoal'; // Always dark text on light background pages
    }
    return isScrolled ? 'text-beauty-charcoal' : 'text-white'; // Original logic for homepage
  };

  // Determine logo variant based on scroll state and route
  const getLogoVariant = () => {
    if (hasLightBackground) {
      return 'dark'; // Always dark logo on light background pages
    }
    return isScrolled ? 'dark' : 'light'; // Original logic for homepage
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-nav' : 'bg-transparent'}`}>
      <div className="beauty-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <Link to="/" className="block hover:opacity-90 transition-opacity duration-300">
              <Logo variant={getLogoVariant()} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className={`${getTextColor()} hover:text-beauty-gold transition-colors font-medium`}
            >
              Über Uns
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`${getTextColor()} hover:text-beauty-gold transition-colors font-medium`}
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`${getTextColor()} hover:text-beauty-gold transition-colors font-medium`}
            >
              Unser Salon
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${getTextColor()} hover:text-beauty-gold transition-colors font-medium`}
            >
              Kontakt
            </button>
            <Link
              to="/services"
              className={`${getTextColor()} hover:text-beauty-gold transition-colors font-medium ${location.pathname === '/services' ? 'text-beauty-gold' : ''}`}
            >
              Preise
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${getTextColor()}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="glass-card px-4 py-6 space-y-4 divide-y divide-beauty-nude">
          <button
            onClick={() => scrollToSection('about')}
            className="block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium w-full"
          >
            Über Uns
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium w-full"
          >
            Leistungen
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium w-full"
          >
            Unser Salon
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium w-full"
          >
            Kontakt
          </button>
          <Link
            to="/services"
            className={`block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium ${location.pathname === '/services' ? 'text-beauty-gold' : ''}`}
          >
            Preise
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
