// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Slide from './Slide';

// == Import
import './projectsContent.scss';

// == Composant
const ProjectsContent = ({
  nextItem,
  previousItem,
  nextLittleItem,
  previousLittleItem,
  littleSlideIndex,
  slideIndex,
  slides,
  isOpenModalProjects,
  toggleIsOpenModalProjects,
}) => {
  // On récupère la current slide pour la modal
  const currentSlide = slides.find((item, i) => i === slideIndex);
  // On stocke les images du carousel pour la modal
  const { carousel } = currentSlide;

  // Controle du grand carousel lors du scroll
  const handleScroll = (e) => {
    if (isOpenModalProjects) {
      return;
    }
    if (e.deltaY < 0) {
      previousItem();
    }
    else {
      nextItem();
    }
  };

  const body = (
    <div className="projects-modal-component glassmorphism-2">
      <div className="close-cross neon-item" onClick={toggleIsOpenModalProjects}>+</div>
      <h2 className="neon-item" id="projects-modal-title">{currentSlide.title}</h2>
      <div id="projects-modal-description">
        {currentSlide.description}
      </div>
      <div className="project-technologies">
        <h3 className="title-tech neon-item">Technologies</h3>
        {currentSlide.front[0] === '' ? (
          <div className="front-tech">No frontend</div>
        ) : (
          <div className="front-tech">
            Front
            {currentSlide.front.map((item) => (
              <img key={item} src={item} alt="logo front techno" />
            ))}
          </div>
        )}
        {currentSlide.back[0] === '' ? (
          <div className="back-tech">No backend</div>
        ) : (
          <div className="back-tech">
            Back
            {currentSlide.back.map((item) => (
              <img key={item} src={item} alt="logo back techno" />
            ))}
          </div>
        )}
      </div>
      <div className="project-infos">
        {currentSlide.infos}
      </div>
      <div className="project-carousel slides">
        <button
          type="button"
          onClick={nextLittleItem}
        >‹
        </button>
        {[...carousel, ...carousel].map((slide2, i) => {
          const offset = carousel.length + (littleSlideIndex - i);
          return (
            <Slide
              {...slide2}
              offset={offset}
              key={i}
            />
          );
        })}
        <button
          type="button"
          onClick={previousLittleItem}
        >›
        </button>
      </div>
    </div>
  );

  return (
    <div className="content-container" onWheel={handleScroll}>
      <div className="button-container">
        <button
          type="button"
          className="neon-item flicker"
          onClick={nextItem}
        >‹
        </button>
        <button
          type="button"
          className="neon-item fast-flicker"
          onClick={previousItem}
        >›
        </button>
      </div>
      <div className="slides">
        <Modal
          open={isOpenModalProjects}
          onClose={toggleIsOpenModalProjects}
          aria-labelledby="project-modal"
        >
          {body}
        </Modal>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          const offset = slides.length + (slideIndex - i);
          return (
            <Slide
              {...slide}
              offset={offset}
              key={i}
              isOpenModalProjects={isOpenModalProjects}
              toggleIsOpenModalProjects={toggleIsOpenModalProjects}
            />
          );
        })}
      </div>
    </div>
  );
};

ProjectsContent.propTypes = {
  nextItem: PropTypes.func.isRequired,
  previousItem: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
  slides: PropTypes.array.isRequired,
  isOpenModalProjects: PropTypes.bool.isRequired,
  toggleIsOpenModalProjects: PropTypes.func.isRequired,
  nextLittleItem: PropTypes.func.isRequired,
  previousLittleItem: PropTypes.func.isRequired,
  littleSlideIndex: PropTypes.number.isRequired,
};

// == Export
export default ProjectsContent;
