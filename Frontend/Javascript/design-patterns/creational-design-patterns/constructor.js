//--------------------
// Constructor Pattern
//--------------------

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
        console.log(`${this.name} is ${this.age} years old!`);
    };
}


class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`${this.name} is ${this.age} years old!`);
    }
}


const personOne = new Person('John', 20);
personOne.getDetails(); // Output "John is 20 years old!"

