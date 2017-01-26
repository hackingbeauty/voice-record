import uiConstants from 'core/types/types-ui';

/**
 * openLeftNav - Open the side nav
 */
export function openLeftNav() {
  return {
    type: uiConstants.OPEN_LEFT_NAV
  };
}

/**
 * closeLeftNav - Close the side nav
 */
export function closeLeftNav() {
  return {
    type: uiConstants.CLOSE_LEFT_NAV
  };
}