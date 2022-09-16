self.addEventListener("install" , e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(['./'  , './src/index.css' , './src/index.js' , './images/android-chrome-192x192.png'])
        })
    )
})




self.addEventListener("fetch" , e =>{
    e.respondWith(
        caches.match(e.request).then(res =>{
            return res || fetch(e.request)
        })
    )
})