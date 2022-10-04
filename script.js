const gameboard = document.getElementById("board")
console.log(gameboard)
let currentPlayersTurn = 'X'

function changeTurn(){
    if(currentPlayersTurn==='X'){
        currentPlayersTurn = 'O'
    } else {
        currentPlayersTurn = 'X'
    }
}

function fillCell(e){
    let clickedCell = e.target
    // if cell is empty
    if(!clickedCell.innerText){
        // then add an x
        clickedCell.innerText = currentPlayersTurn
        changeTurn()
    }
}

gameboard.addEventListener("click", fillCell)

