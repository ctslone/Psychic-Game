// pseudo code
// page loads and displays HTML elements. maybe alert the user how to play the game...press any key to guess what letter the psychic is thinking of
// create variables to hold the following: wins, losses, guesses remaining, letters the user has guessed
// user document.onkeyup to begin the sequence. user guesses a letter and the computer guesses a letter from an array/string of letters in the alphabet
// if the user guess is equal to the computer guess then add to wins. reset the guessed letters and computer guess a new letter ELSE if the user guess not equal to computer guess, subtrsct from guesses remaining, add guessed letter to letters guessed, computer not guess new letter
// if guesses remaining = 0 then alert the user "You lost" and add to losses counter. reset the guesses remainig and letters guessed
// added no dublicate guesses and only letters can be pressed functionality to the game

// defining global variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var guessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var directionsText = document.getElementById ("directions-text");
var gameTitle = document.getElementById ("game-title");
var promptText = document.getElementById ("prompt-text");
var winsText = document.getElementById ("wins-text");
var lossesText = document.getElementById ("losses-text");
var guessLeftText = document.getElementById ("guesses-left");
var userGuessText = document.getElementById ("user-guesses");
var psychicGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
    console.log ("New winning letter is: " + psychicGuess)

// using onkeyup to begin the sequence of events. functions will run to compare the user guess to the computer guess
document.onkeyup = function (event) {
    // when user presses key, the result gets stored in the userLetter
    var userLetter= event.key;
    // logging the users guess and the psychic guess
        console.log ("User Guess: " + userLetter);
        console.log ("Psychic guess: " + psychicGuess);
    // not allowing duplicate guesses
    if (userGuesses.includes(userLetter)) {
        alert("You already guessed that letter! Guess again!")
        return;  
    }
    // only allows letters to be pressed. if anything other than letter is pressed, alert user
    if (event.keyCode > 64 && event.keyCode < 91) {
        console.log ("user selected a letter");
        // if guessed letters match, run the winner function and log out current number of wins
        if (userLetter === psychicGuess) {
            winner();
            };
            console.log ("Wins so far: " + wins);
        // if the guessed letters dont match, subtract a guess left, add to the user guesses array. if the guesses left are > 0 dont subtract. If the guesses left are > 0 then subtract one guess
        if (userLetter != psychicGuess) {
            userGuesses += " " + userLetter + ",";
            remainingGuessFunction();
            }
    }
    else alert("You can only guess letters!");

    // functions
    // run if the user guess is != to psychic guess
    function remainingGuessFunction() {
        if (guessesLeft <= 1) {
            losses++;
            reset();
            } 
        else if (guessesLeft > 0) {
            guessesLeft--;
        }
    }
    // run if the user wins
    function winner() {
        wins++;
        userGuesses = [];
        guessesLeft = 10;  
    }
    // runs of the user runs out of guesses
    function reset() {
        userGuesses = [];
        guessesLeft = 10;
        psychicGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
        console.log ("New winning letter is: " + psychicGuess); 
    }

    

    // writing text to the page to display game variables
    directionsText.textContent = ""; 
    gameTitle.textContent = "The Psychic Alphabet Game!";
    promptText.textContent = "Guess what letter I am thinking of...";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses left: " + guessesLeft;
    userGuessText.textContent = "You have guessed: " + userGuesses;
};









