import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import BannerCTA from "@/components/BannerCTA";
import CursosSection from "@/components/CursosSection";
import ProfessoresSection from "@/components/ProfessoresSection";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContatoSection from "@/components/ContatoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <BannerCTA />
      <CursosSection />
      <WhatsAppBanner />
      <ProfessoresSection />
      <DepoimentosSection />
      <ContatoSection />
    </>
  );
}
