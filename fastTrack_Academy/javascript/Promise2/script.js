// Create a Promise
const momPromise = new Promise((resolve, reject) => {
  const behavesByWednesday = true; // Change to false to test rejection

  if (behavesByWednesday) {
    resolve("You behaved! Mom buys you an iPhone 📱");
  } else {
    reject("You didn't behave… No iPhone 😢");
  }
});

// Use the Promise
momPromise
  .then((message) => {
    console.log(message);  // Runs if resolved
  })
  .catch((error) => {
    console.log(error);    // Runs if rejected
  });
