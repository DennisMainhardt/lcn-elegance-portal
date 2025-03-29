
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import BookingButton from "../ui/BookingButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-nav' : 'bg-transparent'}`}>
      <div className="beauty-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-beauty-charcoal hover:text-beauty-gold transition-colors font-medium ${location.pathname === '/' ? 'text-beauty-gold' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`text-beauty-charcoal hover:text-beauty-gold transition-colors font-medium ${location.pathname === '/services' ? 'text-beauty-gold' : ''}`}>
              Services & Preise
            </Link>
            <BookingButton />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-beauty-charcoal"
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
          <Link
            to="/"
            className={`block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium ${location.pathname === '/' ? 'text-beauty-gold' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block py-3 text-center text-beauty-charcoal hover:text-beauty-gold font-medium ${location.pathname === '/services' ? 'text-beauty-gold' : ''}`}
          >
            Services & Preise
          </Link>
          <div className="pt-4 flex justify-center">
            <BookingButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
