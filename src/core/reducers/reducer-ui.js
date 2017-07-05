import constants from 'core/types';

const initialState = {
  leftNavOpen  : false,
  rightNavOpen : false
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {

  case constants.OPEN_NAV:
    return Object.assign({}, state, {
      leftNavOpen: true
    });

  case constants.CLOSE_NAV:
    return Object.assign({}, state, {
      leftNavOpen: false
    });

  case constants.OPEN_RIGHT_NAV:
    return Object.assign({}, state, {
      rightNavOpen: true
    });

  case constants.CLOSE_RIGHT_NAV:
    return Object.assign({}, state, {
      rightNavOpen: false
    });

  default:
    return state;
  }
}