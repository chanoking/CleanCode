const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());
console.log(obj2.getThis());

const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis());

const obj4 = {
  name: "obj3",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis());

const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject);

function C() {
  this.a = 28;
}

let o = new C();

console.log(o.a);

function C2() {
  this.a = 280;
  return { a: 290 };
}

const o2 = new C2();

console.log(o2.a);
