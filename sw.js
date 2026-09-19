const CACHE_NAME = 'jack-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/404.html',
  '/assets/css/style.css',
  '/assets/js/script.js',
  '/assets/vendors/themify-icons/css/themify-icons.css',
  '/assets/vendors/jquery/jquery-3.4.1.js',
  '/assets/vendors/bootstrap/bootstrap.bundle.js',
  '/assets/imgs/passport-picai.jfif',
  '/assets/imgs/favicon.ico'
];

// Install event: cache initial assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});