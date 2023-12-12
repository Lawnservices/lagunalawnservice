self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mi-cache').then(cache => {
            return cache.addAll([
                '/',
                './index.html',
                './main.js'
                // Agrega aquí otros recursos que desees cachear
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
