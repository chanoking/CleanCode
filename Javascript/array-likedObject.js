// function printArguments() {
//   arguments.forEach((item) => {
//     console.log(item);
//   });
// }

// printArguments(4, 3, 2);

function printArguments() {
  Array.prototype.forEach.call(arguments, (itme) => {
    console.log(itme);
  });
}

printArguments(1, 2, 3, 4, 5, 6);
// printArguments("a string");

Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
