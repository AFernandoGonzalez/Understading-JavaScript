// Arrays are lists of values
// These values can be of all data types
// An array can even contain different data types

// arr1 = new Array('blue', 'red', 'pink')
// arr(arr1);
// console.log(arr2);

// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);



// const arra = ["hi there"];
// arra[0] = "new value";
// console.log(arra[0]);
// // arra = ["nope, now you are overwriting the array"];


// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[-1]);

// // this will add a new value to index 3 : kia
// cars[3] = "Kia";
// console.log(cars);


// cars[-1] = "Fiat";
// console.log(cars);


// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// lastIndex = colors.length - 1
// lastElement = colors[colors.length - 1]
// console.log(lastIndex);
// console.log(lastElement);


// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);
// console.log("numbers", numbers);


// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

const shoppingList = ["Milk" , "Bread", "Apples"]
const listLenght = shoppingList.length
shoppingList[1] = 'Bananas';



// Adding and replacing elements

favoriteFruits = ["grapefruit", "orange", "lemon"];
// adds to the end
favoriteFruits.push('mango')


let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
//  2 is where to insert : 0 is how many elements to delete after inserting new values 
arrOfShapes.splice(2, 0, 'a', 'b')

let letters = ['a', 'b', 'c', 'd', 'e']
letters.splice(1, 0, '1','2')

let otherArrar = [1,2,3, 'Two Arrays'];
let letterNumbers = letters.concat(otherArrar);


let evenMoreArray = letterNumbers.concat('l', 'e', 't', 't', 'e', 'r')

// Deleting elements

// deletes last value
evenMoreArray.pop()

// deletes first value
evenMoreArray.shift()

evenMoreArray.splice(1, 6)



// Finding elements
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) {return e === 6})
let findValue2 = arr8.find(e => e === 10)


// arr8 = [ 2, 6, 7, 8 ];
// index 1
let findIndex = arr8.indexOf(6);
// does not exits
let findIndex2 = arr8.indexOf(10);

arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(2,2);


// The value of lastDog will be 4 because that is the last occurrence of dog in the array.
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog")


let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort()
names.reverse()

let ages = [18, 72, 33, 56, 40];
names.sort()
names.reverse()


// Multidimensional arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

const arrOfArrs = [someValues1, someValues2, someValues3]

let value1 = arrOfArrs[2][2]
