// Register

if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('sw.js')
        .then(function (reg) {
            // success
            console.log('Registration succeded. Scope is ' + reg.scope);
        })
        .catch(function (err) {
            // failure
            console.log('Registration failed with ' + err);
        })
}
