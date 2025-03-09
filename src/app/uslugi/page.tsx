import ServiceCard from "../components/ServiceCard";

// Dane wszystkich usług salonu
const services = [
  // Usługi strzyżenia
  {
    id: "klasyczne-strzyzenie",
    title: "Klasyczne strzyżenie",
    description: "Precyzyjne strzyżenie nożyczkami i maszynką, mycie, stylizacja oraz konsultacja.",
    price: "60 zł",
    duration: "45 min",
    imageSrc: "/images/classic-haircut.jpg"
  },
  {
    id: "buzzcut",
    title: "Buzzcut lub same boki",
    description: "Krótkie, równomierne strzyżenie maszynką całej głowy lub samych boków.",
    price: "40 zł",
    duration: "30 min",
    imageSrc: "/images/buzzcut.jpg"
  },
  {
    id: "dlugie-wlosy",
    title: "Strzyżenie długich włosów",
    description: "Strzyżenie i modelowanie włosów dłuższych, wymagających precyzyjnej techniki.",
    price: "70 zł",
    duration: "1h",
    imageSrc: "/images/long-hair.jpg"
  },
  {
    id: "strzyzenie-dzieciece",
    title: "Strzyżenie dziecięce",
    description: "Delikatne strzyżenie dla chłopców w wieku od 6 do 12 lat.",
    price: "60 zł",
    duration: "45 min",
    imageSrc: "/images/kids-cut.jpg"
  },
  {
    id: "golenie-glowy",
    title: "Golenie głowy",
    description: "Precyzyjne golenie głowy na łyso lub jednolitą długość.",
    price: "40 zł",
    duration: "30 min",
    imageSrc: "/images/head-shave.jpg"
  },
  
  // Usługi brody
  {
    id: "trymowanie-brody",
    title: "Trymowanie brody",
    description: "Precyzyjne modelowanie brody, wąsów i zarostu z użyciem profesjonalnych narzędzi.",
    price: "40 zł",
    duration: "30 min",
    imageSrc: "/images/beard-trim.jpg"
  },
  {
    id: "trymowanie-brody-brzytwa",
    title: "Trymowanie brody z brzytwą",
    description: "Luksusowe modelowanie brody z użyciem brzytwy i gorącego ręcznika dla idealnie gładkiego wykończenia.",
    price: "50 zł",
    duration: "45 min",
    imageSrc: "/images/beard-razor.jpg"
  },
  
  // Pakiety
  {
    id: "combo-fryzura-broda",
    title: "Combo (fryzura + broda)",
    description: "Kompleksowa usługa obejmująca strzyżenie włosów oraz trymowanie brody.",
    price: "90 zł",
    duration: "1h 15min",
    imageSrc: "/images/combo-service.jpg"
  },
  {
    id: "combo-brzytwa",
    title: "Combo z brzytwą i gorącym ręcznikiem",
    description: "Strzyżenie włosów oraz luksusowe modelowanie brody z użyciem brzytwy i gorącego ręcznika.",
    price: "100 zł",
    duration: "1h 30min",
    imageSrc: "/images/combo-razor.jpg"
  },
  {
    id: "combo-lysego",
    title: "Combo łysego",
    description: "Golenie głowy oraz trymowanie brody - idealne rozwiązanie dla mężczyzn z łysiną.",
    price: "70 zł",
    duration: "1h",
    imageSrc: "/images/bald-combo.jpg"
  }
];

// Grupowanie usług według kategorii
const categorizedServices = {
  "Strzyżenie": services.slice(0, 5),
  "Broda": services.slice(5, 7),
  "Pakiety": services.slice(7)
};

export default function ServicesPage() {
  return (
    <main className="py-16 bg-zinc-950" style={{ backgroundColor: "#09090B" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ color: "#FFFFFF" }}>Nasze Usługi</h1>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
            Oferujemy szeroki zakres profesjonalnych usług barberskich, które pozwolą Ci wyglądać i czuć się najlepiej. Każda usługa zawiera konsultację i precyzyjne wykonanie przez doświadczonych barberów.
          </p>
        </div>

        {Object.entries(categorizedServices).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-2 border-b border-purple-light" style={{ color: "#FFFFFF", borderColor: "#8A3793" }}>{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-16 p-6 bg-neutral rounded-md" style={{ backgroundColor: "#3A2A3C" }}>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ color: "#FFFFFF" }}>Rezerwacja</h2>
          <p className="text-gray-300 mb-6" style={{ color: "#E5DCE6" }}>
            Zarezerwuj wizytę online przez Booksy lub zadzwoń do nas pod numer +48 666 666 666.
          </p>
          <a 
            href="https://booksy.com/pl-pl/286358_entropia-barbershop-szymon-rechziegel_barber-shop_11352_krosno" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-purple hover:bg-purple-light text-white font-medium py-3 px-8 rounded-sm transition-colors"
            style={{ backgroundColor: "#5E1A64", color: "#FFFFFF" }}
          >
            Zarezerwuj na Booksy
          </a>
        </div>
      </div>
    </main>
  );
} 