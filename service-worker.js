const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/icons/image1.png',
  '/icons/image2.png',
  '/icons/image3.png',
  '/icons/image4.png',
  '/icons/image5.png',
  '/icons/image6.png',
];

self.addEventListener('install', function(event) {
  // Realiza a instalação do Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Intercepta as solicitações de rede
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retorna a resposta armazenada em cache, se disponível
        if (response) {
          return response;
        }
        // Caso contrário, busca a resposta da rede
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', function(event) {
  // Remove caches antigos que não estão na lista de caches para manter
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
