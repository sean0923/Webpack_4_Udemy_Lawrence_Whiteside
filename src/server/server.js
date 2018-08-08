import express from 'express';
import path from 'path';

const app = express();

const staticMiddleware = express.static('dist');

app.use(staticMiddleware);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
