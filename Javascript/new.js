function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car = new Car("Toyota", "Sonata", 1994);
console.log(car);
const model1 = car.model;
console.log(model1);
