var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var pickLetter = function() {
    return randomChoice;
}
var uGuessed = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}
var whatsGuessed = function() {
    document.querySelector("#guesses").innerHTML = guessedLetters.join(" ");
}
var newGame = function() {
    guesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    pickLetter();
    uGuessed();
    whatsGuessed();
}

pickLetter();
uGuessed();

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

    guessedLetters.push(userGuess);
    uGuessed();
    whatsGuessed();

    if (guessesLeft > 0) {
        if (userGuess === pickLetter) {
            wins++;
            document.querySelector("wins").innerHTML() = wins;
            newGame();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        newGame();
    }

}