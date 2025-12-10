// This async function creates a Promise automatically
async function momPromise() {
  const behavesByWednesday = true; // change to false to test

  if (behavesByWednesday) {
    return "You behaved! Mom buys you an iPhone 📱";
  } else {
    throw "You didn't behave… No iPhone 😢";
  }
}

// Using the async function (it returns a Promise)
// momPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function askMom() {
  try {
    const message = await momPromise();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

askMom();
