/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return pr1;
}

function wait2(t) {
  const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return pr2;
}

function wait3(t) {
  const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return pr3;
}

function calculateTime(t1, t2, t3) {
  const start = performance.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    const end = performance.now();
    const timeTaken = end - start;
    return timeTaken;
  });
}

module.exports = calculateTime;
