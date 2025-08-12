// What is a Single Page Application?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular, Vue, and React JS are all SPA frameworks.

// What typescript?
// Typescript is a superset of Javascript, used to build large applications with data types.
// Typescript is transpiled to Javascript.
// We can install typescript transpiler using npm

// npm install -g typescript
// tsc -w app.ts will transpile to app.ts in watch mode

// How can we declare variables in Typescript?
// var, let, const

// var is global scoped.
var x = 10;
if (x == 10) {
  // redefine x globally
  var x = 20;
}

console.log(x); // 20

// let is block scoped.
let y = 10;
if (y == 10) {
  // try to redefine the variable y locally
  let y = 20;
  console.log("redeclared y = " + y);
}

console.log("y = " + y);

// const is block scoped.
// we cannot reassign a value to a const variable
const z = 10;

// z = 20; // will error

// let is preferred over var, and considered best practice to avoid scoping issues.

// Data types in TypeScript
// We can define a variables data type using a colon syntax.

// Built-in data types
// string, number, boolean, void, null, undefined, any
let customMessage: string = "Hello, world";
let num: number = 10;
let isValid: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let anyValue: any = 10;

// function does not return anything, so return type is void
function greet(): void {
  console.log("Hello world!");
  return;
}

// Type operators
console.log(typeof num); // number
console.log(typeof customMessage); // string
console.log(typeof isValid); // boolean

// User-define data types
// Arrays, Tuples, Classes, and Interfaces

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["John", "Smith"];

// Tuples: when we have a known number of elements with different data types
let person: [string, number, boolean] = ["John", 25, true];

class Person {
  // properties
  name: string;
  age: number;
  isStudent: boolean;

  // constructor function used to initialize an object instance
  constructor(nameArg: string, ageArg: number, isStudentArg: boolean) {
    this.name = nameArg;
    this.age = ageArg;
    this.isStudent = isStudentArg;
  }

  greet(): void {
    console.log("Hello world!");
    return;
  }
}

// initialization a class = creating an object instance
// new keyword is used to call the contructor of the Person class
let person1 = new Person("John", 78, true);

console.log(person1);

// What is Inheritance?
// When a class inherits properties and methods from another class

// Parent class for a an animal can be mammal
class Mammal {
  // properties
  hasHair: boolean;
  isWarmBlooded: boolean;

  constructor(hasHairArg: boolean, isWarmBloodedArg: boolean) {
    this.hasHair = hasHairArg;
    this.isWarmBlooded = isWarmBloodedArg;
  }

  eat(): void {
    console.log("Mammal is eating.");
    return;
  }
}

// We can inherit from mammal class using "extends" keyword
class Animal extends Mammal {
  name: string;
  age: number;

  constructor(
    nameArg: string,
    ageArg: number,
    hasHairArg: boolean,
    isWarmBloodedArg: boolean
  ) {
    // we can use "super" keyword to call the parent class (mammal) constructor
    super(hasHairArg, isWarmBloodedArg);
    this.name = nameArg;
    this.age = ageArg;
  }
}

// creating an Animal instance
let cat = new Animal("Cat", 4, true, true);
console.log(cat);
console.log(cat.eat());
