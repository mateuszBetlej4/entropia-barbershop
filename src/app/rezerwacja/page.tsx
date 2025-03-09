"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BookingPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  
  // Obsługa błędów ładowania iframe
  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
  };
  
  // Obsługa pomyślnego załadowania iframe
  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };
  
  // Ustawiamy domyślnie błąd iframe, aby pokazać alternatywny interfejs
  useEffect(() => {
    // Dajemy 3 sekundy na załadowanie iframe, jeśli się nie załaduje, pokazujemy alternatywny interfejs
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setIframeError(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [iframeLoaded]);
  
  return (
    <main className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Rezerwacja Wizyty</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Zarezerwuj wizytę online w kilka minut. Wybierz usługę, dogodny termin i gotowe!
          </p>
        </div>

        <div className="mb-12 bg-zinc-900 p-8 rounded-md">
          <h2 className="text-2xl font-bold text-white mb-6">Jak zarezerwować wizytę?</h2>
          <ol className="text-gray-300 space-y-4">
            <li className="flex">
              <span className="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Wybierz usługę</h3>
                <p>Wybierz interesującą Cię usługę z naszej oferty.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Wybierz termin</h3>
                <p>Sprawdź dostępne terminy i wybierz ten, który najbardziej Ci odpowiada.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Podaj swoje dane</h3>
                <p>Wprowadź swoje dane kontaktowe, abyśmy mogli potwierdzić Twoją rezerwację.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold text-white mb-1">Gotowe!</h3>
                <p>Otrzymasz potwierdzenie rezerwacji na podany adres email lub numer telefonu.</p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Wybierz termin i usługę</h2>
          
          {/* Alternatywny interfejs zamiast iframe */}
          <div className="bg-zinc-900 rounded-md overflow-hidden p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-amber-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Zarezerwuj wizytę online</h3>
              <p className="text-gray-300 mb-6 max-w-lg">
                Kliknij poniższy przycisk, aby przejść do systemu rezerwacji Booksy i zarezerwować wizytę w dogodnym dla Ciebie terminie.
              </p>
              <a 
                href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-8 rounded-md transition-colors mb-4"
              >
                Przejdź do Booksy
              </a>
              <p className="text-gray-400 text-sm">
                Zostaniesz przekierowany do systemu rezerwacji Booksy, gdzie możesz wybrać usługę, termin i barberów.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              Jeśli wolisz zarezerwować wizytę telefonicznie, zadzwoń do nas:
            </p>
            <a 
              href="tel:+48666666666" 
              className="text-xl font-bold text-amber-400 hover:underline transition-colors"
            >
              +48 666 666 666
            </a>
          </div>
        </div>
        
        <div className="mt-16 bg-zinc-900 p-8 rounded-md">
          <h2 className="text-2xl font-bold text-white mb-6">Zasady rezerwacji i odwoływania wizyt</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-1">Spóźnienia</h3>
              <p>Prosimy o przybycie 5-10 minut przed zaplanowaną wizytą. W przypadku spóźnienia powyżej 15 minut, zastrzegamy sobie prawo do skrócenia zakresu usługi lub anulowania rezerwacji.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Odwoływanie wizyt</h3>
              <p>Jeśli nie możesz przybyć na umówioną wizytę, prosimy o odwołanie jej z minimum 24-godzinnym wyprzedzeniem. Możesz to zrobić za pośrednictwem systemu Booksy lub telefonicznie.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Rezerwacje dla dzieci</h3>
              <p>Strzyżenie dzieci poniżej 6 lat odbywa się w obecności rodzica lub opiekuna.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 