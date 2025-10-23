export default function ProfessoresSection() {
  return (
    <section id="professores" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 relative pb-12">
          <div className="md:w-1/3 flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-1 bg-primary-orange"></div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                NOSSOS PROFESSORES
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue-dark">
              Gabaritei Pedagogia, de professor para professor!
            </h2>

            <p className="text-gray-700">
              Os nossos professores são responsáveis por elaborar e ministrar as aulas,
              além de possuírem conhecimento sobre as principais bancas examinadoras e as
              características das provas, o que permite uma preparação mais direcionada e eficiente.
            </p>

            <a
              href="#professores"
              className="bg-secondary-blue-dark text-white px-6 py-3 rounded hover:bg-secondary-green-dark transition font-bold text-center"
            >
              Conheça os professores
            </a>
          </div>

          <div className="flex-1"></div>

          <div className="md:w-1/2 flex items-center justify-center">
            <div className="bg-gradient-to-br from-secondary-blue-dark to-secondary-green rounded-3xl p-8 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center space-y-6 text-white">
                <div className="text-8xl mb-4">👩‍🏫</div>
                <h3 className="text-2xl font-bold">Nossa Equipe</h3>
                <p className="text-gray-200">
                  Professores especializados e experientes em aprovações
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-orange">15+</div>
                    <div className="text-xs">Anos de experiência</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-orange">1000+</div>
                    <div className="text-xs">Alunos aprovados</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-orange">98%</div>
                    <div className="text-xs">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
