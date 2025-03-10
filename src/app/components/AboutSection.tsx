"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutSection() {
  const [imageError1, setImageError1] = useState(false);
  
  return (
    <section className="py-20 bg-black" style={{ backgroundColor: "#000000" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-md overflow-hidden">
            {/* Fallback dla obrazu */}
            {imageError1 && (
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center" style={{ backgroundColor: "#27272B" }}>
                <div className="text-purple-light text-2xl font-bold" style={{ color: "#8A3793" }}>ENTROPIA BARBERSHOP</div>
              </div>
            )}
            <Image
              src="/images/about-barbershop.jpg"
              alt="Entropia Barbershop wnętrze"
              fill
              className="object-cover"
              onError={() => setImageError1(true)}
              unoptimized={true} // Wyłączamy optymalizację obrazów
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ color: "#FFFFFF" }}>O Entropia Barbershop</h2>
            <p className="text-gray-300 mb-6" style={{ color: "#D1D5DB" }}>
              Entropia Barbershop to miejsce, gdzie tradycyjne barbierstwo spotyka się z nowoczesnym podejściem do męskiej pielęgnacji. Założony z pasji do precyzyjnego rzemiosła, nasz salon oferuje najwyższej jakości usługi strzyżenia i pielęgnacji brody.
            </p>
            <p className="text-gray-300 mb-6" style={{ color: "#D1D5DB" }}>
              Nasz zespół składa się z doświadczonych barberów, dla których precyzja i dbałość o szczegóły są najważniejsze. Każda wizyta to nie tylko profesjonalna usługa, ale również czas relaksu w przyjaznej, męskiej atmosferze.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-purple-light text-4xl font-bold mb-2" style={{ color: "#8A3793" }}>5+</div>
                <p className="text-gray-400" style={{ color: "#9CA3AF" }}>Lat doświadczenia</p>
              </div>
              <div>
                <div className="text-purple-light text-4xl font-bold mb-2" style={{ color: "#8A3793" }}>1000+</div>
                <p className="text-gray-400" style={{ color: "#9CA3AF" }}>Zadowolonych klientów</p>
              </div>
            </div>
            
            <Link 
              href="/o-nas" 
              className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-sm transition-colors"
              style={{ 
                backgroundColor: "#5E1A64", 
                color: "#FFFFFF" 
              }}
            >
              Poznaj nas lepiej
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 