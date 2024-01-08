// const foo = function* () {
//   yield "a";
//   yield "b";
//   yield "c";
// };

// let str = "";
// for (const val of foo()) {
//   str = str + val;
// }

// console.log(str);

// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generator();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite();
console.log(generator);

console.log(generator.next().value);
console.log(generator.next().value);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
