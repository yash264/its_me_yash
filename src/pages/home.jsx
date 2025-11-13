import React from 'react';
import Navbar from "../components/navbar";
import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Achivement from '../components/achivement';
import Contact from "../components/contact";

function Home() {

  return (
    <>
      <Navbar />

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="achivement">
        <Achivement />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;