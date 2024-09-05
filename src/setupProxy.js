const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy for the first API
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.mplusparking.com',

      changeOrigin: true,
      pathRewrite: {
        '^/api': '',  
      },
      secure: false,
    })
  );

  // Proxy for the second API
  app.use(
    '/newapi',
    createProxyMiddleware({
      target: 'https://testingNewAPI.mplusparking.com',
      changeOrigin: true,
      pathRewrite: {
        '^/newapi': '',  
      },
      secure: false,
    })
  );
};
