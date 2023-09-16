import { abc } from 'abc';

this.setInterval(() => {
  
}, interval);

// Define a variable
let greeting = 'Hello, World!';

// Print to the console
console.log(greeting);

// Define a function
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Call a function
let sum = addNumbers(3, 5);

// Use an if statement
if (sum > 5) {
  console.log('Sum is greater than 5');
} else {
  console.log('Sum is less than or equal to 5');
}

// Define an array
let numbers = [1, 2, 3, 4, 5];

// Iterate through an array using a loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Define an object
let person = { 
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Access object properties
console.log(person.firstName + ' ' + person.lastName);

// Use a template literal
let message = `My name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`;

// Define a class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }
}

// Create an instance of a class
let myCar = new Car('Toyota', 'Camry', 2020);

// Call a method on the class instance
myCar.startEngine();


class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday, ${this.getFullName()}! You are now ${this.age} years old.`);
  }
}

let johnDoe = new Person('John', 'Doe', 30);
johnDoe.celebrateBirthday();

class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }

  static divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'Error: Division by zero';
    }
  }
}

let result1 = Calculator.add(10, 5);
let result2 = Calculator.subtract(10, 5);
let result3 = Calculator.multiply(10, 5);
let result4 = Calculator.divide(10, 5);

console.log(`Results: ${result1}, ${result2}, ${result3}, ${result4}`);

