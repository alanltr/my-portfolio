import {
  TOGGLE_IS_OPEN_SOCIAL_MEDIA,
  TOGGLE_IS_OPEN_MODAL_MAIL,
} from 'src/actions/homeActions';

const initialState = {
  isOpenSocialMedia: false,
  isOpenModalMail: true,
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
    default:
      return state;
  }
}

export default homeReducer;
