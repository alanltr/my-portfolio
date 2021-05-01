// == Import npm
import React from 'react';
// import InfoIcon from '@material-ui/icons/Info';
import InfoIcon from './info-solid.svg';
// == Import
import './infos.scss';

// == Composant
const About = () => (
  <div className="info-component">
    <div className="card">
      <span className="card-infoicon">
        <img src={InfoIcon} alt="icone d'information" />
      </span>
      <h1 className="card-title">Des questionnements sur ce site ?</h1>
      <p className="card-description">
        J'ai réalisé ce portfolio en combinant React & Redux.
        <br />
        Le background de fumée en 3D a été fait à la main en ThreeJs.
        <br />
        Le projet dans son intégralité est consultable <a href="https://github.com/alanltr/my-portfolio">ici</a> !
      </p>
    </div>
  </div>
);

// == Export
export default About;
