import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'dark' }: LogoProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-start group">
      <h1 className={`font-heading font-light transition-all duration-300 group-hover:scale-105 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
        <span className="text-beauty-gold font-medium drop-shadow-sm">LCN</span>{" "}
        <span className={`${variant === 'light' ? 'text-white' : 'text-beauty-charcoal'} font-normal`}>Beauty Center</span>
      </h1>
      <span className={`${variant === 'light' ? 'text-white/80' : 'text-beauty-charcoal/70'} italic font-serif transition-all duration-300 ${variant === 'light' ? 'group-hover:text-white' : 'group-hover:text-beauty-charcoal'} group-hover:scale-105 ${isMobile ? 'text-base' : 'text-lg'} -mt-1`}>
        by Lambert
      </span>
    </div>
  );
};

export default Logo;
