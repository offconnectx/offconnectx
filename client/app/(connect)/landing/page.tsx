import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import How from '@/components/How';
import Stats from '@/components/Stats';

const LandingPage = () => {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center">
      <NavBar />
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section id="" className="mb-60">
        <Stats />
      </section>
      <section id="about" className="w-full  mb-60">
        <About />
      </section>
      <section id="services" className="w-full  mb-60">
        <How />
      </section>
      <section id="faq" className="w-full mb-24">
        <FAQ />
      </section>
      <section id="contact" className="w-full mb-24">
        <Contact />
      </section>
      <section id="footer" className="w-full mb-24">
        <Footer />
      </section>
    </main>
  );
}

export default LandingPage;
