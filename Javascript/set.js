// const language = {
//   set current(name) {
//     this.log.push(name);
//   },
//   log: [],
// };

// language.current = "KOR";
// language.current = "USA";

// console.log(language.log);

const countries = {
  set asia(name) {
    this.log.push(name);
  },
  log: [],
};

countries.asia = "KOREA";
countries.asia = "JAPAN";
countries.asia = "CHINA";
countries.asia = "TAIWAN";

console.log(countries.log);

class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);

instance.msg = "cake";
console.log(instance.msg);

// class ClassWithGetSet2 {
//   get msg2() {
//     return "hello there!";
//   }

//   set msg2(x) {
//     return `hello ${x}`;
//   }
// }

// const instance2 = new ClassWithGetSet2();

// console.log(instance2.msg2);

// ClassWithGetSet2.msg2 = "chano";

// console.log(instance2.msg2);

// class ClassWithGetSet3 {
//   #msg3 = "Hello there!";
//   get msg3() {
//     return this.#msg3;
//   }

//   set msg3(x) {
//     return (this.#msg3 = `Hello ${x}`);
//   }
// }

// const instance3 = new ClassWithGetSet3();

// console.log(instance3.msg3);

// instance3.msg3 = "chanos";

// console.log(instance3.msg3);

class ClassWithGetSet4 {
  #msg4 = "Im from Korea";
  get msg4() {
    return this.#msg4;
  }
  set msg4(x) {
    return (this.#msg4 = `Nice to meet YOU! ${x}`);
  }
}

const instance4 = new ClassWithGetSet4();

console.log(instance4.msg4);

instance4.msg4 = "chanos";

console.log(instance4.msg4);

class ClassWithGetSet5 {
  #msg5 = "whats up?";
  get msg5() {
    return this.#msg5;
  }
  set msg5(x) {
    return (this.#msg5 = `Fucking ${x}`);
  }
}

const instance5 = new ClassWithGetSet5();

console.log(instance5.msg5);

instance5.msg5 = "guys";

console.log(instance5.msg5);
