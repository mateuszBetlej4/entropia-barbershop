"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Strzyżenie klasyczne",
    description: "Tradycyjne strzyżenie włosów z myciem i stylizacją.",
    price: "60 zł",
    image: "/images/service-haircut.jpg",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Strzyżenie i broda",
    description: "Kompleksowa usługa obejmująca strzyżenie włosów oraz trymowanie i stylizację brody.",
    price: "90 zł",
    image: "/images/service-haircut-beard.jpg",
    duration: "45 min",
  },
  {
    id: 3,
    title: "Stylizacja brody",
    description: "Profesjonalne trymowanie, modelowanie i pielęgnacja brody.",
    price: "40 zł",
    image: "/images/service-beard.jpg",
    duration: "20 min",
  },
  {
    id: 4,
    title: "Golenie brzytwą",
    description: "Tradycyjne golenie brzytwą z gorącym ręcznikiem i pielęgnacją skóry.",
    price: "70 zł",
    image: "/images/service-shave.jpg",
    duration: "30 min",
  },
  {
    id: 5,
    title: "Strzyżenie maszynką",
    description: "Szybkie i precyzyjne strzyżenie maszynką na wybrany numer.",
    price: "40 zł",
    image: "/images/service-clipper.jpg",
    duration: "20 min",
  },
  {
    id: 6,
    title: "Strzyżenie dziecięce",
    description: "Strzyżenie dla chłopców do 12 roku życia.",
    price: "40 zł",
    image: "/images/service-kids.jpg",
    duration: "20 min",
  },
];

export default function ServicesSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Nasze <span className="text-accent">Usługi</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferujemy szeroki zakres profesjonalnych usług barberskich, które spełnią oczekiwania nawet najbardziej wymagających klientów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-64">
                {!imageErrors[service.id] ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    onError={() => handleImageError(service.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-center p-4">
                    <p className="text-gray-500">{service.title}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className="text-accent font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Czas trwania: {service.duration}
                  </span>
                  <Link
                    href="/#booking"
                    className="text-accent hover:underline font-medium"
                  >
                    Zarezerwuj
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/#booking" className="btn-primary">
            Zarezerwuj wizytę
          </Link>
        </div>
      </div>
    </section>
  );
}