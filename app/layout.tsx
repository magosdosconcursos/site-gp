import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundDecorations from "@/components/BackgroundDecorations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"] }); // Configure Montserrat

export const metadata: Metadata = {
  title: "Gabaritei Pedagogia - Cursos para Concursos de Magistério",
  description: "Prepare-se para concursos públicos da carreira magistério com os melhores professores e conteúdos especializados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased relative`} style={{
        '--primary': '217 19% 35%',
        '--primary-darker': '217 19% 25%',
        '--secondary': '45 100% 50%',
        '--secondary-darker': '45 100% 40%',
        '--accent': '14 100% 50%',
        '--accent-darker': '14 100% 40%',
        '--b1': '0 0% 100%',
        '--b2': '0 0% 96%',
        '--b3': '0 0% 88%',
      } as React.CSSProperties}>
        <BackgroundDecorations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
