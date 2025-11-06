"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function DepoimentosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const depoimentos = [
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_37_49.642-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_37_52.298-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_37_55.034-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_37_57.406-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_37_59.543-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_02.217-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_05.391-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_07.839-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_10.077-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_12.367-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_14.812-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_17.315-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_19.638-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_22.198-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_25.155-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_27.465-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_30.229-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_32.533-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_34.796-03_0.jpeg',
    },
    {
      image: '/Depoimentos tratados reduzidos/depoimento_tratado2025-11-06T15_38_37.350-03_0.jpeg',
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 relative h-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-orange cursor-pointer"
                  tabIndex={0}
                  onClick={() => setSelectedImage(depoimento.image)}
                >
                  <Image
                    src={depoimento.image}
                    alt={`Depoimento ${index + 1}`}
                    width={300}
                    height={500}
                    className="rounded-lg"
                  />
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
          <a href="#cursos" className="bg-white text-primary-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg motion-safe:hover:scale-105">
            Começar Agora
          </a>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              <XMarkIcon className="w-10 h-10" />
            </button>
            <Image
              src={selectedImage}
              alt="Depoimento em zoom"
              width={600}
              height={1000}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
