import types from 'core/types';

const initialState = {
  list    : [],
  id      : '',
  blob    : null,
  bloblURL: ''
};

export function audioReducer(state = initialState, action) {
  switch (action.type) {

  case types.SAVE_AUDIO: {

    state.list.push({ //Is this a mutation?
      id      : action.id,
      title   : action.value.title,
      blob    : action.value.blob,
      blobURL : action.value.blobURL
    });

    const audioList = state.list;

    return Object.assign({}, state, {
      list: audioList
    });
  }

  case types.GET_AUDIO_ITEMS: {
    return Object.assign({}, state, {
      list : action.list
    });
  }

  default:
    return state;
  }
}