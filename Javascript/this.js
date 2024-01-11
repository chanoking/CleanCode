// "use strict";
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

// function C() {
//   this.a = 28;
// }

// let o = new C();

// console.log(o.a);

// function C2() {
//   this.a = 280;
//   return { a: 290 };
// }

// const o2 = new C2();

// console.log(o2.a);

// class C {
//   instanceField = this;
//   static staticField = this;
// }

// const c = new C();
// console.log(c.instanceField === c);
// console.log(C.staticField === C);

// class C {
//   instanceField = this;
//   static staticField = this;
// }

// const c = new C();
// console.log(c.instanceField === c);
// console.log(C.staticField === C);

class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();

console.log(c.instanceField === c);
console.log(C.staticField === C);

// console.log(this === window);

const obj = {
  a: this,
};

// console.log(obj.a === window);

// function add(c, d) {
//   return this.a + this.b + c + d;
// }

// const o = { a: 1, b: 3 };

// console.log(add.call(o, 5, 7));

// console.log(add.apply(o, [10, 20]));

function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

console.log(add.call(o, 5, 7));
console.log(add.apply(o, [10, 20]));

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);
bar.call("foo");
bar.call(undefined);

const obj9 = {
  getThisGetter() {
    const getter = () => this;
    return getter;
  },
};

const fn = obj9.getThisGetter();
console.log(fn() === obj9);

// function sum() {
//   return this.a + this.b + this.c;
// }

// const o2 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   get average() {
//     return (this.a + this.b + this.c) / 3;
//   },
// };

// Object.defineProperty(o2, "sum", {
//   get: sum,
//   enumerable: true,
//   configurable: true,
// });

// console.log(o2.average, o2.sum);

// function sum() {
//   return this.a + this.b + this.c;
// }

// const o2 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   get average() {
//     return (this.a + this.b + this.c) / 3;
//   },
// };

// Object.defineProperty(o2, "sum", {
//   get: sum,
//   enumerable: true,
//   configurable: true,
// });

// console.log(o2.average, o2.sum);

function sum() {
  return this.a + this.b + this.c;
}

const o2 = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o2, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o2.average, o2.sum);

// class Car {
//   constructor() {
//     this.sayBye = this.sayBye.bind(this);
//   }

//   sayHi() {
//     console.log(`Hello from ${this.name}`);
//   }

//   sayBye() {
//     console.log(`Bye from ${this.name}`);
//   }

//   get name() {
//     return "Ferrari";
//   }
// }

// class Bird {
//   get name() {
//     return "Tweety";
//   }
// }

// const car = new Car();
// const bird = new Bird();

// car.sayHi();
// bird.sayHi = car.sayHi;
// bird.sayHi();

// bird.sayBye = car.sayBye;
// bird.sayBye();

// class Car {
//   constructor() {
//     this.sayBye = this.sayBye.bind(this);
//   }
//   sayHi() {
//     console.log(`Hello from ${this.name}`);
//   }

//   sayBye() {
//     console.log(`Bye from ${this.name}`);
//   }
//   get name() {
//     return "Ferrari";
//   }
// }

// class Bird {
//   get name() {
//     return "Tweety";
//   }
// }

// const car = new Car();
// const bird = new Bird();

// car.sayHi();
// bird.sayHi = car.sayHi;
// bird.sayHi();

// bird.sayBye = car.sayBye;
// bird.sayBye();

class Car {
  constructor() {
    this.sayBye = this.sayBye.bind(this);
  }

  sayHi() {
    console.log(`Hello from ${this.name}`);
  }

  sayBye() {
    console.log(`Bye from ${this.name}`);
  }

  get name() {
    return "Ferrari";
  }
}

class Bird {
  get name() {
    return "Tweety";
  }
}

const car = new Car();
const bird = new Bird();

car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();

bird.sayBye = car.sayBye;
bird.sayBye();
