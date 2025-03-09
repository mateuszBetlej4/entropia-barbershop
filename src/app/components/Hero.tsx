"use client";

import Link from "next/link";

export default function Hero() {
  // Usuwamy sprawdzanie obrazu tła, zamiast tego zawsze używamy gradientu
  
  return (
    <section className="relative h-[80vh] bg-primary text-secondary">
      {/* Background gradient using the purple palette */}
      <div className="absolute inset-0 bg-gradient-purple opacity-90">
        {/* Decorative pattern with new color */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(138,55,147,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl">
          Poczuj sztukę <span className="text-purple-light">Barbierstwa</span>
        </h1>
        <p className="mt-6 text-xl max-w-xl text-lightNeutral">
          Najwyższej jakości usługi barberskie, które podkreślą Twój styl i pewność siebie. Stworzone przez ekspertów w Krośnie.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link 
            href="/rezerwacja" 
            className="bg-purple hover:bg-purple-light text-secondary font-medium py-3 px-8 rounded-sm transition-colors"
          >
            Zarezerwuj Wizytę
          </Link>
          <Link 
            href="/uslugi" 
            className="border border-purple-light hover:bg-purple-light hover:text-secondary font-medium py-3 px-8 rounded-sm transition-colors"
          >
            Nasze Usługi
          </Link>
        </div>
      </div>
    </section>
  );
} 