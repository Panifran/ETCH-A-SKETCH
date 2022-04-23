const container = document.querySelector('#container');
const clean = document.querySelector('#clean');
const erase = document.querySelector('#erase');
const redColor = document.querySelector('#red-color');

const numberSquares = 30;
const squareSize = 600 / numberSquares;
let div;


function createBlankSquare() {
  div = document.createElement('div');
  div.style.width = squareSize + 'px';
  div.style.height = squareSize + 'px';
  div.style.borderRight = 'solid 1px black';
  div.style.borderBottom = 'solid 1px black';
  div.style.boxSizing = 'border-box';
  container.appendChild(div);
}

function paintRed(element) {
  redColor.addEventListener('click', function() {
    element.addEventListener('mouseenter', function () {
      element.classList.add('red');
    })
  })
}

function cleanPanel(element) {
  clean.addEventListener('click', function() {
    element.classList.remove('red');
  })
}

function eraseSquare(element) {
  erase.addEventListener('click', function(){
    element.addEventListener('mouseenter', function () {
      element.classList.add('white');
  })
})
}

for (let i = 0; i < numberSquares * numberSquares; i++) {
  createBlankSquare();
  paintRed(div);
  cleanPanel(div);
  eraseSquare(div);
}
