class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Tạo một đối tượng Car mới và thử nghiệm với phương thức 'accelerate' và 'brake', cùng với getter và setter
const bmw = new CarCl('BMW', 120);
const mercedes = new CarCl('Mercedes', 95);

console.log(bmw.speedUS);
bmw.accelerate();
bmw.brake();
bmw.speedUS = 50;
console.log(bmw.speed);

console.log(mercedes.speedUS);
mercedes.accelerate();
mercedes.brake();
mercedes.speedUS = 60;
console.log(mercedes.speed);
