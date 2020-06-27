// create and insert elements
let newDestination = document.createElement("li");
newDestination.id = "oaxaca";
newDestination.innerHTML = "Oaxaca, Mexico";

//append the new element you created as the last child of the list with the ID more-destinations
document.getElementById('more-destinations').appendChild(newDestination);