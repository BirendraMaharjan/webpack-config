const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPluing = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        exclude: /node_moudules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPluing()],
  devtool: 'inline-source-map', //'eval', false, 'source-map', inline-source-map //https://webpack.js.org/configuration/devtool/
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true
  }
};
