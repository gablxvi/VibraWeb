"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-dark to-primary text-white py-20 md:py-28">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-bold mb-4">
              Desenvolvimento de SaaS e Websites
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Transformamos ideias em soluções digitais inovadoras. Criamos produtos escaláveis e eficientes para empresas de todos os tamanhos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#servicos" className="btn bg-white text-dark hover:bg-gray-200">
                Nossos Serviços
              </Link>
              <Link href="/#contato" className="btn border-2 border-white text-white hover:bg-white hover:text-dark">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-lg opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-lg opacity-20"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image 
                  src="/hero-illustration.svg" 
                  alt="Desenvolvimento Web" 
                  width={500}
                  height={375}
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 md:h-20"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,63,59,150,59c-10,0,6,0,171.39-2.56Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 