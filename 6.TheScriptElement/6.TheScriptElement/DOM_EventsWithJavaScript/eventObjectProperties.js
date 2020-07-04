let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none'; // changes the display property of the event .target to none. 
  text.innerHTML = 'You share the puppy in ' 
  + event.timeStamp + ' ms.'; // modifys the text element to state the number of milliseconds from the DOM loading to the event firing
}

share.onclick = sharePhoto; // creates functionality such that the photo can be shared on the click event. 