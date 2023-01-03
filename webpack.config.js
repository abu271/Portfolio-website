/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, 
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@emotion']
          }
        }
      },
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader' ]},
      { 
        test: /\.(png|svg|jpg|gif)$/, 
        use:
         [
           {
             loader: 'url-loader',
           },
           {
             loader: 'image-webpack-loader',
             options: {
               mozjpeg: {
                 progressive: true,
                 quality: 65
               },
               // optipng.enabled: false will disable optipng
               optipng: {
                 enabled: false,
               },
               pngquant: {
                 quality: [0.65, 0.90],
                 speed: 4
               },
               gifsicle: {
                 interlaced: false,
               },
               // the webp option will enable WEBP
               webp: {
                 quality: 65,
                 size:1000
               }
             }
           }
         ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'index',
          chunks: 'all'
        }
      },
    }
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico'
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    })
  ]
};