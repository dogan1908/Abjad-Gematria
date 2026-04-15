const CACHE_NAME = 'abjad-gematria-v2';
const QURAN_CDN = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json';
const API_BASE = 'https://api.alquran.cloud/v1/ayah/';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['./', './index.html']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Cache-first for app files and Quran CDN
  if (url.includes(QURAN_CDN) || url.includes('index.html') || url.endsWith('/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        });
      })
    );
  }
  // Cache API translation responses
  else if (url.includes(API_BASE)) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        }).catch(() => new Response(JSON.stringify({code:0}), {headers:{'Content-Type':'application/json'}}));
      })
    );
  }
  // Fonts etc - network first
  else {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  }
});
