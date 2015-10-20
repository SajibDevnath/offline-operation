// Register
if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/offline-operation/sw.js', {scope: '/offline-operation/'})
        .then(function (reg) {
            
            if(reg.installing) {
              console.log('Service worker installing');
            } else if(reg.waiting) {
              console.log('Service worker installed');
            } else if(reg.active) {
              console.log('Service worker active');
            }
            
        })
        .catch(function (err) {
            // failure
            console.log('Registration failed with ' + err);
        })
}

// install and activate
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/offline-operation/',
        '/offline-operation/index.html',
        '/offline-operation/style.css'
      ]);
    })
  );
});

// returning the cache

self.addEventListener('fetch', function(event) {
  event.respondWith(new Response("Hello world!"));
});
