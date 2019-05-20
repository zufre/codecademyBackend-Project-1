// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;
let playerTwoMoveTwoType;

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {
  if (
    (moveOneType == "rock" ||
      moveOneType == "paper" ||
      moveOneType == "scissors") &&
    (moveTwoType == "rock" ||
      moveTwoType == "paper" ||
      moveTwoType == "scissors") &&
    (moveThreeType == "rock" ||
      moveThreeType == "paper" ||
      moveThreeType == "scissors") &&
    (player == "Player One" || player == "Player Two") &&
    (moveOneValue >= 1 && moveOneValue <= 99) &&
    (moveTwoValue >= 1 && moveTwoValue <= 99) &&
    (moveThreeValue >= 1 && moveThreeValue <= 99) &&
    moveOneValue + moveTwoValue + moveThreeValue <= 99
  ) {
    if (player === "Player One") {
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    }
    if (player === "Player Two") {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }
};
const getRoundWinner = roundNumber => {
  switch (roundNumber) {
    case 1:
      if (playerOneMoveOneType == playerTwoMoveOneType) {
        if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return "Player One";
        } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
          return "Player Two";
        } else {
          return "Tie";
        }
      } else if (playerOneMoveOneType === "rock") {
        if (playerTwoMoveOneType === "paper") {
          return "Player Two";
        } else if (playerTwoMoveOneType === "scissors") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveOneType === "paper") {
        if (playerTwoMoveOneType === "scissors") {
          return "Player Two";
        } else if (playerTwoMoveOneType === "rock") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveOneType === "scissors") {
        if (playerTwoMoveOneType === "rock") {
          return "Player Two";
        } else if (playerTwoMoveOneType === "paper") {
          return "Player One";
        } else {
          return null;
        }
      }
    case 2:
      if (playerOneMoveTwoType == playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return "Player One";
        } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
          return "Player Two";
        } else {
          return "Tie";
        }
      } else if (playerOneMoveTwoType === "rock") {
        if (playerTwoMoveTwoType === "paper") {
          return "Player Two";
        } else if (playerTwoMoveTwoType === "scissors") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveTwoType === "paper") {
        if (playerTwoMoveTwoType === "scissors") {
          return "Player Two";
        } else if (playerTwoMoveTwoType === "rock") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveTwoType === "scissors") {
        if (playerTwoMoveTwoType === "rock") {
          return "Player Two";
        } else if (playerTwoMoveTwoType === "paper") {
          return "Player One";
        } else {
          return null;
        }
      }
    case 3:
      if (playerOneMoveThreeType == playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return "Player One";
        } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return "Player Two";
        } else {
          return "Tie";
        }
      } else if (playerOneMoveThreeType === "rock") {
        if (playerTwoMoveThreeType === "paper") {
          return "Player Two";
        } else if (playerTwoMoveThreeType === "scissors") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveThreeType === "paper") {
        if (playerTwoMoveThreeType === "scissors") {
          return "Player Two";
        } else if (playerTwoMoveThreeType === "rock") {
          return "Player One";
        } else {
          return null;
        }
      } else if (playerOneMoveThreeType === "scissors") {
        if (playerTwoMoveThreeType === "rock") {
          return "Player Two";
        } else if (playerTwoMoveThreeType === "paper") {
          return "Player One";
        } else {
          return null;
        }
      }
    default:
      return null;
  }
  // }
};
const getGameWinner = () => {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  if (getRoundWinner(1) == "Player One") {
    playerOneScore += 1;
  } else if (getRoundWinner(1) == "Player Two") {
    playerTwoScore += 1;
  }
  if (getRoundWinner(2) == "Player One") {
    playerOneScore += 1;
  } else if (getRoundWinner(2) == "Player Two") {
    playerTwoScore += 1;
  }
  if (getRoundWinner(3) == "Player One") {
    playerOneScore += 1;
  } else if (getRoundWinner(3) == "Player Two") {
    playerTwoScore += 1;
  }
  if (playerOneScore > playerTwoScore) {
    return "Player One";
  } else if (playerOneScore < playerTwoScore) {
    return "Player Two";
  } else if (playerOneScore == playerTwoScore) {
    return "Tie";
  } else {
    return null;
  }
};
setComputerMoves = () => {
  let moveOne = Math.floor(Math.random() * 3);
  let moveTwo = Math.floor(Math.random() * 3);
  let moveThree = Math.floor(Math.random() * 3);
  if (moveOne == 1) {
    playerTwoMoveOneType = "scissors";
  } else if (moveOne == 2) {
    playerTwoMoveOneType = "rock";
  } else {
    playerTwoMoveOneType = "paper";
  }

  playerTwoMoveOneValue = Math.floor(Math.random() * 97) + 1;
  if (moveTwo == 1) {
    playerTwoMoveTwoType = "scissors";
  } else if (moveTwo == 2) {
    playerTwoMoveTwoType = "rock";
  } else {
    playerTwoMoveTwoType = "paper";
  }
  playerTwoMoveTwoValue = Math.floor(Math.random() * 97) + 1;
  if (moveThree == 1) {
    playerTwoMoveThreeType = "scissors";
  } else if (moveThree == 2) {
    playerTwoMoveThreeType = "rock";
  } else {
    playerTwoMoveThreeType = "paper";
  }
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
};
