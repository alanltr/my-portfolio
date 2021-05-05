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
  email,
  mailObject,
  mailContent,
  changeField,
  sendEmail,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const body = (
    <div className="modal-component glassmorphism">
      <h2 id="simple-modal-title">Contact Form</h2>
      <div id="simple-modal-description">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={changeField}
            id="filled-secondary"
            label="Your email"
            variant="filled"
          />
          <TextField
            type="text"
            name="mailObject"
            value={mailObject}
            onChange={changeField}
            id="filled-secondary"
            label="Your mail's object - ( 50 chars max )"
            variant="filled"
          />
          <TextField
            name="mailContent"
            value={mailContent}
            onChange={changeField}
            id="filled-multiline-static"
            label="Your content here - ( 300 chars max )"
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
  email: PropTypes.string.isRequired,
  mailObject: PropTypes.string.isRequired,
  mailContent: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

// == Export
export default MailModal;
