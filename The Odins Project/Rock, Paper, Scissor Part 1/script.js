function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0, 1, or 2

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      return "Unexpected result";
  }
}

function playRound(playerSelection, computerSelection) {
  let correction = playerSelection.toLowerCase();

  if (correction === computerSelection) {
    return `${correction} x ${computerSelection}: TIE`;
  } else if (correction === "rock" && computerSelection === "scissor") {
    return `${correction} x ${computerSelection}: WON`;
  } else if (correction === "paper" && computerSelection === "rock") {
    return `${correction} x ${computerSelection}: WON`;
  } else if (correction === "scissor" && computerSelection === "paper") {
    return `${correction} x ${computerSelection}: WON`;
  } else {
    return `${correction} x ${computerSelection}: LOSE`;
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
