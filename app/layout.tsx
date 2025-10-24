import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
