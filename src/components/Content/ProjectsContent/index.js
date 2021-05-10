// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

// == Import
import './projectsContent.scss';

// == Composant
const ProjectsContent = ({
  nextItem,
  previousItem,
  slideIndex,
  slides,
}) => (
  <div className="slides">
    <button
      type="button"
      className="neon-item flicker"
      onClick={previousItem}
    >‹
    </button>
    {[...slides, ...slides, ...slides].map((slide, i) => {
      const offset = slides.length + (slideIndex - i);
      return <Slide {...slide} offset={offset} key={i} />;
    })}
    <button
      type="button"
      className="neon-item fast-flicker"
      onClick={nextItem}
    >›
    </button>
  </div>
);

ProjectsContent.propTypes = {
  nextItem: PropTypes.func.isRequired,
  previousItem: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,

};

// == Export
export default ProjectsContent;
