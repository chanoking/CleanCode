const javascript = () => {
  console.log("hello");
};

const greeting = (language) => {
  return () => language;
};

const greet = greeting(javascript());
greet();
