self.addEventListener('install', e => {
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
    if (e.request.url.includes('index.html')) {
        e.respondWith(caches.match(e.request) || fetch(e.request));
    }
});
