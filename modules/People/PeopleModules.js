class Person {
  constructor (name) {
    this.processName(name);
  }

  processName (name = "Anonymous") {
    this._fullName = name;

    var nameSplit = name.split(" ");
    this._firstName = nameSplit[0];
    this._lastName = typeof nameSplit[1] != "undefined" ? nameSplit[1] : "";
  }

  get name() {
    return this._fullName;
  }

  set name(name) {
    this.processName(name);
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}
module.exports = Person;

class Driver extends Person {
  constructor (name, car) {
    this._car = car;

    super(name);
  }

  get car() {
    return this._car;
  }

  set car(car) {
    this._car = car;
  }

  drive() {
    return this.car ? this.car + " says brrr..." : "walking";
  }
}
module.exports = Driver;
