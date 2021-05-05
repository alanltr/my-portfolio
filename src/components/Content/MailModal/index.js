// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// == Import
import './mailModal.scss';

// == Composant
const MailModal = ({
  isOpen,
  toggleIsOpen,
}) => {
  const body = (
    <div className="modal-component glassmorphism">
      <h2 id="simple-modal-title">Formulaire de contact</h2>
      <div id="simple-modal-description">
        <form noValidate autoComplete="off">
          <TextField
            type="email"
            id="filled-secondary"
            label="Votre email"
            variant="filled"
          />
          <TextField
            type="text"
            id="filled-secondary"
            label="L'objet de votre mail (70 caractères max)"
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Votre mail ici (300 caractères max)"
            multiline
            rows={5}
            variant="filled"
          />
          <div className="submit-btn-div glassmorphism">
            <button aria-label="submit-btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={toggleIsOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

MailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

// == Export
export default MailModal;
