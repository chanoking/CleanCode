// const map1 = new Map();
// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// map1.set("c", 5);

// console.log(map1);
// console.log(map1.get("c"));
// console.log(map1.size);
// map1.delete("b");
// console.log(map1.size);

const original = new Map([[1, "one"]]);
console.log(original);

const clone = new Map(original);
console.log(clone);

console.log(clone.get(1));
console.log(clone === original);

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

const merged = new Map([...first, ...second]);

console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));
