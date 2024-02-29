export function ServiceWorkerStorage() {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
  } else {
    throw new Error(
      'Service Worker Storage is not available in the current environment.'
    )
  }
}
