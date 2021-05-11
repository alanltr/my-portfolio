import emailjs from 'emailjs-com';
import {
  SEND_EMAIL,
  setIsASuccess,
  setSuccessMessage,
  toggleIsOpenSnackbar,
  toggleIsOpenModalMail,
} from 'src/actions/homeActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      store.dispatch(toggleIsOpenModalMail());
      const { email, mailContent, mailObject } = store.getState().main;

      emailjs.send(
        'service_k4ozl88', 'template_w7qjsmk',
        {
          email,
          mailContent,
          mailObject,
        }, 'user_wYfNoF7rHFsS51qpjcqiQ',
      ).then(() => {
        // Success case
        store.dispatch(setSuccessMessage('Votre mail a été envoyé avec succès !'));
        store.dispatch(setIsASuccess(true));
        store.dispatch(toggleIsOpenSnackbar());
      })
        .catch(() => {
          // Fail case
          store.dispatch(setSuccessMessage('Une erreur est survenue, je reste joignable sur letrocqueralan@gmail.com'));
          store.dispatch(setIsASuccess(false));
          store.dispatch(toggleIsOpenSnackbar());
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
