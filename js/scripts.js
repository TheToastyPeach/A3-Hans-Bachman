// inputs
var input = "";
var aiInput = 0;
var displayedChoice = ["./imgs/head1.png", "./imgs/head2.png", "./imgs/head3.png"];

// get user value & mutes the buttons
function buttonPress(clicked) {
    switch(clicked) {
    case "Rock":
        input = 0;
        $("#button #paperbutton, #scissorsbutton").css("opacity", 1);
        $("#button #rockbutton").css("opacity", 0.6);
        break;
    case "Paper":
        input = 1;
        $("#button #rockbutton, #scissorsbutton").css("opacity", 1);
        $("#button #paperbutton").css("opacity", 0.6);
        break;
    case "Scissors":
        input = 2;
        $("#button #paperbutton, #rockbutton").css("opacity", 1);
        $("#button #scissorsbutton").css("opacity", 0.6);
        break;
    } 
    $("#userChoice").html("<img src= " + displayedChoice[input] + " alt='HeadImage'></img>");
};

// gen random value
function randomNum() {
    return Math.floor(Math.random() * 3);
};

// compare values 
function fight() {
    aiInput = randomNum();
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
        $("#userChoice").after("<p> " + aiInput + " </p>");
        fight();
    }
});