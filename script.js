const gameboard = document.getElementById("board")
let currentPlayersTurn = 'X'
// Store our HTML restart button in a variable
let restartButton = document.querySelector('#restartButton')
//Store our HTML div list for the squares in a variable array
let cellsArray = document.querySelectorAll('.cell')
let cell0 = document.getElementById('0')
let cell1 = document.getElementById('1')
let cell2 = document.getElementById('2')
let cell3 = document.getElementById('3')
let cell4 = document.getElementById('4')
let cell5 = document.getElementById('5')
let cell6 = document.getElementById('6')
let cell7 = document.getElementById('7')
let cell8 = document.getElementById('8')

function checkWinner(){
    if (cell0.innerText == 'X' && cell1.innerText == 'X' && cell2.innerText == 'X') {
        console.log('player X wins!!!')
    } else if (cell3.innerText == 'X' && cell4.innerText == 'X' && cell5.innerText == 'X'){}
    else if (cell6.innerText == 'X' && cell7.innerText == 'X' && cell8.innerText == 'X'){}
    else if (cell0.innerText == 'X' && cell3.innerText == 'X' && cell6.innerText == 'X'){}
    else if (cell1.innerText == 'X' && cell4.innerText == 'X' && cell7.innerText == 'X'){}
    else if (cell2.innerText == 'X' && cell5.innerText == 'X' && cell8.innerText == 'X'){}
    else if (cell0.innerText == 'X' && cell4.innerText == 'X' && cell8.innerText == 'X'){}
    else if (cell2.innerText == 'X' && cell4.innerText == 'X' && cell6.innerText == 'X'){}
}



let winningArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


gameboard.addEventListener("click", fillCell)
restartButton.addEventListener('click', reset)

function reset(){
    console.log('restart button clicked!')
    console.log(cellsArray)
    //we apply an array iterator method 'forEach' to make each element have an innerText = '' to empty the previous X and O
    cellsArray.forEach(cell => cell.innerText = '')
}

console.log(gameboard)

function changeTurn(){
    if(currentPlayersTurn==='X'){
        currentPlayersTurn = 'O'
        document.getElementById("player").innerText = 'player 1 turn';
    } else {
        currentPlayersTurn = 'X'
        document.getElementById("player").innerText = 'player 2 turn';
    }
    checkWinner()

    // show current player on the dom
    //#1 select the player div from the dom
    //#2 add innerText to the player div
    // eg: `${currenPlayersTurn}'s Turn`
}

function fillCell(e){   
    let clickedCell = e.target
    // if cell is empty
    if(!clickedCell.innerText){
        // then add an x
        clickedCell.innerText = currentPlayersTurn
        changeTurn()
    }
    event.target.remove 
}





// 0 1 2
// 3 4 5
// 6 7 8








