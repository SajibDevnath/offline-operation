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
    event.waitUntil(
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
