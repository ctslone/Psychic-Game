// pseudo code
// page loads and displays HTML elements. maybe alert the user how to play the game...press any key to guess what letter the psychic is thinking of
// create variables to hold the following: wins, losses, guesses remaining, letters the user has guessed
// user document.onkeyup to begin the sequence. user guesses a letter and the computer guesses a letter from an array/string of letters in the alphabet
// if the user guess is equal to the computer guess then add to wins. reset the guessed letters and computer guess a new letter ELSE if the user guess not equal to computer guess, subtrsct from guesses remaining, add guessed letter to letters guessed, computer not guess new letter
// if guesses remaining = 0 then alert the user "You lost" and add to losses counter. reset the guesses remainig and letters guessed

// NOT FOR SUBMISSION. TESTING ONLY. THIS VERSION ALLOWS DUPLICATE GUESSES AND NON-LETTER KEYS

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
    var userLetter = event.key;
    // logging the users guess and the psychic guess
        console.log ("User Guess: " + userLetter);
        console.log ("Psychic guess: " + psychicGuess);
    // statement that compares guesses and adds to wins if letters match
    

    if (userLetter === psychicGuess) {
        winner();
        reset();
        return;
        };
        console.log ("Wins so far: " + wins);
    // if the guessed letters dont match, subtract a guess left, add to the user guesses array. if the guesses left are > 0 dont subtract. If the guesses left are > 0 then subtract one
    if (userLetter != psychicGuess) {
        userGuesses += " " + userLetter + ",";
        remainingGuessFunction();
    }

    // functions
    function remainingGuessFunction() {
        if (guessesLeft <= 1)
            {losses++;
            reset();
            } 
        else if (guessesLeft > 0) 
            {guessesLeft--;}
    }

    function winner() {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        console.log ("I win");
        
    }
    // }
    function reset() {
        userGuesses = [];
        document.getElementById("user-guesses").innerHTML = "You have guessed: " + userGuesses;
        guessesLeft = 10;
        document.getElementById("guesses-left").innerHTML = "Guesses left : " + guessesLeft;
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
}
