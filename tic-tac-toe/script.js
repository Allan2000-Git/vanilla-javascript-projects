var board;
var playerX = "X"
var playerO = "O"
var currentPlayer = playerX
var gameOver = false
const boardGame = document.getElementById("board")

setGame()

function setGame(){
    board = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "],
    ]
    
    for(let row=0;row<3;row++){
        for(let col=0;col<3;col++){
            let tile = document.createElement("div")

            tile.id = row.toString() + "-" + col.toString()

            tile.classList.add("tile")

            if(row===0 || row==1){
                tile.classList.add("horizontal-line")
            }

            if(col===0 || col===1){
                tile.classList.add("vertical-line")
            }

            tile.innerText=""
            tile.style.cursor = "pointer"
            tile.addEventListener("click", setTile)

            //append each tile to the board
            document.getElementById("board").appendChild(tile)
        }
    }
}

function setTile(){
    if(gameOver){
        return
    }

    let place = this.id.split("-") // "1-2" => ["1", "2'"]
    
    let row = parseInt(place[0])
    let col = parseInt(place[1])

    // place is already filled by X or O
    if(board[row][col] != " "){
        return;
    }

    board[row][col] = currentPlayer
    this.innerText = currentPlayer

    if(currentPlayer === playerX){
        currentPlayer = playerO
    }else{
        currentPlayer = playerX
    }

    checkWinner()
}

function checkWinner(){
    // check rows
    for(let row = 0; row<3;row++){
        if(board[row][0]===board[row][1] && board[row][1]===board[row][2] && board[row][0]!=" "){
            for(let col = 0; col<3; col++){
                let tile = document.getElementById(row.toString()+"-"+col.toString())
                tile.classList.add("playerWin")
            }
            document.getElementById("winner").innerText=board[row][0]
            gameOver = true
            return
        }
    }

    // check columns
    for(let col = 0; col<3;col++){
        if(board[0][col]===board[1][col] && board[1][col]===board[2][col] && board[0][col]!=" "){
            for(let row=0;row<3;row++){
                let tile = document.getElementById(row.toString()+"-"+col.toString())
                tile.classList.add("playerWin")
            }
            document.getElementById("winner").innerText=board[0][col]
            gameOver = true
            return
        }
    }

    // check diagonally
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!=" "){
        for(let i=0;i<3;i++){
            let tile = document.getElementById(i.toString()+"-"+i.toString())
            tile.classList.add("playerWin")
        }
        document.getElementById("winner").innerText=board[0][0]
        gameOver = true
        return
    }

    // check anti-diagonally
    if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!=" "){
        let tile = document.getElementById("0-2")
        tile.classList.add("playerWin")

        tile = document.getElementById("1-1")
        tile.classList.add("playerWin")

        tile = document.getElementById("2-0")
        tile.classList.add("playerWin")

        document.getElementById("winner").innerText=board[0][2]
        gameOver = true
        return
    }
}