import SectionHeading from "../ui/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-beauty-cream">
      <div className="beauty-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image with elegant border */}
          <div className="beauty-reveal-animation lg:sticky lg:top-24 w-full">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Decorative borders - hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-beauty-gold rounded-md -z-10"></div>
              <div className="hidden lg:block absolute -top-4 -left-4 w-24 h-24 border-2 border-beauty-gold rounded-md -z-10"></div>

              {/* Main image */}
              <div className="relative w-full overflow-hidden rounded-md shadow-elegant">
                <img
                  src="/uber_uns.jpeg"
                  alt="LCN Beauty Center Salon"
                  className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-300 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <SectionHeading
              title="Über Uns"
              subtitle="Willkommen im LCN Beauty Center by Lambert - Ihrer Oase der Schönheit und Entspannung in Düsseldorf."
              centered={false}
            />

            <div className="space-y-6 beauty-reveal-animation prose prose-beauty max-w-none">
              <p className="text-beauty-charcoal/80">
                Unser familiengeführtes Beautyinstitut in Düsseldorf besteht bereits seit 1996. Was einst mit einem kleinen Geschäft begann, entwickelte sich über die Jahre zu einem erfolgreichen Kosmetikstudio mit breitem Leistungsangebot – geführt von mir und mittlerweile gemeinsam mit meinen Töchtern.
              </p>

              <p className="text-beauty-charcoal/80">
                Unsere Leidenschaft für Schönheit, Pflege und Wohlbefinden spiegelt sich in jedem Detail unserer Arbeit wider. Wir bieten euch ein umfangreiches Angebot von Kopf bis Fuß, darunter:
              </p>

              <ul className="list-disc list-inside space-y-2 text-beauty-charcoal/80 pl-4">
                <li>Professioneller Friseursalon</li>
                <li>Hochwertige kosmetische Gesichtsbehandlungen</li>
                <li>Wimpernverlängerung und Lash- & Browlifting</li>
                <li>Maniküre und Pediküre auf höchstem Niveau</li>
              </ul>

              <p className="text-beauty-charcoal/80">
                Wir legen großen Wert auf Qualität und arbeiten ausschließlich mit hochwertigen Produkten renommierter deutscher Hersteller – für sichtbare Ergebnisse und maximale Hautverträglichkeit.
              </p>

              <p className="text-beauty-charcoal/80">
                In unserem Beauty Salon in Düsseldorf erwartet euch nicht nur fachliche Kompetenz, sondern auch eine herzliche, familiäre Atmosphäre mit einem engagierten, aufgeschlossenen Team.
              </p>

              <p className="text-beauty-charcoal/80">
                Unser Ziel ist es, euch zum Strahlen zu bringen – mit individueller Beratung, entspannenden Behandlungen und einem Ort, an dem ihr einfach mal abschalten könnt.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl beauty-reveal-animation">Was uns besonders macht</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-md beauty-reveal-animation card-hover">
                  <h4 className="font-medium text-lg mb-2">Höchste Qualität</h4>
                  <p className="text-sm text-beauty-charcoal/80">
                    Wir verwenden ausschließlich hochwertige Produkte und modernste Technologien.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-md beauty-reveal-animation card-hover">
                  <h4 className="font-medium text-lg mb-2">Erfahrenes Team</h4>
                  <p className="text-sm text-beauty-charcoal/80">
                    Unsere zertifizierten Spezialisten bringen jahrelange Erfahrung mit.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-md beauty-reveal-animation card-hover">
                  <h4 className="font-medium text-lg mb-2">Persönliche Beratung</h4>
                  <p className="text-sm text-beauty-charcoal/80">
                    Individuelle Betreuung und maßgeschneiderte Behandlungen für Ihre Bedürfnisse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
