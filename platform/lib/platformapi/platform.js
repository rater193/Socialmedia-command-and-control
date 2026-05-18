class Platform {
  constructor(config) {
    if (!config || !config.id) {
      throw new Error('Platform config requires an id.');
    }

    this.id = config.id;
    this.displayName = config.displayName || config.id;
    this.enabled = Boolean(config.enabled);
    this.apiVersion = config.apiVersion || 'unknown';
    this.features = config.features || {};
  }

  toPublicJson() {
    return {
      id: this.id,
      displayName: this.displayName,
      enabled: this.enabled,
      apiVersion: this.apiVersion,
      features: this.features
    };
  }

  async getStatus() {
    return {
      id: this.id,
      ok: true,
      enabled: this.enabled,
      message: `${this.displayName} placeholder is available.`
    };
  }
}

module.exports = Platform;
