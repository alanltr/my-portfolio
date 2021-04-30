// == Import npm
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// == Import
import './about.scss';

// == Composant
const About = () => (
  <motion.div
    initial={{ translateX: 1500 }}
    animate={{ translateX: 0 }}
    exit={{ translateX: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="about-component">
      <h1>About</h1>
      <Link to="/">
        Go to Home
      </Link>
      <Link to="/projects">
        Go to Projects
      </Link>
    </div>
  </motion.div>
);

// == Export
export default About;
