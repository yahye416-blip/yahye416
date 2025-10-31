// var isFriendComing = false;

// // Promise
// let goingOutPromise = new Promise(function (resolve, reject) {
//     // simulate a long-running task
//     if (isFriendComing) {
//         let plan = {
//             place: 'Cinema',
//             time: '7 PM'
//         };
//         resolve(plan); // fulfilled
//     } else {
//         let reason = new Error('Friend canceled the plan');   // output if false = 'Friend canceled the plan'
//         reject(reason); // rejected
//     }
// });

// // Consuming the promise
// goingOutPromise
//     .then(function (plan) {
//         console.log('We are going to the', plan.place, 'at', plan.time); 
//     })
//     .catch(function (error) {
//         console.log(error.message);
//     });
// //output if true = We are going to the Cinema at 7 PM
    
// //.then() handles the resolved state, while .catch() handles rejection.




var isInternetConnected = false;

// Promise
let downloadFilePromise = new Promise(function (resolve, reject) {
    console.log("Starting file download...");  //this message shows if true or false

    setTimeout(function () { // simulate network delay
        if (isInternetConnected) {
            let file = {
                name: 'report.pdf',
                size: '2MB'
            };
            resolve(file); // fulfilled
        } else {
            let error = new Error('No internet connection');
            reject(error); // rejected
        }
    }, 5000);  // 5sec delay
});

// Using the promise
downloadFilePromise
    .then(function (file) {
        console.log('Download completed:', file.name, '-', file.size);
    })
    .catch(function (error) {
        console.log('Download failed:', error.message);
    })
    .finally(function () {
        console.log('Download attempt finished.');  //this message shows if true or false
    });
