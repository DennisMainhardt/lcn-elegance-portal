import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { ChevronRight } from "lucide-react";
import BookingButton from "../ui/BookingButton";

const services = [
  {
    id: 1,
    name: "Gesichtsbehandlungen",
    description: "Revitalisierende Treatments für strahlende Haut",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070",
    price: "ab 45€"
  },
  {
    id: 2,
    name: "Maniküre & Pediküre",
    description: "Vollständige Nagelpflege mit Premium-Produkten",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1887",
    price: "ab 20€"
  },
  {
    id: 3,
    name: "Wimpern & Brauen",
    description: "Professionelles Styling für einen ausdrucksstarken Blick",
    image: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "ab 5€"
  }
];

const ServicePreviewSection = () => {
  return (
    <section id="services" className="section-padding bg-beauty-soft-white">
      <div className="beauty-container">
        <SectionHeading
          title="Unsere Leistungen"
          subtitle="Entdecken Sie unser vielfältiges Angebot an luxuriösen Behandlungen für Ihr Wohlbefinden"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-md overflow-hidden shadow-card beauty-reveal-animation card-hover bg-beauty-cream flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl">{service.name}</h3>
                  <span className="text-beauty-gold font-medium">{service.price}</span>
                </div>
                <p className="text-beauty-charcoal/70 text-sm mb-4 flex-grow">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-beauty-gold hover:text-beauty-gold/80 transition-colors mt-auto"
                >
                  <span>Mehr erfahren</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 beauty-reveal-animation">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 border border-beauty-rose rounded-md transition-colors hover:bg-beauty-rose/10 text-center"
            >
              Alle Leistungen anzeigen
            </Link>
            <BookingButton className="w-full sm:w-auto px-6 py-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreviewSection;
