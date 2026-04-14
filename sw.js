const CACHE_NAME = 'PWA-Store-Cache';
const ASSETS = ['./', './index.html', './manifest.json', './LinksOnApps.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
