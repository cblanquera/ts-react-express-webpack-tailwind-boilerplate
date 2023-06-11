import path from 'path';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const build = path.resolve(process.cwd(), 'build', 'static');
app.use(express.static(build));

if (process.env.NODE_ENV === 'development') {
  const { dev, hot } = require('./develop');
  app.use(dev).use(hot);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(build, 'index.html'));
});

app.listen(3000, function () {
  console.log('Server started on :3000');
});
