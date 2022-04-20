const container = document.querySelector('#container');

const numberSquares = 50;
const squareSize = 600 / numberSquares;

function createBlankSquare() {
  const div = document.createElement('div');
  div.style.width = squareSize +'px';
  div.style.height = squareSize +'px';
  div.style.borderRight = 'solid 1px black';
  div.style.borderBottom = 'solid 1px black';
  div.style.boxSizing = 'border-box';

  container.appendChild(div);
}

for (let i = 0; i < numberSquares * numberSquares; i++) {
  createBlankSquare();
}
