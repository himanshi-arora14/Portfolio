// service-worker.js

const cacheName = 'my-site-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(response) {
          // Clone the response to enable caching
          const clonedResponse = response.clone();

          // Check if the response is a valid one
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Cache the fetched response
          caches.open(cacheName)
            .then(function(cache) {
              cache.put(event.request, clonedResponse);
            });

          return response;
        });
      })
  );
});
