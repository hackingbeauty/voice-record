import constants from 'core/types';

/**
 * openLeftNav - Open the side nav
 */
export function openLeftNav() {
  return {
    type: constants.OPEN_LEFT_NAV
  };
}

/**
 * closeLeftNav - Close the side nav
 */
export function closeLeftNav() {
  return {
    type: constants.CLOSE_LEFT_NAV
  };
}