class Base {
  static getName() {
    console.log(this.name);
  }
}

class Extended extends Base {
  static getName() {
    super.getName();
  }
}

Extended.getName();

// class A {}
// class B extends A {
//   setX() {
//     super.x = 1;
//   }
// }

// const b = new B();
// b.setX();
// console.log(b);
// console.log(Object.hasOwn(b, "x"));

// class A {}
// class B extends A {
//   setX() {
//     super.x = 1;
//   }
// }

// const b = new B();
// b.setX();
// console.log(b);
// console.log(Object.hasOwn(b, "x"));

// class A {}
// class B extends A {
//   setX() {
//     super.x = 1;
//   }
// }

// const b = new B();
// b.setX();
// console.log(b);
// console.log(Object.hasOwn(b, "x"));

class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b);
console.log(Object.hasOwn(b, "x"));
