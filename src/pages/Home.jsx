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
    <div className="min-h-screen bg-background relative before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)] before:z-[1000]">
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
