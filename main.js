// return randomly rock paper or scissors
let computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * options.length);
  console.log(random, options[random]);
  return options[random];
};

computerPlay();
