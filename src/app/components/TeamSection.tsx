"use client";

import { useState } from "react";
import Image from "next/image";

const team = [
  {
    id: 1,
    name: "Adam Kowalski",
    role: "Główny Barber / Właściciel",
    bio: "Z ponad 8-letnim doświadczeniem, Adam jest ekspertem w klasycznych technikach strzyżenia i stylizacji brody.",
    image: "/images/barber-1.jpg",
    specialties: ["Strzyżenie klasyczne", "Golenie brzytwą", "Stylizacja brody"],
  },
  {
    id: 2,
    name: "Piotr Nowak",
    role: "Senior Barber",
    bio: "Piotr specjalizuje się w nowoczesnych fryzurach męskich i precyzyjnym modelowaniu brody.",
    image: "/images/barber-2.jpg",
    specialties: ["Nowoczesne fryzury", "Koloryzacja", "Trymowanie brody"],
  },
  {
    id: 3,
    name: "Michał Wiśniewski",
    role: "Barber",
    bio: "Michał to mistrz precyzyjnych cięć i kreatywnych stylizacji, który dołączył do naszego zespołu 2 lata temu.",
    image: "/images/barber-3.jpg",
    specialties: ["Fade", "Strzyżenie maszynką", "Stylizacja włosów"],
  },
];

export default function TeamSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="team" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Nasz <span className="text-accent">Zespół</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Poznaj profesjonalistów, którzy zadbają o Twój wygląd. Nasz zespół to doświadczeni barberzy z pasją do swojego rzemiosła.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-80">
                {!imageErrors[member.id] ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    onError={() => handleImageError(member.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-center p-4">
                    <p className="text-gray-400">{member.name}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div>
                  <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">
                    Specjalizacje:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}