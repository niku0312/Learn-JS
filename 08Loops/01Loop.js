/*
Loop
Loop is a way to repeat a block of code.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

Different Types of Loop
For Loop
While Loop
Do While Loop
For In Loop
For Of Loop
*/

/*
  For loop is used to iterate over a block of code a specific number of times.

array iteration using for loop
*/

let whoami = ['nick', 'coder', "developer", "bodo", 6];
for (let i = 0; i < whoami.length; i++) {
  console.log(whoami[i]);
}

//reverse array loop
for (let i = whoami.length - 1; i >= 0; i--) {
  console.log(whoami[i]);
}

//object iteration using for loop
// let whomi = {
//     name: 'mridupawan',
//     age: 30,
//     hobby: 'coding'
// }
// for (let i = 0; i < Object.keys(whomi).length; i++) {
//   console.log(Object.keys(whomi)[i] + ":" + whomi[Object.keys(whomi)[i]]);
// }

//using for...in
let whomi = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}
for (let key in whomi) {
  console.log(key + ":" + whomi[key]);
}
for (let k in whomi) {
  console.log(whomi[k]);
}


//string iteration
let whoim = 'nick';
for (let i = 0; i < whoim.length; i++) {
  console.log(whoim[i]);
}
for (let i = whoim.length - 1; i >= 0; i--) {
  console.log(whoim[i]);
}


let js = "javascript";
for (let j = 0; j < js.length; j++) {
  console.log(js[j]);
}



//while loop
//array
let whom = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30];
let i = 0;
while (i < whom.length) {
  console.log(whom[i]);
  i++;
}

let hey = "Hello";
let he = 0;
while (he < hey.length) {
  console.log(hey[he]);
  he++;
}

//reverse array loop
let h = hey.length - 1;
while (h >= 0) {
  console.log(hey[h]);
  h--;
};

let hoami = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30];
let k = hoami.length - 1;

while (k >= 0) {
  console.log(hoami[k]);
  k--;
}

let m = 1;
while (m <= 10) {
  console.log(m);
  m++;
}
while (m <= 20 && m % 2 == 0) {
  console.log(m);
  m++;
}


//object iteration using while loop
let whoru = {
  name: 'mridupawan',
  age: 30,
  hobby: 'Hacking'
};
let values = Object.values(whoru);
let w = 0;
while (w < values.length) {
  console.log(values[w]);
  w++;
}


//Do while loop: this loop is used to iterate over a block of code while a condition is true.
let n = 0;
do {
  console.log("Hello World", n);
  n++
} while (n <= 10);

//array iteration
// let mr = ["mridupawan", "coder", "xxehacker", "Bordoloi", 30];
// let r = 0;
// do{
//   console.log(mr[r]);
//   r++;
// }while(r<mr.length);

//reverse array
let mr = ["mridupawan", "coder", "xxehacker", "Bordoloi", 30];

let r = mr.length - 1;
do {
  console.log(mr[r])
  r--;
} while (r >= 0);

let obj1 = {
  name: "mridupawan",
  age: 23,
  hobby: "Hacking",
  hobby2: "Programming",
  email: "mridupawan503@gmail.com",
}
let v = 0;

do {
  console.log(Object.keys(obj1)[v] + ":" + Object.values(obj1)[v]);
  v++;
} while (Object.keys(obj1).length > v);

//reverse an object
let obj2 = {
  name: "mridupawan",
  age: 23,
  hobby: "Hacking",
  hobby2: "Programming",
  email: "mridupawan503@gmail.com",
}
let l = Object.keys(obj2).length - 1;
do {
  console.log(Object.keys(obj2)[l] + ":" + Object.values(obj2)[l]);
  l--;
} while (l >= 0);

//string iteration
let whois = "javascript";
let s = 0;
do {
  console.log(whois[s]);
  s++;
} while (s < whois.length);

//reverse string
let jvs = "javascript";
let z = jvs.length - 1;
do {
  console.log(jvs[z]);
  z--;
} while (z >= 0);


/*
for...in: In JavaScript, a for...in loop is used to loop through the properties of an object.
*/
let std = { name: "Ava", age: 17, grade: "A" };
for (let k in std) {
  console.log(k, std[k]);
}

const laptop = { brand: "HP", price: 45000, color: "silver" };
for (let p in laptop) {
  console.log(laptop[p]);
}

let mrz = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30];
for (let e in mrz) {
  console.log(mrz[e]);
}
for (let f in mrz) {
  console.log(mrz[mrz.length - 1 - f]);
}


//object iteration
let obz = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}
for (let e in obz) {
  console.log(e, ":", obz[e]);
}
//reverse
let vlz = Object.values(obz);
for (let e in vlz) {
  console.log(vlz[vlz.length - 1 - e]);
}

let obx = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
};
let kyes = Object.keys(obx);
for (let i in kyes) {
  let key = kyes[kyes.length - 1 - i];
  console.log(key + ":" + obx[key]);
}


//For Of Loop
/*
  For of loop is used to iterate over a block of code for each element in an array.

array iteration using for of loop
*/
let nmz = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30];
for (let e of nmz) {
  console.log(e);
}

//object iteration
let nms = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}
for (let e of Object.values(nms)) {
  console.log(e);
}

//string iteration
let huz = "Nikubasu";
for (let n of huz) {
  console.log(n);
}



//Advance methods to iterate over an Array
/*
forEach()
map()
filter()
reduce()
*/

//forEach(): is used to iterate over a block of code for each element in an array.

//array loop
let whoiz = ['mridupawan', "coder", "xxehacker", "Bordoloi", 30];
whoiz.forEach((e) => console.log(e));

//object loop
let huiz = {
  name: 'mridupawan',
  age: 30,
  hobby: 'Hacking'
}

// huiz.forEach((e)=>{
//   console.log(e); //error
// })

Object.entries(huiz).forEach(([k,v])=>{
  console.log(`${k}:${v}`)
});

//string loop
let naam = "scriptjava";
naam.split('').forEach((char)=>{
  console.log(char);
})