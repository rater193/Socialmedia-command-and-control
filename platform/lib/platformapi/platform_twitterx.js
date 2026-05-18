const Platform = require('./platform');

class TwitterXPlatform extends Platform {
  constructor(config) {
    super(config);
  }

  async publishPost() {
    throw new Error('Twitter / X publishing is not implemented yet.');
  }

  async readComments() {
    throw new Error('Twitter / X comment reading is not implemented yet.');
  }

  async readAnalytics() {
    throw new Error('Twitter / X analytics reading is not implemented yet.');
  }
}

module.exports = TwitterXPlatform;
