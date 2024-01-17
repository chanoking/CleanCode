// const foo = { name: "foo", one: 1, two: 2 };

// const bar = { two: "two", three: 3 };

// Object.setPrototypeOf(bar, foo);

// console.log(bar);

// console.log(bar.one);
// console.log(bar.two);
// console.log(bar.name);

const foo = { one: 1, two: 2 };

const bar = Object.create(foo);

bar.three = 3;

console.log(bar.three);
console.log(bar.two);
