import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-beauty-nude/40 pt-16 pb-8">
      <div className="beauty-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Logo />
            <p className="text-beauty-charcoal/80 text-sm mt-3 max-w-xs">
              Ihr Premium-Beautyerlebnis in Düsseldorf. Genießen Sie erstklassige Behandlungen in entspannter Atmosphäre.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/lcn_by_lambert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beauty-charcoal hover:text-beauty-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/LCN-Beauty-Center-Excellent-by-Lambert-100069495750437/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beauty-charcoal hover:text-beauty-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-beauty-rose-gold" />
                <span>Kölner Tor 11, 40625 Düsseldorf</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-beauty-rose-gold" />
                <a href="tel:+492112804373" className="hover:text-beauty-gold transition-colors">
                  0211 - 2804373
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-beauty-rose-gold" />
                <a href="mailto:info@lcn-beauty-center.de" className="hover:text-beauty-gold transition-colors">
                  info@lcn-beauty-center.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 text-beauty-rose-gold" />
                <div>
                  <div>Montag: 10:00 - 18:30 Uhr</div>
                  <div>Dienstag: Geschlossen</div>
                  <div>Mittwoch - Freitag: 10:00 - 18:30 Uhr</div>
                  <div>Samstag: Nach Vereinbarung</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="hover:text-beauty-gold transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-beauty-gold transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-beauty-gold transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-beauty-nude-dark/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-beauty-charcoal/70">
              &copy; {new Date().getFullYear()} LCN Beauty Center by Lambert. Alle Rechte vorbehalten.
            </p>

            {/* Newsletter - Optional */}
            <div className="mt-4 md:mt-0">
              <form className="flex">
                <input
                  type="email"
                  placeholder="E-Mail für Newsletter"
                  className="px-4 py-2 rounded-l-md border border-beauty-nude-dark focus:outline-none focus:ring-1 focus:ring-beauty-rose-gold"
                />
                <button
                  type="submit"
                  className="bg-beauty-rose-gold text-white px-4 py-2 rounded-r-md hover:bg-beauty-gold transition-colors"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
