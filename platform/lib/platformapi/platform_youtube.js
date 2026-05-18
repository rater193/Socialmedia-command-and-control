const Platform = require('./platform');

class YouTubePlatform extends Platform {
  constructor(config) {
    super(config);
  }

  async uploadVideo() {
    throw new Error('YouTube video upload is not implemented yet.');
  }

  async readComments() {
    throw new Error('YouTube comment reading is not implemented yet.');
  }

  async readAnalytics() {
    throw new Error('YouTube analytics reading is not implemented yet.');
  }
}

module.exports = YouTubePlatform;
