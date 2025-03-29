
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookingButton from "../ui/BookingButton";

const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();
  
  // Reset UI state on route change
  useEffect(() => {
    // Ensure any UI state is properly reset on navigation
    setShowScrollButton(false);
    
    // You can add more UI state resets here if needed
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-beauty-soft-white">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      
      {/* Mobile floating booking button */}
      <div className={`fixed bottom-6 right-6 z-50 md:hidden transition-opacity duration-300 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <BookingButton small />
      </div>
    </div>
  );
};

export default Layout;
