import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aktualności - Entropia Barbershop',
  description: 'Najnowsze informacje, wydarzenia i promocje w Entropia Barbershop w Krośnie.',
  openGraph: {
    title: 'Aktualności - Entropia Barbershop',
    description: 'Najnowsze informacje, wydarzenia i promocje w Entropia Barbershop w Krośnie.',
    url: 'https://entropiabarbershop.pl/aktualnosci',
    siteName: 'Entropia Barbershop',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function AktualnosciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-zinc-950 min-h-screen" style={{ backgroundColor: "#09090B" }}>
      {children}
    </section>
  );
} 