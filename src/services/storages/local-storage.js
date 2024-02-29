export function LocalStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage
  } else {
    throw new Error('localStorage is not available in the current environment.')
  }
}
