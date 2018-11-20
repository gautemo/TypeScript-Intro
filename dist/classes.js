"use strict";
class Animal {
    constructor(name) {
        this.age = 0;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = 'Mr. ' + newName;
    }
    eat(food = 0) {
        console.log(`Animal ate ${food} pieces.`);
    }
}
Animal.nrAnimals = 0;
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog('Joe');
dog.age = 1;
class Human {
    move() {
        console.log("roaming the earth...");
    }
}
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
        this.currentTime.setHours(h, m);
    }
}
