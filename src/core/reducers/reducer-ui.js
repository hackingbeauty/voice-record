import uiConstants from 'core/types/types-ui';

const initialState = {
  leftNavOpen: false
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case uiConstants.OPEN_NAV:
    return Object.assign({}, state, {
      leftNavOpen: true
    });

  case uiConstants.CLOSE_NAV:
    return Object.assign({}, state, {
      leftNavOpen: false
    });

  default:
    return state;
  }
}