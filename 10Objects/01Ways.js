//Object literal: The simplest way to create an object is by using object literals.

const person = {
  name: "Nikx",
  age: 20,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const greeting = person.greet.bind(person);
greeting();

//Object Constructor: It's just a function that we use to create multiple similar objects
const person1 = new Object();
person1.name = "Nick";
person1.age = 25;
person1.greet = function () {
  console.log("Hello, " + this.name);
};
const greeting1 = person1.greet.bind(person1);
greeting1();

//constructor function:
function p2(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Wassup, " + this.name + "!");
  };
  this.menAge = function () {
    console.log(`You are ${this.age} years old`);
  };
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
};
let p33 = new p3("nikz", 24);
p33.greet();
p33.mentionAge();

function Uzer(name) {
  this.name = name;
}

Uzer.prototype.getName = function () {
  return this.name;
};

const u = new Uzer("Alex");
const fn = u.getName;
console.log(fn);

//Object.create(): Object.create() is used to create a new object with a specified prototype object and properties.

const perzon = {
  name: "John",
  age: 20,
  isMarried: false,
};

const perz = Object.create(perzon);

const personMethods = {
  greet() {
    console.log("Hello, " + this.name);
  },
};

const p = Object.create(personMethods);
p.name = "Nikz";
p.greet();

//factory functions
function createPerson(name, age) {
  return {
    name: name,
    age: age,

    greet: function () {
      // console.log("Hello, "+ this.name);
      return `Hello, ${this.name}`;
    },
  };
}
const john = createPerson("John", 30);
john.greet();

function createFn(name) {
  return {
    name: name,
    sayHi() {
      return `Hi, ${this.name}`;
    },
  };
}

const nick = createFn("Nick");
console.log(nick.sayHi());

//singleton pattern:
const pers = {
  name: "Nikx",
  age: 24,
  isAdult: true,
};

console.log(pers);

//Object.entries(): it takes an object and returns an array of [key, value] pairs
//looping through an object
const user = {
  name: "Rahul",
  age: 22,
  email: "rahul@gmail.com",
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}


const filtrd = Object.fromEntries(
  Object.entries(prizes).filter(([k, v]) => v >= 10)
);
console.log(filtrd);

//handling dynamic form inputs
const formData = {
  username: "Nick",
  email: "",
  password: "2345",
};

const emptyFields = Object.entries(formData).filter(([k, v]) => v === "");
console.log(emptyFields);


//Object.fromEntries()It takes key-value pairs and converts them back into an object

const arr = [
  ["name", "Rahul"],
  ["age", 22],
];
const objct = Object.fromEntries(arr);
console.log(objct);

const prizes = {
  pen: 10,
  pencil: 5,
  notebook: 50,
};

//Object.keys(): It returns only the keys of an object in an array.
const usser = {
  name: "Nick",
  age: 23,
};
const keyUser = Object.keys(usser);
console.log(keyUser);

//convert keys into dropdown options
const catgs = {
  electronics: 10,
  fashion: 20,
  books: 14,
};

// Object.keys(catgs).map(cat=>(
//   <option key={cat}>{cat}</option>
// ))

//Object.values(): it returns only the values of an object in an array

//therefore, Object.entries() is the pair of key + value


// Object.freez() : It locks an object, so that:

// You cannot add new properties

// You cannot delete properties

// You cannot change existing values

// You cannot modify nested objects (unless you deep-freeze)

// Think of it like making the object read-only.
const userr = { name: "Rahul", age: 22 };

Object.freeze(user);

user.age = 30;     // ❌ no effect
user.city = "Goa"; // ❌ no effect
delete user.name;  // ❌ no effect

console.log(user);
// { name: "Rahul", age: 22 }
