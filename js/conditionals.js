"use strict";

/* ########################################################################## */

/*
 * TODO
 * Create a function named `analyzeColor` that accepts a string that is a color name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/* //the following is what I did for the exercise
let analyzeColor = " "
console.log(analyzeColor);

if (analyzeColor === "purple"){
    console.log("Borahae <3.");
} else if (analyzeColor === "yellow") {
    console.log("The color of sunshine, love it!");
} else if (analyzeColor === "pink") {
    console.log("Hey Barbie! Looking good!")
} else {
    console.log("I love that color too!")
}
*/
/* THE FOLLOWING IS WHAT WE WENT OVER AT THE END OF CLASS

function analyzeColor(color) {
       let lowercasedColor = color.toLowerCase;

    if (lowercasedColor === "red") {
        return "Red is the color of blood";
    } else if (lowercasedColor === "red") {
        return "orange is the color of blood";
    } else if (lowercasedColor === "red") {
        return "yellow is the color of blood";
    } else if (lowercasedColor === "red") {
        return "green is the color of blood";
    } else if (lowercasedColor === "red") {
        return "blue is the color of blood";
    } else if (lowercasedColor === "red") {
        return "indigo is the color of blood";
    } else if (lowercasedColor === "red") {
        return "violet is the color of blood";
    } else {
        return "I do not know anything about that color."
}

console.log(analyzeColor("red));
console.log(analyzeColor("white));

 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/*
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
let analyzeColor = randomColor;
console.log(analyzeColor);
*/

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/*

// BELOW IS WHAT I DID DURING THE EXERCISE
let analyzeColor = prompt("What is your favorite color?");

switch (analyzeColor) {
    case "red":
        console.log("Roses are red.");
        alert("Roses are red.");
        break;
    case "orange":
        console.log("Roses are red.");
        alert("Mandarins are orange.");
        break;
    case "yellow":
        console.log("Bananas are yellow");
        alert("Bananas are yellow");
        break;
    case "green":
        console.log("Grass is green.");
        alert("Grass is green.");
        break;
    case "blue":
        console.log("The ocean is blue.");
        alert("The ocean is blue.");
        break;
    case "indigo":
        console.log("Denim is indigo.");
        alert("Denim is indigo.");
        break;
    case "violet":
        console.log("Eggplants are violet.");
        alert("Eggplants are violet.");
        break;
    default:
        console.log(analyzeColor + " is a beautiful color");
        alert(analyzeColor + " is a beautiful color");
        break;
}
*/

//THE FOLLOWING IS WHAT WE WENT OVER IN THE EXERCISE REVIEW AT THE END OF CLASS

/*

function analyzeColor(color) {
    switch (color.toLowerCase()); {
        case "red" :
            return("Roses are red.");
            alert("Roses are red.");
            break;
        case "orange":
            return("Roses are red.");
            alert("Mandarins are orange.");
            break;
        case "yellow":
            return("Bananas are yellow");
            alert("Bananas are yellow");
            break;
        case "green":
            return("Grass is green.");
            alert("Grass is green.");
            break;
        case "blue":
            return("The ocean is blue.");
            alert("The ocean is blue.");
            break;
        case "indigo":
            return("Denim is indigo.");
            alert("Denim is indigo.");
            break;
        case "violet":
            return("Eggplants are violet.");
            alert("Eggplants are violet.");
            break;
        default:
            return(analyzeColor + " is a beautiful color");
            alert(analyzeColor + " is a beautiful color");
            break;
    }
}
let userColor = prompt("Enter a color.")
alert(analyzeColor(userColor);
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*

//BELOW IS WHAT I DID DURING EXERCISE TIME

let luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = prompt("What is the total amount you spent?");
let discount = " ";
//let calculateTotal= totalAmount * discount;
//let discountedPrice = calculateTotal

if (luckyNumber === 0) {
    alert("Your lucky number is '0'.");
    discount = .0;
    alert("You get no Discount");
    console.log(totalAmount * discount)
    alert("Your total for today is $" + totalAmount);
} else if (luckyNumber === 1) {
    alert("Your lucky number is '1'.");
    discount = .10;
    alert("You get a 10% Discount");
    console.log(totalAmount * discount)
    alert("You get $" + (totalAmount * discount) + " off your purchase.");
    alert("Your total for today is $" + (totalAmount-(totalAmount * discount)));
} else if (luckyNumber === 2) {
    alert("Your lucky number is '2'.");
    discount = .25;
    alert("You get a 25% Discount");
    console.log(totalAmount * discount)
    alert("You get $" + (totalAmount * discount) + " off your purchase.")
    alert("Your total for today is $" + (totalAmount-(totalAmount * discount)));
} else if (luckyNumber === 3) {
    alert("Your lucky number is '3'.");
    discount= .35;
    alert("you get a 35% Discount");
    console.log(totalAmount * discount)
    alert("You get $" + (totalAmount * discount) + " off your purchase.")
    alert("Your total for today is $" + (totalAmount-(totalAmount * discount)));
} else if (luckyNumber === 4) {
    alert("Your lucky number is '4'.");
    discount= .50;
    alert("you get a 50% Discount");
    console.log(totalAmount * discount)
    alert("You get $" + (totalAmount * discount) + " off your purchase.")
    alert("Your total for today is $" + (totalAmount-(totalAmount * discount)));
} else if (luckyNumber === 5) {
    alert("Your lucky number is '5'.");
    discount = 1;
    alert("Everything is Free!");
    console.log(totalAmount * discount)
    alert("You get $" + (totalAmount * discount) + " off your purchase.")
    alert("Your total for today is $" + (totalAmount-(totalAmount * discount)));
} else {
    alert("No Discount");
    console.log(totalAmount * discount)
    alert("Your total for today is $" + totalAmount);
}
*/

//THE FOLLLOWING IS WHAT WE WENT OVER IN THE EXERCISE REVIEW DURING THE END OF CLASS



function calculateTotal(lucky, price) {
    if (lucky === 0) {
        return "Your total after discount is: $" + (price);
    } else if (lucky === 1) {
        return "Your total after discount is: $" + (price - (.10 * price));
    }else if (lucky === 2) {
        return "Your total after discount is: $" + (price - (.25 * price));
    }else if (lucky === 3) {
        return "Your total after discount is: $" + (price - (.35 * price));
    }else if (lucky === 4) {
        return "Your total after discount is: $" + (price - (.50 * price));
    }else if (lucky === 5) {
        return "Your total after discount is: $" + price - (price - price);
    }
}

console.log(calculateTotal(4, 33));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(2, 53));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

//BELOW IS WHAT WE WENT OVER DURING CLASS REVIEW
/*
var luckyNumber = Math.floor(Math.random() * 6);

let userTotal = prompt("What was your bill total?");

alert(`Your lucky number is ${luckyNumber}`);
alert(`Your price before discount was $${userTotal}`);
alert(`${calculateTotal(luckyNumber, userTotal)}`)
*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//BELOW IS WHAT I DID DURING EXERCISE TIME

/*
let confirmed = confirm("Would you like to enter a number?");
console.log(confirmed);
let numberQuestion = prompt("Please input your number.")


if (numberQuestion % 2 === 0) {
    alert("The number is even.")
    console.log("The number is even.");
} else {
    alert("The number is odd.")
    console.log("The number is odd.");
}

let plusOneHundred = parseInt(numberQuestion, num);
alert(numberQuestion + plusOneHundred);

if (numberQuestion > 0) {
    alert("The number is positive")
    console.log("The number is positive.")
} else {
    alert("The number is negative.")
    console.log("The number is negative.")
}

 */

//THE FOLLOWING IS WHAT WE WENT OVER DURING EXERCISE REVIEW

/*let userConfirm= confirm("Would you like to enter a number?");

if(userConfirm) {
    let userNumber= prompt("Please enter a number.");

    if(!isNaN(userNumber)) {
        let parsedNumber = parseFloat(userNumber);

        let evenOrOddMessage = (parsedNumber % 2===0) ? "Your number is even!" : "Your number is odd!";
        alert(evenOrOddMessage);

        /* this would be the above ternary written out
        let evenOrOddMessage = " ";
          if (parsedNumber % 2 ===0) {
          evenOrOddMessage = "Your number is even!"
          } else {
            evenOrOddMessage = "Your number is odd!";
        }
         */
/*
        alert(`Your number plus 100 is: ${parsedNumber + 100}`);

        let positiveNegativeMessage = (parsedNumber >= 0) ? "Your number is positive!" : "Your number is negative!";

        alert(positiveNegativeMessage);
    } else {
        alert("Hey, that's not a number!");
    }
}*/