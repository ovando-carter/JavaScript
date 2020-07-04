let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = '250px';// moves the ball up when clicked
};
let down = function() {
  ball.style.bottom = '50px'; // moves the ball down when clicked
};

document.onkeydown = up; // an event handeler that runs the up function
document.onkeyup = down; // an event handeler that runs the down function