/* eslint-disable no-nested-ternary */

// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function useTilt(active) {
  // Suppression de l'effet hover en dessous de 768px
  if (window.innerWidth < 769) {
    return;
  }

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();

        // Pour corriger le bug, on verifie que la valeur x n'est jamais negative
        // Si elle l'est on la met en positif
        if (state.rect.x < 0) {
          state.rect.x *= -1;
        }
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);
  }, [active]);

  return ref;
}

const Slide = ({
  image,
  title,
  offset,
  toggleIsOpenModalProjects,
}) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <>
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          '--offset': offset,
          '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
        onClick={toggleIsOpenModalProjects}
      >
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

Slide.propTypes = {
  offset: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// == Export
export default Slide;
