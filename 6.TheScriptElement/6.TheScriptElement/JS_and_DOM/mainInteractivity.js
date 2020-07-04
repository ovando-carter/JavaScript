let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red"; // this should turn the button red
  element.style.color = "white";
  element.innerHTML = "Red Button"; // this should turn the button wording to red button
}

element.onclick = turnButtonRed;