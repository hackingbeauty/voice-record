import types             from 'core/types';
import { saveRecording } from 'react-mic';
import { set }           from 'core/libs/lib-cache';

/**
 * saveAudio - Save an audio file
 */
export function saveAudio(id, title) {
  const recordedBlob = saveRecording();
  const blobURL = URL.createObjectURL(recordedBlob);

  set(id, {
    title   : title,
    blob    : recordedBlob,
    blolbURL: blobURL
  });

  return {
    type   : types.SAVE_AUDIO,
    id     : id,
    value  : {
      title   : title,
      blob    : recordedBlob,
      blobURL : blobURL
    }
  };
}

