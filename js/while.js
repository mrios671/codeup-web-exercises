"use strict";

//create a while loop
//use a console.log() to make a series of outputs that equals 2^ 16 power.

//below is what I was trying to do on my own
// let i=0;
//
// while(i === 2**16) {
//     console.log(i);
//     i++;
// }

let input = 2;
while(input <= 65536) {
    console.log(input);
    input*=2;
}


//the following is what I got based off an internet search(not chat gpt)


// let total =2;
// let raisedPower= 0
// function numberToPower(number, power){
//     raisedPower= 16;
//
//     while(power < 0){
//         total *= number;
//         power--;
//     }
//     return total;
// }
//
// console.log(numberToPower);

//Do While Loop

//generate a random number between 50 and 100
//random number equals the amt of cones to sell before loop
//(inside loop) generate another random number between 1 and 5 (equals the amount of cones each customer bought
//us a do-while loop to show the amt of cones sold to each person.

// do{
//     let allCones = Math.floor(Math.random() * 50) + 50;
//     console.log(allCones);
// }while()