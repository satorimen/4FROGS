const CACHE = '4frogs-shell-34b6158c923a6f3b';
const BASE = new URL('./', self.location.href);
const PRECACHE = ["./","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","mascot.png","assets/index-CPOihON_.js","assets/index-CkVNVQR3.css","assets/manrope-cyrillic-wght-normal-Dvxsihut.woff2","assets/manrope-greek-wght-normal-DL7QRZyv.woff2","assets/manrope-latin-ext-wght-normal-Ch3YOpNY.woff2","assets/manrope-latin-wght-normal-DHIcAJRg.woff2","assets/manrope-vietnamese-wght-normal-usUDDRr7.woff2"];
const local = path => new URL(path, BASE).href;
self.addEventListener('install', event => {
 event.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  await cache.addAll(PRECACHE.map(local));
 })());
});
self.addEventListener('activate', event => event.waitUntil((async()=>{
 for (const key of await caches.keys()) if(key.startsWith('4frogs-shell-')&&key!==CACHE)await caches.delete(key);
 await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).catch(()=>caches.match(local('./'))));return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const cached=await cache.match(event.request, {ignoreVary:true}); if(cached)return cached;
  return fetch(event.request);
 })());
});
