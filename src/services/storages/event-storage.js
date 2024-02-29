export function EventStorage() {
  if (typeof window !== 'undefined' && window.StorageEvent) {
    return window.StorageEvent
  } else {
    throw new Error('StorageEvent is not available in the current environment.')
  }
}
