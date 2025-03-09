import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-primary text-secondary">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image 
              src="/images/entropia-barbershop-logo.jpg" 
              alt="Entropia Barbershop Logo" 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 48px, 56px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-purple-light">ENTROPIA</span>
            <span className="text-sm uppercase tracking-widest">Barbershop</span>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-purple-light transition-colors">
            Strona główna
          </Link>
          <Link href="/uslugi" className="hover:text-purple-light transition-colors">
            Usługi
          </Link>
          <Link href="/o-nas" className="hover:text-purple-light transition-colors">
            O nas
          </Link>
          <Link href="/rezerwacja" className="hover:text-purple-light transition-colors">
            Rezerwacja
          </Link>
          <Link href="/kontakt" className="hover:text-purple-light transition-colors">
            Kontakt
          </Link>
        </div>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
} 