/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: '.src/template.html',
  })],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },
};
