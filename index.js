(function (global) {
    var ready = false;
    var calls = [];

    global.addEventListener('WebComponentsReady', function readyListener () {
        ready = true;

        calls.forEach(function (listener) {
            listener();
        });

        calls = [];
        global.removeEventListener('WebComponentsReady', readyListener);
    });

    /**
     * @param {Function} listener
     */
    global.WCReady = function (listener) {
        if (typeof listener === 'function') {
            if (ready) {
                listener();
            } else {
                calls.push(listener);
            }
        }
    }
}(window));
