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

function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}

const appleStore = countAppleSales();
console.log(appleStore);

console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());
console.log(appleStore.next());

function* counter(value) {
  while (true) {
    const step = yield value++;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);

console.log(generatorFunc.next().value);
console.log(generatorFunc.next().value);
console.log(generatorFunc.next().value);
console.log(generatorFunc.next(10).value);
console.log(generatorFunc.next().value);
console.log(generatorFunc.next().value);
console.log(generatorFunc.next(20).value);
