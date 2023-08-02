"use strict";

/**
 * TODO: check
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/*
let myName = "Nani"
function sayHello(name = myName) {
    return "Hello, " + name + "!";
}
let helloMessage = sayHello();
console.log(helloMessage);
alert(helloMessage);

*/

// the following is what we went over during the review
/*
function sayHello(name){
    let nameInput = name;
    //return `Hello, ${nameInput}!`;
    return "Hello, " + nameInput + "!";
 }
 let helloMessage = sayHello("Nani");
 console.log(helloMessage);
 */


/**
 * TODO:check
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:check
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
/*
let random = Math.floor((Math.random() * 3) + 1);

function isTwo (number) {

    return number === 2;
}

console.log(isTwo(random));
*/

// The following is what we went over during the review:

/*

// declared function - isTwo
//one Param === number
// return if number === 2

function isTwo (number) {
    return number ===2;
}

console.log("the random number is " + random);
//`The random number is ${random}`
console.log(isTwo(random));

 */

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
TODO:
  [ ] function called 'isTwo' that takes a number as a parameter
  [ ] return true if number is 2
    [] call function with random number

 */
/*
function calculateTip (percentage , bill) {
    let number = percentage * bill;
    return number;
}
let totalBill = prompt ("What was your total bill?");
let tipPercentage = prompt("What percentage would you like to tip?");
alert("You should tip $" + (calculateTip(tipPercentage, totalBill)));
console.log(calculateTip(tipPercentage , totalBill));
*/

//Below is what we went over during the exercise review

//declared function calculateTip
//two param === decimalTip, totalBill
// return deciamlTip + totalBill

/*
function calculateTip(decimalTip, totalBill) {

    return decimalTip + totalBill;
}
console.log(calculateTip(.20, 20));

let tipPercent = Number(prompt("What percent would you like to tip?")):

let tipDeci = tipPercent/100;

let billTotal = Number(prompt("How much was your bill today?"));

alert(`${calculateTip(tipDeci, billTotal} is your tip amount for today`);
*/


/**
 * TODO:
 * [ ] Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant.
 * The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


function applyDiscount(price, percentage) {
    let number = price * percentage;
    return price - number;
}
let originalPrice = prompt("How much was the item you were trying to buy?")
let discountPercent = prompt ("What percentage is the discount for that item?")
alert("Your total after the discount is applied will be $" + parseFloat(applyDiscount(originalPrice, discountPercent)).toFixed(2));
console.log(parseFloat(applyDiscount(originalPrice, discountPercent)).toFixed(2));

// Below is what we ewnt over during class review

/*
let discountPercentRandom = Math.random().toFixed(2);

function applyDiscount(originalPrice, discountPercent){

    return originalPrice - (originalPrice * discountPercent);

}
console.log(`${discountPercentRandom} is the decimal we are passing inot the applyDiscount function`);
console.log(applyDiscount(100, discountPercentRandom));

 */







