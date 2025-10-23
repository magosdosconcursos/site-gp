import { ChatBubbleLeftRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContatoSection() {
  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-secondary-blue-dark to-secondary-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-200">
              Estamos prontos para tirar suas dúvidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/556181733805"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
            >
              <ChatBubbleLeftRightIcon className="mx-auto mb-4 w-12 h-12 text-primary-orange" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-300 text-sm mb-3">
                Atendimento rápido
              </p>
              <p className="text-primary-orange font-semibold">
                61 8173-3805
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:contato@gabariteipedagogia.com.br"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
            >
              <EnvelopeIcon className="mx-auto mb-4 w-12 h-12 text-primary-orange" />
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-300 text-sm mb-3">
                Suporte técnico
              </p>
              <p className="text-primary-orange font-semibold text-sm break-all">
                contato@gabariteipedagogia.com.br
              </p>
            </a>

            {/* Telefone */}
            <a
              href="https://wa.me/556181733805"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
            >
              <PhoneIcon className="mx-auto mb-4 w-12 h-12 text-primary-orange" />
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-300 text-sm mb-3">
                Horário comercial
              </p>
              <p className="text-primary-orange font-semibold">
                61 8173-3805
              </p>
            </a>
          </div>

          {/* CTA WhatsApp destacado */}
          <div className="bg-gradient-to-r from-primary-orange to-primary-orange-dark rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Grupo VIP no WhatsApp
            </h3>
            <p className="text-xl mb-6">
              Entre para o nosso grupo de estudos para receber materiais e aulas gratuitas
            </p>
            <a
              href="https://sndflw.com/i/4kFHCgYcOIFz7x598Avv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Entrar no Grupo VIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
