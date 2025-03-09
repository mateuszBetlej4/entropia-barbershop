import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">O Nas</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Poznaj historię Entropia Barbershop i ludzi tworzących to wyjątkowe miejsce w Krośnie.
          </p>
        </div>

        {/* Historia */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-md overflow-hidden">
              <Image
                src="/images/barbershop-interior.jpg"
                alt="Wnętrze Entropia Barbershop"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nasza Historia</h2>
              <p className="text-gray-300 mb-4">
                Entropia Barbershop powstał z pasji do sztuki barbierskiej i chęci stworzenia wyjątkowego miejsca dla mężczyzn w Krośnie. Założony w 2018 roku przez Szymona Rechziegla, szybko stał się rozpoznawalnym punktem na mapie miasta.
              </p>
              <p className="text-gray-300 mb-4">
                Nazwa &ldquo;Entropia&rdquo; symbolizuje naszą filozofię – wierzymy, że każda zmiana wyglądu to krok w kierunku większej harmonii i pewności siebie. Dążymy do perfekcji w każdym aspekcie naszej pracy, łącząc tradycyjne techniki barbierskie z nowoczesnymi trendami.
              </p>
              <p className="text-gray-300">
                Przez lata zdobyliśmy zaufanie setek klientów, którzy regularnie wracają do nas po kolejną dawkę profesjonalnej pielęgnacji i unikalnej atmosfery.
              </p>
            </div>
          </div>
        </section>

        {/* Nasza Misja */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nasza Misja</h2>
              <p className="text-gray-300 mb-4">
                W Entropia Barbershop naszą misją jest zapewnienie każdemu klientowi najwyższej jakości usług barbierskich w przyjaznej, męskiej atmosferze. Wierzymy, że dobry wygląd to nie tylko kwestia estetyki, ale również samopoczucia i pewności siebie.
              </p>
              <p className="text-gray-300 mb-4">
                Dbamy o każdy detal – od precyzyjnego strzyżenia, przez staranne modelowanie brody, aż po finalne stylizacje. Każdy klient jest traktowany indywidualnie, z pełnym zaangażowaniem i profesjonalizmem.
              </p>
              <p className="text-gray-300">
                Naszym celem jest nie tylko spełnianie, ale przekraczanie oczekiwań klientów oraz nieustanne doskonalenie naszych umiejętności, aby być zawsze o krok przed trendami w męskiej pielęgnacji.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-md overflow-hidden order-1 md:order-2">
              <Image
                src="/images/barber-tools.jpg"
                alt="Narzędzia barberskie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Dlaczego My */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Dlaczego Warto Wybrać Nas?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-md">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Doświadczenie i Profesjonalizm</h3>
              <p className="text-gray-300">
                Nasz zespół składa się z doświadczonych barberów, którzy nieustannie doskonalą swoje umiejętności, aby zapewnić Ci najlepszą jakość usług.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-md">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Indywidualne Podejście</h3>
              <p className="text-gray-300">
                Dla nas każdy klient jest wyjątkowy. Dbamy o to, aby usługa była dopasowana do Twoich potrzeb, kształtu twarzy i osobistego stylu.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-md">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Wyjątkowa Atmosfera</h3>
              <p className="text-gray-300">
                Entropia to nie tylko barbershop, to miejsce, gdzie możesz się zrelaksować, porozmawiać i oderwać od codzienności. U nas poczujesz się jak w męskim azylu.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 