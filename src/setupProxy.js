const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://app.qudini.com",
            // uncomment if you want to use stub
            // target: "http://localhost:8082",
            changeOrigin: true,
        })
    );
};