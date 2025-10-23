import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
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
                <Mail className="mr-2 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:contato@gabariteipedagogia.com.br" className="text-gray-300 hover:text-primary-orange transition">
                  contato@gabariteipedagogia.com.br
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-primary-orange transition">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  São Paulo, SP
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary-orange transition"
              >
                <Youtube size={20} />
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
