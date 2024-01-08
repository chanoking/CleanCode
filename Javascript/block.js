"use strict";
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
console.log(y);

{
  // foo();
  function foo() {
    console.log("foo");
  }
}

// foo();

let sector;
{
  // These variables are scoped to this block and are not accessible after the block
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle + radius,
  };
}

console.log(sector);

console.log(typeof radius);
