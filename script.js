let currMoleTile=null;
let currPlantTile=null;
let score=0;
let gameOver=false;
let gameOverButton=document.createElement("button"); // Changed from div to button

window.onload=function(){
    setGame();
}
function setGame(){
    for(let i=0; i<9; i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile); //tile becomes child of board
    }
    setInterval(setMole,1000);
    setInterval(setPlant,1000);
   
}

    function getRandomTile(){ //returns a random number between 0 and 8 to set the mole in a random tile
        let num=Math.floor(Math.random()*9);
        return num.toString();
    }

    /* setMole function will set the mole in a random tile and remove it from the previous tile 
    */
    function setMole(){
        if(gameOver){
            return
        }
        if(currMoleTile!=null){
            currMoleTile.innerHTML="";
        }
        let mole=document.createElement("img");
        mole.src="./monty-mole.png";
        let num=getRandomTile();
        if(currPlantTile && currPlantTile.id==num){ //if the mole and plant are in the same tile, then return
            return;
        }
        currMoleTile=document.getElementById(num);
        currMoleTile.appendChild(mole);
    }

    function setPlant(){
        if(gameOver){
            return;
        }
        if(currPlantTile!=null){
            currPlantTile.innerHTML="";
        }
        let plant =document.createElement("img");
        plant.src="./piranha-plant.png";
        let num=getRandomTile();
        if(currMoleTile && currMoleTile.id==num){ //if the mole and plant are in the same tile, then return
            return;
        }
        currPlantTile=document.getElementById(num);
        currPlantTile.appendChild(plant);
    }

    function selectTile(){
        if(gameOver){
            return;
        }
        if(this == currMoleTile ){ //this refers to the tile that is clicked
            score+=10;
            document.getElementById("score").innerHTML=score.toString();

            if(score>=100){
                gameOver=true;
                displayGameOver();
            }

        }

        else if(this == currPlantTile){
            score-=5;
            document.getElementById("score").innerHTML=" Game OVer :" +score.toString();
            gameOver=true;
            displayGameOver();
        }
    }

    function displayGameOver(){
        if(score>=100){
            gameOverButton.innerHTML="You Win! Your score is: "+score.toString();
        
        }
        else {
            gameOverButton.innerHTML="Game Over! Your score is: "+score.toString();
    }
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Dark background
        document.getElementById("board").style.display = "none"; // Hide board
        document.getElementById("score").style.display = "none"; // Hide score
        document.body.appendChild(gameOverButton); // Append button to body
        gameOverButton.onclick=function(){
            resetGame();
    }
}
function resetGame(){
    window.location.reload(); // Reload the page
}
        
    