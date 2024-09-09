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
      title: 'Callaloo',
      category: 'Side Dish',
      description: 'A traditional Caribbean dish made with leafy greens, often served as a side.',
      equipment: ['Callaloo leaves', 'Coconut milk', 'Onion', 'Tomato', 'Scotch bonnet pepper', 'Garlic', 'Thyme'],
      instructions: 'Sauté onion, tomato, scotch bonnet pepper, garlic, and thyme. Add callaloo leaves and coconut milk. Simmer until the leaves are tender. Serve as a side dish.'
    },
    {
      id: 5,
      title: 'Coconut Rice and Peas',
      category: 'Side Dish',
      description: 'A classic Caribbean side dish made with rice, coconut milk, and kidney beans.',
      equipment: ['Rice', 'Coconut milk', 'Kidney beans', 'Coconut oil', 'Onion', 'Garlic', 'Thyme', 'Scotch bonnet pepper'],
      instructions: 'Sauté onion, garlic, and thyme in coconut oil. Add rice, coconut milk, kidney beans, and scotch bonnet pepper. Cook until rice is tender. Serve hot.'
    },
    {
      id: 6,
      title: 'Plantain Chips',
      category: 'Appetizer',
      description: 'Crispy fried plantain slices, perfect as a snack or appetizer.',
      equipment: ['Green plantains', 'Oil', 'Salt'],
      instructions: 'Peel and slice green plantains thinly. Fry in hot oil until golden brown and crispy. Drain on paper towels and sprinkle with salt. Serve as a snack or appetizer.'
    },
    {
      id: 7,
      title: 'Rum Punch',
      category: 'Beverage',
      description: 'A tropical cocktail made with rum, fruit juices, and grenadine.',
      equipment: ['Dark rum', 'Pineapple juice', 'Orange juice', 'Lime juice', 'Grenadine', 'Simple syrup', 'Angostura bitters'],
      instructions: 'Mix dark rum, pineapple juice, orange juice, lime juice, grenadine, simple syrup, and a dash of angostura bitters. Serve over ice and garnish with a slice of lime or pineapple.'
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
  