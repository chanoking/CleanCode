const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// const iterable = {
//   [Symbol.iterator]() {
//     let i = 1;
//     return {
//       next() {
//         if (i <= 3) {
//           return { value: i++, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// for (const value of iterable) {
//   console.log(value);
// }

// const iterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   },
// };

// for (const value of iterable) {
//   console.log(value);
// }

let i = 1;

// const iterator = {
//   next() {
//     if (i <= 3) {
//       return { value: i++, done: false };
//     }
//     return { value: undefined, done: true };
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// };

// for (const value of iterator) {
//   console.log(value);
// }

// function* source() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = source();

// for (const value of generator) {
//   console.log(value);
// }

const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("This string will not be logged");
}

for (const value of iterator) {
  console.log(value);
}

for (const value of iterator) {
  console.log(value);
}
