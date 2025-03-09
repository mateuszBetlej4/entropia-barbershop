import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container-custom relative z-10 text-center py-20">
        <h1 className="heading-xl mb-6 text-white">
          Odkryj sztukę <span className="text-accent">barbering</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Oferujemy usługi najwyższej jakości, które podkreślą Twój styl i dodadzą pewności siebie. 
          Stworzone przez ekspertów w Krośnie.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#booking"
            className="btn-primary text-lg py-3 px-8"
          >
            Zarezerwuj wizytę
          </Link>
          <Link
            href="/#services"
            className="btn-secondary text-lg py-3 px-8"
          >
            Zobacz nasze usługi
          </Link>
        </div>
      </div>
    </section>
  );
}