// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './neonAlone.scss';

// == Composant
const NeonAlone = ({ num }) => {
  let cssClass;

  if (num === 3) {
    cssClass = `neon-alone neon-item fast-flicker neon-${num}`;
  }
  else {
    cssClass = `neon-alone neon-item neon-${num}`;
  }

  return (
    <div className={cssClass}>
      ___________
    </div>
  );
};

NeonAlone.propTypes = {
  num: PropTypes.number.isRequired,
};

// == Export
export default NeonAlone;
