import localforage from 'localforage';

localforage.config({
  name      : 'VoiceRecord',
  storeName : 'VoiceRecordData'
});

export function set(id, obj) {
  localforage.setItem(id, obj);
}

export function getAll() {
  const storedItems = [];

  return localforage.iterate((value, id, iterationNum) => {

    storedItems.push({
      id        : id,
      title     : value.title,
      blob      : value.blob,
      blobURL   : value.blobURL,
      startTime : value.startTime,
      size      : value.size
    });

  }).then(() => {
    return storedItems;
  }).catch((err) => {
    console.log(err);
  });
}