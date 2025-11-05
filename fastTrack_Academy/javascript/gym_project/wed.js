// 🅰️ FIRST WORKOUT PROGRESSION
function getWorkoutPlanA(week, baseWeight = 15) {
  let reps, load;

  if (week >= 18) [reps, load] = [week - 12, baseWeight + 12.5];
  else if (week >= 15) [reps, load] = [week - 9, baseWeight + 10];
  else if (week >= 12) [reps, load] = [week - 6, baseWeight + 7.5];
  else if (week >= 9) [reps, load] = [week - 3, baseWeight + 5];
  else if (week >= 6) [reps, load] = [week + 0, baseWeight + 2.5];
  else [reps, load] = [week + 3, baseWeight];

  return { reps, load };
}

// 🅱️ SECOND WORKOUT PROGRESSION
function getWorkoutPlanB(week, baseWeight = 15) {
  let reps, load;

  if (week >= 17) [reps, load] = [week - 11, baseWeight + 12.5];
  else if (week >= 14) [reps, load] = [week - 8, baseWeight + 10];
  else if (week >= 11) [reps, load] = [week - 5, baseWeight + 7.5];
  else if (week >= 8) [reps, load] = [week - 2, baseWeight + 5];
  else if (week >= 5) [reps, load] = [week + 1, baseWeight + 2.5];
  else [reps, load] = [week + 4, baseWeight];

  return { reps, load };
}

// 🅲 THIRD WORKOUT PROGRESSION
function getWorkoutPlanC(week, baseWeight = 15) {
  let reps, load;

  if (week >= 16) [reps, load] = [week - 10, baseWeight + 12.5];
  else if (week >= 13) [reps, load] = [week - 7, baseWeight + 10];
  else if (week >= 10) [reps, load] = [week - 4, baseWeight + 7.5];
  else if (week >= 7) [reps, load] = [week - 1, baseWeight + 5];
  else if (week >= 4) [reps, load] = [week + 2, baseWeight + 2.5];
  else [reps, load] = [week + 5, baseWeight];

  return { reps, load };
}

// 🔹 COMMON PRINT FUNCTION
function printWorkout(exercise, { reps, load }) {
  console.log(exercise);
  for (let i = 1; i <= 3; i++) {
    console.log(`${exercise} ${reps} r ${load} kg`);
  }
}

// 🏋️ MASTER WORKOUT RUNNER
function runWorkout(week) {
console.log("");
console.log(` Wed (Week ${week}) `);
console.log("");

  // --- PLAN A: Upper Body ---
  console.log("");
  const exercisesA = [
    { name: "dumbell sidelateralraises", base: 10 },
  ];

  exercisesA.forEach(({ name, base }) => {
    const plan = getWorkoutPlanA(week, base);
    printWorkout(name, plan);
    console.log("");
  });

  // --- PLAN B: Core + Chest ---
  console.log("");
  const exercisesB = [
    { name: "lat pulldown", base: 52 },
  ];

  exercisesB.forEach(({ name, base }) => {
    const plan = getWorkoutPlanB(week, base);
    printWorkout(name, plan);
    console.log("");
  });

  // --- PLAN C: Pull + Isolation ---
  console.log("");
  const exercisesC = [
    { name: "wire sidelats", base: 3.4 },
  ];

  exercisesC.forEach(({ name, base }) => {
    const plan = getWorkoutPlanC(week, base);
    printWorkout(name, plan);
    console.log("");
  });
    console.log(`1 min high intensity sp 11 after every 4 min ${(week * 2)} times\n`);
}

// ✅ Just change this number each week:
runWorkout(4);