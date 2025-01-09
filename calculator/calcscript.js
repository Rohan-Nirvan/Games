const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const   backButton = document.getElementById("backkey");
const decimalButton = document.getElementById("decimal");
const cButton = document.getElementById("cleardisplay");
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
  cols =5; // You can change these values
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

addButton.addEventListener("click", addchar);
// Listen for keypresses globally
// addButton.addEventListener("keydown", (event) => {
//   if (event.key === "+") { // For example, handle the add key
//     addchar();
//   }
// });

subButton.addEventListener("click", subchar);
// subButton.addEventListener("keydown", (event) => {
//   if (event.key === "-") { // For example, handle the sub key
//     addchar();
//   }
// });

multiplyButton.addEventListener("click", multiplychar);

divideButton.addEventListener("click", dividechar);

backButton.addEventListener("click", backfunction);

decimalButton.addEventListener("click", decimalfunction);

cButton.addEventListener("click", cutfunction);

bracketleftButton.addEventListener("click", leftbracket);

bracketrightButton.addEventListener("click", rightbracket);

equalButton.addEventListener("click", checklastchar);



// document.addEventListener('keydown', function(e){
//   console.log(e.key);
//   if ( e.key === '+'){ addchar();
//   }
//   if ( e.key === '-'){subchar();
//   }
//   if ( e.key === '*'){multiplychar();
//   }
//   if ( e.key === '/'){dividechar();
//   }
// })
document.addEventListener('keydown', function(e){
  console.log(e.key);
  if (e.key === '0') {display.innerText += 0;}
  
  if (e.key === '1') {display.innerText += 1;}
  if (e.key === '2') {display.innerText += 2;}
  if (e.key === '3') {display.innerText += 3;}
  if (e.key === '4') {display.innerText += 4;}
  if (e.key === '5') {display.innerText += 5;}
  if (e.key === '6') {display.innerText += 6;}
  if (e.key === '7') {display.innerText += 7;}
  if (e.key === '8') {display.innerText += 8;}
  
  if (e.key === '9') {display.innerText += 9;}
  if (e.key === '+') { addchar(); } // Call addchar() function
  if (e.key === '-') { subchar(); } // Call subchar() function
  if (e.key === '*') { multiplychar(); } // Call multiplychar() function
  if (e.key === '/') { dividechar(); } // Call dividechar() function
  if (e.key === 'Backspace') { backfunction(); } // Call backfunction() on backspace key
  if (e.key === 'c') { cutfunction(); } // Call cutfunction() on 'c' key (clear display)
  if (e.key === '.') { decimalfunction(); } // Call decimalfunction() on '.' key
  if (e.key === '(') { leftbracket(); } // Call leftbracket() on '(' key
  if (e.key === ')') { rightbracket(); } // Call rightbracket() on ')' key
  if (e.key === 'Enter') { checklastchar(); } // Call checklastchar() on Enter key (equal)
});


/*function displaynew1(event) {
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
}*/


function backfunction(event) {
  display.innerText = display.innerText.slice(0, -1);
}
/*
function displaynew6(event) {
  display.innerText += decimalButton.innerText;
}*/

function cutfunction(event) {
  display.innerText = "";
}

/*function displaynew8(event) {
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
/*
function displaynew10(event) {
try {
    const result = eval(display.innerText);
    display.innerText = result;
} catch (error) {
  display.innerText = "Error";
}*/

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function handleCellClick(event) {
  const cell = event.target;
  const cellValue = cell.innerText;

  const lastChar = display.innerText.slice(-1);

  // Prevent consecutive operators
  if (isOperator(cellValue) && isOperator(lastChar)) {
    return;
  }

  // Prevent starting with an operator other than minus
  if (display.innerText === "" && isOperator(cellValue) && cellValue !== "-") {
    return;
  }

  // Add the cell value to the display
  display.innerText += cellValue;
}

function addchar() {
  const lastChar = display.innerText.slice(-1);

  // Prevent consecutive operators
  if (!isOperator(lastChar)) {
    display.innerText += "+";
  }
}

function subchar() {
  const lastChar = display.innerText.slice(-1);

  // Prevent consecutive operators
  if (!isOperator(lastChar)) {
    display.innerText += "-";
  }
}

function multiplychar() {
  const lastChar = display.innerText.slice(-1);

  // Prevent consecutive operators
  if (!isOperator(lastChar)) {
    display.innerText += "*";
  }
}

function dividechar() {
  const lastChar = display.innerText.slice(-1);

  // Prevent consecutive operators
  if (!isOperator(lastChar)) {
    display.innerText += "/";
  }
}

function decimalfunction() {
  const lastChar = display.innerText.slice(-1);

  // Prevent multiple decimals in the same number
  const parts = display.innerText.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    display.innerText += ".";
  }
}

function leftbracket() {
  display.innerText += "(";
}

function rightbracket() {
  display.innerText += ")";
}

function checklastchar() {
  try {
    // Ensure the input is valid before evaluating
    if (isOperator(display.innerText.slice(-1))) {
      return; // Do nothing if the last character is an operator
    }

    const result = eval(display.innerText);
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}

