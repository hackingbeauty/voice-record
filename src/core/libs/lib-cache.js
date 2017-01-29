import localforage from 'localforage';

localforage.config({
  name      : 'VoiceRecord',
  storeName : 'VoiceRecordPData'
});

export function set(id, obj) {
  localforage.setItem(id, obj);
}