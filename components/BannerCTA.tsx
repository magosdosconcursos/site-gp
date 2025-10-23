export default function BannerCTA() {
  return (
    <div className="my-8 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row bg-secondary-blue-dark p-8 rounded-lg gap-4">
          <div className="flex flex-col gap-2 sm:w-2/3 px-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              ESTUDE COM A MELHOR PLATAFORMA DE ESTUDOS PARA CONCURSOS DA CARREIRA EDUCACIONAL DO BRASIL
            </h2>
            <p className="text-sm text-gray-300">
              Acesse videoaulas e PDFs dos melhores professores e tenha a preparação certa para a sua aprovação!
            </p>
          </div>
          <div className="sm:w-1/3 flex flex-col items-center gap-3 justify-center">
            <p className="text-sm text-gray-300">Menos de R$ 2,59 por dia</p>
            <a
              href="#cursos"
              className="bg-secondary-blue-dark text-white border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-secondary-blue-dark transition font-bold text-base w-full text-center"
            >
              QUERO TESTAR AGORA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
