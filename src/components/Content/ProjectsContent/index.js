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
  const carousel = currentSlide.carousel;
  const slideIndex1 = 0;

  const body = (
    <div className="projects-modal-component glassmorphism">
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
          className=""
          onClick={previousLittleItem}
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
          className=""
          onClick={nextLittleItem}
        >›
        </button>
      </div>
    </div>
  );

  return (
    <div className="slides">
      <button
        type="button"
        className="neon-item flicker"
        onClick={previousItem}
      >‹
      </button>
      <Modal
        open={isOpenModalProjects}
        onClose={toggleIsOpenModalProjects}
        aria-labelledby="project-modal"
      >
        {body}
      </Modal>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (slideIndex - i);
        // {console.log(slide)}
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
      <button
        type="button"
        className="neon-item fast-flicker"
        onClick={nextItem}
      >›
      </button>
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
};

// == Export
export default ProjectsContent;
