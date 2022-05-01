// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

const arr = [1, 2, 3];
const nested = [arr, arr, arr]
const value = nested[1][1]
// console.log(value);



// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
const myCar = {
    manufacture: 'USA',
    model: 'Mercedes Benz',
    miles: 1000,
    used: true,
    seats: 4,
    color: 'blue',
    forSale: false
}

// 2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
variable = 'color'
myCar[variable] = 'red'
// console.log(myCar.color);

variable = "forSale";
// console.log(dog[variable]);

myCar[variable] = true;
// console.log(myCar.forSale);



// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called friends.
// 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.

const people = {
    friends: {
        friend1: {
            id: 1,
            firstName: 'ab',
            lastName: 'cd'
        },
        friend2: {
            id: 2,
            firstName: 'ef',
            lastName: 'gh'
        },
        friend3: {
            id: 3,
            firstName: 'ej',
            lastName: 'kl'
        },
    }
}

// 4. Output it to the console.
console.log(people);