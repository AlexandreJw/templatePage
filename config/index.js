module.exports = {
    dev: {
        assetsSubDirectory: '',
        proxyTable: {
            '/template': {
                target: 'https://f2e.su.dasouche.net/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/template': ''
                }
            }
        },
        host: '127.0.0.1', // can be overwritten by process.env.HOST
        port: 8080 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    },
};
