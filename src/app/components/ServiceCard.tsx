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
  const placeholderImage = "/next.svg";
  
  return (
    <div className="bg-neutral rounded-md overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        {/* Używamy statycznego obrazu z Next.js jako fallback */}
        <div 
          className="absolute inset-0 bg-primary flex items-center justify-center"
          style={{ display: imageError ? 'flex' : 'none' }}
        >
          <div className="text-accent text-lg font-bold">{title}</div>
        </div>
        <Image 
          src={imageError ? placeholderImage : (imageSrc || placeholderImage)} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
          unoptimized={true} // Wyłączamy optymalizację obrazów, aby uniknąć problemów z placeholderami
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-lightNeutral mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-lightNeutral mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
          <div className="text-purple-light font-bold text-xl">{price}</div>
        </div>
        <Link 
          href={`/rezerwacja?service=${id}`}
          className="block text-center bg-primary hover:bg-accent hover:text-primary text-secondary py-2 px-4 rounded transition-colors w-full"
        >
          Zarezerwuj
        </Link>
      </div>
    </div>
  );
} 