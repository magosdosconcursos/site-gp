'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/">
            <Image
              src="/logo-horizotal-color.png"
              alt="Gabaritei Pedagogia"
              width={135}
              height={40}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-auto items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-primary-orange transition">
              Início
            </a>
            <a href="#cursos" className="text-sm font-medium text-gray-700 hover:text-primary-orange transition">
              Cursos
            </a>
            <a href="#professores" className="text-sm font-medium text-gray-700 hover:text-primary-orange transition">
              Professores
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-gray-700 hover:text-primary-orange transition">
              Depoimentos
            </a>
            <button className="bg-secondary-blue-dark text-white px-4 py-2 rounded hover:bg-secondary-green-dark transition font-medium text-sm">
              Área do Aluno
            </button>
            <button className="bg-primary-orange text-white px-4 py-2 rounded hover:bg-primary-orange-dark transition font-medium text-sm">
              Assinatura Ilimitada
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t pt-4">
            <a
              href="#inicio"
              className="block text-gray-700 hover:text-primary-orange transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#cursos"
              className="block text-gray-700 hover:text-primary-orange transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </a>
            <a
              href="#professores"
              className="block text-gray-700 hover:text-primary-orange transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Professores
            </a>
            <a
              href="#depoimentos"
              className="block text-gray-700 hover:text-primary-orange transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <button className="bg-secondary-blue-dark text-white px-4 py-2 rounded w-full">
              Área do Aluno
            </button>
            <button className="bg-primary-orange text-white px-4 py-2 rounded w-full">
              Assinatura Ilimitada
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
