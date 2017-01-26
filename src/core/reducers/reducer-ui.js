import uiConstants from 'core/types/types-ui';

const initialState = {
  leftNavOpen: false
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case uiConstants.OPEN_LEFT_NAV:
    return Object.assign({}, state, {
      leftNavOpen: true
    });

  case uiConstants.CLOSE_LEFT_NAV:
    return Object.assign({}, state, {
      leftNavOpen: false
    });

  default:
    return state;
  }
}