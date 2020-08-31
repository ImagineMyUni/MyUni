const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/api', {
            // target: 'http://ec2-13-125-49-67.ap-northeast-2.compute.amazonaws.com:4000/',
            target:'http://localhost:4000/',
            changeOrigin: true
        })
    );
};