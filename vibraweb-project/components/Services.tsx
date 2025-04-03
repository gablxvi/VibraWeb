"use client";

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="text-primary mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="servicos" className="section bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para atender às necessidades do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="SaaS Personalizado" 
            description="Soluções de software como serviço escaláveis e seguras, projetadas para suas necessidades específicas."
            icon={
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            title="Sites Institucionais" 
            description="Sites modernos e responsivos que representam a identidade da sua marca e convertem visitantes em clientes."
            icon={
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2H2v10h10V2z"></path>
                <path d="M12 12h10v10H12V12z"></path>
                <path d="M22 2h-8v8h8V2z"></path>
                <path d="M10 14H2v8h8v-8z"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            title="Landing Pages" 
            description="Páginas de conversão otimizadas para transformar visitantes em leads qualificados para seu negócio."
            icon={
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"></path>
                <path d="M18 13.5V10a2 2 0 00-2-2H8a2 2 0 00-2 2v3.5"></path>
                <path d="M12 12l-3 3 3 3"></path>
                <path d="M15 15h-6"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            title="Consultoria em Integrações" 
            description="Integração com CRMs, sistemas de pagamento e outras ferramentas para automatizar seus processos."
            icon={
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 16l4-4-4-4"></path>
                <path d="M8 8l-4 4 4 4"></path>
                <path d="M16 12H8"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services; 