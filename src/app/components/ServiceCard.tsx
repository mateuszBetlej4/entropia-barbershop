"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  imageSrc: string;
  id: string;
}

export default function ServiceCard({ title, description, price, duration, imageSrc, id }: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Domyślny obraz zastępczy - używamy statycznego obrazu z Next.js
  const placeholderImage = "/images/service-placeholder.jpg";
  
  return (
    <div className="bg-neutral rounded-md overflow-hidden group" style={{ backgroundColor: "#3A2A3C" }}>
      <div className="relative w-full" style={{ paddingTop: "66.67%" }}>  {/* 3:2 aspect ratio for more vertical space */}
        {/* Używamy statycznego obrazu z Next.js jako fallback */}
        <div 
          className="absolute inset-0 bg-primary flex items-center justify-center"
          style={{ 
            display: imageError ? 'flex' : 'none',
            backgroundColor: "#2D0A31"
          }}
        >
          <div className="text-accent text-lg font-bold" style={{ color: "#5E1A64" }}>{title}</div>
        </div>
        <Image 
          src={imageError ? placeholderImage : (imageSrc || placeholderImage)} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: "center 30%" }} // Position slightly above center to avoid cutting off tops
          onError={() => setImageError(true)}
          unoptimized={true} // Wyłączamy optymalizację obrazów, aby uniknąć problemów z placeholderami
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2" style={{ color: "#F8F8F8" }}>{title}</h3>
        <p className="text-lightNeutral mb-4" style={{ color: "#E5DCE6" }}>{description}</p>
        <div className="flex justify-between items-center text-sm text-lightNeutral mb-6" style={{ color: "#E5DCE6" }}>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          <div className="text-purple-light font-bold text-xl" style={{ color: "#8A3793" }}>{price}</div>
        </div>
        <Link 
          href={`/rezerwacja?service=${id}`}
          className="block text-center bg-primary hover:bg-accent hover:text-primary text-secondary py-2 px-4 rounded transition-colors w-full"
          style={{ 
            backgroundColor: "#2D0A31", 
            color: "#F8F8F8"
          }}
        >
          Zarezerwuj
        </Link>
      </div>
    </div>
  );
} 