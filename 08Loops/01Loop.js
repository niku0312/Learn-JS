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
for(let i=0; i<whoami.length; i++){
  console.log(whoami[i]);
}

//reverse array loop
for(let i=whoami.length - 1; i>=0; i--){
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
for(let key in whomi){
  console.log(key+ ":" +whomi[key]);
}
for (let k in whomi){
  console.log(whomi[k]);
}


//string iteration
let whoim = 'nick';
for(let i=0; i<whoim.length; i++){
  console.log(whoim[i]);
}
for(let i=whoim.length -1; i>=0; i--){
  console.log(whoim[i]);
}


let js = "javascript";
for(let j=0; j<js.length; j++){
  console.log(js[j]);
}



//while loop
//array
let whom = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30];
let i = 0;
while(i<whom.length){
  console.log(whom[i]);
  i++;
}

let hey = "Hello";
let he=0;
while(he<hey.length){
  console.log(hey[he]);
  he++;
}

//reverse array loop
let h = hey.length - 1;
while(h>=0){
  console.log(hey[h]);
  h--;
};

let hoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30];
let k = hoami.length - 1;

while(k>=0){
  console.log(hoami[k]);
  k--;
}

let m = 1;
while(m<=10){
  console.log(m);
  m++;
}
while(m<=20 && m%2==0){
  console.log(m);
  m++;
}