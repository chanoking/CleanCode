// function add(x, y) {
//   return x + y;
// }

// var thunk = function () {
//   return add(10, 20);
// };

// console.log(thunk());

function addAsync(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  }, 1000);
}

var thunk = makeThunk(addAsync, 10, 15);

thunk(function (sum) {
  sum;
  console.log(sum);
});

function makeThunk(fn) {
  console.log(fn);
  var args = [].slice.call(arguments, 1);
  console.log(arguments);
  console.log(args);
  return function (cb) {
    console.log(cb);
    args.push(cb);
    console.log(args);
    fn.apply(null, args);
    console.log(fn);
  };
}
