let userInput = document.getElementById("userInput");
let textElement = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function numberFact(userInputValue){
    let url = "https://apis.ccbp.in/numbers-fact?number=";
    let options = {
        method : "GET"
    };
    let numFact = url + userInputValue ;
    fetch(numFact,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        textElement.textContent = jsonData.fact;
        console.log(jsonData);
    });
}

userInput.addEventListener("keydown",function(event){
    let userInputValue = userInput.value;
    if(event.key === "Enter"){
        numberFact(userInputValue);
    }
});