var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;


document.onkeyup = function(event) {
    var userGuess = string.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);
    var computerChoices[Math.floor(Math.random() * computerChoices.length)];


}