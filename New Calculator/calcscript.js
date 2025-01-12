const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const backButton = document.getElementById("backkey");
const decimalButton = document.getElementById("decimal");
const cButton = document.getElementById("cleardisplay");
const bracketleftButton = document.getElementById("bracket-left");
const bracketrightButton = document.getElementById("bracket-right");
const equalButton = document.getElementById("equalbt");
let sdisplay = document.getElementById("sdisplay");
const numb7 = document.getElementById("button7");
const numb8 = document.getElementById("button8");
const numb9 = document.getElementById("button9");
const numb4 = document.getElementById("button4");
const numb5 = document.getElementById("button5");
const numb6 = document.getElementById("button6");
const numb1 = document.getElementById("button1");
const numb2 = document.getElementById("button2");
const numb3 = document.getElementById("button3");
const numb00 = document.getElementById("button00");
const numb0 = document.getElementById("button0");
// Attach the lhandleCellClick1 function to each button that you want to trigger it.
// const numberButtons = document.querySelectorAll(".number-button"); // Update selector as needed
// numberButtons.forEach((button) => {
//   button.addEventListener("click", lhandleCellClick1);
// });

for (let i = 0; i <= 9; i++) {
  const button = document.getElementById(`button${i}`);
  button.addEventListener("click", function () {
    sdisplay.innerText += i;
  });
}

numb00.addEventListener("click", function () {
  sdisplay.innerText += 00;
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "0") {
    sdisplay.innerText += 0;
  }

  if (e.key === "1") {
    sdisplay.innerText += 1;
  }
  if (e.key === "2") {
    sdisplay.innerText += 2;
  }
  if (e.key === "3") {
    sdisplay.innerText += 3;
  }
  if (e.key === "4") {
    sdisplay.innerText += 4;
  }
  if (e.key === "5") {
    sdisplay.innerText += 5;
  }
  if (e.key === "6") {
    sdisplay.innerText += 6;
  }
  if (e.key === "7") {
    sdisplay.innerText += 7;
  }
  if (e.key === "8") {
    sdisplay.innerText += 8;
  }

  if (e.key === "9") {
    sdisplay.innerText += 9;
  }
  if (e.key === "+") {
    addchar();
  } // Call addchar() function
  if (e.key === "-") {
    subchar();
  } // Call subchar() function
  if (e.key === "*") {
    multiplychar();
  } // Call multiplychar() function
  if (e.key === "/") {
    dividechar();
  } // Call dividechar() function
  if (e.key === "Backspace") {
    backfunction();
  } // Call backfunction() on backspace key
  if (e.key === "c") {
    cutfunction();
  } // Call cutfunction() on 'c' key (clear display)
  if (e.key === ".") {
    decimalfunction();
  } // Call decimalfunction() on '.' key
  if (e.key === "(") {
    leftbracket();
  } // Call leftbracket() on '(' key
  if (e.key === ")") {
    rightbracket();
  } // Call rightbracket() on ')' key
  if (e.key === "Enter") {
    checklastchar();
  } // Call checklastchar() on Enter key (equal)
});
addButton.addEventListener("click", addchar);

subButton.addEventListener("click", subchar);

multiplyButton.addEventListener("click", multiplychar);

divideButton.addEventListener("click", dividechar);

backButton.addEventListener("click", backfunction);

decimalButton.addEventListener("click", decimalfunction);

cButton.addEventListener("click", cutfunction);

bracketleftButton.addEventListener("click", leftbracket);

bracketrightButton.addEventListener("click", rightbracket);

equalButton.addEventListener("click", checklastchar);

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function handleCellClick1(event) {
  const cell = event.target;
  const cellValue = cell.innerText;

  const lastChar = sdisplay.innerText.slice(-1);

  //Prevent consecutive operators
  if (isOperator(cellValue) && isOperator(lastChar)) {
    //  display.innerText.splice(-1);
    //  display.innerText += cellValue;
    return;
  }

  // Prevent starting with an operator other than minus
  if (sdisplay.innerText === "" && isOperator(cellValue) && cellValue !== "-") {
    return;
  }

  // Add the cell value to the display
  sdisplay.innerText += cellValue;
}

function backfunction(event) {
  sdisplay.innerText = sdisplay.innerText.slice(0, -1);
}

function cutfunction(event) {
  sdisplay.innerText = "";
}

// function addchar() {
//   //display.innerText += "+";
//   const lastChar = sdisplay.innerText.slice(-1);

//   // Prevent consecutive operators
//   if (isOperator(lastChar)) {
//     sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "+";
//   } else {
//     sdisplay.innerText += "+";
//   }
// }
function addchar() {
  if (sdisplay.innerText === "") {
    handleCellClick1({ target: { innerText: "+" } });  // Simulate button click for "+"
  } else {
    const lastChar = sdisplay.innerText.slice(-1);
    if (isOperator(lastChar)) {
      sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "+";
    } else {
      sdisplay.innerText += "+";
    }
  }
}

// function subchar() {
//   const lastChar = sdisplay.innerText.slice(-1);

//   // Prevent consecutive operators
//   if (isOperator(lastChar)) {
//     sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "-";
//   } else {
//     sdisplay.innerText += "-";
//   }
// }

function subchar() {
  if (sdisplay.innerText === "") {
    handleCellClick1({ target: { innerText: "-" } });  // Simulate button click for "+"
  } else {
    const lastChar = sdisplay.innerText.slice(-1);
    if (isOperator(lastChar)) {
      sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "-";
    } else {
      sdisplay.innerText += "-";
    }
  }
}
// function multiplychar() {
//   const lastChar = sdisplay.innerText.slice(-1);

//   // Prevent consecutive operators
//   if (isOperator(lastChar)) {
//     sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "*";
//   } else {
//     sdisplay.innerText += "*";
//   }
// }

function multiplychar() {
  if (sdisplay.innerText === "") {
    handleCellClick1({ target: { innerText: "*" } });  // Simulate button click for "+"
  } else {
    const lastChar = sdisplay.innerText.slice(-1);
    if (isOperator(lastChar)) {
      sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "*";
    } else {
      sdisplay.innerText += "*";
    }
  }
}

// function dividechar() {
//   const lastChar = sdisplay.innerText.slice(-1);

//   // Prevent consecutive operators
//   if (isOperator(lastChar)) {
//     sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "/";
//   } else {
//     sdisplay.innerText += "/";
//   }
// }

function dividechar() {
  if (sdisplay.innerText === "") {
    handleCellClick1({ target: { innerText: "/" } });  // Simulate button click for "+"
  } else {
    const lastChar = sdisplay.innerText.slice(-1);
    if (isOperator(lastChar)) {
      sdisplay.innerText = sdisplay.innerText.slice(0, -1) + "/";
    } else {
      sdisplay.innerText += "/";
    }
  }
}

function decimalfunction() {
  const lastChar = sdisplay.innerText.slice(-1);

  // Prevent multiple decimals in the same number
  const parts = sdisplay.innerText.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    sdisplay.innerText += ".";
  }
}

function leftbracket() {
  const lastChar = sdisplay.innerText.slice(-1);
  if ("0123456789".includes(lastChar) && !"".includes(lastChar)) {
    sdisplay.innerText += "*(";
  } else {
    sdisplay.innerText += "("; // Just add the left bracket
  }
}

function rightbracket() {
  const lastChar = sdisplay.innerText.slice(-1);
  sdisplay.innerText += ")";
}

function checklastchar() {
  try {
    // Ensure the input is valid before evaluating
    if (isOperator(sdisplay.innerText.slice(-1))) {
      return; // Do nothing if the last character is an operator
    }

    const result = eval(sdisplay.innerText);
    sdisplay.innerText = result;
  } catch (error) {
    sdisplay.innerText = "Error";
    setTimeout(function () {
      sdisplay.innerText = "";
    }, 1000);
  }
}

// largeDisplay

const laddButton = document.getElementById("ladd");
const lsubButton = document.getElementById("lsub");
const lmultiplyButton = document.getElementById("lmultiply");
const ldivideButton = document.getElementById("ldivide");
const lbackButton = document.getElementById("lbackkey");
const ldecimalButton = document.getElementById("ldecimal");
const lcButton = document.getElementById("lcleardisplay");
const lbracketleftButton = document.getElementById("lbracket-left");
const lbracketrightButton = document.getElementById("lbracket-right");
const lequalButton = document.getElementById("lequalbt");
let ldisplay = document.getElementById("ldisplay");
const lnumb7 = document.getElementById("lbutton7");
const lnumb8 = document.getElementById("lbutton8");
const lnumb9 = document.getElementById("lbutton9");
const lnumb4 = document.getElementById("lbutton4");
const lnumb5 = document.getElementById("lbutton5");
const lnumb6 = document.getElementById("lbutton6");
const lnumb1 = document.getElementById("lbutton1");
const lnumb2 = document.getElementById("lbutton2");
const lnumb3 = document.getElementById("lbutton3");
const lnumb00 = document.getElementById("lbutton00");
const lnumb0 = document.getElementById("lbutton0");

for (let i = 0; i <= 9; i++) {
  const button = document.getElementById(`lbutton${i}`);
  button.addEventListener("click", function () {
    ldisplay.innerText += i;
  });
}

lnumb00.addEventListener("click", function () {
  ldisplay.innerText += 00;
});

// window.addEventListener("keydown", function (e) {
//   console.log(e.key); // Debugging purpose
//   // Your existing keydown logic
  
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.key === "0") {
//     ldisplay.innerText += 0;
//   }

//   if (e.key === "1") {
//     ldisplay.innerText += 1;
//   }
//   if (e.key === "2") {
//     ldisplay.innerText += 2;
//   }
//   if (e.key === "3") {
//     ldisplay.innerText += 3;
//   }
//   if (e.key === "4") {
//     ldisplay.innerText += 4;
//   }
//   if (e.key === "5") {
//     ldisplay.innerText += 5;
//   }
//   if (e.key === "6") {
//     ldisplay.innerText += 6;
//   }
//   if (e.key === "7") {
//     ldisplay.innerText += 7;
//   }
//   if (e.key === "8") {
//     ldisplay.innerText += 8;
//   }

//   if (e.key === "9") {
//     ldisplay.innerText += 9;
//   }
//   if (e.key === "+") {
//     laddchar();
//   } // Call addchar() function
//   if (e.key === "-") {
//     lsubchar();
//   } // Call subchar() function
//   if (e.key === "*") {
//     lmultiplychar();
//   } // Call multiplychar() function
//   if (e.key === "/") {
//     ldividechar();
//   } // Call dividechar() function
//   if (e.key === "Backspace") {
//     lbackfunction();
//   } // Call backfunction() on backspace key
//   if (e.key === "c") {
//     lcutfunction();
//   } // Call cutfunction() on 'c' key (clear display)
//   if (e.key === ".") {
//     ldecimalfunction();
//   } // Call decimalfunction() on '.' key
//   if (e.key === "(") {
//     lleftbracket();
//   } // Call leftbracket() on '(' key
//   if (e.key === ")") {
//     lrightbracket();
//   } // Call rightbracket() on ')' key
//   if (e.key === "Enter") {
//     lchecklastchar();
//   } // Call checklastchar() on Enter key (equal)
// });
// });

document.addEventListener("keydown", function(e) {
  if (e.key >= "0" && e.key <= "9") {
    // Call lnumberchar() for number keys
    lnumberchar(e.key);
  } else if (e.key === "+") {
    // Call addchar() function for the '+' key
    laddchar();
  } else if (e.key === "-") {
    // Call subchar() function for the '-' key
    lsubchar();
  } else if (e.key === "*") {
    // Call multiplychar() function for the '*' key
    lmultiplychar();
  } else if (e.key === "/") {
    // Call dividechar() function for the '/' key
    ldividechar();
  } else if (e.key === "Backspace") {
    // Call backfunction() on Backspace key
    lbackfunction();
  } else if (e.key === "c") {
    // Call cutfunction() on 'c' key (clear display)
    lcutfunction();
  } else if (e.key === ".") {
    // Call decimalfunction() on '.' key
    ldecimalfunction();
  } else if (e.key === "(") {
    // Call leftbracket() on '(' key
    lleftbracket();
  } else if (e.key === ")") {
    // Call rightbracket() on ')' key
    lrightbracket();
  } else if (e.key === "Enter") {
    // Call checklastchar() on Enter key (equal)
    lchecklastchar();
  }
});

// Example implementation of lnumberchar
function lnumberchar(number) {
  // Append the pressed number to the input or display field

  ldisplay.innerText += number;
}

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.key === "0") {
//     ldisplay.innerText += 0;
//   }

//   if (e.key === "1") {
//     ldisplay.innerText += 1;
//   }
//   if (e.key === "2") {
//     ldisplay.innerText += 2;
//   }
//   if (e.key === "3") {
//     ldisplay.innerText += 3;
//   }
//   if (e.key === "4") {
//     ldisplay.innerText += 4;
//   }
//   if (e.key === "5") {
//     ldisplay.innerText += 5;
//   }
//   if (e.key === "6") {
//     ldisplay.innerText += 6;
//   }
//   if (e.key === "7") {
//     ldisplay.innerText += 7;
//   }
//   if (e.key === "8") {
//     ldisplay.innerText += 8;
//   }

//   if (e.key === "9") {
//     ldisplay.innerText += 9;
//   }
//   if (e.key === "+") {
//     laddchar();
//   } // Call addchar() function
//   if (e.key === "-") {
//     lsubchar();
//   } // Call subchar() function
//   if (e.key === "*") {
//     lmultiplychar();
//   } // Call multiplychar() function
//   if (e.key === "/") {
//     ldividechar();
//   } // Call dividechar() function
//   if (e.key === "Backspace") {
//     lbackfunction();
//   } // Call backfunction() on backspace key
//   if (e.key === "c") {
//     lcutfunction();
//   } // Call cutfunction() on 'c' key (clear display)
//   if (e.key === ".") {
//     ldecimalfunction();
//   } // Call decimalfunction() on '.' key
//   if (e.key === "(") {
//     lleftbracket();
//   } // Call leftbracket() on '(' key
//   if (e.key === ")") {
//     lrightbracket();
//   } // Call rightbracket() on ')' key
//   if (e.key === "Enter") {
//     lchecklastchar();
//   } // Call checklastchar() on Enter key (equal)
// });
laddButton.addEventListener("click", laddchar);

lsubButton.addEventListener("click", lsubchar);

lmultiplyButton.addEventListener("click", lmultiplychar);

ldivideButton.addEventListener("click", ldividechar);

lbackButton.addEventListener("click", lbackfunction);

ldecimalButton.addEventListener("click", ldecimalfunction);

lcButton.addEventListener("click", lcutfunction);

lbracketleftButton.addEventListener("click", lleftbracket);

lbracketrightButton.addEventListener("click", lrightbracket);

lequalButton.addEventListener("click", lchecklastchar);

function lisOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
// console.log(lhandleCellClick1);
function lhandleCellClick1(event) {
  console.log("lhandleCellClick1 called");

  const lcell = event.target;
  const cellValue = lcell.innerText;

  const lastChar = ldisplay.innerText.slice(-1);

  //Prevent consecutive operators
  if (lisOperator(cellValue) && lisOperator(lastChar)) {
    //  display.innerText.splice(-1);
    //  display.innerText += cellValue;
    return;
  }
  console.log(ldisplay.innerText, ldisplay.innerText === "");
  console.log(cellValue, lisOperator(cellValue));
  console.log(cellValue !== "-");
  // Prevent starting with an operator other than minus
  if (
    ldisplay.innerText === "" &&
    lisOperator(cellValue) &&
    cellValue !== "-"
  ) {
    return;
  }

  // Add the cell value to the display
  ldisplay.innerText += cellValue;
}

console.log(lhandleCellClick1);

function lbackfunction(event) {
  ldisplay.innerText = ldisplay.innerText.slice(0, -1);
}

function lcutfunction(event) {
  ldisplay.innerText = "";
}

// function laddchar() {
//   if ((ldisplay.innerText = "")) {
//     lhandleCellClick1();
//   } else {
//     //display.innerText += "+";
//     const lastChar = ldisplay.innerText.slice(-1);

//     // Prevent consecutive operators
//     if (lisOperator(lastChar)) {
//       ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "+";
//     } else {
//       ldisplay.innerText += "+";
//     }
//   }
// }

function laddchar() {
  if (ldisplay.innerText === "") {
    lhandleCellClick1({ target: { innerText: "+" } });  // Simulate button click for "+"
  } else {
    const lastChar = ldisplay.innerText.slice(-1);
    if (lisOperator(lastChar)) {
      ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "+";
    } else {
      ldisplay.innerText += "+";
    }
  }
}

// function lsubchar() {
//   if ((ldisplay.innerText = "")) {
//     lhandleCellClick1();
//   } else {
//     const lastChar = ldisplay.innerText.slice(-1);

//     // Prevent consecutive operators
//     if (lisOperator(lastChar)) {
//       ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "-";
//     } else {
//       ldisplay.innerText += "-";
//     }
//   }
// }

function lsubchar() {
  if (ldisplay.innerText === "") {
    lhandleCellClick1({ target: { innerText: "-" } });  // Simulate button click for "+"
  } else {
    const lastChar = ldisplay.innerText.slice(-1);
    if (lisOperator(lastChar)) {
      ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "-";
    } else {
      ldisplay.innerText += "-";
    }
  }
}

// function lmultiplychar() {
//   if (ldisplay.innerText === "") {
//     lhandleCellClick1();
//   } else {
//     const lastChar = ldisplay.innerText.slice(-1);

//     // Prevent consecutive operators
//     if (lisOperator(lastChar)) {
//       ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "*";
//     } else {
//       ldisplay.innerText += "*";
//     }
//   }
// }

function lmultiplychar() {
  if (ldisplay.innerText === "") {
    lhandleCellClick1({ target: { innerText: "*" } });  // Simulate button click for "+"
  } else {
    const lastChar = ldisplay.innerText.slice(-1);
    if (lisOperator(lastChar)) {
      ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "*";
    } else {
      ldisplay.innerText += "*";
    }
  }
}

// function ldividechar() {
//   if ((ldisplay.innerText = "")) {
//     lhandleCellClick1();
//   } else {
//     const lastChar = ldisplay.innerText.slice(-1);

//     // Prevent consecutive operators
//     if (lisOperator(lastChar)) {
//       ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "/";
//     } else {
//       display.innerText += "/";
//     }
//   }
// }

function ldividechar() {
  if (ldisplay.innerText === "") {
    lhandleCellClick1({ target: { innerText: "/" } });  // Simulate button click for "+"
  } else {
    const lastChar = ldisplay.innerText.slice(-1);
    if (lisOperator(lastChar)) {
      ldisplay.innerText = ldisplay.innerText.slice(0, -1) + "/";
    } else {
      ldisplay.innerText += "/";
    }
  }
}

function ldecimalfunction() {
  const lastChar = ldisplay.innerText.slice(-1);

  // Prevent multiple decimals in the same number
  const parts = ldisplay.innerText.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    ldisplay.innerText += ".";
  }
}

function lleftbracket() {
  const lastChar = ldisplay.innerText.slice(-1);
  if ("0123456789".includes(lastChar) && !"".includes(lastChar)) {
    ldisplay.innerText += "*(";
  } else {
    ldisplay.innerText += "("; // Just add the left bracket
  }
}

function lrightbracket() {
  const lastChar = ldisplay.innerText.slice(-1);
  ldisplay.innerText += ")";
}

function lchecklastchar() {
  try {
    // Ensure the input is valid before evaluating
    if (lisOperator(ldisplay.innerText.slice(-1))) {
      return; // Do nothing if the last character is an operator
    }

    const result = eval(ldisplay.innerText);
    ldisplay.innerText = result;
  } catch (error) {
    ldisplay.innerText = "Error";
    
    setTimeout(function () {
      ldisplay.innerText = "";
    }, 1000);
  }
}
