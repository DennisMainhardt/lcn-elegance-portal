import ServiceCategory, { ServiceItem } from "@/components/services/ServiceCategory";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingButton from "@/components/ui/BookingButton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Service data organized by category
const browsAndLashesServices: ServiceItem[] = [
  {
    id: 101,
    name: "Brow Lifting",
    description: "Professionelle Augenbrauenbehandlung mit natürlichem Schwung",
    price: "40€",
    duration: "60 Min."
  },
  {
    id: 102,
    name: "Lash Lifting",
    description: "Natürlicher Schwung für Ihre Wimpern",
    price: "40€",
    duration: "60 Min."
  },
  {
    id: 103,
    name: "Brow&Lash Lifting",
    description: "Kombinierte Behandlung für Augenbrauen und Wimpern",
    price: "75€",
    duration: "90 Min."
  },
  {
    id: 104,
    name: "Augenbrauen zupfen",
    description: "Professionelle Formgebung der Augenbrauen",
    price: "ab 5€",
    duration: "20 Min."
  },
  {
    id: 105,
    name: "Augenbrauen färben",
    description: "Natürliche Färbung für ausdrucksstarke Augenbrauen",
    price: "10€",
    duration: "30 Min."
  },
  {
    id: 106,
    name: "Wimpern färben",
    description: "Intensive Färbung für dichte, dunkle Wimpern",
    price: "12€",
    duration: "30 Min."
  },
  {
    id: 107,
    name: "Augenbrauen und Wimpern färben",
    description: "Komplette Färbung für einen harmonischen Look",
    price: "20€",
    duration: "45 Min."
  }
];

const facialServices: ServiceItem[] = [
  {
    id: 201,
    name: "Kennenlernen Treatment",
    description: "Anamnese, reinigen, Peeling, Maske, Gesicht-, Hals-, Dekolleté Massage und Augenbrauen,- Wimpern färben.",
    price: "75€",
    duration: "70 Min."
  },
  {
    id: 202,
    name: "Clear Fix",
    description: "Reinigen, Peeling, ausreinigen, Maske und Abschlußpflege.",
    price: "45€",
    duration: "35 Min."
  },
  {
    id: 203,
    name: "Anti-Aging",
    description: "Reinigen, Peeling, Maske, Gesicht,- Hals- und Dekolleté - Massage, Ampulle, vorbeugendes Anti - Aging.",
    price: "70€",
    duration: "60 Min."
  },
  {
    id: 204,
    name: "LUXUS",
    description: "Reinigen, Peeling, Maske, Gesicht,- Hals- und Dekolleté - Massage, Ausreinigung, Augenbrauen zupfen und färben, Schallwelle, Kaviarampulle.",
    price: "120€",
    duration: "100 Min."
  },
  {
    id: 205,
    name: "MEN CARE",
    description: "Reinigen, Peeling, Ausreinigung, Abschlußpflege.",
    price: "50€",
    duration: "40 Min."
  },
  {
    id: 206,
    name: "Tages Make Up",
    description: "Professionelles Tages Make-up",
    price: "23€",
    duration: "30 Min."
  },
  {
    id: 207,
    name: "Abend Make Up",
    description: "Elegantes Abend Make-up",
    price: "35€",
    duration: "45 Min."
  },
  {
    id: 208,
    name: "Braut Make Up",
    description: "Perfektes Braut Make-up für Ihren besonderen Tag",
    price: "ab 49€",
    duration: "60 Min."
  },
  {
    id: 209,
    name: "Mikroneedling - Gesicht",
    description: "Die einzigartige Anti-Aging-Methode, die mit speziellen Nadelmodulen durchgeführt wird. Optimal zur Behandlung von Aknenarben, großporiger Haut, Pigmentstörungen oberflächlichen Narben, Faltenbildung und UV.",
    price: "100€",
    duration: "60 Min."
  },
  {
    id: 210,
    name: "Mikroneedling - Gesicht, Hals und Dekolleté",
    description: "Erweiterte Mikroneedling-Behandlung für Gesicht, Hals und Dekolleté",
    price: "119€",
    duration: "90 Min."
  },
  {
    id: 211,
    name: "BB GLOW - 3 Behandlungen",
    description: "Basiert auf Micro-Needling mit feuchtigkeitsspendenen Wirkstoffen, zusammen mit natürlichen Farbpigmenten, die in die Haut eingebracht werden. Die Haut bekommt einen ebenmäßigen Teint. 3 Behandlungen in einem Abstand von 3 Wochen",
    price: "350€",
    duration: "3x 60 Min."
  }
];

const waxingServices: ServiceItem[] = [
  {
    id: 301,
    name: "Oberlippe",
    description: "Sanfte Haarentfernung an der Oberlippe",
    price: "9€",
    duration: "15 Min."
  },
  {
    id: 302,
    name: "Kinn",
    description: "Präzise Haarentfernung am Kinn",
    price: "10€",
    duration: "15 Min."
  },
  {
    id: 303,
    name: "Wangen",
    description: "Schonende Haarentfernung an den Wangen",
    price: "10€",
    duration: "20 Min."
  },
  {
    id: 304,
    name: "Gesicht komplett",
    description: "Komplette Gesichtshaarentfernung",
    price: "25€",
    duration: "30 Min."
  },
  {
    id: 305,
    name: "Augenbrauen",
    description: "Professionelle Augenbrauenformung",
    price: "9€",
    duration: "15 Min."
  },
  {
    id: 306,
    name: "Unterschenkel",
    description: "Haarentfernung an den Unterschenkeln",
    price: "28€",
    duration: "30 Min."
  },
  {
    id: 307,
    name: "Oberschenkel",
    description: "Haarentfernung an den Oberschenkeln",
    price: "31€",
    duration: "35 Min."
  },
  {
    id: 308,
    name: "Beine komplett",
    description: "Komplette Beinhaarentfernung",
    price: "56€",
    duration: "60 Min."
  },
  {
    id: 309,
    name: "Achseln",
    description: "Achselhaarentfernung",
    price: "10€",
    duration: "15 Min."
  }
];

const manicureServices: ServiceItem[] = [
  {
    id: 410,
    name: "Basis-Maniküre",
    description: "Grundlegende Nagelpflege und Handpflege",
    price: "20€",
    duration: "20 Min."
  },
  {
    id: 411,
    name: "Wirkstoff-Maniküre",
    description: "Intensive Pflegebehandlung (Peeling, Maske, Nagelserum, Handcreme)",
    price: "40€",
    duration: "40 Min."
  },
  {
    id: 412,
    name: "Lackieren",
    description: "Professionelle Nagellackierung",
    price: "ab 8€",
    duration: "15 Min."
  },
  {
    id: 413,
    name: "Paraffin-Behandlung",
    description: "Intensive Handpflege mit Paraffin",
    price: "20€",
    duration: "25 Min."
  },
  {
    id: 414,
    name: "Recolution",
    description: "Keratinboost, Base, Vollton, Top Coat",
    price: "36€",
    duration: "35 Min."
  },
  {
    id: 415,
    name: "Recolution Maniküre",
    description: "Inkl. Basis-Maniküre und Recolution",
    price: "45€",
    duration: "45 Min."
  },
  {
    id: 416,
    name: "Nail Boost Maniküre",
    description: "Spezielle Nagelverstärkung und Pflege",
    price: "35€",
    duration: "40 Min."
  }
];

const pedicureServices: ServiceItem[] = [
  {
    id: 501,
    name: "Basis-Pediküre",
    description: "Kurzes Fußbad, Nagel-/ Hornhautpflege",
    price: "35€",
    duration: "30 Min."
  },
  {
    id: 502,
    name: "Spa-Pediküre",
    description: "inkl. Basis, Peeling, kleine Fußmassage",
    price: "40€",
    duration: "40 Min."
  },
  {
    id: 503,
    name: "Recolution oder Gelbehandlung inkl. Basis-Pediküre",
    description: "Professionelle Gel- oder Recolution-Behandlung mit Basis-Pediküre",
    price: "44€",
    duration: "50 Min."
  },
  {
    id: 504,
    name: "Lackieren",
    description: "Professionelle Nagellackierung",
    price: "8€",
    duration: "15 Min."
  },
  {
    id: 505,
    name: "Zehennagel Aufbau",
    description: "Rekonstruktion und Aufbau von Zehennägeln",
    price: "ab 5€",
    duration: "20 Min."
  },
  {
    id: 506,
    name: "Fußnägel kürzen, in Form feilen",
    description: "Professionelle Nagelpflege und Formgebung",
    price: "10€",
    duration: "20 Min."
  },
  {
    id: 507,
    name: "Paraffin-Behandlung",
    description: "Intensive Fußpflege mit Paraffin",
    price: "20€",
    duration: "20 Min."
  },
  {
    id: 508,
    name: "Entfernen von Kunststoffmaterialien",
    description: "Professionelles Entfernen von Gel- oder Kunstmaterialien",
    price: "20€",
    duration: "25 Min."
  },
  {
    id: 509,
    name: "Hühneraugen, Schwielen etc. je nach Aufwand",
    description: "Behandlung von Hühneraugen und Schwielen nach individuellem Aufwand",
    price: "ab 2€",
    duration: "nach Aufwand"
  }
];

const nailExtensionServices: ServiceItem[] = [
  {
    id: 601,
    name: "Nagelverlängerung - Neuanlage",
    description: "Professionelle Nagelverlängerung, komplette Neuanlage",
    price: "70€",
    duration: "90 Min."
  },
  {
    id: 602,
    name: "Nagelverlängerung - Auffüllen 3-4 Wochen",
    description: "Auffrischung der Nagelverlängerung nach 3-4 Wochen",
    price: "42€",
    duration: "60 Min."
  },
  {
    id: 603,
    name: "mit Vollton oder French/Babyboomer",
    description: "Zusätzliche Farbgestaltung für Nagelverlängerung",
    price: "ab 5€",
    duration: "15 Min."
  },
  {
    id: 604,
    name: "Naturnagelvertärkung - Neuanlage",
    description: "Stärkung der natürlichen Nägel, Neuanlage",
    price: "55€",
    duration: "75 Min."
  },
  {
    id: 605,
    name: "Naturnagelvertärkung - Auffüllen",
    description: "Auffrischung der Naturnagelvertärkung",
    price: "40€",
    duration: "50 Min."
  },
  {
    id: 606,
    name: "Naturnagelvertärkung mit Vollton oder French/Babyboomer",
    description: "Zusätzliche Farbgestaltung für Naturnagelvertärkung",
    price: "ab 5€",
    duration: "15 Min."
  },
  {
    id: 607,
    name: "Termin - Formen, Feilen, Versiegeln",
    description: "Termin nach 2 Wochen: Formen, Feilen, Versiegeln",
    price: "20€",
    duration: "30 Min."
  },
  {
    id: 608,
    name: "Termin mit Vollton",
    description: "Termin nach 2 Wochen mit Vollton-Lackierung",
    price: "25€",
    duration: "35 Min."
  },
  {
    id: 609,
    name: "Entfernen von Kunststoffmaterialien",
    description: "Professionelles Entfernen von Kunstnägeln",
    price: "20€",
    duration: "30 Min."
  }
];

const lashExtensionServices: ServiceItem[] = [
  {
    id: 701,
    name: "NEUANLAGE 1:1",
    description: "Natürliche Wimpernverlängerung mit 1:1 Technik",
    price: "90€",
    duration: "120 Min."
  },
  {
    id: 702,
    name: "Auffüllen 1:1 nach 2 Wochen",
    description: "Auffrischung der 1:1 Wimpernverlängerung nach 2 Wochen",
    price: "ab 42€",
    duration: "60 Min."
  },
  {
    id: 703,
    name: "Auffüllen 1:1 nach 3 Wochen",
    description: "Auffrischung der 1:1 Wimpernverlängerung nach 3 Wochen",
    price: "ab 48€",
    duration: "70 Min."
  },
  {
    id: 704,
    name: "Auffüllen 1:1 nach 4 Wochen",
    description: "Auffrischung der 1:1 Wimpernverlängerung nach 4 Wochen",
    price: "ab 53€",
    duration: "80 Min."
  },
  {
    id: 705,
    name: "Auffüllen 1:1 nach 5 Wochen",
    description: "Auffrischung der 1:1 Wimpernverlängerung nach 5 Wochen",
    price: "ab 59€",
    duration: "90 Min."
  },
  {
    id: 706,
    name: "NEUANLAGE VOLUMEN",
    description: "Voluminöse Wimpernverlängerung mit Volumen-Technik",
    price: "95€",
    duration: "150 Min."
  },
  {
    id: 707,
    name: "Auffüllen Volumen nach 2 Wochen",
    description: "Auffrischung der Volumen-Wimpernverlängerung nach 2 Wochen",
    price: "ab 46€",
    duration: "60 Min."
  },
  {
    id: 708,
    name: "Auffüllen Volumen nach 3 Wochen",
    description: "Auffrischung der Volumen-Wimpernverlängerung nach 3 Wochen",
    price: "ab 54€",
    duration: "70 Min."
  },
  {
    id: 709,
    name: "Auffüllen Volumen nach 4 Wochen",
    description: "Auffrischung der Volumen-Wimpernverlängerung nach 4 Wochen",
    price: "ab 61€",
    duration: "80 Min."
  },
  {
    id: 710,
    name: "Auffüllen Volumen nach 5 Wochen",
    description: "Auffrischung der Volumen-Wimpernverlängerung nach 5 Wochen",
    price: "ab 72€",
    duration: "90 Min."
  },
  {
    id: 711,
    name: "ENTFERNEN DER WIMPERN",
    description: "Professionelles Entfernen der Wimpernverlängerung",
    price: "20€",
    duration: "30 Min."
  }
];

const Services = () => {
  return (
    <div className="pt-28 pb-16 bg-beauty-soft-white">
      <div className="beauty-container">
        <SectionHeading
          title="Leistungen & Preise"
          subtitle="Entdecken Sie unser umfassendes Angebot an Schönheitsbehandlungen und verwöhnen Sie sich mit unseren Premium-Leistungen"
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
            title="Nagelpflege"
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
