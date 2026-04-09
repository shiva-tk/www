const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageThumbsPlugin = require("./build/ImageThumbsPlugin");


module.exports = {
    entry: {
        main: "./src/pages/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../docs/"),
        filename: "[name].js",
    },
    mode: "development",
    experiments: {
        asyncWebAssembly: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/photos/photos.html',
            filename: 'photos/index.html',
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/photos/summer-2025.html',
            filename: 'photos/summer-2025.html',
            chunks: [],
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/static', to: '' },
            ],
        }),
        new ImageThumbsPlugin({
            inputDir: "src/static/images",
            outputDir: "images/thumbs",
            maxWidth: 680
        })
    ],
};
