
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="beauty-heading beauty-reveal-animation mb-3">{title}</h2>
      {subtitle && (
        <p className="beauty-subheading beauty-reveal-animation max-w-3xl mx-auto text-beauty-charcoal/80">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
