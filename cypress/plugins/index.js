module.exports = (on, config) => {
    require('@cypress/webpack-dev-server').addDevServerPlugin(on, config);
    return config;
  };
  