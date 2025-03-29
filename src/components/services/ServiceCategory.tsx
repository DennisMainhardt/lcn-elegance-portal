
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  price: string;
  duration?: string;
}

interface ServiceCategoryProps {
  title: string;
  services: ServiceItem[];
  defaultOpen?: boolean;
}

const ServiceCategory = ({ title, services, defaultOpen = false }: ServiceCategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-beauty-nude rounded-md overflow-hidden beauty-reveal-animation mb-8 transition-all duration-300 shadow-elegant hover:shadow-elegant-hover">
      {/* Category Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-beauty-nude/30 text-left focus:outline-none group transition-all duration-300"
      >
        <h3 className="font-serif text-xl">{title}</h3>
        <div className={cn(
          "bg-white/80 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-beauty-gold/10" : ""
        )}>
          {isOpen ? 
            <ChevronUp size={18} className="text-beauty-gold" /> : 
            <ChevronDown size={18} className="text-beauty-charcoal/70 group-hover:text-beauty-gold transition-colors" />
          }
        </div>
      </button>
      
      {/* Service List */}
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="divide-y divide-beauty-nude/50">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-5 hover:bg-beauty-cream/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-medium text-beauty-charcoal">{service.name}</h4>
                  {service.duration && (
                    <span className="text-sm text-beauty-charcoal/60 block mb-1">
                      {service.duration}
                    </span>
                  )}
                  <p className="text-sm text-beauty-charcoal/80 mt-1">
                    {service.description}
                  </p>
                </div>
                <div className="font-medium text-beauty-gold md:text-right whitespace-nowrap mt-2 md:mt-0">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
