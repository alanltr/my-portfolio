import emailjs from 'emailjs-com';
import {
  SEND_EMAIL,
  setIsASuccess,
  setSuccessMessage,
  toggleIsOpenSnackbar,
  toggleIsOpenModalMail,
  resetForm,
} from 'src/actions/homeActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      const {
        email,
        mailContent,
        mailObject,
        checkboxAuth,
      } = store.getState().main;
      const { userAgent } = navigator;

      console.log(process.env.MAIL_SERVICE_ID)

      // Verif d'email avec regex
      const emailVerif = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      if (!emailVerif.test(email)) {
        store.dispatch(setSuccessMessage('An error occured with your email'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));
        next(action);
        break;
      }

      // Verif de l'objet
      if (mailObject.length < 10) {
        store.dispatch(setSuccessMessage('Your mail subject is too short. Minimum 10chars needed'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));

        next(action);
        break;
      }
      else if (mailObject.length > 50) {
        store.dispatch(setSuccessMessage('Your subject is too long. Maximum 50chars allowed'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));

        next(action);
        break;
      }

      // Verif du contenu
      if (mailContent.length < 10) {
        store.dispatch(setSuccessMessage('Your mail content is too short. Minimum 10chars needed'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));

        next(action);
        break;
      }
      else if (mailContent.length > 300) {
        store.dispatch(setSuccessMessage('Your mail content is too long. Maximum 300chars allowed'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));

        next(action);
        break;
      }

      // Verif de la checkbox
      if (!checkboxAuth) {
        store.dispatch(setSuccessMessage('You must agree to the terms. Don\'t worry your data will only be used for improving this site'));
        store.dispatch(setIsASuccess(false));
        store.dispatch(toggleIsOpenSnackbar(true));

        next(action);
        break;
      }

      store.dispatch(toggleIsOpenModalMail());

      emailjs.send(
        process.env.MAIL_SERVICE_ID,
        process.env.MAIL_TEMPLATE_ID,
        {
          email,
          mailContent,
          mailObject,
          userAgent,
        },
        process.env.MAIL_USER_ID,
      ).then(() => {
        // Success case
        store.dispatch(setSuccessMessage('Your email has been sent successfully !'));
        store.dispatch(setIsASuccess(true));
        store.dispatch(toggleIsOpenSnackbar(true));
        store.dispatch(resetForm());
      })
        .catch(() => {
          // Fail case
          store.dispatch(setSuccessMessage('An error occured, join me at letrocqueralan@gmail.com'));
          store.dispatch(setIsASuccess(false));
          store.dispatch(toggleIsOpenSnackbar(true));
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
