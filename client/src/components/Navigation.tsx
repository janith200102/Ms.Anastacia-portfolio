import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/why-me", label: "My Guarantee" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/90 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-background shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-wide text-white leading-none">
              Ms. Anastacia
            </h1>
            <span className="text-[9px] tracking-[0.1em] text-primary uppercase opacity-80 whitespace-nowrap">
              The Goddess Of Your Heart.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
              "text-sm font-medium transition-all duration-200 hover:text-primary relative group py-1",
              location === link.href ? "text-primary" : "text-white/80"
            )}>
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
            </Link>
          ))}
          <Link href="/contact">
            <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20">
              Book Now
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={cn(
                  "text-lg font-medium transition-colors",
                  location === link.href ? "text-primary" : "text-white/80"
                )}>
                    {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <button className="w-full mt-4 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-yellow-400 transition-colors">
                  Book Now
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
