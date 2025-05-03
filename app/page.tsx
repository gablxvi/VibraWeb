"use client";

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
} 