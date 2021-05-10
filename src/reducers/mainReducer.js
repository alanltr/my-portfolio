import slides from 'src/assets/data';
import {
  TOGGLE_IS_OPEN_SOCIAL_MEDIA,
  TOGGLE_IS_OPEN_MODAL_MAIL,
  CHANGE_FIELD,
  SET_IS_A_SUCCESS,
  SET_SUCCESS_MESSAGE,
  TOGGLE_IS_OPEN_SNACKBAR,
} from 'src/actions/homeActions';
import {
  PREVIOUS_ITEM,
  NEXT_ITEM,
} from 'src/actions/projectsActions';

const initialState = {
  // Home
  isOpenSocialMedia: false,
  isOpenModalMail: false,
  // MailModal
  email: '',
  mailObject: '',
  mailContent: '',
  // PersonalSnackbar
  successMessage: 'reducers',
  isASuccess: true,
  isOpenSnackbar: false,
  // ProjectsContent | Slides
  slides,
  nbOfProject: slides.length,
  slideIndex: 0,
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
    case TOGGLE_IS_OPEN_SNACKBAR:
      return {
        ...state,
        isOpenSnackbar: !state.isOpenSnackbar,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case SET_IS_A_SUCCESS:
      return {
        ...state,
        isASuccess: action.newBool,
      };
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.newValue,
      };
    case PREVIOUS_ITEM:
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.slides.length,
      };
    case NEXT_ITEM:
      return {
        ...state,
        slideIndex: state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1,
      };
    default:
      return state;
  }
}

export default homeReducer;
