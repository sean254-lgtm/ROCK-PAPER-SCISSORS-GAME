const hand = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];

}

function getHumanChoice(){
  let userInput = prompt("Please enter rock, paper or scissors: ");
  while(!userInput || !hand.includes(userInput.toLowerCase().trim())){
    userInput = prompt("Invalid choice!, try again")
  }

  return userInput.toLowerCase().trim();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Direct equality check before any other logic
  if (humanChoice.toLowerCase().trim() === computerChoice.toLowerCase().trim()) {
    return "It's a tie!";
  } else if (
    humanChoice.toLowerCase().trim() === "rock" &&
    computerChoice.toLowerCase().trim() === "scissors"
  ) {
    humanScore++;
    return "You win! " + humanChoice.toLowerCase().trim() + " beats " + computerChoice.toLowerCase().trim();
  } else if (
    humanChoice.toLowerCase().trim() === "paper" &&
    computerChoice.toLowerCase().trim() === "rock"
  ) {
    humanScore++;
    return "You win! " + humanChoice.toLowerCase().trim() + " beats " + computerChoice.toLowerCase().trim();
  } else if (
    humanChoice.toLowerCase().trim() === "scissors" &&
    computerChoice.toLowerCase().trim() === "paper"
  ) {
    humanScore++;
    return "You win! " + humanChoice.toLowerCase().trim() + " beats " + computerChoice.toLowerCase().trim();
  } else {
    computerScore++;
    return "You lose! " + computerChoice.toLowerCase().trim() + " beats " + humanChoice.toLowerCase().trim();
  }
}

function playGame(){
  for(let i = 0; i <= hand.length; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${i} : ${result}`);
  }

  if(humanScore > computerScore){
    return "You win the game!";
  } else if(computerScore > humanScore){
    return "You lose the game!";
  } else {
    return "Its a tie";
  }
}
