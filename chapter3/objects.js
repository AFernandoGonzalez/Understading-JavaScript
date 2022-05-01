let dog = {
    // properties : values
    dogName: 'A',
    weight: 2.4,
    color: 'blue',
    breed: 'chihuahua',
    age: 3,
    burglarBiter: true
};

// *objectname* has a(n) *property name*
// a dog has a name, 
// a dog has a color, 
// a dog has a weight

// accessing an object property
let dogColor = dog.color

// Updating objects
// example 1
dog.age = 200;
// example 2
dog['color'] = 'red';


variable = "age";
// console.log(dog[variable]);

variable = "breed";
// console.log(dog[variable]);

dog[variable] = "dachshund";




// Objects in objects

let company = {
    companyName: "Healthy Candy",
    activity: ["food manufacturing", "health", "toys"],
    adress: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    addresses: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    }, {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};


// change zipcode
company.adress.zipcode = '11377'
let a = company.activity[1]


let b = company.addresses[0].street

// console.log(b);





// Manipulating an array
const theList = [
    'Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'oone', score: 55 }, ['one', 'two']
]

// shift(removes first)
// pop(removes last) 
// unshift(adds first)
// push(adds last)

const list = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// Remove the first item and the last item.
list.shift()
list.pop()
// • Add FIRST to the start of the array.
list.unshift('FIRST')
// • Assign hello World to the fourth item value.
// done
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
list.push('LAST')
// • Output it to the console.

// console.log(list);


// Company product catalog

var storeItems = {
    item1: { name: 'cap', model: 612, cost: 13.42 },
    item2: { name: 'glass', model: 442, cost: 22.10 },
    item3: { name: 'pc', model: 527, cost: 2.50 },
}

// const g = storeItems.item3.cost

console.log(storeItems);