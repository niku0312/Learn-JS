// let count = 0;
// while(count<5){
//   console.log("count is: ",count);
//   count++; //with this, condition stays true forever with count = 0
// }

/*
  Print numbers from 1 to 5 using a while loop.

Print numbers from 10 down to 1.

Print only even numbers between 1 and 10.
 */

// let nums = 0;
// while (nums <= 5) {
//   console.log(nums);
//   nums++;
// }

// let revNum = 10;
// while (revNum >= 1) {
//   console.log(revNum);
//   revNum--;
// }

// let evenNum = 1;
// while (evenNum <= 10) {
//   // console.log(evenNum);
//   if (evenNum % 2 == 0) {
//     console.log(evenNum)
//   }
//   evenNum++;
// }

/*
  🟠 Level 2 – Strings

Given let word = "hello", print each character on a new line.

Reverse a string using a while loop (example: "abc" → "cba").
*/

let word = "Hello";
let i = 0;
while(i<word.length){
  console.log(word[i])
  i++;
}

let w = "abc";
let rev = "";
let j = w.length - 1;

while(j>=0){
  rev += w[j];
  j--;
}
console.log(rev);

//Print only the vowels from "JavaScript" using a while loop.
let wrd = "javascript";
let k = 0;
while(k<wrd.length){
  if("aeiouAEIOU".includes(wrd[k])){
    console.log(wrd[k]);
  }
  k++;
}

