function getWorkoutPlan(week, baseWeight = 15) {
  let reps, load;

  if (week >= 18) [reps, load] = [week - 12, baseWeight + 12.5];
  else if (week >= 15) [reps, load] = [week - 9, baseWeight + 10];
  else if (week >= 12) [reps, load] = [week - 6, baseWeight + 7.5];
  else if (week >= 9) [reps, load] = [week - 3, baseWeight + 5];
  else if (week >= 6) [reps, load] = [week + 0, baseWeight + 2.5];
  else [reps, load] = [week + 3, baseWeight];

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
    { name: "fore arm ez bar", base: 15 },
    { name: "preacher curl", base: 27 },
    { name:" upperbackrow ", base: 41},
    { name:" onehanded pulldown", base: 45},
    { name:" dumbell sidelateralraises ", base: 10},
    { name:"  ropecore pull  ", base: 32},
    { name:"  tricep overhead  ", base: 21},
    { name:"  tri rope pull  ", base: 10},
    { name:"  dips ", base: 14},
    { name:"  dips machine ", base: 50},
    { name:"  incline CH press ", base: 20},
     { name:"bench SH press ", base: 14},
    { name:"  incline machine ", base: 50},
     { name:" shoulder press ", base: 36},
  ];

  exercises.forEach(({ name, base }) => {
    const plan = getWorkoutPlan(week, base);
    printWorkout(name, plan);
    console.log(""); // blank line between exercises
  });
}

// ✅ Just change this number each week:
runWorkout(3);