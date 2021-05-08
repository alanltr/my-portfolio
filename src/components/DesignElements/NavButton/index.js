// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// == Import style
import './navButton.scss';

// == Composant
const NavButton = ({
  navLink,
  styleClass,
  firstWord,
  secondWord,
}) => {
  const cssClass = `${styleClass} navlink`;

  return (
    <Link to={navLink} className={cssClass}>
      <div className="button-container-3 pulse">
        <span className="mas">
          {
          navLink === '/projects'
            ? <ArrowBackIosIcon />
            : <ArrowForwardIosIcon />
          }
        </span>
        <button type="button">{firstWord}<br />{secondWord}</button>
      </div>
    </Link>
  );
};

NavButton.propTypes = {
  navLink: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
};

// == Export
export default NavButton;
