"use strict";

 console.log("Hello from external JavaScript");

        alert("Welcome to my website!");

    let userAnswer = prompt("What is your favorite color?");

        alert("Wow! " + userAnswer + " is my favorite color too!");

//above is the first half of the html exercises from 7-27-23

//below is part one of the four prompts of the previous lesson's exercise.it is asking the user how ling they want to rent movies and giving them the total
        alert("I heard that you liked movies...");

    let ppd= 3;

    let movieRentalQuestion = confirm("Did you know that our movie rentals are only $3 per day?");

    let lmQuestion = prompt("How many days were you thinking of renting 'The Little mermaid'?");
    let lmQuestionTotal = lmQuestion * ppd

        alert("Great! To rent for " + lmQuestion + " days will only cost you " + (lmQuestionTotal) + " dollars!");

    let bbQuestion = prompt("How many days were you thinking of renting 'Brother Bear'?");
    let bbQuestionTotal = bbQuestion * ppd

         alert("Great! To rent for " + bbQuestion + " days will only cost you " + (bbQuestionTotal) + " dollars!");

    let hrcQuestion = prompt("How many days were you thinking of renting 'Hercules'?");
    let hrcQuestionTotal = hrcQuestion * ppd

         alert("Great! To rent for " + hrcQuestion + " days will only cost you " + (hrcQuestionTotal) + " dollars!");

         alert("Given your provided answers, to rent all three movies will be a total of " + (lmQuestionTotal + bbQuestionTotal + hrcQuestionTotal) + " dollars.");

//below is part two of the following lesson's exercise. it is asking for the users total pay for the week.

        alert("Let's now go over how much you get paid to work (weird change of subject, I know...)");

    let googleHours = prompt("How many hours do you work for Google per week?");
    let googlePay = prompt("How much do you get paid per hour with Google?");

    let googleTotal = googleHours * googlePay;

        alert("Good for you, keep it up!");

    let amazonHours = prompt("How many hours do you work for Amazon per week?");
    let amazonPay = prompt("How much do you get paid per hour with Amazon?");

    let amazonTotal = amazonHours * amazonPay;

        alert("Great Job! Not everyone can do it like you.");

    let facebookHours = prompt("How many hours do you work for Facebook per week?");
    let facebookPay = prompt("How much do you get paid per hour with Facebook?");

    let facebookTotal = facebookHours * facebookPay;

        alert("Thats crazy!");

    let weeklyPay = googleTotal + amazonTotal + facebookTotal

        alert("Given your provided answers, your total pay for the week equates to $" + weeklyPay);

//below is part three for the exercise from the previous lesson.

    let roomInClass = true;
    let fitInSchedule = false;
    let canAttendClass = confirm(roomInClass && fitInSchedule)
    console.log(canAttendClass);

//Below is part four for the exercise from the previous lesson.

    let moreThanTwo = true;
    let premiumMember = false;
    let offerIsValid = true;

    let canHaveDiscount = confirm((moreThanTwo || premiumMember) && offerIsValid);
    console.log(canHaveDiscount);

