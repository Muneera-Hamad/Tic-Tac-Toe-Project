const gameState = {
  rounds: [], // 0: draw, 1: winner (player 1), 2: winner (player 2)
  turn: 1,
  board: [null, null, null, null, null, null, null, null, null],
  isCompleteRound: false
}
const winningPatterns = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function isAWin(mark) {
  let count = 0;
  for (let pattern of winningPatterns) {
    count = 0;
    for (let position of pattern) {
      if (gameState.board[position] == mark) {
        count++;
      }
    }
    if (count == 3) {
      return true;
    }
  }
  return false;
}
function showResult() {
  let player1Result = gameState.rounds.filter(r => r == 1).length;
  let player2Result = gameState.rounds.filter(r => r == 2).length;
  document.querySelector("#player1").innerHTML = player1Result;
  document.querySelector("#player2").innerHTML = player2Result;
}
function makeAMove(i) {
  if (gameState.isCompleteRound) {
    gameState.isCompleteRound = false;
    gameState.turn = 1;
    gameState.board = [null, null, null, null, null, null, null, null, null];
    document.querySelectorAll(".square").forEach(el => el.innerHTML = "");
    document.querySelector("#game-round").innerHTML = gameState.rounds.length+1;
  } else {
    if (gameState.board[i] == null) {
      let mark = ((gameState.rounds.length + gameState.turn) % 2) == 0 ? "o" : "x";
      document.querySelector("#player-turn").innerHTML = mark == "x" ? "o" : "x";
      gameState.board[i] = mark;
      document.querySelectorAll(".square")[i].innerHTML = mark;
      if (isAWin(mark)) {
        gameState.isCompleteRound = true;
        let winner = mark == "x" ? 1 : 2;
        gameState.rounds.push(winner);
        setTimeout(function () {
          alert("Player " + mark + " wins!");
        }, 100);
        showResult();
      } else if (gameState.board.filter(s => s == null).length == 0) {
        gameState.isCompleteRound = true;
        gameState.rounds.push(0)
        setTimeout(function () {
          alert("Draw game!");
        }, 100);  
        showResult();
      }
      gameState.turn++;
    }
  }
}