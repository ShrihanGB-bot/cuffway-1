import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/90dc3d8718a048a0031c229e17b5fa5befd53cdc.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/technology", label: "Technology" },
    { path: "/about", label: "About" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full glass border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://i.imgur.com/MhlFhqY.png"
              alt="CuffWay Logo"
              className="h-25 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 py-2 rounded-lg relative ${
                  isActive(link.path) 
                    ? "text-white glass-card border border-primary/50 shadow-lg shadow-primary/20" 
                    : "text-foreground hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-primary group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 glass-strong rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full gradient-primary group">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}