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
      <h1 className="card-title">Some informations about this site</h1>
      <div className="card-description">
        I realised this portfolio by using React & Redux.
        <br />
        The smoke background was made by hand with ThreeJs.
        <br />
        The entire project can be viewed on its <a href="https://github.com/alanltr/my-portfolio" target="_blank" rel="noreferrer">git repository</a> !
      </div>
    </div>
  </div>
);

// == Export
export default About;
