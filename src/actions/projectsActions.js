export const NEXT_ITEM = 'NEXT_ITEM';
export const PREVIOUS_ITEM = 'PREVIOUS_ITEM';

export const nextItem = () => ({
  type: NEXT_ITEM,
});

export const previousItem = () => ({
  type: PREVIOUS_ITEM,
});
