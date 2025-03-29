import ServiceCategory, { ServiceItem } from "@/components/services/ServiceCategory";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingButton from "@/components/ui/BookingButton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Service data organized by category
const browsAndLashesServices: ServiceItem[] = [
  {
    id: 101,
    name: "Rub In Brows",
    description: "Professionelle Augenbrauenbehandlung",
    price: "ab 190€",
    duration: "120 Min."
  },
  {
    id: 102,
    name: "Brow & Lash Lifting",
    description: "Natürlicher Schwung für Augenbrauen und Wimpern",
    price: "ab 40€",
    duration: "60 Min."
  },
  {
    id: 103,
    name: "Augenbrauen & Wimpern färben",
    description: "Professionelle Färbung für natürlichen Look",
    price: "ab 5€",
    duration: "30 Min."
  },
  {
    id: 104,
    name: "Rub in brows Nacharbeit",
    description: "Auffrischung der Rub In Brows",
    price: "ab 0€",
    duration: "60 Min."
  }
];

const facialServices: ServiceItem[] = [
  {
    id: 201,
    name: "Microneedling",
    description: "Hautregeneration mit Soforteffekt",
    price: "ab 100€",
    duration: "60 Min."
  },
  {
    id: 202,
    name: "Microdermabrasion",
    description: "Hauterneuerung und Verfeinerung",
    price: "ab 45€",
    duration: "45 Min."
  },
  {
    id: 203,
    name: "Kennenlern Treatment",
    description: "Individuelle Beratung und Behandlung",
    price: "ab 75€",
    duration: "60 Min."
  },
  {
    id: 204,
    name: "Luxus",
    description: "Premium Gesichtsbehandlung",
    price: "ab 120€",
    duration: "90 Min."
  },
  {
    id: 205,
    name: "Anti-Aging",
    description: "Verjüngende Behandlung",
    price: "ab 70€",
    duration: "60 Min."
  },
  {
    id: 206,
    name: "Clear Fix",
    description: "Behandlung für reine Haut",
    price: "ab 45€",
    duration: "45 Min."
  },
  {
    id: 207,
    name: "Men Care",
    description: "Spezielle Behandlung für Männer",
    price: "ab 50€",
    duration: "45 Min."
  },
  {
    id: 208,
    name: "Make Up",
    description: "Professionelles Make-up",
    price: "ab 23€",
    duration: "30 Min."
  },
  {
    id: 209,
    name: "Gesichtsbehandlung nach 4-6 Wochen",
    description: "Auffrischungsbehandlung",
    price: "ab 60€",
    duration: "60 Min."
  }
];

const waxingServices: ServiceItem[] = [
  {
    id: 301,
    name: "Gesicht",
    description: "Sanfte Haarentfernung im Gesicht",
    price: "ab 9€",
    duration: "15 Min."
  },
  {
    id: 302,
    name: "Beine",
    description: "Komplette Beinbehandlung",
    price: "ab 28€",
    duration: "45 Min."
  },
  {
    id: 303,
    name: "Achseln",
    description: "Achselhaarentfernung",
    price: "ab 10€",
    duration: "15 Min."
  }
];

const manicureServices: ServiceItem[] = [
  {
    id: 401,
    name: "Schellack",
    description: "Langlebiger Lack mit UV-Versiegelung",
    price: "ab 36€",
    duration: "45 Min."
  },
  {
    id: 402,
    name: "Wirkstoff Maniküre",
    description: "Intensive Pflegebehandlung",
    price: "ab 40€",
    duration: "60 Min."
  },
  {
    id: 403,
    name: "Basis Maniküre",
    description: "Grundlegende Nagelpflege",
    price: "ab 20€",
    duration: "30 Min."
  },
  {
    id: 404,
    name: "Maniküre inkl. Nagellack",
    description: "Komplette Maniküre mit Lackierung",
    price: "ab 28€",
    duration: "45 Min."
  },
  {
    id: 405,
    name: "Clean recolution",
    description: "Sanfte Reinigung und Pflege",
    price: "ab 31€",
    duration: "45 Min."
  }
];

const pedicureServices: ServiceItem[] = [
  {
    id: 501,
    name: "Spa Pediküre",
    description: "Luxuriöse Fußbehandlung",
    price: "ab 40€",
    duration: "60 Min."
  },
  {
    id: 502,
    name: "Basis Pediküre",
    description: "Grundlegende Fußpflege",
    price: "ab 35€",
    duration: "45 Min."
  },
  {
    id: 503,
    name: "Zusatzleistungen",
    description: "Individuelle Extras",
    price: "ab 5€",
    duration: "15 Min."
  },
  {
    id: 504,
    name: "Schellack Pediküre",
    description: "Langlebiger Lack mit UV-Versiegelung",
    price: "ab 44€",
    duration: "60 Min."
  },
  {
    id: 505,
    name: "Pediküre inkl. Nagellack",
    description: "Komplette Pediküre mit Lackierung",
    price: "ab 39€",
    duration: "60 Min."
  },
  {
    id: 506,
    name: "Pediküre",
    description: "Professionelle Fußpflege",
    price: "ab 40€",
    duration: "60 Min."
  }
];

const nailExtensionServices: ServiceItem[] = [
  {
    id: 601,
    name: "Nagelverlängerung",
    description: "Professionelle Nagelverlängerung",
    price: "ab 65€",
    duration: "90 Min."
  },
  {
    id: 602,
    name: "Auffüllen nach 3-4 Wochen",
    description: "Auffrischung der Nagelverlängerung",
    price: "ab 42€",
    duration: "60 Min."
  },
  {
    id: 603,
    name: "Gel 3 / kurze Runde",
    description: "Natürliche Gelverlängerung",
    price: "ab 20€",
    duration: "45 Min."
  },
  {
    id: 604,
    name: "Auffüllen inkl. Farbe o. French",
    description: "Auffüllen mit Farbgestaltung",
    price: "ab 47€",
    duration: "60 Min."
  },
  {
    id: 605,
    name: "Entfernen von Material",
    description: "Professionelles Entfernen",
    price: "ab 20€",
    duration: "30 Min."
  }
];

const lashExtensionServices: ServiceItem[] = [
  {
    id: 701,
    name: "Neuanlage 1:1 tech",
    description: "Natürliche Wimpernverlängerung",
    price: "ab 90€",
    duration: "120 Min."
  },
  {
    id: 702,
    name: "1:1 Auffüllen nach 2 Wochen",
    description: "Auffrischung nach 2 Wochen",
    price: "ab 42€",
    duration: "60 Min."
  },
  {
    id: 703,
    name: "1:1 Auffüllen nach 3 wochen",
    description: "Auffrischung nach 3 Wochen",
    price: "ab 48€",
    duration: "60 Min."
  },
  {
    id: 704,
    name: "1:1 Auffüllen nach 4 Wochen",
    description: "Auffrischung nach 4 Wochen",
    price: "ab 53€",
    duration: "60 Min."
  },
  {
    id: 705,
    name: "Neuanlage Volumen tech",
    description: "Voluminöse Wimpernverlängerung",
    price: "ab 95€",
    duration: "120 Min."
  },
  {
    id: 706,
    name: "Volumen auffüllen nach 2 Wochen",
    description: "Auffrischung nach 2 Wochen",
    price: "ab 46€",
    duration: "60 Min."
  },
  {
    id: 707,
    name: "Volumen auffüllen nach 3 Wochen",
    description: "Auffrischung nach 3 Wochen",
    price: "ab 51€",
    duration: "60 Min."
  },
  {
    id: 708,
    name: "Volumen auffüllen nach 4 Wochen",
    description: "Auffrischung nach 4 Wochen",
    price: "ab 61€",
    duration: "60 Min."
  }
];

const Services = () => {
  return (
    <div className="pt-28 pb-16 bg-beauty-soft-white">
      <div className="beauty-container">
        <SectionHeading
          title="Services & Preise"
          subtitle="Entdecken Sie unser umfassendes Angebot an Schönheitsbehandlungen und verwöhnen Sie sich mit unseren Premium-Services"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="mb-16 beauty-reveal-animation shadow-elegant overflow-hidden border-beauty-nude/30">
            <CardContent className="p-0">
              <div className="bg-beauty-rose/20 p-6 md:p-10">
                <h3 className="font-serif text-2xl mb-4 text-beauty-charcoal">Unsere Behandlungen</h3>
                <p className="text-beauty-charcoal/80">
                  Alle unsere Behandlungen werden mit hochwertigen, hautfreundlichen Produkten durchgeführt.
                  Unsere Kosmetikerinnen sind speziell geschult und sorgen für Ihr Wohlbefinden während der gesamten Behandlung.
                </p>
                <Separator className="my-6 bg-beauty-nude" />
                <p className="text-sm italic text-beauty-charcoal/70">
                  Vor jeder Behandlung findet eine kostenlose Beratung statt, um die perfekte Lösung für Ihre individuellen Bedürfnisse zu finden.
                </p>
              </div>
            </CardContent>
          </Card>

          <ServiceCategory
            title="Augenbrauen & Wimpern"
            services={browsAndLashesServices}
            defaultOpen={true}
          />

          <ServiceCategory
            title="Gesichtsbehandlungen"
            services={facialServices}
          />

          <ServiceCategory
            title="Haarentfernung - Waxing"
            services={waxingServices}
          />

          <ServiceCategory
            title="Maniküre"
            services={manicureServices}
          />

          <ServiceCategory
            title="Pediküre"
            services={pedicureServices}
          />

          <ServiceCategory
            title="Nagelmodellage"
            services={nailExtensionServices}
          />

          <ServiceCategory
            title="Wimpernverlängerung"
            services={lashExtensionServices}
          />

          <div className="text-center mt-16 beauty-reveal-animation">
            <Card className="mb-10 p-6 bg-beauty-cream border-beauty-nude/30 shadow-elegant">
              <p className="text-beauty-charcoal/80 mb-6 max-w-xl mx-auto">
                Alle Preise inkl. MwSt. Terminabsagen bitte mindestens 24 Stunden im Voraus. Bei kurzfristigen Absagen oder Nichterscheinen müssen wir leider 50% des Behandlungspreises berechnen.
              </p>
            </Card>

            <div className="mt-10">
              <BookingButton className="text-lg px-8 py-4 shadow-elegant" />
              <p className="mt-4 text-beauty-charcoal/60 text-sm">
                Genießen Sie Ihre persönliche Auszeit bei uns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
