const CACHE_NAME = 'jack-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/portfolio/',
  '/portfolio/index.html',
  '/portfolio/assets/css/style.css',
  '/portfolio/assets/js/script.js',
  '/portfolio/assets/vendors/themify-icons/css/themify-icons.css',
  '/portfolio/assets/vendors/jquery/jquery-3.4.1.js',
  '/portfolio/assets/vendors/bootstrap/bootstrap.bundle.js',
  '/portfolio/assets/imgs/passport-picai.jfif',
  '/portfolio/assets/imgs/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});