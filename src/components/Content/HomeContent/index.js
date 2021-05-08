// == Import npm
import React from 'react';

// == Import
import './homeContent.scss';

// == Composant
const HomeContent = () => (
  <>
    {/* <div className="typing-demo">
      Hi people !<br />
      I am Alan Le Trocquer.<br />
      Welcome to my portfolio.<br />
      Enjoy your visit 🔥.<br />
      To make the most of the site, come and see it with a slightly larger screen.
    </div> */}
    <ul className="words">
      <li className="words-line">
        <p>&nbsp;</p>
        <p>Hi people !</p>
      </li>
      <li className="words-line">
        <p>Hi people !</p>
        <p>i am alan</p>
      </li>
      <li className="words-line">
        <p>i am alan</p>
        <p>le trocquer.</p>
      </li>
      <li className="words-line">
        <p>le trocquer.</p>
        <p>Welcome to</p>
      </li>
      <li className="words-line">
        <p>Welcome to</p>
        <p>my portfolio</p>
      </li>
      <li className="words-line">
        <p>my portfolio</p>
        <p>Enjoy your</p>
      </li>
      <li className="words-line">
        <p>Enjoy your</p>
        <p>visit <span className="emoji">🔥</span></p>
      </li>
      <li className="words-line">
        <p>visit <span className="emoji">🔥</span></p>
        <p>&nbsp;</p>
      </li>
    </ul>
  </>
);
// == Export
export default HomeContent;
