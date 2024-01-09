// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest[1]);

// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y);
// console.log(z);

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a);
// console.log(b);

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;

// console.log(a);
// console.log(d);

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj;
// let {
//   b: { c: d },
// } = obj;

// console.log(a);
// console.log(d);

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);

// console.log(numbers);

const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b, ...rest] = obj;
console.log(rest);
