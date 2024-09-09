import cors from 'cors';
import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import workoutRoutes from './route/workoutRoutes.js';

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/home', (req, res) => {
  res.send('Welcome to my Gym App!');
});

app.use('/workouts', workoutRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});