export function CacheStorage() {
  if (typeof window !== 'undefined' && window.caches) {
    return window.caches
  } else {
    throw new Error('caches is not available in the current environment.')
  }
}
