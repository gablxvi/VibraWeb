"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="font-heading text-2xl font-bold text-primary">
          VibraWeb
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor" 
            strokeWidth="2" 
            className={isMenuOpen ? "hidden" : "block"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor" 
            strokeWidth="2" 
            className={isMenuOpen ? "block" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/#servicos" className="text-secondary hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="/#sobre" className="text-secondary hover:text-primary transition-colors">
            Quem Somos
          </Link>
          <Link href="/#tecnologias" className="text-secondary hover:text-primary transition-colors">
            Tecnologias
          </Link>
          <Link href="/#contato" className="text-secondary hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 md:hidden transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <Link 
              href="/#servicos" 
              className="text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="/#sobre" 
              className="text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link 
              href="/#tecnologias" 
              className="text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnologias
            </Link>
            <Link 
              href="/#contato" 
              className="text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 