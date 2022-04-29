// 1. What data type is the following variable?
const c = "5";

// 2. What data type is the following variable?
const z = 91;

// 3. Which one is generally better, line 1 or line 2?
let empty1 = undefined; //line 1 let 
empty2 = null; //line 2


// 4. What is the console output for the following?
let x = "Hello";
x = "world";
console.log(x);


// 5. What will be logged to the console?
let d = "world";
let f = `Hello ${d}!`;
console.log(f);


// 6. What is the value of a?
let r = "Hello";
r = prompt("world");
console.log(r);

// 7. What is the value of b output to the console?

let g = 5;
let h = 70;
let j = "5";
h++;
console.log(h);

// 8. What is the value of result?
let result = 3 + 4 * 2 / 8;

// 9. What is the value of total and total2?
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

// 10. What is logged to the console here?
const n = 5;
const m = 10;
console.log(n > 0 && m > 0);
console.log(n == 5 && m == 4);
console.log(true ||false);
console.log(n == 3 || m == 10);
console.log(n == 3 || m == 7);

// 10. What is logged to the console here?
const a = 5;
const b = 10;
// true
console.log(a > 0 && b > 0);
// false
console.log(a == 5 && b == 4);
// true
console.log(true || false);
// true
console.log(a == 3 || b == 10);
// false
console.log(a == 3 || b == 7);