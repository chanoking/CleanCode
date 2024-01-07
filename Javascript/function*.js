function* generator(i, e) {
  yield i;
  yield e + 10;
  yield i + 20;
  yield e + 100;
}

const gen = generator(10, 20);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 30
console.log(gen.next().value); // 30
console.log(gen.next().value); // 120

const GeneratorFunction = function* () {}.constructor;
console.log(GeneratorFunction);

const foo = new GeneratorFunction(`
yield 'a';
yield 'b'
yield 'c'
`);

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
