/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let i = 0;
      while (i <= milliseconds) {
        i++;
      }
      resolve();
    }, milliseconds);
  });
  return pr;
}

module.exports = sleep;
