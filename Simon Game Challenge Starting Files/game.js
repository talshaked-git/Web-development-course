var gamePattern = [];
var buttonColours = ["red", "blue", "green","yellow"];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(level);
});

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(chosenBtn) {
    $("#"+chosenBtn).addClass("pressed");
    setTimeout(function () {
        $("#"+chosenBtn).removeClass("pressed");
    }, 100)
};

$(document).keypress(function() {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
      nextSequence();
      gameStarted = true;
    }
  });

