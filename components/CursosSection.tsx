import { Play, Clock, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function CursosSection() {
  const cursos = [
    {
      titulo: 'Conhecimentos Pedagógicos',
      descricao: 'Teorias da aprendizagem, didática, LDB e muito mais',
      videoaulas: '150+',
      duracao: '80h',
      materiais: '50+',
      thumbnail: '📖',
    },
    {
      titulo: 'Legislação Educacional',
      descricao: 'LDB, ECA, Diretrizes Curriculares e legislação específica',
      videoaulas: '100+',
      duracao: '60h',
      materiais: '40+',
      thumbnail: '⚖️',
    },
    {
      titulo: 'Língua Portuguesa',
      descricao: 'Gramática, interpretação de textos e redação',
      videoaulas: '120+',
      duracao: '70h',
      materiais: '45+',
      thumbnail: '📝',
    },
    {
      titulo: 'Matemática',
      descricao: 'Conteúdos e metodologias para o ensino fundamental',
      videoaulas: '80+',
      duracao: '50h',
      materiais: '35+',
      thumbnail: '🔢',
    },
  ];

  return (
    <section id="cursos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="NOSSOS CURSOS"
          title="Conteúdo completo para sua aprovação"
          description="Acesse todo material necessário para garantir sua vaga como professor"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary-orange transition-all group"
            >
              {/* Thumbnail */}
              <div className="bg-gradient-to-br from-primary-orange to-primary-orange-dark p-8 text-center group-hover:scale-105 transition-transform">
                <div className="text-6xl mb-2">{curso.thumbnail}</div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-blue-dark mb-2">
                  {curso.titulo}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {curso.descricao}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Play size={16} className="text-primary-orange" />
                    <span>{curso.videoaulas} videoaulas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={16} className="text-primary-orange" />
                    <span>{curso.duracao} de conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FileText size={16} className="text-primary-orange" />
                    <span>{curso.materiais} materiais PDF</span>
                  </div>
                </div>

                <button className="w-full bg-primary-orange text-white py-2 rounded-lg hover:bg-primary-orange-dark transition font-semibold">
                  Acessar Curso
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-secondary-blue-dark to-secondary-green-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Acesso Ilimitado a Todos os Cursos
          </h3>
          <p className="text-xl mb-6 text-gray-200">
            Assine agora e tenha acesso completo a todo o conteúdo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-orange">R$ 77,00</div>
              <div className="text-sm text-gray-300">por mês</div>
            </div>
            <button className="bg-primary-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-orange-dark transition text-lg">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
