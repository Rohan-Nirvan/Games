// Function to create a dynamic board
function createBoard(rows, cols) {
  const board = document.getElementById('board');

  // Adjust the grid dimensions in CSS
  board.style.gridTemplateColumns = `repeat(${cols}, 100px)`;
  board.style.gridTemplateRows = `repeat(${rows}, 100px)`;

  // Create cells and append them to the board
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i; // Track the cell index for movement
    board.appendChild(cell);
  }
}

// Initialize board
const rows = 3, cols = 5; // You can change these values
createBoard(rows, cols);

// Snake Movement Logic
let snakePosition = 0; // Initial position (0th cell)
const totalCells = rows * cols;

// Update snake position visually
function updateSnakePosition(newPosition) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = index === newPosition ? '-' : ''; // Show snake in the new position
  });
}

// Button Event Listeners
document.getElementById('up').addEventListener('click', () => moveSnake(-cols));
document.getElementById('down').addEventListener('click', () => moveSnake(cols));
document.getElementById('left').addEventListener('click', () => moveSnake(-1));
document.getElementById('right').addEventListener('click', () => moveSnake(1));

document.addEventListener('keydown', function(e){
  console.log(e.key);
  if ( e.key === 'ArrowUp'){ moveSnake(-cols);
  }
  if ( e.key === 'ArrowDown'){moveSnake(cols);
  }
  if ( e.key === 'ArrowLeft'){moveSnake(-1);
  }
  if ( e.key === 'ArrowRight'){moveSnake(1);
  }
})

// Snake Movement Function
function moveSnake(delta) {
  const newPosition = snakePosition + delta;

  // Ensure snake stays within bounds
  if (newPosition < 0 || newPosition >= totalCells) return;

  // Prevent horizontal wrapping
  if ((snakePosition % cols === 0 && delta === -1) || // Left edge
      ((snakePosition + 1) % cols === 0 && delta === 1)) { // Right edge
    return;
  }

  // Update position
  snakePosition = newPosition;
  updateSnakePosition(snakePosition);
}

// Initial render of snake
updateSnakePosition(snakePosition);


