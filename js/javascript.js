// The Problem \\

/**
 Write A program that takes the input from the user which is
 rock paper or scissor then have the computer give an rng which
 will return rock papper or scissor and lastly create a if boolean which 
 maps every possisible scenerio
 */

// Plan \\

//let playerSelection
//let computerSelection
//function getComputerChoice

// player = p computer = c
//all possible losses for p
// p rock c paper = c
// p paper c scissors = c
// p scissors c rock = c
let userScore=0
let computerScore=0
function promptFunction() {
    const userChoice=prompt(`Welcome to Rock Paper Scissors type rock paper or scissor to play reload to restart
    ${"you: "+userScore} ${"terminator: "+computerScore}`).toLowerCase()
    const computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice)
  }
  function gameFunction(){
    for (let i = 0; i < 100; i++) {
      promptFunction()
      if (userScore>=5){
        alert("You have defeated The robot")
        break;
      }
      if (userScore>=5) {
        alert("You Have Defeated The Robot")
        break;
      } else if (computerScore>=5) {
        alert("You Have Been Defeated By The Robot")
        break;
      }
   }
  }

function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];


}

function playRound(playerSelection, computerSelection) {
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
    alert("How dare You Type That")
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
  playerSelection == "paper" && computerSelection == "scissor" ||
  playerSelection == "scissor" && computerSelection == "rock") {
    alert("you are a loser")
    computerScore++
  } else if(playerSelection == "paper" && computerSelection == "rock" ||
  playerSelection == "scissor" && computerSelection == "paper" ||
  playerSelection == "rock" && computerSelection == "scissor") {
    alert("you are a winner")
    userScore++
  } else {
    alert("you have tied");
  }
}
gameFunction()