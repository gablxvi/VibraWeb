"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-lg opacity-5"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-5"></div>
            <div className="relative bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100">
              <Image 
                src="/about-image.svg" 
                alt="Equipe VibraWeb" 
                width={500}
                height={375}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          
          <div>
            <h2 className="mb-6">{t('about.title')}</h2>
            <div className="relative mb-8 pl-6 border-l-4 border-primary">
              <p className="text-lg italic text-gray-600">
                {t('about.mission')}
              </p>
            </div>
            
            <p className="text-gray-600 mb-4">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light p-4 rounded-lg border border-gray-100">
                <div className="font-bold text-3xl text-primary mb-2">5+</div>
                <div className="text-sm text-gray-600">{t('about.experience')}</div>
              </div>
              <div className="bg-light p-4 rounded-lg border border-gray-100">
                <div className="font-bold text-3xl text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">{t('about.projects')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 