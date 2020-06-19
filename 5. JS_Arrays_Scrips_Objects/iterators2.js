//for each method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruits => {
  console.log('I want to eat a' + ' ' + fruits);
});

//Mapp method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)




//filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

console.log(randomNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(favoriteWords);



//findIndex method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const jumbledNums = [123, 25, 78, 5, 9]; 

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal); // Output: 7 - the index of 7 

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(startsWithS); // Output: 3 - the index of 3

//reduce method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);

console.log('The value of currentValue: ', currentValue);

return accumulator + currentValue

}, 100)  // <- Second argument for .reduce()

console.log(newSum); // Output: 116

