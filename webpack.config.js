const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      //   {
      //     use: ['style-loader', 'css-loader'],
      //     test: /\.css$/,
      //   },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = config;
