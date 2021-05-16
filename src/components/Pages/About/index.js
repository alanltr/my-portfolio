// == Import npm
import React from 'react';
import { motion } from 'framer-motion';

import Backlink from 'src/components/DesignElements/Backlink';
import AboutContent from '../../Content/AboutContent';

// == Import
import './about.scss';

// == Composant
const About = () => {
  React.useEffect(() => {
    document.title = 'About Me';
  });

  return (
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
          « I’m a french developer currently based in France.
          Passionate about UI, UX & web security, i love
          building interfaces and code interactive productions.
          I’m looking for a full time position from now as a front-end developer
          anywhere in the world. Which would bring together my two dreams,
          to see the world and do the job that I love. »
        </div>
        <div className="about-content">
          <AboutContent />
        </div>
      </div>
    </motion.div>
  );
};
// == Export
export default About;
