(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    let person = {};
    console.log(person);

    person.firstName = "Milianigia";
    person.lastName = "Rios";

    console.log(person.firstName);
    console.log(person.lastName);

    person.sayHello = function (){
        console.log(`Hello! My name is ${person.firstName} ${person.lastName}`);
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //
    // let shopperDiscount = {};
    // let amount= {};
    //
    // if (amount > 200){
    //     shopperDiscount = .12
    //     return amount * shopperDiscount;
    // }else{
    //     return "You do not qualify fo rhe discount."
    // }
    //
    //
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log(shoppers[2].amount);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let book1 = {};
    book1.title = "One Italian Summer";
    book1.author = {};
    book1.author.firstName = "Rebecca";
    book1.author.lastName = "Serle";

    let book2 = {};
    book2.title = "Banyan Moon";
    book2.author = {};
    book2.author.firstName = "Thao";
    book2.author.lastName = "Thai";

    let book3 = {};
    book3.title = "Banyan Moon";
    book3.author = {};
    book3.author.firstName = "Thao";
    book3.author.lastName = "Thai";

    let books = [book1, book2];
    console.log(books);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //Below is what we went over during lecture

        //facts about my first car
        //2008 Grey Nissan Maxima with modified transmission and racing tires
//
//     let myFirstCar = {};
//     console.log(myFirstCar);
//
//     myFirstCar.make = "Nissan";
//     console.log(myFirstCar);
//     myFirstCar.model = "Maxima";
//     myFirstCar.year = 2008
//     myFirstCar.color = "Grey";
//     myFirstCar["Features"] = "racing tires", "modified v8 engine", "lowered",
//
//     console.log(myFirstCar);
//
//     let mySecondCAr = {
//         year: 2017,
//         color: "Green",
//         make: "Honda",
//         model: "HR-V",
//         features: ["all wheel tires", "safety locks", "back seats"],
//         transmission: "Automatic"
//         }
//
//         console.log(mySecondCAr);
//     mySecondCAr.numberOfSeats= 5;
//     console.log(mySecondCAr);
//
//
//     let myGarage = [myFirstCar, mySecondCAr];
//     console.log(myGarage);
//
//     for (let i = 0; i < myGarage.length; i++) {
//
//     console.log(`Here are some info about a car I owned: This is a ${myGarage[i].make} ${myGarage[i].model}. It is a ${myGarage[i].year} with these features ${myGarage[i].features}`);
//
//     console.log(myGarage[0].make + " " + myGarage[0].model);
// }
})();