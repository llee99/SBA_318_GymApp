let workouts = [
    {
      id: 1,
      title: 'Dead Lift',
      category: 'Power Lifting',
      description: 'Compound full body pull',
      equipment: ['Straight Bar', 'Platform', 'Weights', 'Lifting Belt', 'Straps', 'Chalk'],
      instructions: 'Postion feet slightly narrower than shoulder width, grip bars with either hook grip, sumo, or alternating grip, brace abs while keeping back straight, then pull upward pushing through the middle of the feet.'
    },
    {
      id: 2,
      title: 'Bench Press',
      category: 'Power Lifting',
      description: 'Compound chest press',
      equipment: ['Straight Bar', 'Bench Rack', 'Weights', 'Wrist Wraps', 'Chalk'],
      instructions: 'Postion body on the bench with slight arc in the lower back, hands slightly father than shoulder width, bar should be slightly above resting line of vision, brace lats and unrack, control the weight on descent until bar reaches chest then press.'
    },
    {
      id: 3,
      title: 'Squat',
      category: 'Power Lifting',
      description: 'Compound lower back and leg press',
      equipment: ['Straight Bar', 'Squat Rack', 'Weights', 'Lifting Belt', 'Chalk'],
      instructions: 'Position body so bar rests on traps, feet shoulder width apart, brace abs while keeping lower back straight, unrack weight.'
    },
    {
      id: 4,
      title: 'Cable Flys',
      category: 'Body Building',
      description: 'Cable machine based, chest hypertrophy pull',
      equipment: ['Cable Machine', 'Handle Grips'],
      instructions: 'Set equivalent weight on each side, pull inwards while focusing on chest fibers, keep on leg forward and bent with a forward leaning posture.'
    }
  ];
  
  // GET all workouts
  const getAllWorkouts = (req, res) => {
    res.json(workouts);
  };
  
  // GET single workout by ID
  const getWorkoutById = (req, res) => {
    const workoutId = parseInt(req.params.workoutId);
    const workout = workouts.find(workout => workout.id === workoutId);
    if (workout) {
      res.json(workout);
    } else {
      res.status(404).json({ message: 'Workout not found' });
    }
  };
  
  // CREATE a new workout
  const createWorkout = (req, res) => {
    const { title, description } = req.body;
    const newworkout = { id: workouts.length + 1, title, description };
    workouts.push(newworkout);
    res.status(201).json(newworkout);
  };
  
  // UPDATE workout by ID
  const updateWorkout = (req, res) => {
    const workoutId = parseInt(req.params.workoutId);
    const { title, description } = req.body;
    const workoutIndex = workouts.findIndex(workout => workout.id === workoutId);
    if (workoutIndex !== -1) {
      workouts[workoutIndex] = { ...workouts[workoutIndex], title, description };
      res.json(workouts[workoutIndex]);
    } else {
      res.status(404).json({ message: 'Workout not found' });
    }
  };
  
  // DELETE workout by ID
  const deleteWorkout = (req, res) => {
    const workoutId = parseInt(req.params.workoutId);
    const workoutIndex = workouts.findIndex(workout => workout.id === workoutId);
    if (workoutIndex !== -1) {
      workouts.splice(workoutIndex, 1);
      res.json({ message: 'Workout deleted successfully' });
    } else {
      res.status(404).json({ message: 'Workout not found' });
    }
  };
  

  export default {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
  };
