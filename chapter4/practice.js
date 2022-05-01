// console.log('Practice');

// Practice exercise 4.1
const workingOut = true;
// console.log(workingOut);

// if true
if (workingOut) {
    // console.log('Im working out right now');
}
// if false
if (!workingOut) {
    // console.log('Im not at the gym');
}


// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for the user
// 4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if none are true
// 7. Output the response message variable to the console

// let age = parseInt(prompt('How old are you?'));
// let message;

// if(age >= 21){
//     message = 'confirm entry to a venue and the ability to purchase alcohol'
// }
// if(age >= 19){
//     message = 'confirm entry to the venue but deny the purchase of alcohol'
// }
// else {
//     message = 'deny entry'
// }

// console.log(message);





// Practice exercise 4.4
// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

let randomNum = Math.random()
randomNum = Math.floor(randomNum * 6)

// let userInput = prompt()

// switch(randomNum){
//     case 1:
//         console.log('Number 1');
//         break;
//     case 2:
//         console.log('Number 2');
//         break;
//     case 3:
//         console.log('Number 3');
//         break;
//     case 4:
//         console.log('Number 4');
//         break;
//     case 5:
//         console.log('Number 5');
//         break;
//     case 6:
//         console.log('Number 6');
//         break;
    
// }



// Rock Paper Scissors game

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the computer selection and the result of the game.


