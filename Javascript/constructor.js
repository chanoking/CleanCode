const o1 = {};
console.log(o1.constructor === Object);

const o2 = new Object();
console.log(o2.constructor === Object);

const a1 = [];
console.log(a1.constructor === Array);

const a2 = new Array();
console.log(a2.constructor === Array);

const n1 = 3;
console.log(n1.constructor === Number);
