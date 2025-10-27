import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import CarlaSection from "@/components/CarlaSection";
import ContatoSection from "@/components/ContatoSection";
import DynamicCursosSection from "@/components/DynamicCursosSection";
import DynamicDepoimentosSection from "@/components/DynamicDepoimentosSection";

export default function Home() {
  return (
    <>
      <div style={{ '--primary': '217 19% 35%', '--secondary': '45 100% 50%', '--accent': '14 100% 50%' } as React.CSSProperties}>
        <HeroSection />
      </div>

      <div style={{ '--primary': '45 100% 50%', '--secondary': '217 19% 35%', '--accent': '14 100% 50%' } as React.CSSProperties}>
        <DiferenciaisSection />
      </div>

      <div style={{ '--primary': '14 100% 50%', '--secondary': '45 100% 50%', '--accent': '217 19% 35%' } as React.CSSProperties}>
        <DynamicCursosSection />
      </div>

      <div style={{ '--primary': '45 100% 50%', '--secondary': '14 100% 50%', '--accent': '217 19% 35%' } as React.CSSProperties}>
        <CarlaSection />
      </div>

      <div style={{ '--primary': '217 19% 25%', '--secondary': '45 100% 40%', '--accent': '14 100% 40%' } as React.CSSProperties}>
        <DynamicDepoimentosSection />
      </div>

      <div style={{ '--primary': '45 100% 40%', '--secondary': '217 19% 25%', '--accent': '14 100% 40%' } as React.CSSProperties}>
        <ContatoSection />
      </div>
    </>
  );
}
