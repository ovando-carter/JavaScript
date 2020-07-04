let doorImage1 = document.getElementById('door1');// selects the element with the id='door1'
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start-row'); // selects the button in the HTML file with the id='start-row'

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg" // this is the image of the robot behind the door.
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg" // this is the image of the beach
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg" // this is the image of space
let closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let numClosedDoors=3; // a global variable that sets the number of doors int he game. 
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

//this is where it starts to crash, not sure why. Where is the isBot(door) informations being sent from? 
const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}// starting to create the case for the looser. 
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
} 
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
  }else if (isBot(door)) {
  gameOver('lose');
}// this checks to see if a doors src contains the game-ending ChoreBot. 
}

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors); // this part will create a random number and then round it to the nearest whole number. Will be fixed between 0, 1, and 2 due to the use of numCloseDoors.
  if(choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else{ (choreDoor === 2) 
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
} // randomly generate the door that hides the ChoreBot.

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
//doorImage1.src=botDoorPath// this allows the door to 'open' and show the robot behind the door. Notice that this is for door 1. 
  doorImage1.src=openDoor1; // modified code, to accept the new random door operator.
  playDoor(door1);
} 
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
//doorImage2.src=beachDoorPath // will see beach when door opens
  doorImage2.src=openDoor2; 
  playDoor(door2);
} 
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)) {
//doorImage3.src=spaceDoorPath // will see space when door opens
  doorImage3.src=openDoor3;
  playDoor(door3);
} 
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
  startRound();
}
}

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
}else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentlyPlaying = false;
}

startRound();