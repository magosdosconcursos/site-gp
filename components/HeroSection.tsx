import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Texto */}
          <div className="flex flex-col md:w-1/2 gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-1 bg-primary-orange"></div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                SUA APROVAÇÃO COMEÇA AQUI
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary-blue-dark leading-tight sm:w-2/3">
              Pedagogia de Elite
            </h1>

            <p className="text-lg text-gray-700 sm:w-1/2">
              Aqui no Gabaritei Pedagogia você encontra exatamente o que precisa para o seu concurso.
              Estude com a melhor equipe do Brasil e conquiste a sua aprovação.
            </p>

            <div className="flex items-center gap-4 md:mb-12">
              <a
                href="#cursos"
                className="bg-primary-orange text-white px-6 py-3 rounded hover:bg-primary-orange-dark transition font-semibold text-base"
              >
                Assinatura Ilimitada
              </a>
              <a
                href="#professores"
                className="bg-secondary-blue-dark text-white px-6 py-3 rounded hover:bg-secondary-green-dark transition font-semibold text-base"
              >
                Professores
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
