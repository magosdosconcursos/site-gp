"use client";

import { ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { IMaskInput } from 'react-imask';

export default function ContatoSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://webhooks.magosdosconcursos.com.br/webhook/QFszlkNjUND4W5sC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // After successful submission, redirect to the WhatsApp group
      window.open('https://sndflw.com/i/K0cY1kTadfD7wcgIwyO2', '_blank');
      setShowPopup(false);
      setFormData({ name: '', phone: '', email: '' }); // Clear form
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally, show an error message to the user
      alert('Ocorreu um erro ao enviar seus dados. Tente novamente.');
    }
  };

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


          </div>

          {/* CTA WhatsApp destacado */}
          <div className="bg-gradient-to-r from-primary-orange to-primary-orange-dark rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Grupo VIP no WhatsApp
            </h3>
            <p className="text-xl mb-6">
              Entre para o nosso grupo de estudos para receber materiais e aulas gratuitas
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="inline-flex items-center gap-2 bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Entrar no Grupo VIP
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center text-primary-orange">
                Junte-se ao Grupo VIP do WhatsApp!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Telefone:
                  </label>
                  <IMaskInput
                    mask="00 000000000"
                    value={formData.phone}
                    onAccept={(value) => handleInputChange({ target: { name: 'phone', value } } as any)}
                    name="phone"
                    id="phone"
                    type="tel"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Seu melhor email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white py-2 px-4 rounded-full font-semibold hover:bg-primary-orange-dark transition"
                >
                  Entrar no Grupo
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
