// Create reference to buttons

let stopButton = document.querySelector('#stopButton');
// let slowButton = document.querySelector('#slowButton');
let goButton = document.querySelector('#goButton');

// Define event handlers

const r = document.querySelector('#red');
const y = document.querySelector('#yellow');
const g = document.querySelector('#green');
timeoutID = 0;

function stop() {
    r.classList.remove('lit');
    y.classList.add('lit');
    g.classList.remove('lit');
    timeoutID = setTimeout(switcheroo, 1000);
}

function switcheroo() {
    r.classList.add('lit');
    y.classList.remove('lit');
}

// function slow() {
//     r.classList.remove('lit');
//     y.classList.add('lit');
//     g.classList.remove('lit');
// }

function go() {
    clearTimeout(timeoutID);
    r.classList.remove('lit');
    y.classList.remove('lit');
    g.classList.add('lit');
}

// Create event listeners

stopButton.addEventListener('click', stop);
// slowButton.addEventListener('click', slow);
goButton.addEventListener('click', go);

