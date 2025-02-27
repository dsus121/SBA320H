// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://partners.every.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v0.2'
      },
    })
  );
};
