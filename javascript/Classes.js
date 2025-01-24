class Person {
    constructor(name, age) {
        this.name = name; // Initialize the name property
        this.age = age;   // Initialize the age property
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}

const john = new Person('John', 25);
john.introduce(); // Output: Hi, I'm John, and I'm 25 years old.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} a ${this.breed} barks!`);
    }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Output: Rex makes a sound.
myDog.bark();  // Output: Rex (a German Shepherd) barks!
