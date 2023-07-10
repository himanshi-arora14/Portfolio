// service-worker.js

// Define the cache name and the files to be cached
const cacheName = 'my-site-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js'
];

// Install the service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

// Intercept network requests and serve cached responses
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
