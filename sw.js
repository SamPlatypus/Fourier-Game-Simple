// Offline support for the Fourier Epicycles Toy.
// The first visit saves the whole app; after that it opens from this cache with
// no network. When online, a newer version is fetched in the background and
// shows up the next time the app is opened.
const CACHE = 'fourier-toy-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('fourier-toy-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Every page of the app is the one index.html.
  const key = req.mode === 'navigate' ? './index.html' : req;
  const network = fetch(req).then(async (res) => {
    if (res.ok && res.type === 'basic') await (await caches.open(CACHE)).put(key, res.clone());
    return res;
  });
  event.waitUntil(network.then(() => {}, () => {}));
  event.respondWith(caches.match(key, { ignoreSearch: true }).then((hit) => hit || network));
});
