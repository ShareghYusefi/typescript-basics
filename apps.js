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
var y = 10;
if (y == 10) {
    // try to redefine the variable y locally
    var y_1 = 20;
    console.log("redeclared y = " + y_1);
}
console.log("y = " + y);
// const is block scoped.
// we cannot reassign a value to a const variable
var z = 10;
// z = 20; // will error
// let is preferred over var, and considered best practice to avoid scoping issues.
// Data types in TypeScript
// We can define a variables data type using a colon syntax.
// Built-in data types
// string, number, boolean, void, null, undefined, any
var customMessage = "Hello, world";
var num = 10;
var isValid = true;
var nullValue = null;
var undefinedValue = undefined;
var anyValue = 10;
// function does not return anything, so return type is void
function greet() {
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
var numbers = [1, 2, 3, 4];
var names = ["John", "Smith"];
// Tuples: when we have a known number of elements with different data types
var person = ["John", 25, true];
var Person = /** @class */ (function () {
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    return Person;
}());
var person1 = new Person("John", 78, true);
console.log(person1);
