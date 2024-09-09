import cors from 'cors';
import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';

const app = express();
const port = 3500;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/', (req, res) => {
  res.send('Welcome to my Gym App');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});