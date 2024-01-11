// class ClassWithPrivateStaticField {
//   static #privateStaticField = 42;

//   static publicStaticMethod() {
//     return ClassWithPrivateStaticField.#privateStaticField;
//   }
// }

// console.log(ClassWithPrivateStaticField.publicStaticMethod());

// class ClassWithPrivateStaticField {
//   static #privateStaticField = 42;

//   static publicStaticMethod() {
//     return this.#privateStaticField;
//   }
// }

// class SubClass extends ClassWithPrivateStaticField {}

// SubClass.publicStaticMethod();

// class ClassWithPrivateStaticField {
//   static #privateStaticField = 42;

//   static publicStaticMethod() {
//     // When invoked through super, 'this' still refers to Subclass
//     return this.#privateStaticField;
//   }
// }

// class Subclass extends ClassWithPrivateStaticField {
//   static callSuperMethod() {
//     return super.publicStaticMethod();
//   }
// }

// Subclass.callSuperMethod();

class ClassWithPrivateMethod {
  #privateMethod() {
    return 42;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.publicMethod());

// class ClassWithPrivateAccessor {
//   #message;

//   get #decoratedMessage() {
//     return `🍎${this.#message}🥐`;
//   }

//   set #decoratedMessage(msg) {
//     this.#message = msg;
//   }

//   constructor() {
//     this.#message = "hello world chanos!";
//     console.log(this.#decoratedMessage);
//   }
// }

// new ClassWithPrivateAccessor();

// class ClassWithPrivateAccessor {
//   #message;
//   get #decoratedMessage() {
//     return `🍏${this.#message}🍎`;
//   }

//   set #decoratedMessage(msg) {
//     this.#message = msg;
//   }

//   constructor() {
//     this.#message = "chanos helllo";
//     console.log(this.#decoratedMessage);
//   }
// }

// new ClassWithPrivateAccessor();

// class ClassWithPrivateAccessor {
//   #message;

//   get #decoratedMessage() {
//     return `🍉${this.#message}🍇`;
//   }

//   set #decoratedMessage(msg) {
//     this.#message = msg;
//   }

//   constructor() {
//     this.#decoratedMessage = "hello chanos";
//     console.log(this.#decoratedMessage);
//   }
// }

// new ClassWithPrivateAccessor();

class ClassWithPrivateAccessor {
  #message;
  get #decoratedMessage() {
    return `🍓${this.#message}🍋`;
  }

  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello chanos";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();

class C {
  #method() {}

  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C()));
// console.log(C.getMethod(C.prototype));

// class ClassWithPrivateStaticMethod {
//   static #privateStaticMethod() {
//     return 42;
//   }

//   static publicStaticMethod() {
//     return ClassWithPrivateStaticMethod.#privateStaticMethod();
//   }
// }

// console.log(ClassWithPrivateStaticMethod.publicStaticMethod());

// class ClassWithPrivateStaticMethod {
//   static #privateStaticMethod() {
//     return 42;
//   }

//   static publicStaticMethod() {
//     return ClassWithPrivateStaticMethod.#privateStaticMethod();
//   }
// }

// console.log(ClassWithPrivateStaticMethod.publicStaticMethod());

class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod());
