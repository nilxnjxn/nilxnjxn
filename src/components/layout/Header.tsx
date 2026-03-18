"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/music" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
          isScrolled ? "py-4" : "py-8"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-6",
          isScrolled ? "bg-black/40 backdrop-blur-2xl border border-white/10 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "bg-transparent py-0"
        )}>
          {/* Logo */}
          <Magnetic strength={0.1}>
            <Link href="/" className="flex items-center gap-4 group">
              <img src="/LOGO-FINAL.png" alt="Logo" className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-500" />
              <span className="text-xs md:text-sm font-expressive text-white tracking-[0.3em] mt-1 hidden sm:block">nilxnjxn</span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.href} strength={0.2}>
                <Link 
                  href={link.href}
                  className="relative text-xs uppercase tracking-widest font-functional transition-colors hover:text-white py-2 px-1"
                >
                  <span className={cn(
                    "transition-colors",
                    pathname === link.href ? "text-white" : "text-muted-foreground"
                  )}>
                    {link.name}
                  </span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </Magnetic>
            ))}
            <Magnetic strength={0.3}>
              <Link 
                href="/store"
                className="bg-white text-black px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
              >
                Store
              </Link>
            </Magnetic>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HugeiconsIcon icon={Cancel01Icon} size={32} />
            </button>

            <nav className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "text-4xl font-expressive transition-colors",
                    pathname === link.href ? "text-accent" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/store"
                className="mt-8 bg-white text-black px-12 py-4 rounded-full text-sm uppercase font-bold tracking-widest shadow-2xl"
              >
                Store
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
