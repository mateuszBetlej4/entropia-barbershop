import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-12 pb-6" style={{ backgroundColor: "#2D0A31" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image 
                  src="/images/entropia-barbershop-logo.jpg" 
                  alt="Entropia Barbershop Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-light" style={{ color: "#8A3793" }}>ENTROPIA BARBERSHOP</h3>
            </div>
            <p className="mb-4" style={{ color: "#F8F8F8" }}>Najwyższa jakość usług barberskich w Krośnie. Doświadcz sztuki strzyżenia z naszym zespołem ekspertów.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/entropiabarbershop" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/entropia_barbershop/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-7 15.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm0-4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm0-4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm7 8a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm0-4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm0-4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#F8F8F8" }}>Godziny otwarcia</h3>
            <ul className="space-y-2" style={{ color: "#F8F8F8" }}>
              <li className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela</span>
                <span>Zamknięte</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2" style={{ color: "#F8F8F8" }}>Udogodnienia:</h4>
              <ul className="space-y-1" style={{ color: "#E5DCE6" }}>
                <li>✓ Parking</li>
                <li>✓ Wi-Fi</li>
                <li>✓ Płatność kartą</li>
                <li>✓ Zwierzęta dozwolone</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#F8F8F8" }}>Kontakt</h3>
            <address className="not-italic mb-4" style={{ color: "#F8F8F8" }}>
              <p>ul. Krakowska 37, 38-400 Krosno</p>
              <p>Polska</p>
              <p className="mt-2">Telefon: <a href="tel:+48666666666" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>+48 666 666 666</a></p>
              <p>Email: <a href="mailto:kontakt@entropiabarbershop.pl" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>kontakt@entropiabarbershop.pl</a></p>
            </address>
            <a 
              href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-2 px-4 rounded-sm transition-colors"
              style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
            >
              Zarezerwuj na Booksy
            </a>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm" style={{ borderColor: "#3A2A3C", color: "#E5DCE6" }}>
          <p>&copy; {new Date().getFullYear()} Entropia Barbershop Szymon Rechziegel. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">
            <Link href="/polityka-prywatnosci" className="hover:text-purple-light transition-colors mr-4" style={{ color: "white" }}>Polityka Prywatności</Link>
            <Link href="/regulamin" className="hover:text-purple-light transition-colors" style={{ color: "white" }}>Regulamin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 