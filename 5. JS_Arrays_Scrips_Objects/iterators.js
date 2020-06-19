// uses .forEach to loop through array and apply each artsit to message.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});


//will take a number from an array and square it, then it will return the number in a new array using the .map
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); // printing the new map squareNumbers to screen


//This filters out any non number useing typeof. typeof acts on the variable 'thing', if the thing in the array is a number it will be true and will return the number. If not, it will be false and will not return the number. 
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

