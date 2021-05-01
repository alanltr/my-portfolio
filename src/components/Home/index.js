// == Import npm
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Infos from 'src/components/Infos';
import HomeContent from 'src/components/HomeContent';

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
      <h1 className="home-title"></h1>
      <div className="about-link link">
        <Link to="/about">
          ABOUT
          <br />
          ME
        </Link>
      </div>
      <div className="projects-link link">
        <Link to="/projects">
          MY
          <br />
          WORK
        </Link>
      </div>
      <div className="infos-container">
        <Infos />
      </div>
      <div className="home-container">
        <HomeContent />
      </div>
    </div>
  </motion.div>
);
// == Export
export default Home;
