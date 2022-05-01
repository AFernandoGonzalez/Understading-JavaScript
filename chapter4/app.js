// if and if else statements

let rain = true

if(rain){
    // console.log('Its raining, i ineed my umbrella');
}else{
    // console.log('No umbrella needed');
}


let age = 10;
let cost = 0;
let message;
if (age < 3) {
    cost = 0;
    message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}
// console.log(message);
// console.log("Your Total cost " + cost);


// Conditional ternary operators
// if operant1 is exists? then execute operant2
// else execute operate3
// operand1 ? operand2 : operand3;

let myAge = 90;
let access = myAge < 18 ? "denied" : "allowed";
// console.log(access);

let myId = true;
let enterVenue = myId ? "valid" : "denied";
// console.log(enterVenue);



