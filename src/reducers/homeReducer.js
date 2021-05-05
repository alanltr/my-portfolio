import {
  TOGGLE_IS_OPEN_SOCIAL_MEDIA,
} from 'src/actions/homeActions';

const initialState = {
  isOpenSocialMedia: false,
};

function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_IS_OPEN_SOCIAL_MEDIA:
      return {
        ...state,
        isOpenSocialMedia: !state.isOpenSocialMedia,
      };
    default:
      return state;
  }
}

export default homeReducer;
