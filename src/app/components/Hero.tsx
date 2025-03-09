"use client";

import Link from "next/link";

export default function Hero() {
  // Usuwamy sprawdzanie obrazu tła, zamiast tego zawsze używamy gradientu
  
  return (
    <section className="relative h-[80vh] bg-primary text-secondary" style={{ backgroundColor: "#2D0A31", color: "#F8F8F8" }}>
      {/* Background gradient using the purple palette */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(to bottom, #1A0520, #3E1142, #5E1A64)",
          opacity: "0.95"
        }}
      >
        {/* Decorative pattern with new color */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(138,55,147,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Dark overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl text-white">
          Poczuj sztukę <span className="text-purple-light" style={{ color: "#8A3793" }}>Barbierstwa</span>
        </h1>
        <p className="mt-6 text-xl max-w-xl text-white" style={{ color: "#FFFFFF" }}>
          Najwyższej jakości usługi barberskie, które podkreślą Twój styl i pewność siebie. Stworzone przez ekspertów w Krośnie.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link 
            href="/rezerwacja" 
            className="bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-sm transition-colors"
            style={{ 
              backgroundColor: "#5E1A64", 
              color: "#FFFFFF"
            }}
          >
            Zarezerwuj Wizytę
          </Link>
          <Link 
            href="/uslugi" 
            className="border border-purple-light hover:bg-purple-light hover:text-white font-medium py-3 px-8 rounded-sm transition-colors"
            style={{ 
              borderColor: "#8A3793", 
              color: "#FFFFFF"
            }}
          >
            Nasze Usługi
          </Link>
          <Link 
            href="/aktualnosci" 
            className="border border-purple-light hover:bg-purple-light hover:text-white font-medium py-3 px-8 rounded-sm transition-colors"
            style={{ 
              borderColor: "#8A3793", 
              color: "#FFFFFF"
            }}
          >
            Aktualności
          </Link>
        </div>
      </div>
    </section>
  );
} 