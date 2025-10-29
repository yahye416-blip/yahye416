function getWorkoutPlan(week, baseWeight = 15) {
  let reps, load;

  if (week >= 17) [reps, load] = [week - 11, baseWeight + 12.5];
  else if (week >= 14) [reps, load] = [week - 8, baseWeight + 10];
  else if (week >= 11) [reps, load] = [week - 5, baseWeight + 7.5];
  else if (week >= 8) [reps, load] = [week - 2, baseWeight + 5];
  else if (week >= 5) [reps, load] = [week + 1, baseWeight + 2.5];
  else [reps, load] = [week + 4, baseWeight];

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
    { name: "weighted kneeraises", base: 6 },
    { name: "lat pulldow", base: 52 },
    { name: "chest press", base: 45 },
    { name: "chest fly", base: 59 },
  ];

  exercises.forEach(({ name, base }) => {
    const plan = getWorkoutPlan(week, base);
    printWorkout(name, plan);
    console.log(""); // blank line between exercises
  });
  console.log(
    "1 min high intensity sp 11 after every 4 min " +(week*2) +" times"
);
}

// ✅ Just change this number each week:
runWorkout(3);

