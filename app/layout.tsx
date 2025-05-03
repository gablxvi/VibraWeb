"use client";

import '@/styles/globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { useLanguage } from '@/contexts/LanguageContext'

// Componente de layout principal
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LanguageHtmlWrapper>
        {children}
      </LanguageHtmlWrapper>
    </LanguageProvider>
  )
}

// Componente para definir o idioma do HTML
function LanguageHtmlWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  
  return (
    <html lang={language}>
      <head>
        <title>VibraWeb - Desenvolvimento de SaaS e Websites</title>
        <meta name="description" content="Especialistas em desenvolvimento de soluções SaaS e criação de websites personalizados." />
        <link rel="icon" href="/logo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 