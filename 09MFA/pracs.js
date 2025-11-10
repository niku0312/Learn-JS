/*
You have:

const student = { math: 80, english: 75, science: 90 };


👉 Use Object.values() and map() to make a new array with each mark
*/

const student = { math: 80, english: 75, science: 90 };
let increasedMarks = Object.values(student).map(v=>v+5);
console.log(increasedMarks)

/*
  You have:

const prices = { apple: 50, banana: 20, mango: 30 };


👉 Create an array of strings like "apple: 50", "banana: 20", etc.
*/

const prices = { apple: 50, banana: 20, mango: 30 };
let newArr = Object.entries(prices).map(([k,v])=>{
  return `${k}:${v}`;
})
console.log(newArr);


/**
  You have:

const person = { name: "Nick", age: 25, hobby: "coding" };
  👉 Use Object.entries() and map() to print "name => Nick", "age => 25", "hobby => coding".
 */

const person = { name: "Nick", age: 25, hobby: "coding" };
let newPerson = Object.entries(person).map(([k,v])=>{
  return `${k}=>${v}`
})
console.log(newPerson)


/**
  const scores = { a: 10, b: 20, c: 30 };
👉 Make a new object where each value is doubled.

(Hint: Object.fromEntries() will help rebuild objects after map().)
 */
const scores = { a: 10, b: 20, c: 30 };
let doubled = Object.fromEntries(
  Object.entries(scores).map(([k,v])=>[k, 2*v])
)
console.log(doubled);
