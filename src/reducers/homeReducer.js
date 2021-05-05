import {
  TOGGLE_IS_OPEN_SOCIAL_MEDIA,
  TOGGLE_IS_OPEN_MODAL_MAIL,
  CHANGE_FIELD,
} from 'src/actions/homeActions';

const initialState = {
  // Home
  isOpenSocialMedia: false,
  isOpenModalMail: true,
  // MailModal
  email: '',
  mailObject: '',
  mailContent: '',
};

function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_IS_OPEN_SOCIAL_MEDIA:
      return {
        ...state,
        isOpenSocialMedia: !state.isOpenSocialMedia,
      };
    case TOGGLE_IS_OPEN_MODAL_MAIL:
      return {
        ...state,
        isOpenModalMail: !state.isOpenModalMail,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    default:
      return state;
  }
}

export default homeReducer;
