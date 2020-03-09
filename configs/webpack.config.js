const path = require('path');

const plugins = require('./webpack/plugins.js');
const optimization = require('./webpack/optimization.js');
const resolve = require('./webpack/resolve.js');
const devServer = require('./webpack/devServer.js');

const ts_loader = require('./webpack/ts-loader-config.js');

const mode = process.env.NODE_ENV || 'development';

const config =  {
    entry: {
        main: [
            "react-hot-loader/patch",
            './src/client/index.tsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../public/client'),
        publicPath: "/client/",
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve,
    mode,

    watchOptions: { aggregateTimeout: 100 },

    devtool: "cheap-module-source-map",

    module: {
        rules: [
            ts_loader,
        ]
    },
    optimization,

    plugins,

    devServer 
};

module.exports = config;