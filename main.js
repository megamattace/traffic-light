// Create reference to buttons
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
let stopButton = document.querySelector('#stopButton');
let goButton = document.querySelector('#goButton');

// Create reference to lights
let red = document.querySelector('#red');
let green = document.querySelector('#green');

// Define event handlers
// https://developer.mozilla.org/en/docs/Web/API/Element/classList
function stop() {
  green.classList.remove('lit');
  red.classList.remove('lit');
  yellow.classList.add('lit');
  setTimeout(function () {
    yellow.classList.remove('lit');
    red.classList.add('lit');
  }, 1000)
}

function go() {
  yellow.classList.remove('lit');
  red.classList.remove('lit');
  green.classList.add('lit');
}

// Create event listeners
// https://developer.mozilla.org/en-US/docs/Talk:DOM/element.addEventListener
stopButton.addEventListener('click', stop);
goButton.addEventListener('click', go);
