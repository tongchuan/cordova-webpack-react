
let webpack = require('webpack')
let htmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin') ;
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path')
let isProd = process.argv[3] === 'production';
let entry = ['./src/main.js']
if(!isProd){
  entry.push("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000")
  // entry.push('webpack-hot-middleware/client?reload=true','webpack/hot/only-dev-server')
}
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry,
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'js/index.js',
    publicPath: './'
  },
  module:{
    rules: [
      { 
        test: /\.(jsx|js)$/i,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env","react"]
        }
      },
      {
        test: /\.(css|less)$/i,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: "css-loader"},
          {loader: "less-loader"}
        ]
      },
      {
        test: /.(png|jpg|jpeg|svg)$/i,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit:8192,
              name:'[name]-[hash].[ext]',
              publicPath:'',
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name:'[name]-[hash].[ext]',
              publicPath:'',
              outputPath: "font"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, "www")],{
      root: path.resolve(__dirname, "/"),
      // verbose: true,
      verbose: false,
      dry: false
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': isProd ? '"production"' : '"development"'}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name].[id].[chunkhash:8].css'
    }),
    new htmlWebpackPlugin({
      filename: "index.html", //'index.html',
      template: './src/index.html', //'src/index.html',
      inject: 'html',
      title: "教宝宝",
      // favicon: 'favicon.ico'
    }),
    new CopyWebpackPlugin([{
      from: "./src/images/favicon.ico",
      to: "favicon.ico"}]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  resolve:{
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".less", ".css"],
    alias: {
    }
  }
};