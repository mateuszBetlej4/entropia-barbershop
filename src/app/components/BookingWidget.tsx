"use client";

import { useEffect, useState, useRef } from 'react';

// Add TypeScript declaration for Booksy
declare global {
  interface Window {
    Booksy?: {
      widget: (config: {
        id: string;
        type: string;
        lang: string;
        theme: string;
        width: string;
        container: string;
      }) => void;
    };
  }
}

export default function BookingWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    try {
      // Create the script element exactly as in the Booksy documentation
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://booksy.com/widget/code.js?id=286358&country=pl&lang=pl';
      script.async = true;
      
      // Handle script load success
      script.onload = () => {
        setIsLoaded(true);
        console.log('Booksy widget script loaded successfully');
      };
      
      // Handle script load error
      script.onerror = () => {
        setError('Failed to load Booksy widget script');
        console.error('Failed to load Booksy widget script');
      };
      
      // Append the script directly to the container
      containerRef.current.appendChild(script);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error loading widget');
      console.error('Error setting up Booksy widget:', err);
    }
    
    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-purple-light mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">Zarezerwuj wizytę online</h3>
      <p className="text-gray-300 mb-6 max-w-lg">
        Wybierz usługę, termin i barbera bezpośrednio poniżej.
      </p>
      
      {/* Booksy widget container */}
      <div 
        ref={containerRef}
        className="w-full max-w-3xl mx-auto mb-6 rounded-md overflow-hidden"
        style={{ 
          backgroundColor: "#2D0A31", 
          color: "#FFFFFF",
          minHeight: "500px"
        }}
      >
        {!isLoaded && !error && (
          <div className="flex items-center justify-center h-64">
            <p className="text-white">Ładowanie widgetu rezerwacji...</p>
          </div>
        )}
        
        {error && (
          <div className="flex flex-col items-center justify-center h-64 p-4">
            <p className="text-red-500 mb-4">Wystąpił problem z ładowaniem widgetu Booksy.</p>
            <a 
              href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-sm transition-colors"
              style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
            >
              Przejdź do Booksy
            </a>
          </div>
        )}
      </div>
      
      <p className="text-gray-400 text-sm">
        Powered by Booksy - system rezerwacji online dla salonów.
      </p>
    </div>
  );
} 