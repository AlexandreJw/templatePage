
let config = require('./config/index');
let webpack = require('webpack');

const CONFIG = config.dev
const PROCESSENV = JSON.parse(JSON.stringify(process.env.PROCESSENV))
module.exports = {
    chainWebpack: (Webpackconfig) => {
        Webpackconfig.resolve.symlinks(true);
    },
    configureWebpack: () => {
        const myConfig = {};
        myConfig.plugins = [
            new webpack.DefinePlugin({
                'process.env': PROCESSENV
            })
        ];
        return myConfig;
    },
    devServer: {
        open: true,
        hot: true,
        host: CONFIG.host,
        port: CONFIG.port, // 端口
        proxy: CONFIG.proxyTable // 设置代理
    }
};
