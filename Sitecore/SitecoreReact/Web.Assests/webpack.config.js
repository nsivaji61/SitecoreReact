
const path = require('path');
const webpack = require('webpack');
// Constant with our paths
const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'src/dist')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  devServer: {
    contentBase: paths.SRC
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};