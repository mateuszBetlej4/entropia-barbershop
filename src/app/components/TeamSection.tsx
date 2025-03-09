"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  instagram?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "szymon",
    name: "Szymon Rechziegel",
    role: "Założyciel & Główny Barber",
    bio: "Pasjonat barbierstwa z wieloletnim doświadczeniem. Specjalizuje się w klasycznych strzyżeniach i stylizacji brody.",
    imageSrc: "/images/barber-1.jpg",
    instagram: "https://www.instagram.com/lvcy_fair/"
  },
  {
    id: "krystian",
    name: "Krystian",
    role: "Senior Barber",
    bio: "Ekspert w nowoczesnych fryzurach męskich i precyzyjnym modelowaniu zarostu. Uwielbia eksperymentować z nowymi stylami.",
    imageSrc: "/images/barber-2.jpg",
    instagram: "https://www.instagram.com/_maniek_2002/"
  }
];

export default function TeamSection() {
  // Stan dla błędów obrazów
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Funkcja obsługująca błędy ładowania obrazów
  const handleImageError = (id: string) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };
  
  return (
    <section className="py-20 bg-zinc-950" style={{ backgroundColor: "#09090B" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ color: "#FFFFFF" }}>Nasz Zespół</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
            Poznaj ekspertów, którzy zadbają o Twój wygląd. Nasz zespół łączy rzemieślnicze podejście z nowoczesnymi umiejętnościami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-zinc-900 rounded-md overflow-hidden group" style={{ backgroundColor: "#18181B" }}>
              <div className="relative h-80 overflow-hidden">
                {/* Fallback dla obrazu */}
                {imageErrors[member.id] && (
                  <div className="absolute inset-0 bg-zinc-800 flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#27272B" }}>
                    <div className="text-purple-light text-2xl font-bold mb-2" style={{ color: "#8A3793" }}>{member.name}</div>
                    <div className="text-white text-sm" style={{ color: "#FFFFFF" }}>{member.role}</div>
                  </div>
                )}
                <Image 
                  src={member.imageSrc} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(member.id)}
                  unoptimized={true} // Wyłączamy optymalizację obrazów
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white" style={{ color: "#FFFFFF" }}>{member.name}</h3>
                <p className="text-purple-light mb-3" style={{ color: "#8A3793" }}>{member.role}</p>
                <p className="text-gray-300 mb-4" style={{ color: "#D1D5DB" }}>{member.bio}</p>
                {member.instagram && (
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-purple-light transition-colors"
                    style={{ color: "#9CA3AF" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 