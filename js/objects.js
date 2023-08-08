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
     * Cameron bought $180, Ryan $250 and George $320.Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     *
     */

    // if they spend more than $200 they get a 12% discount
    // use conditions logging how much each person needs to pay
    //we know what they spent
        // need to display a line with each person's name, amount before discount, how much they got off their purchase, and the amount after the discount.
        //use a for each loop to iterate through the array and log relevant messages


    let shopper1 = {};
        shopper1.name = "Cameron";
        shopper1.amount = 180;

    let shopper2 = {};
        shopper2.name = "Ryan";
        shopper2.amount = 250;

    let shopper3 = {};
        shopper3.name = "George";
        shopper3.amount = 320;


    // if (shopper2.amount === 250) {
    //     console.log(`This shopper's name is; ${shopper2.name}`);
    //     console.log(`Before discount= $${shopper2.amount}`);
    //     let discount = (shopper2.amount * .12);
    //     console.log(`You get $${discount} off your order`);
    //     console.log(`After the discount is applied, your total is ${shopper2.amount - discount}`);
    // } else if (shopper3.amount === 320) {
    //     console.log(`This shopper's name is; ${shopper3.name}`);
    //     console.log(`Before discount= $${shopper3.amount}`);
    //     let discount = (shopper3.amount * .12);
    //     console.log(`You get $${discount} off your order`);
    //     console.log(`After the discount is applied, your total is ${shopper3.amount - discount}`);
    // } else {
    //     console.log(`This shopper's name is; ${shopper1.name}`);
    //     console.log(`You do not get a discount today.`);
    //     console.log(`Your total is ${shopper1.amount}`);
    // }
    //
    let shoppers = [shopper1, shopper2, shopper3]

    for (let i = 0; i < shoppers.length; i++) {

        if (shoppers[i].amount > 200) {
            let discount = (shoppers[i]. amount * .12)
            console.log(`Shopper's name : ${shoppers[i].name} \n Before discount = ${shoppers[i].amount} \n Discount is $${discount} \n Your total is = $${shoppers[i].amount - discount}`);

        } else {
            console.log(`Shopper's name : ${shoppers[i].name} \n You do not get a discount today, Your total is : $${shoppers[i].amount}`);
        }
    }

    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];


    //console.log(shoppers[2].amount);

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
    book3.title = "Forest of Stolen Girls";
    book3.author = {};
    book3.author.firstName = "June";
    book3.author.lastName = "Hur";

    let book4 = {};
    book4.title = "The Chronicles of Narnia: Prince Caspian";
    book4.author = {};
    book4.author.firstName = "C.S.";
    book4.author.lastName = "Lewis";

    let book5 = {};
    book5.title = "Iron Widow";
    book5.author = {};
    book5.author.firstName = "Xiran";
    book5.author.lastName = "Zhao";

    let books = [book1, book2, book3, book4, book5];
    console.log(books);

    books.forEach(function (val, i){
        console.log(`Book # ${i + 1} \n Title : ${books[i].title} \n Author : ${books[i].author.firstName} ${books[i].author.lastName}`)
    })

    // for (let i = 0; i < books.length; i++) {
    //
    //     console.log(``)
    // }

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
     *   previously.
     *   Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
// I used a youTube video for guidance. (JavaScript array of objects by Bro Code)

    console.log("---------- Bonus Question------------");

    function createBook (title, authorFirstName, authorLastName){
       let Book = {
           title : title,
           author : {
               firstName: authorFirstName,
               lastName : authorLastName
           }
       };
       return Book;
    }

let Book1 = createBook("One Italian Summer", "Rebecca", "Serle");
let Book2 = createBook("Banyan Moon", "Thao", "Thai");
let Book3 = createBook("Forest of Stolen Girls", "June", "Hur");
let Book4 = createBook("The Chronicles of Narnia: Prince Caspian", "C.S.", "Lewis");
let Book5 = createBook("iron Widow", "Xiran", "Zhao");

let Books = [Book1, Book2, Book3, Book4, Book5]
    console.log(Books);

Books.forEach(function (val, i){
    console.log(`Book # ${i + 1} \n Title : ${Books[i].title} \n Author : ${Books[i].author.firstName} ${Books[i].author.lastName}`)
    })

function showBookInfo(bookObject){
    let object = {
        bookObject : createBook
    };
    return object;
}

let object1 = showBookInfo(Book1);
let object2 = showBookInfo(Book2);
let object3 = showBookInfo(Book3);
let object4 = showBookInfo(Book4);
let object5 = showBookInfo(Book5);

let objects = [object1, object2, object3, object4, object5]
    console.log(objects);

    // function createBook(books) {
    //     for (let i = 0; i < books.length; i++) {
    //         if (books[i].title) {
    //             return books[i];
    //         }
    //
    //         if(books[i].author.firstName && books[i].author.lastName){
    //             return books[i];
    //         }
    //     }
    //     console.log(createBook(books));
    // }
    // console.log(createBook(books));


//     function createBook (){
//         if(books.title && (books.author.firstName + books.lastName)=== books){
//         console.log(books.push)
//     }
//     }
//
// console.log(createBook)





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