"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleBookingClick = () => {
    setIsLoading(true);
    // Symulacja ładowania przed przekierowaniem
    setTimeout(() => {
      setIsLoading(false);
      window.open("https://booksy.com", "_blank");
    }, 1000);
  };

  return (
    <section id="booking" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Zarezerwuj <span className="text-accent">wizytę online</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Zarezerwuj wizytę w Entropia Barbershop szybko i wygodnie przez internet. 
            Wybierz usługę, termin i barbera, a my zajmiemy się resztą.
          </p>
          
          <div className="bg-gray-900 p-8 md:p-12 rounded-lg shadow-xl mb-10">
            <h3 className="text-2xl font-bold mb-6">Jak zarezerwować wizytę?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-accent text-primary h-12 w-12 flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">Wybierz usługę</h4>
                <p className="text-gray-300">
                  Wybierz interesującą Cię usługę z naszej oferty.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-accent text-primary h-12 w-12 flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">Wybierz termin</h4>
                <p className="text-gray-300">
                  Sprawdź dostępne terminy i wybierz dogodny dla Ciebie.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="bg-accent text-primary h-12 w-12 flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">Potwierdź rezerwację</h4>
                <p className="text-gray-300">
                  Wprowadź swoje dane i potwierdź rezerwację.
                </p>
              </div>
            </div>
            
            <button
              onClick={handleBookingClick}
              disabled={isLoading}
              className="btn-primary text-lg py-3 px-10 flex items-center justify-center mx-auto"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Przekierowywanie...
                </>
              ) : (
                "Zarezerwuj przez Booksy"
              )}
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Wolisz tradycyjną metodę rezerwacji?
            </p>
            <p className="text-xl mb-6">
              Zadzwoń do nas: <span className="text-accent font-bold">+48 123 456 789</span>
            </p>
            <Link href="/#contact" className="btn-secondary">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}