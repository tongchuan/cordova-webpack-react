const koa = require('koa');
let path = require('path')
let webpack = require('webpack')
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

const app = new koa();
app.use(devMiddleware(compiler,{
  publicPath: path.resolve(__dirname, 'src'),
  stats: {
    colors: true,
    children: true,
    modules: false,
    chunks: false,
    chunkModules: false,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
}));
app.use(hotMiddleware(compiler,{
  log: false,
  reload: true,
}));
app.listen(8888, () =>{
  console.log('The server is running on port: 9999');
});