//this will select strings from the array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[2]);

console.log(famousSayings[3]);

// this will sellect and change a string in an array
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'


//this will reassign a array of strings into one string using the let command.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

//this will find the length of the array
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//add to an exsisting array with .push()
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('moan at people', 'put on a happy face');

console.log(chores);

//this removes the last element of an arrap using .pop()
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);

//this uses a bunch of array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//console.log(groceryList);

groceryList.unshift('popcorn');
//console.log(groceryList);

//console.log(groceryList.slice(1, 4)) // remember you need to go one element further than the element you wish to select. So you want from 1-3, but one further would be 4. 

//console.log(groceryList); //Notice that the groceryList array still contains the same items it had in Step 2.

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


//functions and arrays
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement (newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);


//nested arrays 

const numberClusters = [[1,2],[3, 4],[5, 6]];

const target = numberClusters[2][1]; // this line will look inside the array with index 2 and then will find the value of index 1 within that array. 
console.log(numberClusters);