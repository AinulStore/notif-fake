// Mesin PWA Fake Notif
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Berhasil Diinstall Bosku!');
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => new Response('OK')));
});
