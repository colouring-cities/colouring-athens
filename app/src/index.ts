/**
 * Load server and listen
 *
 */
import http from 'http';
import './i18n';
import app from './server';

const server = http.createServer(app);

let currentApp = app;

// app.disable('etag');

server.listen(process.env.PORT || 3000, () => {
    console.log('🚀  started');
}).on('error', error => {
    console.log(error);
});

// In development mode, enable hot module reloading (HMR)
if (module.hot) {
    console.log('✅  Server-side HMR Enabled!');

    module.hot.accept('./server', () => {
        console.log('🔁  HMR Reloading x`./server`...');
        server.removeListener('request', currentApp);
        const newApp = require('./server').default;
        server.on('request', newApp);
        currentApp = newApp;
    });
}
