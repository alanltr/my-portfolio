// == Import npm
import React from 'react';
import { motion } from 'framer-motion';

import Backlink from 'src/components/DesignElements/Backlink';

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
      <div className="neon">
        <h1 className="neon-item">
          a<span className="fast-flicker">b</span>out__<span className="flicker">m</span>e
        </h1>
      </div>

      <div className="about-backlink common-backlink">
        <Backlink />
      </div>
    </div>
  </motion.div>
);

// == Export
export default About;
