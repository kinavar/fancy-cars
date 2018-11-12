export default class Car {
    constructor(car = {}) {
        this.id = car.id;
        this.image = car.img;
        this.name = car.name;
        this.make = car.make;
        this.model = car.model;
        this.year = car.year;
    }
}