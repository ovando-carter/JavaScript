// calling functions JS

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// using default place holders
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//using the return
function rectangleArea(width, height) {
  let area = width * height 
  return area; 
}
console.log(rectangleArea(5, 7)) // Prints undefined

function monitorCount(rows, columns) {
  let monitors = rows * columns
  return monitors;
}
const numOfMonitors = monitorCount(5,4)
console.log(numOfMonitors
)



// cost of monitors
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);


console.log(totalCost)


// function expressions
const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
};

plantNeedsWater('Tuesday')

console.log(plantNeedsWater('Tuesday')); // Output: false

//same thing as above but using arrow functions
const plantNeedsWater = (day)=> {
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
};

plantNeedsWater('Tuesday')

console.log(plantNeedsWater('Tuesday')); // Output: false

//same as above but in concise form
const plantNeedsWater = day => day === 'Wednesday' ? true : false;