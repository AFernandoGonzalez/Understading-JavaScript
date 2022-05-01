// Example 1

let status = 'new';
let scared = true;

if (status === 'new'){
    console.log('Welcome to JavaScript');
    if(scared){
        console.log('Dont worry you will be fine!');
    }else {
        console.log('Youa are brave! you are going tp do great!');
    }
}else {
    console.log('Welcome back, I knew you would like it!');
}

// example 2

let user = 'fer';
let age = 20;

if(user == 'fer'){
    console.log('You are authenticated');
    if(age > 18){
        console.log('You are old enough to have a account');
    }else{
        console.log('You cant have an account');
    }
} else {
    console.log('Who are you?');
}

// a has a value of 10
let a = 10;
// This will print a number 10 
console.log(a);


// This will print a number tween 0-1
console.log(Math.random());

// This will print a number tween 0-100
console.log(Math.random() * 100);

// No decimal printed
console.log(Math.floor(Math.random() * 100));