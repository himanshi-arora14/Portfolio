// service-worker.js

const cacheName = 'my-site-cache';
const cacheVersion = 'v1'; // Cache version for cache-busting
const filesToCache = [
  '/',
  '/index.html',
  '/css/skins/styles-switcher.css',
  '/style.css',
  '/js/main.js',
  '/js/style-switcher.js'
];

// Function to generate cache-busted URLs
function getCacheBustedUrl(url) {
  const urlObject = new URL(url);
  urlObject.searchParams.append('v', cacheVersion); // Append cache version as a query parameter
  return urlObject.href;
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache.map(getCacheBustedUrl)); // Cache-bust the URLs
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
