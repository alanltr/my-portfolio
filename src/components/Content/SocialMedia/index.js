// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// == Import
import './socialMedia.scss';

// == Composant
const SocialMedia = ({
  toggleIsOpenModalMail,
  toggleIsOpenSocialMedia,
}) => {
  const handleClickMailContact = () => {
    toggleIsOpenModalMail();
    toggleIsOpenSocialMedia();
  };

  return (
    <div className="social-media-component">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/alan-ltr/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
            <span> - LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/alanltr" target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span> - GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DevXLand" target="_blank" rel="noreferrer">
            <TwitterIcon />
            <span> - Twitter</span>
          </a>
        </li>
        <li>
          <a onClick={handleClickMailContact}>
            <MailOutlineRoundedIcon />
            <span> - Gmail</span>
          </a>
        </li>
      </ul>
    </div>

  );
};

SocialMedia.propTypes = {
  toggleIsOpenSocialMedia: PropTypes.func.isRequired,
  toggleIsOpenModalMail: PropTypes.func.isRequired,
};

// == Export
export default SocialMedia;
