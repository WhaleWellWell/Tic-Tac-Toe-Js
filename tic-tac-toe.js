const X = "X";
const O = "O";
let turn = X; // Player that starts the game

const currentTurn = document.getElementsByClassName("currentTurn");


// Button Click Handlers:

//! There is most likely a better way to select elements.
const btn1 = document.getElementsByClassName("btn-1")
const btn2 = document.getElementsByClassName("btn-2")
const btn3 = document.getElementsByClassName("btn-3")
const btn4 = document.getElementsByClassName("btn-4")
const btn5 = document.getElementsByClassName("btn-5")
const btn6 = document.getElementsByClassName("btn-6")
const btn7 = document.getElementsByClassName("btn-7")
const btn8 = document.getElementsByClassName("btn-8")
const btn9 = document.getElementsByClassName("btn-9")

const allButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9] // All buttons

allButtons.forEach(element => {
  element.addEventListener('click', handleBtnClick); 
  // I would like to add here a way to specify witch btn is being clicked.

  // eg: First button is clicked:
  // Function called: handleBtnClick(someWayToDescribeButton)
});

function handleBtnClick (btn) {
  if (btn.innerHTML === "") { // There is nothing there if the button is empty
    btn.innerHTML = turn;
  } else {
    // TODO: Make some way to tell the player that they messed up
  };

  currentTurn.innerHTML = turn;
  if (turn === X) {
    turn = O;
  } else {
    turn = X;
  };
}