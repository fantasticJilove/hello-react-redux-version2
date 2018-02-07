const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('/dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015','stage-0']
      }
    },{
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          // options:{
          //   camelCase: true
          // },
          query:{
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }
  ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
};