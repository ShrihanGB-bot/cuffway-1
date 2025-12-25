import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1428]">
        {/* Floating gradient blobs for glass to show through */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="flex flex-col min-h-full">
          <Header />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
      <Toaster />
    </div>
  );
}