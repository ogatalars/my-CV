import React from 'react';
import Intro from '../components/Intro';
import AcademicHistoric from '../components/AcademicHistoric';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import FunFacts from '../components/FunFacts';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <Intro />
        <AcademicHistoric />
        <Skills />
        <Experience />
        <FunFacts />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
