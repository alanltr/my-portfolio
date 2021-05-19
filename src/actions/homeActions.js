export const TOGGLE_IS_OPEN_SOCIAL_MEDIA = 'TOGGLE_IS_OPEN_SOCIAL_MEDIA';
export const TOGGLE_IS_OPEN_MODAL_MAIL = 'TOGGLE_IS_OPEN_MODAL_MAIL';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SEND_EMAIL = 'SEND_EMAIL';
export const SET_IS_A_SUCCESS = 'SET_IS_A_SUCCESS';
export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const TOGGLE_IS_OPEN_SNACKBAR = 'TOGGLE_IS_OPEN_SNACKBAR';
export const SET_COLOR_TO_DISPLAY = 'SET_COLOR_TO_DISPLAY';

export const sendEmail = () => ({
  type: SEND_EMAIL,
});

export const toggleIsOpenSocialMedia = () => ({
  type: TOGGLE_IS_OPEN_SOCIAL_MEDIA,
});

export const toggleIsOpenModalMail = () => ({
  type: TOGGLE_IS_OPEN_MODAL_MAIL,
});

export const changeField = (newValue, name) => ({
  type: CHANGE_FIELD,
  newValue,
  name,
});

export const setIsASuccess = (newBool) => ({
  type: SET_IS_A_SUCCESS,
  newBool,
});

export const setSuccessMessage = (newValue) => ({
  type: SET_SUCCESS_MESSAGE,
  newValue,
});

export const toggleIsOpenSnackbar = (bool) => ({
  type: TOGGLE_IS_OPEN_SNACKBAR,
  bool,
});

export const setColorToDisplay = (color) => ({
  type: SET_COLOR_TO_DISPLAY,
  color,
});
