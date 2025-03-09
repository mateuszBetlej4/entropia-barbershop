import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import RecentNewsSection from "./components/RecentNewsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <RecentNewsSection />
    </main>
  );
}
