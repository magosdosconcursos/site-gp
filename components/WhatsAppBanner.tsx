import { MessageCircle } from 'lucide-react';

export default function WhatsAppBanner() {
  return (
    <div className="my-8 md:px-8">
      <div className="container mx-auto max-w-5xl relative">
        <div className="flex flex-col items-center text-center gap-3 bg-secondary-blue-dark rounded-xl p-8 relative overflow-hidden">
          <p className="text-sm text-gray-300 font-medium uppercase">É GRATUITO</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white sm:w-3/5">
            FAÇA PARTE DO NOSSO GRUPO DE PROFESSORES CONCURSEIROS
          </h2>
        </div>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mb-4"
        >
          <div className="bg-primary-orange flex justify-center items-center gap-2 rounded-lg m-auto mt-[-20px] absolute px-6 py-3 hover:bg-primary-orange-dark transition">
            <MessageCircle size={20} className="text-white" />
            <p className="text-white font-medium text-center">Grupo VIP do WhatsApp</p>
          </div>
        </a>
      </div>
    </div>
  );
}
