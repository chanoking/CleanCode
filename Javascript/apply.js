const numbers = [5, 6, 2, 3, 7, 9];

// const max = Math.max.apply(null, numbers);

// console.log(max);

// const min = Math.min.apply(null, numbers);

// console.log(min);

// // console.log(func.apply(this, ["apple", "banana"]));

// const array = ["a", "b"];

// const elements = [0, 1, 2];

// // array.push.apply(array, elements);
// // console.log(array);

// array.push(...elements);
// console.log(array);

// let max = Math.max.apply(null, numbers);
// let min = Math.min.apply(null, numbers);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length))
    );
    min = Math.min(submin, min);
  }
  return min;
}

const min = minOfArray([5, 6, 2, 3, 7]);
console.log(min);
