const BOOKING_URL = "https://salonkee.de/salon/lcn-beauty-center-by-lambert?lang=de";

interface BookingButtonProps {
  small?: boolean;
  className?: string;
}

const BookingButton = ({ small, className = "" }: BookingButtonProps) => {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`beauty-button text-center ${small ? 'text-xs py-2 px-4' : ''} ${className}`}
    >
      Jetzt Termin buchen
    </a>
  );
};

export default BookingButton;
