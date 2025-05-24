import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { StarIcon } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    rating: 5,
    text: "Absolut empfehlenswert! Das Team vom LCN Beauty Center ist nicht nur kompetent, sondern auch unglaublich freundlich. Meine Gesichtsbehandlung war ein Traum und die Ergebnisse halten, was versprochen wurde.",
    date: "15.06.2023"
  },
  {
    id: 2,
    name: "Katharina W.",
    rating: 5,
    text: "Ich bin Stammkundin für Maniküre und Pediküre und immer wieder begeistert von der Qualität und Sorgfalt. Die entspannte Atmosphäre ist ein zusätzlicher Bonus für ein paar Stunden Auszeit vom Alltag.",
    date: "03.04.2023"
  },
  {
    id: 3,
    name: "Thomas H.",
    rating: 4,
    text: "Hervorragende Leistungen und angenehme Atmosphäre. Die Massage war hervorragend und genau das, was ich nach einer stressigen Woche brauchte. Ein Stern Abzug nur, weil die Parkplatzsuche etwas schwierig war.",
    date: "22.02.2023"
  },
  {
    id: 4,
    name: "Lisa K.",
    rating: 5,
    text: "Die Wimpernverlängerung hält fantastisch und sieht so natürlich aus! Das gesamte Erlebnis war entspannend und professionell. Werde definitiv wiederkommen!",
    date: "17.01.2023"
  },
  {
    id: 5,
    name: "Maria S.",
    rating: 5,
    text: "Vom Moment des Betretens bis zum Verlassen des Salons ein Luxuserlebnis. Die Mitarbeiter gehen auf jedes Detail ein und nehmen sich wirklich Zeit für eine persönliche Beratung.",
    date: "05.12.2022"
  }
];

// Create a star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          size={16}
          className={i < rating ? "text-beauty-gold fill-beauty-gold" : "text-beauty-charcoal/30"}
        />
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showReviews = reviews.slice(activeIndex, activeIndex + 3);

  const nextReviews = () => {
    setActiveIndex((prev) =>
      prev + 3 >= reviews.length ? 0 : prev + 3
    );
  };

  const prevReviews = () => {
    setActiveIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3
    );
  };

  return (
    <section className="section-padding bg-beauty-cream">
      <div className="beauty-container">
        <SectionHeading
          title="Kundenstimmen"
          subtitle="Erfahren Sie, was unsere Kunden über ihre Erfahrungen bei uns berichten"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 beauty-reveal-animation">
          {showReviews.map((review) => (
            <div
              key={review.id}
              className="glass-card p-6 rounded-md shadow-elegant card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-xs text-beauty-charcoal/60 mt-1">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <p className="text-beauty-charcoal/80 text-sm italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Review Pagination */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex gap-3">
            <button
              onClick={prevReviews}
              className="w-10 h-10 rounded-full border border-beauty-rose flex items-center justify-center hover:bg-beauty-rose/10 transition-colors"
              aria-label="Previous reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <button
              onClick={nextReviews}
              className="w-10 h-10 rounded-full border border-beauty-rose flex items-center justify-center hover:bg-beauty-rose/10 transition-colors"
              aria-label="Next reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://salonkee.de/salon/lcn-beauty-center-by-lambert?lang=de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-beauty-charcoal hover:text-beauty-gold transition-colors"
          >
            <span>Mehr Bewertungen ansehen</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
