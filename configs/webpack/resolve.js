const path = require("path");

const resolve = {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.svg', '.sass', '.scss'],
    alias: {
        'react-dom': '@hot-loader/react-dom'
    }
};

module.exports = resolve;
