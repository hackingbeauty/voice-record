import types from 'core/types';

const initialState = {
  list      : [],
  id        : '',
  blob      : null,
  blobURL   : '',
  startTime : null,
  count     : 0
};

export function audioReducer(state = initialState, action) {
  switch (action.type) {

  case types.SAVE_AUDIO: {

    state.list.push({ //Is this a mutation?
      id        : action.id,
      title     : action.title,
      blob      : action.blob,
      blobURL   : action.blobURL,
      startTime : action.startTime,
      stopTime  : action.stopTime
    });

    const audioList = state.list;

    return Object.assign({}, state, {
      list  : audioList,
      count : audioList.length
    });
  }

  case types.GET_AUDIO_ITEMS: {
    return Object.assign({}, state, {
      list  : action.list,
      count : action.list.length
    });
  }

  default:
    return state;
  }
}