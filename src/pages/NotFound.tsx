
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beauty-soft-white pt-20">
      <div className="text-center max-w-md px-6">
        <h1 className="beauty-heading text-6xl mb-4">404</h1>
        <p className="beauty-subheading mb-8">Diese Seite konnte leider nicht gefunden werden.</p>
        <Link to="/" className="beauty-button inline-block">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
