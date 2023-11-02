let numSelected = null;
let tileSelected = null;

let errors = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

setGame()

function setGame(){

    for(let num=1;num<=9;num++){
        let number = document.createElement("div")
        number.id = num.toString()
        number.innerText = num
        number.classList.add("number")
        number.addEventListener("click", selectNumber)
        document.getElementById("digits").appendChild(number)
    }

    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            let tile = document.createElement("div")
            tile.id = row.toString() + "-" + col.toString()

            tile.classList.add("tile")

            if(row===2 || row==5){
                tile.classList.add("horizontal-line")
            }

            if(col===2 || col===5){
                tile.classList.add("vertical-line")
            }

            if(board[row][col]!=="-"){
                tile.innerText=board[row][col]
                tile.classList.add("tile-start")
            }
            tile.style.cursor = "pointer"
            tile.addEventListener("click", setTile)

            document.querySelector("button").addEventListener("click",()=>{
                tile.innerText=solution[row][col]
            })

            //append each tile to the board
            document.getElementById("board").appendChild(tile)
        }
    }
}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected")
    }
    numSelected=this
    numSelected.classList.add("number-selected")
}

function setTile(){
    if(numSelected){
        if(this.innerText){
            return
        }
        
        let place = this.id.split("-")
        let row = place[0]
        let col=place[1]

        if(solution[row][col] !== numSelected.id){
            errors+=1;
            document.getElementById("wrong").innerText = errors
        }else{
            this.innerText = numSelected.id;
        }

        document.getElementById("wrong").innerText=errors
    }
}
