import types                      from 'core/types';
import { storeRecording,
         getAllStoredRecordings } from 'core/libs/lib-cache';
import uuid                       from 'uuid';

/**
 * saveRecording - Save an audio file
 */
export function saveRecording(recording) {
  return (dispatch, getState) => {
    const { count } = getState().audio;
    const id  = uuid.v1();

    recording.title = `My recording #${count + 1}`;
    recording.id = id;

    storeRecording(id, recording);

    dispatch((() => {
      return {
        type      : types.SAVE_RECORDING,
        recording : recording
      }
    })());
  }
}

/**
 * getAllRecordings - Get items from cache
 */
export function getAllRecordings() {
  return (dispatch) => {
    getAllStoredRecordings().then((list) => {
      const retrievedRecordings = list.sort((a,b) => {
        return b.startTime - a.startTime
      });

      dispatch((() => {
        return {
          type : types.GET_ALL_RECORDINGS,
          list : retrievedRecordings
        }
      })());
    });
  }
}