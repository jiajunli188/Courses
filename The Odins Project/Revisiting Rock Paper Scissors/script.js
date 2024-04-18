const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorDiv = document.querySelector(".scissor");

const pChoice = document.querySelector(".player-result");
const bChoice = document.querySelector(".bot-result");

const result = document.querySelector(".result");
const textColor = document.querySelector(".color-text");

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

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
};

const playerChoice = (pC) => {
  return () => {
    const botChoiceResult = getComputerChoice();

    pChoice.textContent = `Player Choose: ${pC}`;
    bChoice.textContent = `Bot Choose: ${botChoiceResult} `;

    if (pC === botChoiceResult) {
      textColor.style.color = "white";
      textColor.textContent = "IT'S A TIE";
    } else if (pC === "rock" && botChoiceResult === "scissor") {
      textColor.style.color = "green";
      textColor.textContent = "YOU WON";
    } else if (pC === "paper" && botChoiceResult === "rock") {
      textColor.style.color = "green";
      textColor.textContent = "YOU WON";
    } else if (pC === "scissor" && botChoiceResult === "paper") {
      textColor.style.color = "green";
      textColor.textContent = "YOU WON";
    } else {
      textColor.style.color = "red";
      textColor.textContent = "YOU LOSE";
    }

    result.textContent = `${pC} x ${botChoiceResult}: >`;
  };
};

rockDiv.addEventListener("click", playerChoice("rock"));
paperDiv.addEventListener("click", playerChoice("paper"));
scissorDiv.addEventListener("click", playerChoice("scissor"));
