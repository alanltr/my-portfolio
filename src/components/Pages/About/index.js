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
      <div className="about-presentation">
        « I’m a french front-end developer currently based in France.
        I studied at O'Clock and i'm now graduated as web an web mobile developer.
        Passionate about UI & UX, i love building interfaces and code interactive productions.
        I’m looking for a full time position from now as a front-end developer
        anywhere in the world. Which would bring together my two dreams,
        to see the world and do the job that I love. »
      </div>
      <div className="left-section glassmorphism">
        left
      </div>
      <div className="right-section glassmorphism">
        right
      </div>
    </div>
  </motion.div>
);

// == Export
export default About;
