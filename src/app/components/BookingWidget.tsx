"use client";

import { useEffect, useState } from 'react';

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
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    // Skip widget loading if using iframe
    if (useIframe) return;

    // Create Booksy widget script
    const script = document.createElement('script');
    script.src = 'https://booksy.com/widget/code.js';
    script.async = true;
    
    // Handle script load success
    script.onload = () => {
      setIsLoaded(true);
      
      // Initialize widget when script loads
      try {
        if (window.Booksy) {
          window.Booksy.widget({
            id: '286358', // Entropia Barbershop ID
            type: 'booksy-services',
            lang: 'pl',
            theme: 'dark',
            width: '100%',
            container: 'booksy-widget-container'
          });
          console.log('Booksy widget initialized');
        } else {
          setError('Booksy widget not available after loading script');
          console.error('Booksy widget not available after loading script');
        }
      } catch (err) {
        setError(`Error initializing Booksy widget: ${err instanceof Error ? err.message : String(err)}`);
        console.error('Error initializing Booksy widget:', err);
      }
    };
    
    // Handle script load error
    script.onerror = (e) => {
      setError('Failed to load Booksy widget script');
      console.error('Failed to load Booksy widget script:', e);
    };
    
    // Add script to document
    document.body.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Remove any Booksy elements that might have been created
      const booksyElements = document.querySelectorAll('[id^="booksy-"]');
      booksyElements.forEach(el => el.remove());
    };
  }, [useIframe]);

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
      
      {/* Toggle between widget and direct link */}
      <div className="mb-4">
        <button 
          onClick={() => setUseIframe(false)} 
          className={`px-4 py-2 mr-2 rounded-md ${!useIframe ? 'bg-purple text-white' : 'bg-gray-700 text-gray-300'}`}
          style={{ backgroundColor: !useIframe ? "#5E1A64" : "#27272A" }}
        >
          Widget Booksy
        </button>
        <button 
          onClick={() => setUseIframe(true)} 
          className={`px-4 py-2 rounded-md ${useIframe ? 'bg-purple text-white' : 'bg-gray-700 text-gray-300'}`}
          style={{ backgroundColor: useIframe ? "#5E1A64" : "#27272A" }}
        >
          Strona Booksy
        </button>
      </div>
      
      {/* Booksy widget container */}
      {!useIframe ? (
        <div 
          id="booksy-widget-container" 
          className="w-full max-w-3xl mx-auto mb-6 rounded-md overflow-hidden"
          style={{ 
            backgroundColor: "#2D0A31", 
            color: "#FFFFFF",
            minHeight: "400px"
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
      ) : (
        <div className="w-full max-w-3xl mx-auto mb-6 rounded-md overflow-hidden" style={{ height: "600px" }}>
          <a 
            href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-sm transition-colors mb-4"
            style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
          >
            Otwórz Booksy w nowej karcie
          </a>
          <p className="text-gray-300 mb-4 text-sm">
            Niestety, Booksy nie pozwala na bezpośrednie osadzenie ich strony w ramce. Kliknij przycisk powyżej, aby przejść do strony rezerwacji.
          </p>
        </div>
      )}
      
      <p className="text-gray-400 text-sm">
        Powered by Booksy - system rezerwacji online dla salonów.
      </p>
    </div>
  );
} 