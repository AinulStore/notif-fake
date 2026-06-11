// Mesin PWA Null Store
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Berhasil Diinstall Bosku!');
});

self.addEventListener('fetch', (e) => {
    // Biarin kosong, ini cuma syarat wajib dari Google biar lolos PWA
});
