// inputs
var input = "";
var aiInput = 0;

// rock images
var displayedChoiceRocks = ["./imgs/head1.png", "./imgs/head2.png", "./imgs/head3.png"];

// paper images
var displayedChoicePapers = ["./imgs/body1.png", "./imgs/body2.png", "./imgs/body3.png"];

// scissor images
var displayedChoiceScissors = ["./imgs/foot1.png", "./imgs/foot2.png", "./imgs/foot3.png"]; 

// gen random value
function randomNum() {
    return Math.floor(Math.random() * 3);
};

// get user value & mutes the buttons
function buttonPress(clicked) {
    switch(clicked) {
    case "Rock":
        input = 0;
        // blurs button 
        $("#button #paperbutton, #scissorsbutton").css("opacity", 1);
        $("#button #rockbutton").css("opacity", 0.6);

        // gets a random rock image
        $("#userChoice").html("<img src= " + displayedChoiceRocks[randomNum()] + " alt='HeadImage'></img>");
        break;

    case "Paper":
        input = 1;
        // blurs button 
        $("#button #rockbutton, #scissorsbutton").css("opacity", 1);
        $("#button #paperbutton").css("opacity", 0.6);

        // gets a random paper image
        $("#userChoice").html("<img src= " + displayedChoicePapers[randomNum()] + " alt='HeadImage'></img>");
        break;

    case "Scissors":
        input = 2;
        // blurs button 
        $("#button #paperbutton, #rockbutton").css("opacity", 1);
        $("#button #scissorsbutton").css("opacity", 0.6);

        // gets a random scissor image
        $("#userChoice").html("<img src= " + displayedChoiceScissors[randomNum()] + " alt='HeadImage'></img>");
        break;
    } 

};



// compare values 
function fight() {
    aiInput = randomNum();
    var answer = input - aiInput;

    switch(aiInput) {
        case 0:
            // gets a random rock image
            $("#randomChoice").html("<img src= " + displayedChoiceRocks[randomNum()] + " alt='HeadImage'></img>");
        break;
        case 1:
            // gets a random paper image
            $("#randomChoice").html("<img src= " + displayedChoicePapers[randomNum()] + " alt='HeadImage'></img>");
        break;
        case 2:
            // gets a random scissor image
            $("#randomChoice").html("<img src= " + displayedChoiceScissors[randomNum()] + " alt='HeadImage'></img>");
        break;
    }

    if (answer == 0) {
     //Tie
     return "It's a tie!";
    }
    else if (answer == input || answer == -2) {
        //win
        return "You've won!";
    }
    else {
        //lose
        return "You've lost!";
    }
    
};

//compare the choices on keypress
$(document).on("keypress", function(enter){
    if (enter.key == "Enter"){
        $("#results").html("<h1>" + fight() + "</h1>");
    }
});