function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value());

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value());

counter.decrement();
console.log(counter.value());
