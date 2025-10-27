import Image from "next/image";

export default function CarlaSection() {
  return (
    <section id="professora-carla" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/palestra-professora.png"
              alt="Professora Carla Oliveira em palestra"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue-dark mb-4">
              Professora Carla Oliveira
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de 15 anos dedicados à educação, a Prof.ª Carla é especialista em Pedagogia e preparação para concursos públicos na área educacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Desenvolveu um método único que combina técnica, acolhimento e foco estratégico, ajudando milhares de profissionais a conquistarem seus objetivos na carreira docente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Sua abordagem humanizada e resultados comprovados fizeram dela uma das principais referências em preparação para a Prova Nacional Docente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}