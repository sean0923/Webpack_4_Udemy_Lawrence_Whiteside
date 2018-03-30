import express from 'express';
import path from 'path';

const app = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

// Define Middlewares -------------------------------------------------------------
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

const staticMiddleware = express.static('dist'); // or __dirname + '../../../dist'
// --------------------------------------------------------------------------------

// Use Middlewares ------------------
app.use(webpackDevMiddleware); // 1
app.use(webpackHotMiddleware); // 2
app.use(staticMiddleware);     // 3
// Order is important
// ----------------------------------

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});
