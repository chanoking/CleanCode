const modoole = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = modoole.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined => syntax error

const boundGetX = unboundGetX.bind(modoole);
console.log(boundGetX());
