// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import Backlink from 'src/components/DesignElements/Backlink';
import { motion } from 'framer-motion';

// == Import
import './legalMentions.scss';

// == Composant
const LegalMentions = () => {
  React.useEffect(() => {
    document.title = 'Legal Mentions';
  });

  return (
    <motion.div
      initial={{ translateX: 1500 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="legal-mentions-component">
        <div className="legal-backlink common-backlink">
          <a id="top" />
          <Backlink />
        </div>
        <div className="legal-title">
          <h1 className="neon-item">Legal<span>_</span>Mentions</h1>
        </div>
        <div className="cards">
          <div className="card-legal card-legal-1 glassmorphism">
            <h2>Website developer & owner</h2>
            <div>
              <ul>
                <li>Le Trocquer Alan</li>
                <li>Based on Boulogne-Billancourt</li>
                <li>letrocqueralan@gmail.com</li>
                <li>06.88.25.00.07</li>
              </ul>
            </div>
          </div>
          <div className="card-legal card-legal-2 glassmorphism">
            <h2>Website host</h2>
            <div>
              <ul>
                <li>Netlify, Inc.</li>
                <li>2325 3rd Street, Suite 296</li>
                <li>San Francisco, California 94107</li>
                <li>support@netlify.com</li>
              </ul>
            </div>
          </div>
          <div className="card-legal card-legal-3 glassmorphism">
            <h2>Your personal data</h2>
            <div>
              In general, the use of this website does not
              require your personal data. However, if you wish
              to contact me, a certain amount of information will
              be requested in order to determine the reason for
              which you contacted me and to be able to contact you later.
            </div>
            <div>
              As part of the Règlement Général sur la Protection des Données (RGPD),
              this information is stored confidentially for a period of 2 years.
              You have the possibility if you wish to have access to your data,
              to modify them, to request their erasure. To do this, contact me
              via my contact form on my main page footer or directly to
              <a href="mailto:letrocqueralan@gmail.com"> letrocqueralan@gmail.com</a>.
            </div>
            <div>
              Other non-personal data is stored for statistical purposes. In any
              case, this data constitutes personal data allowing you to be
              identified in any way.
            </div>
          </div>
        </div>
        <a className="top-link" href="#top">Return to the top</a>
      </div>
    </motion.div>
  );
};
// == Export
export default LegalMentions;
