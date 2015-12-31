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
    if ( move === 'rock' || move === 'paper' || move === 'scissors') {
        return "You chose " + move;
    } else {    
	return "You chose " + getInput();
    }
}

function getComputerMove() {
	return "The computer chose "  + randomPlay(); 
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getInput();
    console.log("The player chose " + playerMove);
    computerMove = randomPlay();
    console.log("The computer chose " + computerMove);
	if ( playerMove === computerMove ) {
		winner = "No winner.";
		console.log("The winner is " + winner);
		return "It’s a tie.";
	} 
	
	else if ( playerMove === "rock") {
	    if ( computerMove === "scissors") {
	        winner = "You.";
	        console.log("The winner is " + winner);
	      return winner;  
	    } else {
	        winner = "Computer.";
	        console.log("The winner is " + winner);
		 return winner;
	}
	}
	else if ( playerMove === "scissors" ) {
	    if ( computerMove === "paper") {
	        winner = "You.";
	        console.log("The winner is " + winner);
		return winner;
	} else {
	    winner = "Computer.";
	    console.log("The winner is " + winner);
		return winner;
	}
	}
	else if ( playerMove === "paper" ) {
	    if (computerMove === "rock") {
	        winner = "You.";
	        console.log("The winner is " + winner);
		return winner;
	} else {
	    winner = "Computer.";
	    console.log("The winner is " + winner);
		return winner;
	}
	}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var games;
    for ( games = 0; games <= 11; games++ ) {
	var winner = getWinner();
	if ( winner === "You." ) {
	console.log("You beat the computer.");
	 playerWins += 1;
	} else if ( winner === "Computer." ) {
	console.log("The computer beat you.");
	 computerWins += 1;
	} else if ( winner === "No winner." ) {
	   console.log("The result is a tie. Play again.");
	} else {
	    console.log("Tie game.");
	}
	 console.log("The score is currently " + playerWins + " to " + computerWins);
   }
}
