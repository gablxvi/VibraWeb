"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading mb-4">VibraWeb</h3>
            <p className="text-gray-300 mb-4">
              Desenvolvimento de soluções SaaS e criação de websites personalizados para empresas de todos os tamanhos.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/#tecnologias" className="text-gray-400 hover:text-white transition-colors">
                  Tecnologias
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  stroke="currentColor" 
                  fill="none" 
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                <a href="https://wa.me/SEUNUMEROWPP" className="hover:text-white transition-colors">
                  WhatsApp para financeiro
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  stroke="currentColor" 
                  fill="none" 
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:suporte@vibraweb.com" className="hover:text-white transition-colors">
                  suporte@vibraweb.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} VibraWeb. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 