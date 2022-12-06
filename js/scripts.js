// inputs
var input = "";
var aiInput = 0;


// get user value
function buttonPress(hotsex) {
    switch(hotsex) {
    case "Rock":
        input = 0;
        break;
    case "Paper":
        input = 1;
        break;
    case "Scissors":
        input = 2;
        break;
    } 
};

// gen counter value
function randomInput() {
    aiInput = Math.floor(Math.random() * 3);
};

// compare values 
function fight() {
    var answer = input - aiInput;

    if (answer == 0) {
     //Tie
     console.log(input);
     console.log(aiInput);
     console.log("tie");
    }
    else if (answer == input || answer == -2) {
        //win
        console.log(input);
        console.log(aiInput);
        console.log("win");
    }
    else {
        //lose
        console.log(input);
        console.log(aiInput);
        console.log("lose");
    }
    
};

$(document).on("keypress", function(enter){
    if (enter.key == "Enter"){
        randomInput();
        fight();
    }
});