import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import How from '@/components/How';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Style from '@/components/Style';


const LandingPage = () => {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center">z
      <NavBar />
      <section id="hero" className="w-full mb-30">
        <Hero />
      </section>
      <section id="" className="mb-36">
        <Stats />
      </section>
      <section id="about" className="w-full  mb-32">
        <About />
      </section>
      <section id="services" className="w-full  mb-52">
        <How />
      </section>
      {/* <section id="" className="w-full  mb-60">
        <Mix/>
      </section> */}
      <section id="faq" className="w-full mb-24">
        <FAQ />
      </section>
      <section id="contact" className="w-full mb-24">
        <Contact />
      </section>
      <section id="cta" className="w-full mb-24">
        <CTA />
      </section>
      <section id="footer" className="w-full mb-24">
        <Footer />
      </section>
    </main>
  );
}

export default LandingPage;
