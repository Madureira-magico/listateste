const CACHE='famosos-app-v1';
const SHELL=['./','./index.html','./names.js','./app.js','./jszip.min.js','./icon.png','./manifest.webmanifest'];
self.addEventListener('install',ev=>ev.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',ev=>ev.waitUntil(self.clients.claim()));
self.addEventListener('fetch',ev=>{if(new URL(ev.request.url).origin!==location.origin)return;ev.respondWith(caches.match(ev.request).then(a=>a||fetch(ev.request).then(r=>{if(r.ok)caches.open(CACHE).then(c=>c.put(ev.request,r.clone()));return r;})))});
