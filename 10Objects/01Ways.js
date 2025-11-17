//Object literal: The simplest way to create an object is by using object literals.

const person = {
  name: "Nikx",
  age: 20,
  greet: function () {
    console.log("Hello, " + this.name);
  }
}

const greeting = person.greet.bind(person);
greeting();


//Object Constructor: It's just a function that we use to create multiple similar objects
const person1 = new Object();
person1.name = "Nick";
person1.age = 25;
person1.greet = function () {
  console.log("Hello, " + this.name)
}
const greeting1 = person1.greet.bind(person1);
greeting1();


//constructor function:
function p2(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Wassup, " + this.name + "!");
  }
  this.menAge = function () {
    console.log(`You are ${this.age} years old`);
  }
}
let p22 = new p2("Niks", 20);
p22.greet();
p22.menAge();

//Prototype:
/*
  Every object in JavaScript has a hidden “backup object” called its prototype.

If JavaScript can’t find a property or method on your object, it looks in the prototype.

Think of it like:

👉 Your object → prototype → prototype’s prototype → ... (a chain)

This is called the prototype chain.
*/

function p3(name, age) {
  this.name = name;
  this.age = age;
}
p3.prototype.greet = function () {
  console.log("Waddup, " + this.name + "!");
};

p3.prototype.mentionAge = function () {
  console.log(`You are ${this.age} years old`);
}
let p33 = new p3("nikz", 24);
p33.greet();
p33.mentionAge();


function Uzer(name){
  this.name = name;
}

Uzer.prototype.getName = function(){
  return this.name;
};

const u = new Uzer("Alex");
const fn = u.getName;
console.log(fn);


//Object.create(): Object.create() is used to create a new object with a specified prototype object and properties.

const perzon = {
    name: "John",
    age: 20,
    isMarried: false
};

const perz = Object.create(perzon);


const personMethods = {
  greet(){
    console.log("Hello, " +this.name);
  }
};

const p = Object.create(personMethods);
p.name = "Nikz";
p.greet();