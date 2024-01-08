console.log(JSON.stringify({ x: 5, y: 6 }));

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);

console.log(JSON.stringify({ a: [10, undefined, function () {}, Symbol("")] }));

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));

console.log(new Date(2006, 0, 2, 15, 4, 5));

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

const hi = JSON.stringify(foo, replacer);
console.log(hi);
