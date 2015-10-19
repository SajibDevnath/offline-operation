// Register
if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (reg) {
            // success
            console.log('Registration succeded. Scope is ' + reg.scope);
        })
        .catch(function (err) {
            // failure
            console.log('Registration failed with ' + err);
        })
}

// install and activate
this.addEventListener('install', function (event) {
     // Service Worker will not install until the 
     // code inside waitUntil() successfully occur
     event.waitUntil(
-        // Caches.open() method to create a new cache called v1
        caches.open('v1')
            .then(function (cache) {
                return cache.addAll([
                    '/index.html',
                    '/serviceworker-cache-polyfill.js',
                    '/style.css',
                    '/sw.js'
                ]);
            });    
        ); 
});
