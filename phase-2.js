// 1. you must stretch for 1 second
// 2. you must run on treadmill for 0.5 seconds
// 3. you must lift weights for 2 seconds

function stretch(timeLeft) {
  //subtract 1000mils
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft >= 1000) {
      setTimeout(() => {
        console.log("done stretching");
        resolve(timeLeft - 1000);
      }, 1000);
    } else {
      reject(new Error("you dont have enough time to stretch"));
    }
  });
}

function runOnTreadmill(timeLeft) {
  // this takes 500mils
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft >= 500) {
      setTimeout(() => {
        console.log("done running on treadmill");
        resolve(timeLeft - 500);
      }, 500);
    } else {
      reject(new Error("you dont have enough time to stretch"));
    }
  });
}

function liftWeights(timeLeft) {
  //subtract 2000 mils
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft >= 2000) {
      setTimeout(() => {
        console.log("done lifting weights");
        resolve(timeLeft - 2000);
      }, 500);
    } else {
      reject(new Error("you dont have enough time to lift weights"));
    }
  });
}

function workout(totalTime) {
  // return a error if the totalTime is too small and which function failed
  // return left over seconds
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then((timeLeft) => runOnTreadmill(timeLeft))
    .then((timeLeft) => liftWeights(timeLeft))
    .then((timeLeft) =>
      console.log(`done working out with ${timeLeft / 1000} seconds`)
    )
    .catch((error) => console.error(error.message));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
