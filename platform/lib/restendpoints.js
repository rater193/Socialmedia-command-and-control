const YouTubePlatform = require('./platformapi/platform_youtube');
const TwitterXPlatform = require('./platformapi/platform_twitterx');
const youtubeConfig = require('../platforms/youtube.json');
const twitterXConfig = require('../platforms/twitterx.json');

function createPlatformRegistry() {
  const platforms = [
    new YouTubePlatform(youtubeConfig),
    new TwitterXPlatform(twitterXConfig)
  ];

  return platforms.reduce((registry, platform) => {
    registry[platform.id] = platform;
    return registry;
  }, {});
}

function registerRestEndpoints(app, config) {
  const platformRegistry = createPlatformRegistry();

  app.get('/api/status', (request, response) => {
    response.json({
      ok: true,
      service: config.appName,
      version: config.appVersion
    });
  });

  app.get('/api/platforms', (request, response) => {
    response.json({
      ok: true,
      platforms: Object.values(platformRegistry).map((platform) => platform.toPublicJson())
    });
  });

  app.get('/api/platforms/:platformId', (request, response) => {
    const platform = platformRegistry[request.params.platformId];

    if (!platform) {
      response.status(404).json({
        ok: false,
        error: 'Platform not found'
      });
      return;
    }

    response.json({
      ok: true,
      platform: platform.toPublicJson()
    });
  });
}

module.exports = {
  registerRestEndpoints
};
