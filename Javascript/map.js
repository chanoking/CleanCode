const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
map1.set("c", 5);

console.log(map1);
console.log(map1.get("c"));
console.log(map1.size);
map1.delete("b");
console.log(map1.size);
