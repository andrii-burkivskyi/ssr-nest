const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const plugins = [
    // new BundleAnalyzerPlugin(),
    // new WebpackNotifierPlugin({ title: 'Webpack' }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve(__dirname, '../tsconfig.json')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new ErrorOverlayPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en\-gb/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        debug: true
    }),
];

module.exports = plugins;