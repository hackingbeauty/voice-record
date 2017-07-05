import { combineReducers } from 'redux';
import { uiReducer }       from 'core/reducers/reducer-ui';
import { audioReducer }    from 'core/reducers/reducer-audio';

const rootReducer = combineReducers({
  ui    : uiReducer,
  audio : audioReducer
});

export default rootReducer;
