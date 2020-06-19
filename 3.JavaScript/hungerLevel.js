// this is a conditional statement relationg to hunger level

let hungerLevel = 10 ; 
if (hungerLevel<=7){
  console.log('Time to eat!')
} else{
  console.log('We can eat later!')
}

//the following is a condidtional statement relationg to tiredness

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8 ){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}

let tool = '';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


//Ternary Operators
let isLocked = false;

isLocked ? 
  console.log('You will need a key to open the door.') : 
  console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'?
  console.log('I love that!'):
  console.log("I don't love that!");
  
  
 // Else If Statements
 let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}

else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');  }

  else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');  }

  else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');  }
  
  else {
  console.log('Invalid season.');
}

//The switch keyword
let athleteFinalPosition = 'first place';


switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}// Prints 'You get the gold medal!'


//lucky eight ball
var userName = " "; 
var randomNumber = Math.floor(Math.random() * 8);


userName === 'Jane' ? console.log("Hello, Jane!") : console.log("Hello!");

let userQuestion = " Am I Smart? ";
console.log( `${userName} ${userQuestion}`);

console.log(randomNumber);


var eightBall = randomNumber ;
switch (eightBall) {
  case randomNumber = 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case randomNumber = 2:
    console.log('Reply hazy try again');
    break;
 case randomNumber == 3:
    console.log('Cannot predict now');
    break;
case randomNumber ==4:
    console.log('Do not count on it');
    break;
case randomNumber == 5:
    console.log('My sources say no');
    break;
case randomNumber == 6:
    console.log('Outlook not so good');
    break;
case randomNumber == 7:
    console.log('Signs point to yes');
    break;
      default:
    console.log('Try Me');
    break;
}
