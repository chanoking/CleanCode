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
