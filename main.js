// Create reference to buttons
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
let stopButton = document.querySelector('#stopButton');
let slowButton = document.querySelector('#slowButton');
let goButton = document.querySelector('#goButton');

// Create reference to lights
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');

// Define event handlers
// https://developer.mozilla.org/en/docs/Web/API/Element/classList
function stop() {
  yellow.classList.remove('lit');
  green.classList.remove('lit');
  red.classList.add('lit');
}

function slow() {
  red.classList.remove('lit');
  green.classList.remove('lit');
  yellow.classList.add('lit');
}

function go() {
  yellow.classList.remove('lit');
  red.classList.remove('lit');
  green.classList.add('lit');
}

// Create event listeners
// https://developer.mozilla.org/en-US/docs/Talk:DOM/element.addEventListener
stopButton.addEventListener('click', stop);
slowButton.addEventListener('click', slow);
goButton.addEventListener('click', go);
