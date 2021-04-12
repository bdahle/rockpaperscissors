// return randomly rock paper or scissors
let computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

let playerScore = 0;
let computerScore = 0;
let winner;

// take two parameters
let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  // compare player selection and computer selection
  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  switch (playerSelection) {
    case "ROCK":
      winner = computerSelection === "PAPER" ? "Computer" : "Player";
      break;
    case "PAPER":
      winner = computerSelection === "SCISSORS" ? "Computer" : "Player";
      break;
    case "SCISSORS":
      winner = computerSelection === "ROCK" ? "Computer" : "Player";
      break;
  }
  if (winner === "Player") {
    playerScore++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (winner === "Computer") {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
};

const buttons = document.querySelectorAll("button");
const thisRoundResult = document.querySelector("h2");
const standings = document.querySelector("h3");
const winnerAnnouncement = document.querySelector("h4");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    thisRoundResult.textContent = playRound(this.textContent, computerPlay());
    standings.textContent =
      "Player: " + playerScore + "     Computer: " + computerScore;
    if (playerScore >= 5 || computerScore >= 5) {
      winnerAnnouncement.textContent = winner + " wins the game!";
    }
  });
});
