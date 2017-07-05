import constants from 'core/types';

/**
 * openNav - Open the side nav
 */
export function openNav() {
  return {
    type: constants.OPEN_NAV
  };
}

/**
 * closeNav - Close the side nav
 */
export function closeNav() {
  return {
    type: constants.CLOSE_NAV
  };
}

/**
 * openRightNav - Open the right side nav
 */
export function openRightNav() {
  return {
    type: constants.OPEN_RIGHT_NAV
  };
}

/**
 * closeLeftNav - Close the right side nav
 */
export function closeRightNav() {
  return {
    type: constants.CLOSE_RIGHT_NAV
  };
}