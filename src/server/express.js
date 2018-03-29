import express from 'express';
import path from 'path';

const app = express();

const staticMiddleware = express.static('dist'); // or __dirname + '../../../dist'

app.use(staticMiddleware);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});
