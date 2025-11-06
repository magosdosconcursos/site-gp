import Image from "next/image";
import { ArrowRightIcon, UsersIcon } from '@heroicons/react/24/outline'; // Import Heroicons

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 relative">
                    {/* Texto */}
                    <div className="flex flex-col md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
                      <div className="flex gap-2 items-center justify-center md:justify-start">
                        <div className="w-8 h-1 bg-primary-orange"></div>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider animate-fade-in-down">
                          SUA APROVAÇÃO COMEÇA AQUI
                        </p>
                      </div>
          
                      <h1 className="text-[clamp(2.25rem,7vw,4rem)] font-extrabold text-secondary-blue-dark leading-tight tracking-tight animate-fade-in-left text-shadow-custom relative">
                      Pedagogia de <span className="text-primary-orange drop-shadow-[0_0_10px_rgba(255,145,77,0.7)]">Elite

                      </span>
                      </h1>
          
                                              <p className="text-[clamp(1.125rem,2.2vw,1.375rem)] font-bold text-gray-600 max-w-[60ch] leading-relaxed animate-fade-in-right">
          
                                                Encontre exatamente o que precisa para conquistar a sua aprovação na área da pedagogia.
          
                                              </p>                    </div>
          
                    {/* Imagem */}
                    <div className="md:w-1/2 flex items-center justify-center relative">
                      <Image
                        src="/fotos/Foto Carla 2.png"
                        alt="Foto da Professora Carla Oliveira"
                        width={400}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                    {/* Horizontal Line */}
                    <div className="absolute bottom-0 left-0 right-0 border-b-4 border-primary-orange"></div>
                  </div>
                </div>
              </section>
  );
}
