// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor; // this statement changes the background colour ot the event
}

button.onclick = colorChange; // changes made due to clicking on the mouse button
mysteryButton.onwheel = colorChange; // colour change when you scroll down on touch pad or on mouse wheal. 