"use strict";

/**
 * Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.
 * console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”
 *    Bonus:
 * I. Refactor your message to use template strings.
 * Ii. Add validation to make sure the argument passed to the function is a string datatype only
 */

let string = ""
function logUser(name = string){
   return `${name} has logged in for the day`;
}
string = "ken2cool"
console.log(logUser(string));

