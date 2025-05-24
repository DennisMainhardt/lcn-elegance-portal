import { useState, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/interior.jpeg",
    alt: "Salon Interior"
  },
  {
    id: 2,
    src: "/1.jpeg",
    alt: "Nail Treatment"
  },
  {
    id: 3,
    src: "/2.jpeg",
    alt: "Facial Treatment"
  },
  {
    id: 4,
    src: "/3.jpeg",
    alt: "Beauty Products"
  },
  {
    id: 5,
    src: "/4.jpeg",
    alt: "Spa Experience"
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 3 : prev - 1));
    scrollToCurrentImage();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 3 ? 0 : prev + 1));
    scrollToCurrentImage();
  };

  const scrollToCurrentImage = () => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.offsetWidth / 3 * currentIndex;
      galleryRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="gallery" className="section-padding bg-beauty-nude/30">
      <div className="beauty-container">
        <SectionHeading
          title="Einblicke in unseren Salon"
          subtitle="Erleben Sie die entspannte Atmosphäre und professionelle Umgebung unseres Beauty Centers"
        />

        <div className="relative">
          {/* Gallery Images */}
          <div
            ref={galleryRef}
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar beauty-reveal-animation"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-80 rounded-md overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-elegant hover:bg-white transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-beauty-charcoal" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-elegant hover:bg-white transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-beauty-charcoal" />
          </button>
        </div>

        {/* Using a CSS class instead of an inline style with JSX attribute */}
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default GallerySection;
