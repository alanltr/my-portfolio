// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

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
  setCheckboxAgreement,
  checkboxAuth,
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
          <FormControlLabel
            control={(
              <Checkbox
                icon={<CheckCircleOutlineRoundedIcon />}
                checkedIcon={<CheckCircleRoundedIcon />}
                checked={checkboxAuth}
                onChange={setCheckboxAgreement}
              />
            )}
            label="By clicking here, I agree that my data will be used as part of this contact by email"
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
        aria-labelledby="contact-form"
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
  checkboxAuth: PropTypes.bool.isRequired,
  setCheckboxAgreement: PropTypes.func.isRequired,
};

// == Export
export default MailModal;
