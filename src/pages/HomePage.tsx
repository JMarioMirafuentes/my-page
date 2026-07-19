import React from 'react';
import AboutPage from '../components/elements/About';
import ContactPage from '../components/elements/Contact';
import Experience from '../components/elements/Experience';
import HeroPage from '../components/elements/Hero';
import ProjectsPage from '../components/elements/Projects';
import Technologies from '../components/elements/Technologies';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <Experience />
      <Technologies />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
