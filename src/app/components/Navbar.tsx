"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-white">
            ENTROPIA
            <span className="text-accent">BARBERSHOP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            ["Strona główna", "/"],
            ["Usługi", "/#services"],
            ["O nas", "/#about"],
            ["Zespół", "/#team"],
            ["Kontakt", "/#contact"],
            ["Rezerwacja", "/#booking"],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className="text-white hover:text-accent transition-colors"
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {[
              ["Strona główna", "/"],
              ["Usługi", "/#services"],
              ["O nas", "/#about"],
              ["Zespół", "/#team"],
              ["Kontakt", "/#contact"],
              ["Rezerwacja", "/#booking"],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}