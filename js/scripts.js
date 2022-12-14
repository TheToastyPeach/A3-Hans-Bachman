// inputs
var input = "";
var aiInput = 0;
var tutSwitch = false;
var sourceSwitch = false;
var boom = document.getElementById("boom");
var bingBong = document.getElementById("bingBong");

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
        bingBong.play();
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
        boom.play();
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

// sources button
function sources(){
    sourceSwitch = !sourceSwitch;
    if (sourceSwitch){
        $(".sources").html("<p onclick='sources()'><sup>Close</sup></p><ul>Sounds & gifs:<li>https://freesound.org/people/Bertrof/sounds/131660/</li><li>https://freesound.org/people/ljudman/sounds/33245/</li><li>https://giphy.com/stickers/explosion-bang-pow-gJ1zlEIw4c30qpyooF?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=</li><li>https://giphy.com/stickers/kurzgesagt-space-universe-infographic-RkN33Se0a99r6pMiZi?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=http%3A%2F%2F127.0.0.1%3A5500%2F</li></ul><p>All images are fair use!</p>");
    }
    else {
        $(".sources").html("<p onclick='sources()'><sup>Sources?</sup></p>");
    }

}




