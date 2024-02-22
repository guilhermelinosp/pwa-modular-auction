self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("pwa-cache")
      .then(cache => cache.addAll([  '/', '/next', '/signin', '/signup']))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
