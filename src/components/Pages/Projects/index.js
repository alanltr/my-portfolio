// == Import npm
import React from 'react';
import { motion } from 'framer-motion';

import Backlink from 'src/components/DesignElements/Backlink';

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
      <div className="neon">
        <h1 className="neon-item">
          m<span className="fast-flicker">y</span>__wo<span className="flicker">r</span>k
        </h1>
      </div>

      <div className="projects-backlink common-backlink">
        <Backlink />
      </div>
    </div>
  </motion.div>
);

// == Export
export default Projects;