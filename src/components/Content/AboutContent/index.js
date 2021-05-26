// == Import npm
import React from 'react';

import reactLogo from 'src/assets/logos/react.png';
import reduxLogo from 'src/assets/logos/redux.png';
import cssLogo from 'src/assets/logos/css.png';
import htmlLogo from 'src/assets/logos/html.png';
import javascriptLogo from 'src/assets/logos/javascript.png';
import mongodbLogo from 'src/assets/logos/mongodb.png';
import mysqlLogo from 'src/assets/logos/mysql.png';
import nodejsLogo from 'src/assets/logos/nodejs.png';
import phpLogo from 'src/assets/logos/php.png';
import sassLogo from 'src/assets/logos/sass.png';

import DownloadBtn from 'src/components/DesignElements/DownloadBtn';

// == Import
import './aboutContent.scss';

// == Composant
const AboutContent = () => (
  <>
    <h2 className="left-section-title glassmorphism-1 neon-item">My curriculum</h2>
    <div className="left-section glassmorphism">
      <div className="left-section-content">
        Coming from a literary baccalaureate, after having
        had a lot of work in particular as manager of several
        restaurants, I wanted to realize my dream and make
        my passion my job. I studied at O'Clock and i'm now
        graduated as web an web mobile developer. Ready to go in the
        jungle. You can contact me from my main page's footer.
        <div className="left-wrapper">
          <div className="left">
            You also can download my C.V (PDF 76ko) by clicking the arrow
          </div>
          <div className="right">
            I put here back & front technologies
            that I use on my different projects.
          </div>
        </div>
      </div>
      <div className="download-btn">
        <DownloadBtn />
      </div>
    </div>
    <div className="bottom-section glassmorphism-1">
      <div className="logo-display logo-display-8">
        <img src={nodejsLogo} alt="logo node js" />
      </div>
      <div className="logo-display logo-display-7">
        <img src={mongodbLogo} alt="logo mongo db" />
      </div>
      <div className="logo-display logo-display-9">
        <img src={mysqlLogo} alt="logo mysql" />
      </div>
      <div className="logo-display logo-display-10">
        <img src={phpLogo} alt="logo php" />
      </div>
    </div>
    <div className="right-section">
      <div className="logo-display logo-display-1">
        <img src={reactLogo} alt="logo react" />
      </div>
      <div className="logo-display logo-display-2">
        <img src={reduxLogo} alt="logo redux" />
      </div>
      <div className="logo-display logo-display-3">
        <img src={sassLogo} alt="logo sass" />
      </div>
      <div className="logo-display logo-display-4">
        <img src={htmlLogo} alt="logo html" />
      </div>
      <div className="logo-display logo-display-5">
        <img src={cssLogo} alt="logo css 3" />
      </div>
      <div className="logo-display logo-display-6">
        <img src={javascriptLogo} alt="logo javascript" />
      </div>
    </div>
  </>
);
// == Export
export default AboutContent;
