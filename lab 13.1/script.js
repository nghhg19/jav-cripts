'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`New ${this.make} speed ${this.speed} km/h`);
  return this.speed;
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`New ${this.make} speed ${this.speed} km/h`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
