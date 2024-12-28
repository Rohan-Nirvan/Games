const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
//const percentageButton = document.getElementById("percentage");
const decimalButton = document.getElementById("decimal");
//const cButton = document.getElementById("c");
const bracketleftButton = document.getElementById("bracket-left");
const bracketrightButton = document.getElementById("bracket-right");
const equalButton = document.getElementById("equal");
let display = document.getElementById("display");

// Function to create a dynamic board
function createBoard(rows, cols) {
  const board = document.getElementById("board");

  // Adjust the grid dimensions in CSS
  board.style.gridTemplateColumns = `repeat(${cols}, 100px)`;
  board.style.gridTemplateRows = `repeat(${rows}, 100px)`;

  // Create cells and append them to the board
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    //cell.addEventListener("click", handleCellClick);
    //cell.dataset.index = i; // Track the cell index for movement
    cell.innerText = i;
    cell.addEventListener("click", handleCellClick);

    board.appendChild(cell);
  }
}

// Initialize board
const rows = 2,
  cols = 5; // You can change these values
createBoard(rows, cols);

function handleCellClick(event) {
  //const cell =  event.target;

  const cell = event.target;
  const index = cell.getAttribute("data-index");

  // Get the cell value

  let cellValue = cell.innerText;
  console.log("cellValue:", cellValue);
  // Display the cell value in the paragraph
  display.innerText += cellValue;
  console.log("display.innerText:", display.innerText);
}

addButton.addEventListener("click", displaynew1);

subButton.addEventListener("click", displaynew2);

multiplyButton.addEventListener("click", displaynew3);

divideButton.addEventListener("click", displaynew4);

//percentageButton.addEventListener("click", displaynew5);

decimalButton.addEventListener("click", displaynew6);

//cButton.addEventListener("click", displaynew7);

bracketleftButton.addEventListener("click", displaynew8);

bracketrightButton.addEventListener("click", displaynew9);

equalButton.addEventListener("click", displaynew10);

function displaynew1(event) {
  display.innerText += addButton.innerText;
}

function displaynew2(event) {
  display.innerText += subButton.innerText;
}

function displaynew3(event) {
  display.innerText += multiplyButton.innerText;
}

function displaynew4(event) {
  display.innerText += divideButton.innerText;
}


/*function displaynew5(event) {
  display.innerText += percentageButton.innerText;
}*/

function displaynew6(event) {
  display.innerText += decimalButton.innerText;
}

/*function displaynew7(event) {
  display.innerText === cButton.innerText;
}*/

function displaynew8(event) {
  display.innerText += bracketleftButton.innerText;
}

function displaynew9(event) {
  display.innerText += bracketrightButton.innerText;
}
/*function displaynew3(event) {
  display.innerText += equalButton.innerText;
  equal = ` Number( ${display.innerText})`;

return display.innerText = equal;
}*/

function displaynew10(event) {
try {
    const result = eval(display.innerText);
    display.innerText = result;
} catch (error) {
  display.innerText = "Error";
}

}
