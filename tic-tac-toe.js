const currentTurn = document.getElementById("currentTurn"); // gets the current turn html element
const spaces = document.getElementsByClassName("btn"); // gets all the spaces in the html

const WINNING_COMBINATIONS = [ // all the diffrent winning combinations
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const hasWon = (player) => { // if the player has won: will return true, else false. 
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) { // runs through all the winning combos
    const [a, b, c] = WINNING_COMBINATIONS[i];
    if ( // all three spots are the same player
      spaces[a].innerHTML === player && // all of them equal the player
      spaces[b].innerHTML === player &&
      spaces[c].innerHTML === player
    ) {
      return true; // yes! :)
    }
  }
  return false; // no :(
}

// constants for error failing
const O = "O"; 
const X = "X";

let turn = X; // the starting turn

currentTurn.innerHTML = turn; // sets the current turn to X as the default starting player


for (let i = 0; i < spaces.length; i++) { // for all the spaces
  spaces[i].addEventListener("click", () => { // adds an event listener to them all
    if (spaces[i].innerHTML !== "") return; // if the space is already filled, do nothing. break out of the loop 

    spaces[i].innerHTML = turn; // fill the space with the current turn

    turn = turn === X ? O : X; // switch the turn to the other player

    if (hasWon(turn)) { // if the player has won
      alert(`${turn} has won!`); // alert them
    }

    currentTurn.innerHTML = turn; // update the current turn in the html
  });
}