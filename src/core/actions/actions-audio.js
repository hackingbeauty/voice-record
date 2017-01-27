import types           from 'core/types';
// import { set, remove } from 'core/libs/lib-cache';

/**
 * saveAudio - Save an audio file
 */
export function saveAudio(id, title, blob) {
  // const blobURL = URL.createObjectURL(blob);
  const blobURL = 'yada'
  // set(id,title,blob,blobURL); //Set in cache

  return {
    type   : types.SAVE_AUDIO,
    id     : id,
    value  : {
      title   : title,
      blob    : blob,
      blobURL : blobURL
    }
  };
}

