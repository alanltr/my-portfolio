export const TOGGLE_IS_OPEN_SOCIAL_MEDIA = 'TOGGLE_IS_OPEN_SOCIAL_MEDIA';
export const TOGGLE_IS_OPEN_MODAL_MAIL = 'TOGGLE_IS_OPEN_MODAL_MAIL';
export const CHANGE_FIELD = 'CHANGE_FIELD';

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
