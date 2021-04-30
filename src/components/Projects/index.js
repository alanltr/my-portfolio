// == Import npm
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// == Import
import './projects.scss';

// == Composant
const Projects = () => (
  <motion.div
    initial={{ translateX: -1500 }}
    animate={{ translateX: 0 }}
    exit={{ translateX: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="projects-component">
      <h1>Projects</h1>
      <Link to="/">
        Go to Home
      </Link>
      <Link to="/about">
        Go to About
      </Link>
    </div>
  </motion.div>
);

// == Export
export default Projects;
