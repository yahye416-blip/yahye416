function getWorkoutPlan(week, baseWeight = 15) {
  let reps, load;

  if (week >= 16) [reps, load] = [week - 10, baseWeight + 12.5];
  else if (week >= 13) [reps, load] = [week - 7, baseWeight + 10];
  else if (week >= 10) [reps, load] = [week - 4, baseWeight + 7.5];
  else if (week >= 7) [reps, load] = [week - 1, baseWeight + 5];
  else if (week >= 4) [reps, load] = [week + 2, baseWeight + 2.5];
  else [reps, load] = [week + 5, baseWeight];

  return { reps, load };
}

function printWorkout(exercise, { reps, load }) {
  console.log(exercise);
  for (let i = 1; i <= 3; i++) {
    console.log(`${i}. ${exercise} ${reps} r ${load} kg`);
  }
}

function runWorkout(week) {
  // Define all exercises and their base weights
  const exercises = [
    { name: "ez bar", base: 15 },
    { name: "shrugs", base: 50 },
    { name: "seated rows", base: 36 },
    { name: "rope hammer curl", base: 17 },
    { name: "wire sidelats", base: 3.4 },
  ];

  exercises.forEach(({ name, base }) => {
    const plan = getWorkoutPlan(week, base);
    printWorkout(name, plan);
    console.log(""); // blank line between exercises
  });
}

// ✅ Just change this number each week:
runWorkout(3);
