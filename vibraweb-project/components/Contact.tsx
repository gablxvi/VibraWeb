"use client";

import React, { useState, useRef } from 'react';
// @ts-ignore
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reply_to: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      reply_to: name === 'email' ? value : prev.reply_to,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Primeiro email - para você (admin)
      await emailjs.sendForm(
        'service_4pd79l9',
        'template_o9vq147',
        formRef.current!,
        '6JqrlB7zDYWQqpP53'
      );

      // Segundo email - resposta automática usando o mesmo formulário
      await emailjs.sendForm(
        'service_4pd79l9',
        'template_4cicrud',
        formRef.current!,
        '6JqrlB7zDYWQqpP53'
      );

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        reply_to: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  return (
    <section id="contato" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou deseja solicitar um orçamento? Entre em contato conosco.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <p className="text-gray-600 mb-6">
                Estamos disponíveis para ajudar com suas dúvidas e necessidades. Entre em contato por e-mail ou pelo WhatsApp.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    fill="none" 
                    className="text-primary"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:suporte@vibraweb.com" className="text-primary hover:text-secondary transition-colors">
                    suporte@vibraweb.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    fill="none" 
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp (Financeiro)</h4>
                  <a 
                    href="https://wa.me/+5511952733381" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Clique aqui para iniciar uma conversa
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-light p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Envie uma Mensagem</h3>
            
            {submitSuccess ? (
              <div className="bg-secondary/10 border border-secondary text-secondary p-4 rounded mb-6">
                Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
              </div>
            ) : submitError ? (
              <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-6">
                Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
              </div>
            ) : null}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="orcamento">Solicitar orçamento</option>
                  <option value="duvida">Dúvida sobre serviços</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-3 flex justify-center items-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 