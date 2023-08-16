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

// function logUser(string){
//     if(typeof string !== "string"){
//         return false;
//     }
//     return `${string} has logged in for the day`
// }
// console.log(logUser("ken2cool"));

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


//------------- Break ----------------

// topic: Object

/**
 * Wednesday -
 *     Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.
 *     Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object properly.
 * console.log(userObject.username) // “ken2cool”
 * console.log(userObject.email) // “ken2cool@yahoo.com”
 *     Bonus:
 *         I. Refactor your logUser function to use your userObject’s property of username vs. an hardcoded string literal argument - update the string return from logUser to also include the userObject.email property e.g.: “ken2cool with email ken2cool@yahoo.com has logged in for the day.”
 *         Ii. Refactor your userObject to have a userRoles property that is an array of strings listing the user’s roles - e.g “admin”, “moderator”, “buyer”, “seller” and other hypothetical roles a user could have on a website
 *         Iii. Refactor your user object to have a nested userProfile object property - this nested property should have a userProfileUrl property with a string value mocking a link to an image. The other property should be a userLocation property with a string value mocking a CityName, StateName location the user could be from. Finally, add a property called numLikes with a number value indicating the users received ‘likes’ in our hypothetical application.
 */

// let userObject = {
//     username : "ken2cool",
//     email: "ken2cool@yahoo.com",
//     userProfile: {
//         userProfileUrl: "http://indiavisa.co.in/",
//         userLocation: "San Antonio, Tx",
//         numLikes: 123
//     }
// }
// console.log(userObject.username);
// console.log(userObject.email);
//
// function logUser(string){
//
//     if(typeof string !== userObject.username){
//         return false;
//     }
//     return `${userObject.username} with an email ${userObject.email} has logged in for the day`
// }
// console.log(logUser());
//
// userObject.userRoles = ["admin", "moderator", "buyer","seller"]
// console.log(userObject);

//Warmup review below


let userObject ={
    username: "ken2cool",
    email: "ken2cool@yahoo.com"
}
console.log(userObject.username);
console.log(userObject.email);

function logUser(object){
    //needed to change string to object for readability and include the email in the conditionals statemnt.
    if(typeof object.username !== "string" || typeof object.email !== "string"){
        return false;
    }
    return `${userObject.username} with an email ${userObject.email} has logged in for the day`
}
// needed to log userObject within the logUser function to print the desired message
console.log(logUser(userObject));

userObject.userRoles = ["admin", "moderator", "buyer","seller"]

console.log(userObject.userRoles);
// I could have made the nested userProfile object with a dot notation like I did above.
userObject.userProfile ={
    userProfileUrl: "http://indiavisa.co.in/",
    userLocation: "San Antonio, Tx",
    numLikes: 123
}

console.log(userObject.userProfile);
console.log(userObject.userProfile.userLocation);
console.log(userObject.userRoles[2]);