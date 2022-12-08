// inputs
var input = "";
var aiInput = 0;
var tutSwitch = false;

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

// hide gifs 
$(".gif-display-win").hide();
$(".gif-display-lose").hide();

// get user value & mutes the buttons
function buttonPress(clicked) {
    switch(clicked) {
    case "Rock":
        input = 0;
        // blurs button 
        $("#button #paperbutton, #scissorsbutton").css("opacity", 1);
        $("#button #rockbutton").css("opacity", 0.6);

        // gets a random rock image
        $("#userChoice").html("<img src= ./imgs/Rock" + randomNum() + ".png alt='Rock Image'></img>");
        break;

    case "Paper":
        input = 1;
        // blurs button 
        $("#button #rockbutton, #scissorsbutton").css("opacity", 1);
        $("#button #paperbutton").css("opacity", 0.6);

        // gets a random paper image
        $("#userChoice").html("<img src= ./imgs/Paper" + randomNum() + ".png alt='Paper Image'></img>");
        break;

    case "Scissors":
        input = 2;
        // blurs button 
        $("#button #paperbutton, #rockbutton").css("opacity", 1);
        $("#button #scissorsbutton").css("opacity", 0.6);

        // gets a random scissor image
        $("#userChoice").html("<img src= ./imgs/Scissor" + randomNum() + ".png alt='Scissor Image'></img>");
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
            $("#randomChoice").html("<img src= ./imgs/Rock" + randomNum() + ".png alt='Paper Image'></img>");
        break;
        case 1:
            // gets a random paper image
            $("#randomChoice").html("<img src= ./imgs/Paper" + randomNum() + ".png alt='Paper Image'></img>");
        break;
        case 2:
            // gets a random scissor image
            $("#randomChoice").html("<img src= ./imgs/Scissor" + randomNum() + ".png alt='Scissor Image'></img>");
        break;
    }

    if (answer == 0) {
        //tie
        $(".results").css("color", "black")
        return "It's a tie!";
    }
    else if (answer == input || answer == -2) {
        //win
        $(".results").css("color", "green")
        //show winning gif
        $(".gif-display-win").show();
        setTimeout(function() {
            $(".gif-display-win").hide();
        }, 2000);

        return "You've won!";
    }
    else {
        //lose
        $(".results").css("color", "red")
        //show losing gif
        $(".gif-display-lose").show();
        setTimeout(function() {
            $(".gif-display-lose").hide();
        }, 800);
        return "You've lost!";
    }
    
};

// compare the choices on keypress
$(document).on("keypress", function(enter){
    if (enter.key == "Enter"){
        $(".results").html("<h1>" + fight() + "</h1>");
    }
});

// tutorial button
function tutorial(){
    tutSwitch = !tutSwitch;
    if (tutSwitch){
        $(".tutorial").html("<p onclick='tutorial()'><sup>Hide</sup></p><p>Click the option your wish to choose, then just hit <em>Enter</em> to play!</p>");
    }
    else {
        $(".tutorial").html("<p onclick='tutorial()'><sup>How to play?</sup></p>");
    }

}




