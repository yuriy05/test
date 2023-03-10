export enum VALUE_TRANSITION_ENUM {
  DEFAULT = 'default',
  HOVER = 'hover',
}

export type VALUE_TRANSITION_TYPE = `${VALUE_TRANSITION_ENUM}`;

export const VALUE_TRANSITION_DATA = {
  [VALUE_TRANSITION_ENUM.DEFAULT]: '0.3s ease-in-out',
  [VALUE_TRANSITION_ENUM.HOVER]: '0.3s ease-in-out',
};

export enum VALUE_OPACITY_ENUM {
  BUTTON = 'button',
  DEFAULT = 'default',
  HOVER = 'hover',
}

export type VALUE_OPACITY_TYPE = `${VALUE_OPACITY_ENUM}`;

export const VALUE_OPACITY_DATA = {
  [VALUE_OPACITY_ENUM.BUTTON]: 0.8,
  [VALUE_OPACITY_ENUM.DEFAULT]: 0.7,
  [VALUE_OPACITY_ENUM.HOVER]: 0.7,
};
