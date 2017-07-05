import localforage from 'localforage';

localforage.config({
  name      : 'VoiceRecord',
  storeName : 'VoiceRecordData'
});

export function storeRecording(id, obj) {
  localforage.setItem(id, obj);
}

export function getAllStoredRecordings() {
  const storedItems = [];

  return localforage.iterate((obj) => {
    storedItems.push(obj);

  }).then(() => {
    return storedItems;
  }).catch((err) => {
    console.log(err);
  });
}
