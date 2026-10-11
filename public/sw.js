const CACHE = '4frogs-shell-__VERSION__';
const BASE = new URL('./', self.location.href);
const PRECACHE = __PRECACHE__;
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
