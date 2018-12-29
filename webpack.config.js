const path = require('path');
const nodeExternals = require('webpack-node-externals');
const nodemonPlugin = require('nodemon-webpack-plugin')
module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.ts')
    ],
    devtool: 'source-map',
    target: "node",
    mode: 'development',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
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
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build/'),
        library: '@fortjs/swagger',
    },
    plugins: [new nodemonPlugin()],
    externals: [nodeExternals()]
};