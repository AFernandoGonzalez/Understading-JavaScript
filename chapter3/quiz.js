// 1. Can you use const and update values within an array?
// Ans: no

// 2. Which property in an array gives the number of items contained in the array?
// Ans: arr.length

// 3. What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(myArr1.indexOf(0));
// Ans: -1
console.log(myArr1.indexOf(3));
// Ans: 1

// 4. How do you replace the second element in an array 
myArr = [1,3,5,6,8,9,15] // with the value 4?
myArr.splice(1, 1, 4)
// console.log(myArr);

// 5. What is the output in the console?
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
// Ans: creates an array with 9 empty values and 1 with 'test'
console.log(myArr2[2]);
// Ans : undefined

// 6. What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
// Ans: undefined