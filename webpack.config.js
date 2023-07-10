
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        components : "./src/components/components.html",
        trial : "./src/components/trials.html"
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'trials.html',
            chunks: ['trials']
        }),
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'components.html',
            chunks: ['components']
        }),
    ],
    stats:{
        children : true,
    },
};