import { CameraIcon, PlayCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-horizontal-white.png"
                alt="Gabaritei Pedagogia"
                width={135}
                height={40}
              />
            </div>
            <p className="text-gray-300 mb-4">
              Sua aprovação em concursos de magistério começa aqui.
              Conteúdo especializado e professores experientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#cursos" className="text-gray-300 hover:text-primary-orange transition">
                  Nossos Cursos
                </a>
              </li>
              <li>
                <a href="#professores" className="text-gray-300 hover:text-primary-orange transition">
                  Professores
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-primary-orange transition">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary-orange transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvelopeIcon className="mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                <a href="mailto:contato@gabariteipedagogia.com.br" className="text-gray-300 hover:text-primary-orange transition">
                  contato@gabariteipedagogia.com.br
                </a>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                <a href="https://wa.me/556181733805" className="text-gray-300 hover:text-primary-orange transition">
                  61 8173-3805
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                <span className="text-gray-300">
                  Brasília - DF
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ProfessoraCarlaOliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <title>Facebook icon</title>
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.873 8.71856 13.873 9.85893V11.9991H17.2017L16.6776 15.4676H13.873V23.8524C19.6101 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/professoracarlaoliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <CameraIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@professoracarlaoliveiraoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <PlayCircleIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gabaritei Pedagogia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
