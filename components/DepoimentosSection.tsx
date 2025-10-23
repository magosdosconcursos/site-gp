"use client";

import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
// import { useState, useRef } from 'react'; // Remove this line

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function DepoimentosSection() {
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

  // const carouselRef = useRef<HTMLDivElement>(null); // Remove this line

  // const scroll = (direction: 'left' | 'right') => { // Remove this function
  //   if (carouselRef.current) {
  //     const scrollAmount = carouselRef.current.offsetWidth;
  //     if (direction === 'left') {
  //       carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  //     } else {
  //       carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  //     }
  //   }
  // };

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue-dark mb-4">
            Quem Chegou Lá
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias de sucesso dos nossos alunos aprovados
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper pb-12" // Added pb-12 for pagination dots
          >
            {depoimentos.map((depoimento, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-2xl p-8 relative hover:shadow-lg transition-all"
                >
                  {/* Quote Icon */}
                  <ChatBubbleLeftRightIcon className="absolute top-6 right-6 w-12 h-12 text-primary-orange/20" />

                  {/* Estrelas */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(depoimento.nota)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 text-primary-orange"
                      />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className="text-gray-700 mb-6 relative z-10">
                    "{depoimento.depoimento}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary-orange to-primary-orange-dark rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                      {depoimento.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-secondary-blue-dark">
                        {depoimento.nome}
                      </div>
                      <div className="text-sm text-gray-600">
                        {depoimento.cargo}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-orange to-primary-orange-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seja o Próximo a Conquistar sua Aprovação!
          </h3>
          <p className="text-xl mb-6">
            Junte-se a centenas de professores aprovados
          </p>
          <button className="bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
