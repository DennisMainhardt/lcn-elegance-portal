
import { useIsMobile } from "@/hooks/use-mobile";

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col items-start">
      <h1 className={`font-heading font-light ${isMobile ? 'text-lg' : 'text-xl'}`}>
        <span className="text-beauty-gold">LCN</span> Beauty Center
      </h1>
      <span className={`text-beauty-charcoal/80 italic font-serif ${isMobile ? 'text-xs' : 'text-sm'}`}>
        by Lambert
      </span>
    </div>
  );
};

export default Logo;
