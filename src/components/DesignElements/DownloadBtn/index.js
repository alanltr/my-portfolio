// == Import npm
import React, { useRef } from 'react';
// == Import
import './downloadBtn.scss';

import CV from 'src/assets/cv_alan_ltr.pdf';

// == Composant
const DownloadBtn = () => {
  const triggerEl = useRef(null);
  const handleCheck = (e) => {
    // Si checkbox cochée, on simule le click de download
    if (e.target.checked) {
      // triggerEl.current.click();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="ms-container">
          <label htmlFor="ms-download">
            <div className="ms-content">
              <div className="ms-content-inside">
                <input type="checkbox" id="ms-download" onChange={handleCheck} />
                <a href={CV} download="cv_alan_le_trocquer.pdf" ref={triggerEl} className="ms-line-down-container">
                  <div className="ms-line-down" />
                </a>
                <div className="ms-line-point" />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
// == Export
export default DownloadBtn;
