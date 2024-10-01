// Базовий клас для всіх транспортних засобів
class Vehicle {
  #engine;

  constructor(name, maker, engine) {
    this.name = name; // назва транспорту
    this.maker = maker; // виробник
    this.#engine = engine; // приватна властивість
  }

  getType() {
    return `Двигун цього транспортного засобу: ${this.#engine}.`;
  }

  getDetails() {
    return `Назва: ${this.name}, Виробник: ${this.maker}.`;
  }

  #getEngineDetails() {
    return `Технічні характеристики двигуна: ${this.#engine}.`;
  }

  showEngineDetails() {
    return this.#getEngineDetails();
  }
}

// Спільний клас-предок для наземного та водного транспорту
class LandVehicle extends Vehicle {
  constructor(name, maker, engine, wheels) {
    super(name, maker, engine);
    this.wheels = wheels; // кількість коліс
  }

  drive() {
    return `${this.name} їде на ${this.wheels} колесах.`;
  }

  // Спільний метод для наземного та водного транспорту
  service() {
    return `Транспортний засіб ${this.name} проходить технічне обслуговування.`;
  }
}

// Спільний клас для водного транспорту
class WaterVehicle extends Vehicle {
  constructor(name, maker, engine, type) {
    super(name, maker, engine);
    this.type = type; // тип водного транспорту (катер, яхта і т.д.)
  }

  sail() {
    return `${this.name} пливе як ${this.type}.`;
  }

  // Спільний метод для наземного та водного транспорту
  service() {
    return `Водний транспорт ${this.name} проходить технічне обслуговування.`;
  }
}

// Унікальний клас для наземного транспорту
class Car extends LandVehicle {
  constructor(name, maker, engine, wheels, fuel) {
    super(name, maker, engine, wheels);
    this.fuel = fuel; // тип палива (бензин, дизель, електро)
  }

  refuel() {
    return `${this.name} заправляється ${this.fuel}.`;
  }
}

// Унікальний клас для водного транспорту
class Boat extends WaterVehicle {
  constructor(name, maker, engine, type, length) {
    super(name, maker, engine, type);
    this.length = length; // довжина корабля
  }

  anchor() {
    return `${this.name} ставить якір на глибині.`;
  }
}

// Унікальний клас для літаків (повітряний транспорт)
class Airplane extends Vehicle {
  constructor(name, maker, engine, wingSpan) {
    super(name, maker, engine);
    this.wingSpan = wingSpan; // розмах крил
  }

  fly() {
    return `${this.name} з розмахом крил ${this.wingSpan} злітає.`;
  }

  landing() {
    return `${this.name} здійснює посадку.`;
  }
}

// Унікальний клас для велосипедів
class Bicycle extends LandVehicle {
  constructor(name, maker, engine, wheels, gearCount) {
    super(name, maker, engine, wheels);
    this.gearCount = gearCount; // кількість передач
  }

  pedal() {
    return `${this.name} з ${this.gearCount} передачами їде на педалях.`;
  }
}

// Приклади створення об'єктів
const car1 = new Car("Tesla Model S", "Tesla", "електро", 4, "електрика");
const boat1 = new Boat("Sea Breeze", "Yamaha", "двигун 300HP", "яхта", 20);
const airplane1 = new Airplane("Boeing 747", "Boeing", "турбореактивний", 68);
const bicycle1 = new Bicycle("Giant", "Giant", "немає двигуна", 2, 21);

// Виклик методів
console.log(car1.getType());
console.log(car1.getDetails());
console.log(car1.refuel());
console.log(car1.service());

console.log(boat1.getDetails());
console.log(boat1.sail());
console.log(boat1.anchor());

console.log(airplane1.getDetails());
console.log(airplane1.fly());
console.log(airplane1.landing());

console.log(bicycle1.getDetails());
console.log(bicycle1.pedal());
console.log(bicycle1.service());

console.log(car1.showEngineDetails());
