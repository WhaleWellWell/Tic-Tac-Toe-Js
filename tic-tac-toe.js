const X = "X";
const O = "O";
let turn = X; // Player that starts the game

function handleBtnClick (btn) {
  if (btn.innerHTML === "") { // There is nothing there if the button is empty
    btn.innerHTML = turn;
  } else {
    // TODO: Make some way to tell the player that they messed up
  }
};

function game() {
  const currentTurn = document.getElementsByClassName("currentTurn");
  const allButtons = document.querySelectorAll(".btn"); // All buttons

  allButtons.forEach(element => {
    element.addEventListener('click', element => {
      handleBtnClick(element);
    });
  });

  currentTurn.innerHTML = turn;
  if (turn === X) {
    turn = O;
  } else {
    turn = X;
  };
};

game();
