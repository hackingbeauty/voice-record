import types             from 'core/types';
import { saveRecording } from 'react-mic';
import { set }           from 'core/libs/lib-cache';

/**
 * saveAudio - Save an audio file
 */
export function saveAudio(id, title) {
  const blobObject = saveRecording();
  const recordedBlob = blobObject.blob;
  const blobURL = URL.createObjectURL(recordedBlob);

  set(id, {
    title     : title,
    blob      : recordedBlob,
    blobURL   : blobURL,
    size      : recordedBlob.size,
    startTime : blobObject.startTime,
    stopTime  : blobObject.stopTime
  });

  return {
    type      : types.SAVE_AUDIO,
    id        : id,
    title     : title,
    blob      : recordedBlob,
    blobURL   : blobURL,
    size      : recordedBlob.size,
    startTime : blobObject.startTime,
    stopTime  : blobObject.stopTime
  };
}

/**
 * getItems - Get items from cached
 */
export function getItems(list) {
  return {
    type : types.GET_AUDIO_ITEMS,
    list : list
  }
}

