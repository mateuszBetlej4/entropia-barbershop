import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-black text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">ENTROPIA</span>
          <span className="text-sm uppercase tracking-widest">Barbershop</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Strona główna
          </Link>
          <Link href="/uslugi" className="hover:text-amber-400 transition-colors">
            Usługi
          </Link>
          <Link href="/o-nas" className="hover:text-amber-400 transition-colors">
            O nas
          </Link>
          <Link href="/rezerwacja" className="hover:text-amber-400 transition-colors">
            Rezerwacja
          </Link>
          <Link href="/kontakt" className="hover:text-amber-400 transition-colors">
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