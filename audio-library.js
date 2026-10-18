// Audio stays in this browser. No account credentials or music are uploaded.
const AudioLibrary = (() => {
  let database;
  function open() {
    if (!('indexedDB' in window)) return Promise.reject(new Error('storage-unavailable'));
    if (!database) database = new Promise((resolve, reject) => {
      const request = indexedDB.open('summer-2017-audio', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('tracks', {keyPath: 'key'});
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error('storage-blocked'));
    });
    return database;
  }
  async function run(mode, operation) {
    const db = await open();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('tracks', mode);
      const request = operation(transaction.objectStore('tracks'));
      transaction.oncomplete = () => resolve(request.result);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error || new Error('storage-aborted'));
    });
  }
  return {
    all: () => run('readonly', store => store.getAll()),
    save: record => run('readwrite', store => store.put(record)),
    remove: key => run('readwrite', store => store.delete(key))
  };
})();
