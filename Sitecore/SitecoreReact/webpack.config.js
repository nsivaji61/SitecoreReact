const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    server: './Content/server',
    client: './Content/client'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }],
            'react',
            'stage-2'
          ]
        }
      }],

      exclude: /node_modules/,
    }, ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      ReactDOMServer: 'react-dom/server'
    })
  ]
};

module.exports = config;