import express from 'express';
import WorkoutController from '../controller/workoutController.js';

const router = express.Router();

// GET all workouts
router.get('/', WorkoutController.getAllWorkouts);

// GET single workout by ID
router.get('/:workoutId', WorkoutController.getWorkoutById);

// CREATE a new workout
router.post('/', WorkoutController.createWorkout);

// UPDATE workout by ID
router.put('/:workoutId', WorkoutController.updateWorkout);

// DELETE workout by ID
router.delete('/:workoutId', WorkoutController.deleteWorkout);

export default router;
