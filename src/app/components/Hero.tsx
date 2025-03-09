"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  // Usuwamy sprawdzanie obrazu tła, zamiast tego zawsze używamy gradientu
  
  return (
    <section className="relative h-[80vh] bg-black text-white">
      {/* Używamy gradientu zamiast obrazu tła */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-black opacity-90">
        {/* Możemy dodać dekoracyjny wzór */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">
          Poczuj sztukę <span className="text-amber-400">Barbierstwa</span>
        </h1>
        <p className="mt-6 text-xl max-w-xl text-gray-200">
          Najwyższej jakości usługi barberskie, które podkreślą Twój styl i pewność siebie. Stworzone przez ekspertów w Krośnie.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link 
            href="/rezerwacja" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-8 rounded-sm transition-colors"
          >
            Zarezerwuj Wizytę
          </Link>
          <Link 
            href="/uslugi" 
            className="border border-white hover:bg-white hover:text-black font-medium py-3 px-8 rounded-sm transition-colors"
          >
            Nasze Usługi
          </Link>
        </div>
      </div>
    </section>
  );
} 