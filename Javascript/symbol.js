// const sym1 = Symbol();
// console.log(sym1);
// const sym2 = Symbol("hello");
// console.log(sym2);
// const sym3 = Symbol("hello");
// console.log(sym3);
// console.log(Symbol("foo") === Symbol("foo"));
// const sym = new Symbol();
// console.log(sym);

const sym = Symbol("foo");
console.log(typeof sym);
const symObj = Object(sym);
console.log(typeof symObj);
const hi = new symObj();
console.log(hi);
