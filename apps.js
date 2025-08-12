// What is a Single Page Application?
// An application with one HTML page, updated dynamically without refreshing the page.
// Angular, Vue, and React JS are all SPA frameworks.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    // constructor function used to initialize an object instance
    function Person(nameArg, ageArg, isStudentArg) {
        this.name = nameArg;
        this.age = ageArg;
        this.isStudent = isStudentArg;
    }
    Person.prototype.greet = function () {
        console.log("Hello world!");
        return;
    };
    return Person;
}());
// initialization a class = creating an object instance
// new keyword is used to call the contructor of the Person class
var person1 = new Person("John", 78, true);
console.log(person1);
// What is Inheritance?
// When a class inherits properties and methods from another class
// Parent class for a an animal can be mammal
var Mammal = /** @class */ (function () {
    function Mammal(hasHairArg, isWarmBloodedArg) {
        this.hasHair = hasHairArg;
        this.isWarmBlooded = isWarmBloodedArg;
    }
    Mammal.prototype.eat = function () {
        console.log("Mammal is eating.");
        return;
    };
    Mammal.prototype.sleep = function () {
        console.log("Mammal is sleeping.");
        return;
    };
    return Mammal;
}());
// We can inherit from mammal class using "extends" keyword
// We can implement an interface definition to ensure our class returns the right object data type
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(nameArg, ageArg, hasHairArg, isWarmBloodedArg) {
        // we can use "super" keyword to call the parent class (mammal) constructor
        var _this = _super.call(this, hasHairArg, isWarmBloodedArg) || this;
        _this.name = nameArg;
        _this._age = ageArg;
        return _this;
    }
    Object.defineProperty(Animal.prototype, "age", {
        // getter and setter methods for manipulating private properties
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}(Mammal));
// creating an Animal instance
var cat = new Animal("Cat", 4, true, true);
console.log("Cat age: " + cat.age); // 4
cat.age = 9;
console.log("Cat age after setter: " + cat.age); // 9
console.log(cat.eat());
// Aligator must follow Animal Interface
var aligator = {
    name: "Aligator",
    hasHair: false,
    eat: function () {
        console.log("Aligator eating.");
    },
    sleep: function () {
        console.log("Aligator sleeping.");
    },
};
var dog = new Animal("Dog", 5, true, true);
