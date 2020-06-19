const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
  return userInput;
} else {
  console.log('Error! Please write rock papare of scissors');
}
};

//testing it with valie and invalid choices
//console.log(getUserChoice('paper')); // should print 'paper'
//console.log(getUserChoice('fork')); // should print 'Error!' and `undefined

//allow the computer to make a choice. 
const getComputerChoice =  () => {
const randomNumber = Math.floor(Math.random()*3);

//console.log(getComputerChoice())

switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
};

const determineWinner = (userChoice, computerChoice) =>{
if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if(userChoice === 'bomb')
return "Congratualtions you used the cheat code to win - cheater."
};

//this is a test to see if its working. 
//console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
//console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
//console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'


const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();