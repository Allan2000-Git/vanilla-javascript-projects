let score=0
let gameOver=false

let currentMoleTile;
let currentPlantTile;

setGame()

function setGame(){
    for(let i=0;i<9;i++){
        let tile = document.createElement("div")
        tile.id = i.toString()

        tile.addEventListener("click",setSelectTile)
        document.getElementById("board").appendChild(tile)
    }

    setInterval(setMole, 1000)
    setInterval(setPlant, 2000)
}

function getRandomNumber(){
    let num = Math.floor(Math.random()*9)
    return num.toString()
}

function setMole(){

    //clear previous tile
    if(currentMoleTile){
        currentMoleTile.innerHTML=" "
    }

    if(gameOver){
        return
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = getRandomNumber()

    //to make sure that mole and plant doesn't appear on same tile
    if(currentPlantTile && currentPlantTile.id ===num){
        return
    }

    currentMoleTile = document.getElementById(num)
    currentMoleTile.append(mole)
}

function setPlant(){

    //clear previous tile
    if(currentPlantTile){
        currentPlantTile.innerHTML=" "
    }

    if(gameOver){
        return
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png"

    let num = getRandomNumber()

    //to make sure that mole and plant doesn't appear on same tile
    if(currentMoleTile && currentMoleTile.id ===num){
        return
    }

    currentPlantTile = document.getElementById(num)
    currentPlantTile.append(plant)
}

function setSelectTile(){
    if(gameOver){
        return
    }
    
    //this => selected tile
    if(this === currentMoleTile){
        score+=10
        document.getElementById("score").innerText = score.toString()
    }
    if(this === currentPlantTile){
        document.getElementById("score").innerText = score.toString()
        gameOver = true
        return
    }
}