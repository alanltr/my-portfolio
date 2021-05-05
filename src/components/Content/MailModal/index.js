// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

// == Import
import './mailModal.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// == Composant
const MailModal = ({
  isOpen,
  toggleIsOpen,
}) => {
  const classes = useStyles();

  const body = (
    <div className="modal-component">
      <h2 id="simple-modal-title">Formulaire de contact</h2>
      <div id="simple-modal-description">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            type="email"
            id="filled-secondary"
            label="Votre email"
            variant="filled"
            fullWidth
          />
          <TextField
            type="text"
            id="filled-secondary"
            label="L'objet de votre mail (xx caractères max)"
            variant="filled"
            fullWidth
          />
          <TextField
            id="filled-multiline-static"
            label="Votre mail ici (xx caractères max)"
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
