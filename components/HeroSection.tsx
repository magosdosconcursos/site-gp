import Image from "next/image";
import { ArrowRightIcon, UsersIcon } from '@heroicons/react/24/outline'; // Import Heroicons

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Texto */}
          <div className="flex flex-col md:w-1/2 gap-6 text-center md:text-left">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <div className="w-8 h-1 bg-primary-orange"></div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider animate-fade-in-down">
                SUA APROVAÇÃO COMEÇA AQUI
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-secondary-blue-dark leading-tight animate-fade-in-left">
              Pedagogia de <span className="bg-gradient-to-t from-primary-orange to-primary-orange-dark text-transparent bg-clip-text">Elite</span>
            </h1>

            <p className="text-lg text-gray-700 sm:w-full md:w-3/4 leading-relaxed animate-fade-in-right">
              Aqui no Gabaritei Pedagogia você encontra exatamente o que precisa para o seu concurso.
              Estude com a melhor equipe do Brasil e conquiste a sua aprovação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4 md:mb-12 animate-fade-in-up">
              <a
                href="#cursos"
                className="bg-primary-orange text-white px-8 py-4 rounded-full hover:bg-primary-orange-dark transition font-bold text-lg flex items-center gap-2 shadow-lg transform hover:scale-105"
              >
                Assinatura Ilimitada <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="#professores"
                className="bg-secondary-blue-dark text-white px-8 py-4 rounded-full hover:bg-secondary-green-dark transition font-bold text-lg flex items-center gap-2 shadow-lg transform hover:scale-105"
              >
                Professores <UsersIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex items-center justify-center relative">
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden border-8 border-primary-orange shadow-lg" style={{ marginTop: '-38.4px' }}>
              <Image
                src="/professora-carla.png"
                alt="Foto da Professora Carla Oliveira"
                layout="fill"
                objectFit="cover"
                className="scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
