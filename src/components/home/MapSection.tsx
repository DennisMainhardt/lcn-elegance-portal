import SectionHeading from "../ui/SectionHeading";
import { MapPin, Car, Train } from "lucide-react";

const MapSection = () => {
  return (
    <section className="section-padding bg-beauty-soft-white">
      <div className="beauty-container">
        <SectionHeading
          title="Besuchen Sie uns"
          subtitle="Wir freuen uns, Sie in unserem Beauty Center im Herzen von Düsseldorf begrüßen zu dürfen"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 beauty-reveal-animation">
          <div className="lg:col-span-2">
            {/* Google Maps iframe */}
            <div className="rounded-md overflow-hidden shadow-elegant h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.8439999999997!2d6.789999999999999!3d51.219999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8caa0f9c1f1f1%3A0x47b8caa0f9c1f1f1!2sK%C3%B6lner%20Tor%2011%2C%2040625%20D%C3%BCsseldorf%2C%20Germany!5e0!3m2!1sen!2sus!4v1693390347714!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LCN Beauty Center Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-md p-6">
              <h3 className="font-serif text-xl mb-4">Unsere Adresse</h3>

              <div className="flex items-start mb-4">
                <MapPin size={20} className="mr-2 mt-1 text-beauty-rose-gold" />
                <p>
                  Kölner Tor 11<br />
                  40625 Düsseldorf<br />
                  Germany
                </p>
              </div>

              <h4 className="font-medium mt-6 mb-3">Anfahrt</h4>

              <div className="space-y-3 text-beauty-charcoal/80 text-sm">
                <div className="flex items-start">
                  <Car size={18} className="mr-2 mt-0.5 text-beauty-rose-gold" />
                  <span>Parkplätze in der Nähe verfügbar</span>
                </div>

                <div className="flex items-start">
                  <Train size={18} className="mr-2 mt-0.5 text-beauty-rose-gold" />
                  <span>U-Bahn Station D-Gerresheim, Rathaus</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//K%C3%B6lner+Tor+11%2C+40625+D%C3%BCsseldorf%2C+Germany"
              target="_blank"
              rel="noopener noreferrer"
              className="beauty-button w-full justify-center"
            >
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
