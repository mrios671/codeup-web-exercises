// TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".

let deepInTheHeart = function(event){
    alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~");
}
document.getElementById("deep-in-the-heart").addEventListener("click", deepInTheHeart);


//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.

document.getElementById("what-color").addEventListener("click", function (){
    let color = document.getElementById ("what-color").style.color;
    document.getElementById("answer-color").textContent = color;
})

// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.

document.getElementById("tacoButton").addEventListener("click", function (){
    let userInput = document.getElementById("tacoBoutIt").value;
    document.getElementById("favorite-taco").textContent = userInput;
})

// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.

let listStates = document.getElementById("list-states");
let insertState = document.getElementById("insert-state");

listStates.addEventListener("mouseover", function (event){
    if (event.target.classList.contains("state-list-item")) {
        insertState.textContent = event.target.textContent;
    }
})

//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.

function delayedMessage() {
    let fiveSecDelay = document.getElementById("five-seconds");
    fiveSecDelay.textContent = "Oh, hey, didn't see you there";
}

window.addEventListener("load", function (){
    setTimeout(delayedMessage, 5000);
})