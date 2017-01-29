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

  return localforage.iterate((value, id) => {
    storedItems.push({id, value});
  }).then(() => {
    return storedItems;
  }).catch((err) => {
    console.log(err);
  });
}