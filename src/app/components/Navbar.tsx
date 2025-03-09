"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-primary text-secondary relative z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 relative z-20">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image 
                src="/images/entropia-barbershop-logo.jpg" 
                alt="Entropia Barbershop Logo" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 56px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-purple-light">ENTROPIA</span>
              <span className="text-sm uppercase tracking-widest">Barbershop</span>
            </div>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-purple-light transition-colors">
              Strona główna
            </Link>
            <Link href="/uslugi" className="hover:text-purple-light transition-colors">
              Usługi
            </Link>
            <Link href="/o-nas" className="hover:text-purple-light transition-colors">
              O nas
            </Link>
            <Link href="/rezerwacja" className="hover:text-purple-light transition-colors">
              Rezerwacja
            </Link>
            <Link href="/kontakt" className="hover:text-purple-light transition-colors">
              Kontakt
            </Link>
          </div>
          
          <button 
            className="md:hidden z-50" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-primary z-40 md:hidden" style={{ backgroundColor: '#2D0A31' }}>
          <div className="h-full w-full flex flex-col items-center justify-center pt-16">
            <div className="flex flex-col items-center gap-8 text-xl">
              <Link 
                href="/" 
                className="text-white hover:text-purple-light transition-colors py-3 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Strona główna
              </Link>
              <Link 
                href="/uslugi" 
                className="text-white hover:text-purple-light transition-colors py-3 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Usługi
              </Link>
              <Link 
                href="/o-nas" 
                className="text-white hover:text-purple-light transition-colors py-3 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nas
              </Link>
              <Link 
                href="/rezerwacja" 
                className="text-white hover:text-purple-light transition-colors py-3 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rezerwacja
              </Link>
              <Link 
                href="/kontakt" 
                className="text-white hover:text-purple-light transition-colors py-3 px-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 