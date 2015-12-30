////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
 	var move = getInput(); 
	if ( move === 0 || move === “ “ || move === false ) {
	console.log(“That is not a valid option. Choose again.”);
	return getInput();
	} else if ( move !== ‘rock’ || move !== ‘paper’ || move !== ‘scissors’ ) {
	console.log(“That is not a valid option. Choose again.”);
	return getInput();
	} else {
	return move;
	console.log(“You chose “ + move); 
	}
}


function getComputerMove(move) {
    var move = randomPlay();
	return move; 
	console.log(“The computer chose “ + move); 
	
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
	if ( playerMove === computerMove ) {
		console.log(“It’s a tie.”);
	} 
	if ( playerMove === ‘rock’ && computerMove === ‘scissors’ ) {
		console.log(“You win.”);
	} else {
		console.log(“Computer wins.”);
	}
	if ( playerMove === ‘scissors’ && computerMove === ‘paper’ ) {
		console.log(“You win.”);
	} else {
		console.log(“Computer wins.”);
	}
	if ( playerMove === ‘paper’ && computerMove === ‘rock’ ) {
		console.log(“You win.”);
	} else {
		console.log(“Computer wins.”);
	}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

