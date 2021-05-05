// == Import npm
import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Infos from 'src/components/DesignElements/Infos';
import HomeContent from 'src/components/Content/HomeContent';
import NavButton from 'src/components/DesignElements/NavButton';
import NeonAlone from 'src/components/DesignElements/NeonAlone';
import SocialMedia from 'src/components/Content/SocialMedia';
import LittleArrows from 'src/components/DesignElements/LittleArrows';

// == Import
import './home.scss';

// == Composant
const Home = ({
  isOpenSocialMedia,
  toggleIsOpenSocialMedia,
}) => {
  const popDivClassname = classNames('pop-content', { close: !isOpenSocialMedia });
  const popTitleClassname = classNames('pop-title', { close: isOpenSocialMedia });

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-component">
        <NavButton
          navLink="/projects"
          styleClass="projects-link"
          firstWord="My"
          secondWord="Work"
        />
        <NavButton
          navLink="/about"
          styleClass="about-link"
          firstWord="About"
          secondWord="Me"
        />
        <div className="infos-container">
          <Infos />
        </div>
        <div className="home-container">
          <HomeContent />
        </div>
        <div className="neon-container neon-container-1">
          <NeonAlone num={1} />
        </div>
        <div className="neon-container neon-container-2">
          <NeonAlone num={2} />
        </div>
        <div className="neon-container neon-container-3">
          <NeonAlone num={3} />
        </div>
        <div className="neon-container neon-container-4">
          <NeonAlone num={4} />
        </div>
        <div className="social-media-container">
          <div className="pop-div">
            <div className={popTitleClassname} onClick={toggleIsOpenSocialMedia}>
              <div className="little-arrow-container-1 little-arrow-container">
                <LittleArrows />
              </div>
              <div className="text">
                Contact
              </div>
              <div className="little-arrow-container-2 little-arrow-container">
                <LittleArrows />
              </div>
            </div>
            <div className={popDivClassname}>
              <div className="pop-close" onClick={toggleIsOpenSocialMedia}><div>+</div></div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Home.propTypes = {
  isOpenSocialMedia: PropTypes.bool.isRequired,
  toggleIsOpenSocialMedia: PropTypes.func.isRequired,
};

// == Export
export default Home;
