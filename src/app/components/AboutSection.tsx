"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="bg-black text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            {!imageError ? (
              <Image
                src="/images/barbershop-interior.jpg"
                alt="Wnętrze Entropia Barbershop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-center p-4">
                <p>Nie udało się załadować obrazu wnętrza barbershopu</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="heading-lg mb-6">
              Poznaj <span className="text-accent">Entropia Barbershop</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Entropia Barbershop to miejsce, gdzie tradycyjne rzemiosło spotyka się z nowoczesnymi technikami strzyżenia i stylizacji. Nasz salon powstał z pasji do barbering i chęci dostarczania najwyższej jakości usług dla mężczyzn w Krośnie.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">5+</h3>
                <p className="text-gray-300">Lat doświadczenia</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">1000+</h3>
                <p className="text-gray-300">Zadowolonych klientów</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">3</h3>
                <p className="text-gray-300">Profesjonalnych barberów</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
                <p className="text-gray-300">Satysfakcji</p>
              </div>
            </div>
            <Link href="/about" className="btn-secondary">
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}