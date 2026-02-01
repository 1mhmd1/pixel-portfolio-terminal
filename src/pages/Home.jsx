import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Technologies from '../sections/Technologies';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import HireMe from '../sections/HireMe';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-background scanlines">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
