// Example1: Map method over array
let whoami = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30]

whoami.map((e) => console.log(e));

// Example2: Map method over object
let whomi = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}

Object.entries(whomi).map(([k, v]) => {
  console.log(`${k}:${v}`);
});

// let myself = {
//   name: "Nick",
//   age: 25,
//   hobby: "coding"
// }
// Object.entries(myself).map(([k,v])=>{
//   console.log(`${k}:${v}`);
// })


//map method over string
let myname = "javascript";
myname.split("").map((e) => {
  console.log(e);
});


let whuami = [
  {
    name: 'mridupawan',
    age: 30,
    hobby: 'hacking'
  },
  {
    name: 'nakul',
    age: 25,
    hobby: 'coding'
  }
]

whuami.map((v, k)=>{
  console.log(v, k);
})



//Reduce methods
let whoru = ['mridupawan', 'coder', 'xxehacker', 'Bordoloi', 30];
let searchItem = "mridupawan";

let count = whoru.reduce((a,c)=>{
  return c === searchItem?a+1:a;
}, 0);
console.log(count);