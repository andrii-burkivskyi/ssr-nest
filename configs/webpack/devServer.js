const path = require('path');

const devServer = {
    host: '0.0.0.0',
    port: 3333,
    contentBase: path.resolve(__dirname, '../../public'),
    historyApiFallback: true,
    proxy: [
        {
            context: ["**", "!/client/**"],
            target: "http://localhost:3000",
            changeOrigin: true,
        }
    ]
};

module.exports = devServer;
