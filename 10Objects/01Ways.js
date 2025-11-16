//Object literal: The simplest way to create an object is by using object literals.

const person = {
  name : "Nikx",
  age: 20,
  greet: function(){
    console.log("Hello, " +this.name);
  }
}

const greeting = person.greet.bind(person);
greeting();


//Object Constructor: It's just a function that we use to create multiple similar objects
const person1 = new Object();
person1.name = "Nick";
person1.age = 25;
person1.greet = function(){
  console.log("Hello, "+this.name)
}
const greeting1 = person1.greet.bind(person1);
greeting1();


//constructor function:
function p2(name, age){
  this.name = name;
  this.age = age;

  this.greet = function(){
    console.log("Wassup, "+ this.name+"!");
  }
  this.menAge = function(){
    console.log(`You are ${this.age} years old`);
  }
}
let p22 = new p2("Niks", 20);
p22.greet();
p22.menAge();

