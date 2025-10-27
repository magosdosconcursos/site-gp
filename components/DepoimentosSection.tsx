"use client";

import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useRef } from 'react';

export default function DepoimentosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const depoimentos = [
    {
      nome: 'Carla Oliveira',
      cargo: 'Professora - Prefeitura de São Paulo',
      depoimento: 'Consegui minha aprovação graças ao conteúdo completo e aos professores excepcionais. O material é muito bem organizado e focado no edital.',
      nota: 5,
      avatar: '👩',
    },
    {
      nome: 'Pedro Almeida',
      cargo: 'Professor - Prefeitura do Rio de Janeiro',
      depoimento: 'A metodologia da Gabaritei Pedagogia fez toda a diferença na minha preparação. Passei em 2º lugar no concurso!',
      nota: 5,
      avatar: '👨',
    },
    {
      nome: 'Juliana Ferreira',
      cargo: 'Professora - Prefeitura de Curitiba',
      depoimento: 'Excelente custo-benefício! O suporte dos professores e o cronograma de estudos foram essenciais para minha aprovação.',
      nota: 5,
      avatar: '👩',
    },
    {
      nome: 'Ricardo Souza',
      cargo: 'Professor - Prefeitura de Belo Horizonte',
      depoimento: 'Tentei por anos e só consegui depois que conheci a Gabaritei. Material atualizado e professores que realmente entendem de concursos.',
      nota: 5,
      avatar: '👨',
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section id="depoimentos" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue-dark dark:text-white mb-4">
            Quem Chegou Lá
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Histórias de sucesso dos nossos alunos aprovados
          </p>
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Keyboard]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper pb-12"
          >
            {depoimentos.map((depoimento, index) => (
              <SwiperSlide key={index} className="h-full group">
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 relative h-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  tabIndex={0}
                >
                  <div
                    aria-hidden="true"
                    role="presentation"
                    className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 group-focus:opacity-100`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-orange/20 blur-3xl rounded-full" />
                  </div>
                  <ChatBubbleLeftRightIcon className="absolute top-6 right-6 w-12 h-12 text-primary-orange/20 dark:text-primary-orange/30" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(depoimento.nota)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 text-primary-orange"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                    "{depoimento.depoimento}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                      {depoimento.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-secondary-blue-dark dark:text-white">
                        {depoimento.nome}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {depoimento.cargo}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-orange to-primary-orange-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seja o Próximo a Conquistar sua Aprovação!
          </h3>
          <p className="text-xl mb-6">
            Junte-se a centenas de professores aprovados
          </p>
          <button className="bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg motion-safe:hover:scale-105">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
