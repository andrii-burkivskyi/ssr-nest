const path = require('path');
const nameOf = require('ts-nameof');

const ts_loader = {
    test: /\.tsx?$/,
    use: [
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                configFile: path.resolve(__dirname, "../tsconfig.json"),
                getCustomTransformers: () => ({ before: [nameOf] }),
            }
        }
    ]
};

module.exports = ts_loader;