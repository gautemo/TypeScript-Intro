class Animal {
    static nrAnimals = 0;

    private name: string;
    age: number = 0;

    constructor(name: string){
        this.name = name;
    }

    get getName(): string{
        return this.name;
    }

    set setName(newName: string){
        this.name = 'Mr. ' + newName;
    }

    eat(food: number = 0) {
        console.log(`Animal ate ${food} pieces.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog('Joe');
dog.age = 1;

abstract class Human {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

//Interface and classes together
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
        this.currentTime.setHours(h, m);
    }
}