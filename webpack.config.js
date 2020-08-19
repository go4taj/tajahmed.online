const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(path.resolve(__dirname,'src','js','components'));
module.exports = env=>{
  return {
    mode: 'development',
    entry: ['react-hot-loader/patch',path.join(__dirname, 'src/index.js')],
    output: {
      filename: 'build.js',
      chunkFilename: '[name].[hash].chunk.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader","eslint-loader"]
        },
        {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }
      ]
    },
    optimization: {
      moduleIds: 'hashed',
      splitChunks: {
        chunks: 'single',
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@components': path.resolve(__dirname,'src','js','components'),
        '@images': path.resolve(__dirname,'src','images'),
        '@carbon-components$': path.resolve(__dirname,'node_modules','carbon-components','css','carbon-components.css'),
      },
    },
    devtool: 'inline-source-map',
    devServer: {contentBase: './dist'},
    plugins:[
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
          cleanStaleWebpackAssets: false,
          React: 'react'
      }),
      new HtmlWebpackPlugin({inject: true,template: './src/index.html'}),
    ]
  }
};
