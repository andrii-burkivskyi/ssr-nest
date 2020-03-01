const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const optimization = {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 50,
        maxInitialRequests: Infinity,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
            vendors: {
                test: /node_modules/,
                name: 'vendors',
                chunks: 'all',
                priority: -20
            },
            core: {
                test: /client\/core/,
                name: 'core',
                chunks: 'all',
                priority: -20
            },
            // vendor: {
            //     test: /[\\/]node_modules[\\/]/,
            //     name(module) {
            //         // get the name. E.g. node_modules/packageName/not/this/part.js
            //         // or node_modules/packageName
            //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            //         // npm package names are URL-safe, but some servers don't like @ symbols
            //         return `npm.${packageName.replace('@', '')}`;
            //     },
            // },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
};

module.exports = optimization;
