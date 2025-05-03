import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayLanguage, setDisplayLanguage] = useState(language);

  useEffect(() => {
    // Atualiza o idioma exibido após a animação terminar
    if (!isAnimating) {
      setDisplayLanguage(language);
    }
  }, [isAnimating, language]);

  const toggleLanguage = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }, 150);
  };

  return (
    <div className="flag-container">
      <button 
        onClick={toggleLanguage}
        disabled={isAnimating}
        className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${className}`}
        aria-label="Alternar idioma"
      >
        <div className={`w-8 h-6 overflow-hidden rounded-sm shadow-md ${isAnimating ? 'animate-flip-y' : ''}`}>
          {displayLanguage === 'pt-BR' ? (
            <img 
              src="https://flagpedia.net/data/flags/w80/br.png" 
              alt="Bandeira do Brasil" 
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src="https://flagpedia.net/data/flags/w80/us.png" 
              alt="Bandeira dos EUA" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </button>
      <style jsx>{`
        @keyframes flip-y {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        .animate-flip-y {
          animation: flip-y 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector; 