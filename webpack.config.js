const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const outputDirectory = '/build';
const apiUrl = 'http://localhost:8081';

const apiHost = '"images"';

module.exports = {
  entry: './view/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: './bundle.js'
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  // devtool: 'cheap-module-source-map',
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|gif)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  node: {
    __dirname: false,
    fs: 'empty'
  },
  externals: [
    { './cptable': 'var cptable' },
    { './jszip': 'jszip' }
  ],
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
    // inline:false,
    // liveReload: true,
    port: 5000,
    // open: true,
    proxy: {
      '/api': apiUrl // url serveur final deployé
    },
    noInfo: true, // only errors & warns on hot reload
    disableHostCheck: false,
    historyApiFallback: true,
    contentBase: './',
    compress: true,
    hot: true,
    open: false,
  },
  stats: 'none',
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
      __API__: apiHost
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, outputDirectory), '!images*'],
      dangerouslyAllowCleanPatternsOutsideProject: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'h-App',
      inject: 'body',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es/),
    new LodashModuleReplacementPlugin()
  ]
};
