import uiConstants from 'core/types/types-ui';

/**
 * openNav - Open the side nav
 */
export function openNav() {
  return {
    type: uiConstants.OPEN_NAV
  };
}

/**
 * closeNav - Close the side nav
 */
export function closeNav() {
  return {
    type: uiConstants.CLOSE_NAV
  };
}