export function SessionStorage() {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    return window.sessionStorage
  } else {
    throw new Error(
      'sessionStorage is not available in the current environment.'
    )
  }
}
