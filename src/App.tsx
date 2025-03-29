
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// AnimationObserver to handle animations on page changes
const AnimationObserver = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.beauty-reveal-animation');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };
    
    // Wait for DOM to fully load after route change
    const timeoutId = setTimeout(animateElements, 100);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run when pathname changes
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimationObserver />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
