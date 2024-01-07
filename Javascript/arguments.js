function fun1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

fun1(3, 6, 9);

function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

console.log(longestString("hello", "chano", "crazyGame"));

function func(a) {
  arguments[0] = 99;
  console.log(a);
}
func(10);

function func2(a) {
  a = 99;
  console.log(arguments[0]);
}

func2(10);

function funcWithDefault(a = 40) {
  arguments[0] = 99;
  console.log(a);
}

funcWithDefault(10);

function funcWithDefault2(a = 40) {
  a = 30;
  console.log(arguments[0]);
}

funcWithDefault2(20);

function funcWidthDefault3(a = 44) {
  console.log(arguments[0]);
  console.log(arguments.length);
}

funcWidthDefault3();

const args = Array.prototype.slice.call(arguments);
args.push(4);
console.log(args);

const args2 = Array.from(arguments);
args2.push("hi hello");
console.log(args2);

const args3 = [...arguments];

args3.push("hello");
console.log(args3);
