function* foo(index) {
  while (index < 5) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
