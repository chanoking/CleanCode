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

function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5));

function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  return args.join(separator);
}

console.log(myConcat(", ", "red", "orange", "blue"));
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));

function list(type) {
  console.log(type);
  let html = `<${type}l><li>`;
  console.log(html);
  const args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  html += args.join("</li><li>");
  html += `</li></${type}l>`;
  return html;
}

console.log(list("u", "One", "Two", "Three"));

console.log(typeof arguments);
console.log(typeof arguments[0]);
