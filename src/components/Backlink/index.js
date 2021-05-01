// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './backlink.scss';

// == Composant
const Backlink = () => (
  <div className="backlink">
    <Link to="/" className="arrow-container">
      <div className="arrow" />
      <div className="arrow" />
      <div className="arrow" />
    </Link>
  </div>
);

// == Export
export default Backlink;
