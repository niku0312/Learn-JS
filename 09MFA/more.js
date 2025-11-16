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



//Filter method
let whumi = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30];
let filt = whumi.filter((e)=>{
  return e !== 'mridupawan';
});
console.log(filt);

let nos = [2,3,4,5,6,7,8];
let onlyEven = nos.filter((e)=>e%2===0);
console.log(onlyEven);

//filter over string
let prl = "javascript";
let flt = prl.split('').filter((e)=>{
  return e!=='s';
});
console.log(flt);


//filter by value
let whomy = [
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

let reslt = whomy.filter((vls)=>{
  return vls.name === 'nakul';
})
console.log(reslt);



//Reduce method
//over array
let whuis = ['mridupawan', 'coder', 'xxehacker', 'Bordoloi', 30];
let srchItem = "mridupawan";

let cnt = whuis.reduce((a,c)=>{
  return c === srchItem ? a + 1 : a;
}, 0);

console.log(cnt);


let nums = [10, 20, 30];

let totl = nums.reduce((a,c)=>{
  return a+c;
}, 0);
console.log(nums); 

let nms = [1, 4, 7].reduce((acc, curr) => {
    return acc + 1;
}, 0);
console.log(nms);

let whoamy = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
};

let totalLength = Object.values(whoami).reduce((accumulator, currentValue) => {
  // Convert non-string values to string for length calculation
  return accumulator + (typeof currentValue === 'string' ? currentValue.length : currentValue.toString().length);
}, 0);

console.log(totalLength); // Output: 18

//filter method

let huru = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30];
let filtr = huru.filter((e)=>{
  return e !== 30
});
console.log(filtr);

let whoisme = {
  name: "Nick",
  age: 25,
  hobby: "Coding"
}

let filtR = Object.entries(whoisme).filter(([k, v])=>{
  return v !== 25;
});
console.log(filtR);

//over string
let huami = "javascript";
let filtar = huami.split('').filter((e)=>{
  return e !== "s";
});
console.log(filtar);


//filter by value
let details = [
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

let result = details.filter((values)=>{
  return values.name === "nakul";
});
console.log(result);