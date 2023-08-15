"use strict";

/**
 * Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.
 * console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”
 *    Bonus:
 * I. Refactor your message to use template strings.
 * Ii. Add validation to make sure the argument passed to the function is a string datatype only
 */

//Try #3 / Class Review
//create a function named logUser
//accepts a string as an argument
//needs to return the message 'stringArgument has logged in for the day'
//need to make sure that the argument passed to the function is a string datatype only

function logUser(string){
    if(typeof string !== "string"){
        return false;
    }
    return `${string} has logged in for the day`
}
console.log(logUser("ken2cool"));

//Try #1
// let string = ""
// function logUser(name = string){
//    return `${name} has logged in for the day`;
// }
// string = "ken2cool"
// console.log(logUser(string));

//Try #2
// let name = ""
// function logUser(name){
//     let userName = prompt("Please enter a user Name")
//     if (userName !== "string"){
//         alert ("that is not a valid username")
//     } else {
//         return name.toString();
//     }
// }
//
// console.log(logUser());