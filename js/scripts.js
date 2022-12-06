// Images for head
var characterImagesHeads = ["./imgs/head1.png", "./imgs/head2.png", "./imgs/head3.png"];

// Images for the body
var characterImagesBody = ["./imgs/body1.png", "./imgs/body2.png", "./imgs/body3.png"];

// Images for the feet
var characterImagesFeet = ["./imgs/foot1.png", "./imgs/foot2.png", "./imgs/foot3.png"];


//Background Colours
var colours = ["#301A4B", "#3D5A80"];

//Values to store current displayed image
var headIndex = 0;
var bodyIndex = 0;
var feetIndex = 0;
var currentColour = 0;

//Checking for clicks to update the images
$("#head").on("click", updateHead);
$("#body").on("click", updateBody);
$("#feet").on("click", updateFeet);

//Functions to update respective images
function updateHead() {
    headIndex++;
    if (headIndex >= characterImagesHeads.length){
        headIndex = 0;
    };

    $("#head").html("<img src= " + characterImagesHeads[headIndex] + " alt='HeadImage'></img>");
};

function updateBody() {
    bodyIndex++;
    if (bodyIndex >= characterImagesBody.length){
        bodyIndex = 0;
    };

    $("#body").html("<img src= " + characterImagesBody[bodyIndex] + " alt='Body Image'></img>");
};

function updateFeet() {
    feetIndex++;
    if (feetIndex >= characterImagesFeet.length){
        feetIndex = 0;
    };

    $("#feet").html("<img src= " + characterImagesFeet[feetIndex] + " alt='Foot Image'></img>");
};

//random character with keypress
$(document).on("keypress", function(one){
    if (one.key == "1"){
        //getting random values for arrays
        headIndex = Math.floor(Math.random() * characterImagesHeads.length);
        bodyIndex = Math.floor(Math.random() * characterImagesBody.length);
        feetIndex = Math.floor(Math.random() * characterImagesFeet.length);

        //updating the images
        updateHead();
        updateBody();
        updateFeet();
    }
});


//Changing theme with keypress
$(document).on("keypress", function(two){
    if (two.key == "2"){
        currentColour++;
        if (currentColour >= colours.length){
            currentColour = 0;
        };
    }

    $(".wrap").css("background-color", colours[currentColour]);
});