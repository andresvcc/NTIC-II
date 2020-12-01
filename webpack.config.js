const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const apiUrl = '"http://localhost:3000/images"';

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  node: {
    __dirname: false,
    fs: 'empty'
  },
  externals: [
    { './cptable': 'var cptable' },
    { './jszip': 'jszip' }
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        loader: 'eslint-loader',
        options: {
          // default value
          formatter: 'stylish',
          fix: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.js', '.jsx', '.css'],
    alias: {
      '@material-ui/core': '@material-ui/core/esm',
      '@material-ui/icons': '@material-ui/icons/esm',
      'react-dom': '@hot-loader/react-dom',
      moment$: path.resolve(__dirname, 'node_modules/moment/moment.js')
    }
  },
  devServer: {
    noInfo: true, // only errors & warns on hot reload
    proxy: {
      '/api': apiUrl // url serveur final deployé
    },
    disableHostCheck: false,
    historyApiFallback: true,
    contentBase: './',
    compress: true,
    hot: true,
    port: 3500,
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      __API__: apiUrl
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, path.resolve(__dirname, 'public'))],
      dangerouslyAllowCleanPatternsOutsideProject: true,
      dry: false
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Ntic',
      inject: 'body',
      template: path.join(__dirname, '/dist/index.html'),
      favicon: path.join(__dirname, '/dist/favicon.ico'),
    }),
  ]
};

module.exports = config;
