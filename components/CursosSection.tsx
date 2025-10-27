"use client";

import { PlayIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import SectionHeader from './SectionHeader';
import Image from 'next/image'; // Import Image
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function CursosSection() {
  const cursos = [
    {
      titulo: 'Gabaritei SEDF',
      descricao: 'Prepare-se para o concurso da SEDF com o curso completo.',
      videoaulas: '200+',
      duracao: '100h',
      materiais: '70+',
      productImage: '/fotos/Gabaritei SEDF.png',
      link: 'https://pay.hotmart.com/Y101391804Y',
    },
    {
      titulo: 'Conhecimentos Pedagógicos',
      descricao: 'Teorias da aprendizagem, didática, LDB e muito mais',
      videoaulas: '150+',
      duracao: '80h',
      materiais: '50+',
      productImage: '/fotos/Produto 4 - Conhecimentos Pedagógicos.png',
      link: 'https://pay.hotmart.com/E100447778A',
    },
    {
      titulo: 'SEDF - Do Básico ao Avançado',
      descricao: 'LDB, ECA, Diretrizes Curriculares e legislação específica',
      videoaulas: '100+',
      duracao: '60h',
      materiais: '40+',
      productImage: '/fotos/Produto 1 SEDF.png',
      link: 'https://pay.hotmart.com/K100230197L',
    },
    {
      titulo: 'Curso 2 em 1',
      descricao: 'Gramática, interpretação de textos e redação',
      videoaulas: '120+',
      duracao: '70h',
      materiais: '45+',
      productImage: '/fotos/Produto 2 Curso 2 em 1 Planaltina - GO.png',
      links: {
        semanal: 'https://pay.hotmart.com/S102311337J',
        sabados: 'https://pay.hotmart.com/L102314627N',
      },
    },
    {
      titulo: '1000 questões Gabaritadas',
      descricao: 'Conteúdos e metodologias para o ensino fundamental',
      videoaulas: '80+',
      duracao: '50h',
      materiais: '35+',
      productImage: '/fotos/Produto 3 1000 questões.png',
      link: 'https://pay.hotmart.com/A101708062X?bid=1761314454974',
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [currentCourseLinks, setCurrentCourseLinks] = useState<{ semanal: string; sabados: string } | null>(null);

  const handleAccessCourse = (links?: { semanal: string; sabados: string } | string) => {
    if (links) {
      if (typeof links === 'string') {
        window.open(links, '_blank');
      } else {
        setCurrentCourseLinks(links);
        setShowPopup(true);
      }
    }
  };

  return (
    <section id="cursos" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="NOSSOS CURSOS"
          title="Conteúdo completo para sua aprovação"
          description="Acesse todo material necessário para garantir sua vaga como professor"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper pb-12" // Added pb-12 for pagination dots
        >
          {cursos.map((curso, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary-orange transition-all group max-w-[295px] mx-auto"
              >
                {/* Thumbnail */}
                <div className="relative h-[195px] overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src={curso.productImage}
                    alt={curso.titulo}
                    layout="fill"
                    objectFit="contain"
                  />
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
                      <PlayIcon className="w-4 h-4 text-primary-orange" />
                      <span>{curso.videoaulas} videoaulas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <ClockIcon className="w-4 h-4 text-primary-orange" />
                      <span>{curso.duracao} de conteúdo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <DocumentTextIcon className="w-4 h-4 text-primary-orange" />
                      <span>{curso.materiais} materiais PDF</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const courseLink = curso.link || curso.links;
                      if (courseLink) {
                        handleAccessCourse(courseLink);
                      }
                    }}
                    className="w-full bg-primary-orange text-white py-2 rounded-lg hover:bg-primary-orange-dark transition font-semibold"
                  >
                    Acessar Curso
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showPopup && currentCourseLinks && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Escolha sua turma</h3>
              <div className="flex flex-col space-y-4">
                <a
                  href={currentCourseLinks.semanal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white py-2 px-4 rounded-lg hover:bg-primary-orange-dark transition text-center"
                >
                  Turma Semanal
                </a>
                <a
                  href={currentCourseLinks.sabados}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white py-2 px-4 rounded-lg hover:bg-primary-orange-dark transition text-center"
                >
                  Turma Sábados
                </a>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
