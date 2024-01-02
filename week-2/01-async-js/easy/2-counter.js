let counterVar = 0;

function counter(callback) {
  setTimeout(function () {
    counterVar += 1;
    callback();
    counter(callback);
  }, 1000);
}

counter(function () {
  console.log(counterVar);
});
