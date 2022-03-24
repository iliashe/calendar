const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // The resources files are supposed to be loaded from absolute paths so Electron will not be able to load them
  // This will tell Vue to use a relative path in production and an absolute path in development.
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
});
