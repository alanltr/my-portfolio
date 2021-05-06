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
      const { email, mailContent, mailObject } = store.getState().home;

      // Success case
      store.dispatch(toggleIsOpenModalMail());
      store.dispatch(setSuccessMessage('Votre mail a été envoyé avec succès !'));
      store.dispatch(setIsASuccess(true));
      store.dispatch(toggleIsOpenSnackbar());

      // Fail case
      // store.dispatch(toggleIsOpenModalMail());
      // store.dispatch(setSuccessMessage('Une erreur est survenue, je reste joignable sur letrocqueralan@gmail.com'));
      // store.dispatch(setIsASuccess(false));
      // store.dispatch(toggleIsOpenSnackbar());

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
