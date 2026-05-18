const path = require('path');
const express = require('express');

const { loadConfig } = require('./platform/lib/config');
const { registerRestEndpoints } = require('./platform/lib/restendpoints');

const config = loadConfig();
const app = express();
const htmlPath = path.join(__dirname, 'html');

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(htmlPath));

registerRestEndpoints(app, config);

app.get('/', (request, response) => {
  response.sendFile(path.join(htmlPath, 'index.html'));
});

app.use((request, response) => {
  response.status(404).json({
    ok: false,
    error: 'Not Found',
    path: request.path
  });
});

app.use((error, request, response, next) => {
  console.error('[server-error]', error);
  response.status(500).json({
    ok: false,
    error: 'Internal Server Error'
  });
});

app.listen(config.port, () => {
  console.log(`${config.appName} v${config.appVersion}`);
  console.log(`Server running at http://localhost:${config.port}`);
});
