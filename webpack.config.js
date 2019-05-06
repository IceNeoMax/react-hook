const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/'),
      api: path.resolve(__dirname, 'src/api'),
      action: path.resolve(__dirname, 'src/action/'),
      reducer: path.resolve(__dirname, 'src/reducer/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
};

module.exports = config;
