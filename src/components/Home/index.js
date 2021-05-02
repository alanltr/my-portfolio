// == Import npm
import React from 'react';
import { motion } from 'framer-motion';

import Infos from 'src/components/Infos';
import HomeContent from 'src/components/HomeContent';
import NavButton from 'src/components/NavButton';
import NeonAlone from 'src/components/NeonAlone';

// == Import
import './home.scss';

// == Composant
const Home = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="home-component">
      <NavButton
        navLink="/projects"
        styleClass="projects-link"
        firstWord="My"
        secondWord="Work"
      />
      <NavButton
        navLink="/about"
        styleClass="about-link"
        firstWord="About"
        secondWord="Me"
      />
      <div className="infos-container">
        <Infos />
      </div>
      <div className="home-container">
        <HomeContent />
      </div>
      <div className="neon-container neon-container-1">
        <NeonAlone num={1} />
      </div>
      <div className="neon-container neon-container-2">
        <NeonAlone num={2} />
      </div>
      <div className="neon-container neon-container-3">
        <NeonAlone num={3} />
      </div>
      <div className="neon-container neon-container-4">
        <NeonAlone num={4} />
      </div>
    </div>
  </motion.div>
);
// == Export
export default Home;
