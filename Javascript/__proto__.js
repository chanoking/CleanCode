function Circle() {}

const shape = {};

const circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purpose only. DO NOT THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === Circle);

const ShapeA = function () {};
const ShapeB = {
  a() {
    console.log("aaa");
  },
};

ShapeA.prototype.__proto__ = ShapeB;
console.log(ShapeA.prototype.__proto__);

const shapeA = new ShapeA();
shapeA.a();
console.log(ShapeA.prototype === shapeA.__proto__);

const ShapeC = function () {};
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a();
console.log(ShapeC.prototype === shapeC.__proto__);

function Test() {}
Test.prototype.myName = function () {
  console.log("myName");
};
const test = new Test();
console.log(test.__proto__ === Test.prototype);
test.myName();

const obj = {};
obj.__proto__ = Test.prototype;
obj.myName();

console.log(Object.isExtensible(Object.prototype));
// you can add more properites
// console.log(Object.setPrototypeOf(Object.prototype, {}));
console.log(Object.setPrototypeOf(Object.prototype, null));

// class Human {}

// class SuperHero extends Human {}

// const superMan = new SuperHero();

// console.log(superMan);

function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

Human.prototype.speak = function () {
  return `${this.name} says hello`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying`;
};

const superMan = new SuperHero("chano", 1);

console.log(superMan.speak());

console.log(superMan.fly());
