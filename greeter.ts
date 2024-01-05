export function greeter() {
  return {
    helloWorld: function () {
      return "hello world!";
    },
    helloPerson(name: string) {
      return "Hello " + name + "!";
    },
  };
}
