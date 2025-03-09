import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kontakt</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby uzyskać więcej informacji lub zarezerwować wizytę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informacje kontaktowe */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Dane Kontaktowe</h2>
            
            <div className="bg-zinc-900 p-8 rounded-md mb-8">
              <div className="flex items-start mb-6">
                <div className="bg-purple p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Adres</h3>
                  <address className="not-italic text-gray-300">
                    ul. Krakowska 37<br />
                    38-400 Krosno<br />
                    Polska
                  </address>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-purple p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                  <p className="text-gray-300">
                    <a href="tel:+48666666666" className="hover:text-purple-light transition-colors">+48 666 666 666</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-purple p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">
                    <a href="mailto:kontakt@entropiabarbershop.pl" className="hover:text-purple-light transition-colors">kontakt@entropiabarbershop.pl</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Godziny otwarcia</h3>
                  <ul className="text-gray-300">
                    <li className="mb-1">Poniedziałek - Piątek: 10:00 - 19:00</li>
                    <li className="mb-1">Sobota: 9:00 - 15:00</li>
                    <li>Niedziela: Zamknięte</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Media Społecznościowe</h2>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61573591610150"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-900 p-4 rounded-full hover:bg-purple transition-colors text-white hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/entropia_barber/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-900 p-4 rounded-full hover:bg-purple transition-colors text-white hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Formularz kontaktowy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Napisz do nas</h2>
            
            <form className="bg-zinc-900 p-8 rounded-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-light"
                  placeholder="Twoje imię i nazwisko"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-light"
                  placeholder="Twój adres email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-white mb-2">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-light"
                  placeholder="Twój numer telefonu"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Wiadomość</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-light"
                  placeholder="Twoja wiadomość"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-purple hover:bg-purple-light text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
        
        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Jak do nas trafić</h2>
          <div className="rounded-md overflow-hidden h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.3308401666307!2d21.763844311542847!3d49.683699071377824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c9add1186b5b3%3A0x88c0113a3b4eba07!2sKrakowska%2037%2C%2038-400%20Krosno!5e0!3m2!1spl!2spl!4v1710008347983!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{border: 0}}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Gotowy na nowy wygląd?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Zarezerwuj wizytę już teraz i pozwól nam zadbać o Twój wygląd. Oferujemy elastyczne terminy, aby dopasować się do Twojego napiętego harmonogramu.
          </p>
          <Link 
            href="/rezerwacja" 
            className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Zarezerwuj wizytę
          </Link>
        </div>
      </div>
    </main>
  );
} 