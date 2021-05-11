export const NEXT_ITEM = 'NEXT_ITEM';
export const PREVIOUS_ITEM = 'PREVIOUS_ITEM';
export const NEXT_LITTLE_ITEM = 'NEXT_LITTLE_ITEM';
export const PREVIOUS_LITTLE_ITEM = 'PREVIOUS_LITTLE_ITEM';
export const TOGGLE_IS_OPEN_MODAL_PROJECTS = 'TOGGLE_IS_OPEN_MODAL_PROJECTS';

export const nextItem = () => ({
  type: NEXT_ITEM,
});

export const previousItem = () => ({
  type: PREVIOUS_ITEM,
});

export const nextLittleItem = () => ({
  type: NEXT_LITTLE_ITEM,
});

export const previousLittleItem = () => ({
  type: PREVIOUS_LITTLE_ITEM,
});

export const toggleIsOpenModalProjects = () => ({
  type: TOGGLE_IS_OPEN_MODAL_PROJECTS,
});
