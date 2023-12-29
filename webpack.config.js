const path = require('path');
const nodeExternals = require('webpack-node-externals');
const copyPlugin = require('copy-webpack-plugin');
const { BannerPlugin } = require('webpack');
const banner = require('./src/license');

module.exports = [{
    name: "fort-swagger",
    target: "node",
    entry: "./src/index.ts",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "fortjs-swagger.js",
        library: 'fortjs-swagger',
        libraryTarget: "commonjs2"
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts'] // '' is needed to find modules like "jquery"
    },
    plugins: [
        new copyPlugin([{
            from: 'src/swagger_ui',
            to: 'swagger_ui'
        }]),
        new BannerPlugin(banner)
    ],
    externals: [nodeExternals()]
}];