import Image from "next/image";

export default function CarlaSection() {
  return (
    <section id="professora-carla" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--primary)_/_0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--secondary)_/_0.25),_transparent_60%)] blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <Image
              src="/fotos/Palestra Professora.png"
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
              Sua abordagem humanizada e resultados comprovados fizeram dela uma das principais referências em preparação para concursos na área da pedagogia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}