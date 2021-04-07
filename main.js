// return randomly rock paper or scissors
let computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

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
  let winner;
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
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (winner === "Computer") {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
};

let playGame = (rounds) => {
  for (i = 0; i < rounds; i++) {
    console.log(playRound(prompt(), computerPlay()));
  }
};

playGame(5);
