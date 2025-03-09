import Link from "next/link";
import ServiceCard from "./ServiceCard";

// Przykładowe dane usług
const featuredServices = [
  {
    id: "klasyczne-strzyzenie",
    title: "Klasyczne strzyżenie",
    description: "Precyzyjne strzyżenie nożyczkami i maszynką, mycie, stylizacja oraz konsultacja.",
    price: "60 zł",
    duration: "45 min",
    imageSrc: "/images/classic-haircut.jpg"
  },
  {
    id: "combo-fryzura-broda",
    title: "Combo (fryzura + broda)",
    description: "Kompleksowa usługa obejmująca strzyżenie włosów oraz trymowanie brody.",
    price: "90 zł",
    duration: "1h 15min",
    imageSrc: "/images/combo-service.jpg"
  },
  {
    id: "trymowanie-brody",
    title: "Trymowanie brody",
    description: "Precyzyjne modelowanie brody, wąsów i zarostu z użyciem profesjonalnych narzędzi.",
    price: "40 zł",
    duration: "30 min",
    imageSrc: "/images/beard-trim.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nasze Usługi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferujemy pełen zakres profesjonalnych usług barberskich, łączących tradycyjne techniki z nowoczesnymi trendami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/uslugi" 
            className="inline-block border border-purple-light text-purple-light hover:bg-purple-light hover:text-white font-medium py-3 px-8 rounded-sm transition-colors"
          >
            Zobacz wszystkie usługi
          </Link>
        </div>
      </div>
    </section>
  );
} 