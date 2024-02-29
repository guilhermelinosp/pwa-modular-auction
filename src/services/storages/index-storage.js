export function IndexedDBStorage() {
  if (typeof window !== 'undefined' && window.indexedDB) {
    return window.indexedDB
  } else {
    throw new Error('IndexedDB is not supported in the current environment.')
  }
}
