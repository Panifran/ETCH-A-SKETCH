// Select and create element
const container = document.querySelector('#container');
const clean = document.querySelector('#clean');
const erase = document.querySelector('#erase');
const redColor = document.querySelector('#red-color');
const greenColor = document.querySelector('#green-color');
const blueColor = document.querySelector('#blue-color');
const smallPanel = document.querySelector('#small');
const mediumPanel = document.querySelector('#medium');
const bigPanel = document.querySelector('#big');

// count number of children nodes of container
let countNodes = 0;

// Create default (small) Panel when starting the game 
function createDefaultPanel() {
  for (let i = 0; i < 3600; i++) {
    div = document.createElement('div');
    div.classList.add('small-grid');
    container.appendChild(div);
    countNodes++;
    paint(div);
    cleanPanel(div);
    eraseSquare(div);
  }
}

createDefaultPanel();

// Add event Listener for small, medium and big panels
smallPanel.addEventListener('click', function () {
  for (let i = 0; i < countNodes; i++) {
    container.removeChild(container.lastElementChild);
  };
  countNodes = 0;
  createDefaultPanel();
})

mediumPanel.addEventListener('click', function () {
  for (let i = 0; i < countNodes; i++) {
    container.removeChild(container.lastElementChild);
  };
  countNodes = 0;
  for (let i = 0; i < 900; i++) {
    div = document.createElement('div');
    div.classList.add('medium-grid');
    container.appendChild(div);
    paint(div);
    cleanPanel(div);
    eraseSquare(div);
    countNodes++;
  }
})

bigPanel.addEventListener('click', function () {
  for (let i = 0; i < countNodes; i++) {
    container.removeChild(container.lastElementChild);
  };
  countNodes = 0;
  for (let i = 0; i < 400; i++) {
    div = document.createElement('div');
    div.classList.add('big-grid');
    container.appendChild(div);
    paint(div);
    cleanPanel(div);
    eraseSquare(div);
    countNodes++;
  }
})

// function to paint when clicking on color buttons 
function paint(element) {
  blueColor.addEventListener('click', function () {
    element.addEventListener('mouseenter', function () {
      element.style.backgroundColor = 'blue';
    })
  });
  redColor.addEventListener('click', function () {
    element.addEventListener('mouseenter', function () {
      element.style.backgroundColor = 'red';
    })
  });
  greenColor.addEventListener('click', function () {
    element.addEventListener('mouseenter', function () {
      element.style.backgroundColor = 'green';
    })
  });
}

//function to clean Panel
function cleanPanel(element) {
  clean.addEventListener('click', function () {
    element.style.backgroundColor = 'white';
  })
}

//function to remove colors
function eraseSquare(element) {
  erase.addEventListener('click', function () {
    element.addEventListener('mouseenter', function () {
      element.style.backgroundColor = 'white';
    })
  })
}
