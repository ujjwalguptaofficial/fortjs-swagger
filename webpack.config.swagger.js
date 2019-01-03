const path = require('path');
module.exports = {
    entry: './src/swagger_ui/index.ts',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    output: {
        filename: 'swagger.js',
        path: path.join(__dirname, "./build/swagger_ui/"),
    },
    plugins: [

    ]
};