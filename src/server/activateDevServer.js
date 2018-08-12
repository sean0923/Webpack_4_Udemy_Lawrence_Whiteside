export default (server) => {
  const webpack = require('webpack');
  const config = require('../../config/webpack.dev.js');
  const compiler = webpack(config);

  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

  const webpackHotMiddlware = require('webpack-hot-middleware')(compiler, config.devServer);

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  console.log('Middleware enabled');
  console.log('Custom Dev Server');
};
