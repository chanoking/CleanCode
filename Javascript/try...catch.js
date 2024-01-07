try {
  nonExistentFunction();
} catch (error) {
  console.log(error);
} finally {
  console.log("i love you");
}

try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name);
  console.log(message);
}
