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

  return localforage.iterate((obj, id, iterationNum) => {

    storedItems.push({
      id        : id,
      title     : obj.title,
      blob      : obj.blob,
      blobURL   : obj.blobURL,
      startTime : obj.startTime,
      stopTime  : obj.stopTime,
      size      : obj.size
    });

  }).then(() => {
    return storedItems;
  }).catch((err) => {
    console.log(err);
  });
}