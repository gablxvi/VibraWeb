export interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  'pt-BR': TranslationObject;
  'en': TranslationObject;
}

const translations: Translations = {
  'pt-BR': {
    header: {
      services: 'Serviços',
      about: 'Quem Somos',
      technologies: 'Tecnologias',
      contact: 'Contato'
    },
    hero: {
      title: 'Desenvolvimento de SaaS e Websites',
      description: 'Transformamos ideias em soluções digitais inovadoras. Criamos produtos escaláveis e eficientes para empresas de todos os tamanhos.',
      services: 'Nossos Serviços',
      contact: 'Fale Conosco'
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas para seu negócio digital',
      saas: {
        title: 'Desenvolvimento SaaS',
        description: 'Criamos plataformas SaaS escaláveis e robustas que atendem às necessidades específicas do seu negócio.'
      },
      webDev: {
        title: 'Websites Personalizados',
        description: 'Desenvolvemos websites modernos, responsivos e otimizados para SEO que destacam sua marca.'
      },
      webApp: {
        title: 'Aplicações Web',
        description: 'Construímos aplicações web complexas com foco em usabilidade e performance.'
      },
      apiDev: {
        title: 'Desenvolvimento de APIs',
        description: 'Criamos APIs seguras e eficientes para integrar seus sistemas e serviços.'
      }
    },
    about: {
      title: 'Quem Somos',
      description: 'A VibraWeb é uma empresa especializada em desenvolvimento de soluções digitais. Nossa equipe é formada por profissionais apaixonados por tecnologia e inovação, comprometidos em entregar produtos de alta qualidade.',
      mission: 'Nossa missão é transformar ideias em soluções digitais que impulsionam o sucesso dos nossos clientes.',
      experience: 'Anos de Experiência',
      clients: 'Clientes Satisfeitos',
      projects: 'Projetos Entregues'
    },
    technologies: {
      title: 'Tecnologias',
      subtitle: 'Utilizamos as tecnologias mais modernas do mercado',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Banco de Dados',
      cloud: 'Cloud'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para transformar sua ideia em realidade',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!',
      error: 'Ocorreu um erro. Tente novamente.',
      required: 'Campo obrigatório',
      invalidEmail: 'Email inválido',
      help: 'Estamos disponíveis para ajudar com suas dúvidas e necessidades. Entre em contato por e-mail ou pelo WhatsApp.',
      whatsapp: 'WhatsApp (Financeiro)',
      whatsappCta: 'Clique aqui para iniciar uma conversa'
    },
    footer: {
      rights: 'Todos os direitos reservados',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      description: 'Desenvolvimento de soluções web personalizadas para impulsionar seu negócio.',
      hours: 'Atendimento de Segunda a Sexta\nDas 9h às 18h',
      whatsapp: 'WhatsApp para financeiro'
    },
    technologiesList: {
      react: {
        title: 'React & Next.js',
        description: 'Desenvolvimento de interfaces modernas e responsivas com a melhor performance e experiência do usuário.'
      },
      tailwind: {
        title: 'Tailwind CSS',
        description: 'Estilização avançada e responsiva, permitindo o desenvolvimento rápido de interfaces modernas.'
      },
      node: {
        title: 'Node.js & Express',
        description: 'Backend robusto e escalável para desenvolvimento de APIs e serviços web.'
      },
      postgres: {
        title: 'PostgreSQL',
        description: 'Banco de dados relacional robusto para armazenamento seguro e eficiente de dados.'
      },
      firebase: {
        title: 'Firebase',
        description: 'Plataforma de desenvolvimento móvel e web que permite autenticação, armazenamento e notificações push.'
      },
      stripe: {
        title: 'Stripe API',
        description: 'Integração com sistema de pagamentos para processamento seguro de transações online.'
      }
    }
  },
  'en': {
    header: {
      services: 'Services',
      about: 'About Us',
      technologies: 'Technologies',
      contact: 'Contact'
    },
    hero: {
      title: 'SaaS and Website Development',
      description: 'We transform ideas into innovative digital solutions. We create scalable and efficient products for businesses of all sizes.',
      services: 'Our Services',
      contact: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions for your digital business',
      saas: {
        title: 'SaaS Development',
        description: 'We create scalable and robust SaaS platforms that meet your business specific needs.'
      },
      webDev: {
        title: 'Custom Websites',
        description: 'We develop modern, responsive, and SEO-optimized websites that highlight your brand.'
      },
      webApp: {
        title: 'Web Applications',
        description: 'We build complex web applications with a focus on usability and performance.'
      },
      apiDev: {
        title: 'API Development',
        description: 'We create secure and efficient APIs to integrate your systems and services.'
      }
    },
    about: {
      title: 'About Us',
      description: 'VibraWeb is a company specialized in digital solution development. Our team consists of professionals passionate about technology and innovation, committed to delivering high-quality products.',
      mission: 'Our mission is to transform ideas into digital solutions that drive our clients success.',
      experience: 'Years of Experience',
      clients: 'Satisfied Clients',
      projects: 'Delivered Projects'
    },
    technologies: {
      title: 'Technologies',
      subtitle: 'We use the most modern technologies in the market',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      cloud: 'Cloud'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to transform your idea into reality',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.',
      required: 'Required field',
      invalidEmail: 'Invalid email',
      help: 'We are available to help with your questions and needs. Contact us by email or WhatsApp.',
      whatsapp: 'WhatsApp (Finance)',
      whatsappCta: 'Click here to start a conversation'
    },
    footer: {
      rights: 'All rights reserved',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      description: 'Development of custom web solutions to boost your business.',
      hours: 'Service from Monday to Friday\nFrom 9am to 6pm',
      whatsapp: 'WhatsApp for finance'
    },
    technologiesList: {
      react: {
        title: 'React & Next.js',
        description: 'Development of modern and responsive interfaces with the best performance and user experience.'
      },
      tailwind: {
        title: 'Tailwind CSS',
        description: 'Advanced and responsive styling, enabling fast development of modern interfaces.'
      },
      node: {
        title: 'Node.js & Express',
        description: 'Robust and scalable backend for API and web service development.'
      },
      postgres: {
        title: 'PostgreSQL',
        description: 'Robust relational database for secure and efficient data storage.'
      },
      firebase: {
        title: 'Firebase',
        description: 'Mobile and web development platform enabling authentication, storage, and push notifications.'
      },
      stripe: {
        title: 'Stripe API',
        description: 'Integration with payment systems for secure online transaction processing.'
      }
    }
  }
};

export default translations; 