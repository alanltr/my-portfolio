// == Import npm
import React from 'react';
// import InfoIcon from '@material-ui/icons/Info';
import InfoIcon from './info-solid.svg';
// == Import
import './infos.scss';

// == Composant
const About = () => (
  <div className="info-component">
    <div className="card" tabIndex="0">
      <span className="card-infoicon">
        <img src={InfoIcon} alt="icone d'information" />
      </span>
      <h1 className="card-title">A propos de ce portfolio</h1>
      <div className="card-description">
        J'ai réalisé ce portfolio en combinant React & Redux.
        <br />
        Le background de fumée en 3D a été fait à la main en ThreeJs.
        <br />
        Le projet dans son intégralité est consultable <a href="https://github.com/alanltr/my-portfolio" target="_blank" rel="noreferrer">ici</a> !
      </div>
    </div>
  </div>
);

// == Export
export default About;
