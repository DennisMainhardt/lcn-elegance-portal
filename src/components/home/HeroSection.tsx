import BookingButton from "../ui/BookingButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10">
      {/* Background with opacity overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Spa treatment"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="beauty-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl mb-4 animate-fade-in drop-shadow-md">
            Schönheit beginnt mit Entspannung
          </h1>
          <p className="text-xl md:text-2xl font-serif animate-fade-in opacity-90 mt-6 drop-shadow-sm">
            Professionelle Behandlungen für Gesicht, Nägel & Körper
          </p>
          <div className="mt-10 animate-smooth-slide-up">
            <BookingButton className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white shadow-xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-1">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
