import { SEND_EMAIL } from 'src/actions/homeActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      console.log('envoi de mail')
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
