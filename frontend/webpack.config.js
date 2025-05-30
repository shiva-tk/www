const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


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
      template: './src/index.html', // Template for the index page
      filename: 'index.html',
      chunks: ['main'], // Only include 'main.js' for the index page
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', // Template for the index page
      filename: 'about.html',
      chunks: []
    }),
    new HtmlWebpackPlugin({
      template: './src/img.html', // Template for the index page
      filename: 'img.html',
      chunks: []
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/styles.css', to: 'styles.css' }, // Copy style.css to dist/styles.css
      ],
    }),
  ],
};
