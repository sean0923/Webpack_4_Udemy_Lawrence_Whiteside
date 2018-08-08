import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../config/webpack.dev';

const complier = webpack(config);

const app = express();

const staticMiddleware = express.static('dist');

app.use(webpackDevMiddleware(complier, config.devServer));
app.use(webpackHotMiddleware(complier));
app.use(staticMiddleware);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
