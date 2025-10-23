import Image from "next/image";

export default function CarlaSection() {
  return (
    <section id="professora-carla" className="bg-white py-16">
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
              Com mais de 15 anos dedicados à educação, a Prof.ª Carla é especialista em Pedagogia e prepara. Desenvolveu um método único que combina técnica, acolhimento e foco estratégico, ajudando milhares de alunos. Sua abordagem humanizada e resultados comprovados fizeram dela uma das principais referências na área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}