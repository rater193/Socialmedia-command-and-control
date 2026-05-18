const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(process.cwd(), '.env') });

function readNumber(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function loadConfig() {
  return {
    port: readNumber(process.env.PORT, 3000),
    nodeEnv: process.env.NODE_ENV || 'development',
    appName: process.env.APP_NAME || 'SocialMedia C3 Control Panel',
    appVersion: process.env.APP_VERSION || '0.1.0'
  };
}

module.exports = {
  loadConfig
};
