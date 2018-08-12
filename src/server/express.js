import express from 'express';
const server = express();
import path from 'path';
import activateDevServer from './activateDevServer';

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) activateDevServer(server);

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
