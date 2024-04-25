let currMoleTile=null;
let currPlantTile=null;

window.onload=function(){
    setGame();
}
function setGame(){
    for(let i=0; i<9; i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile); //tile becomes child of board
    }
    setInterval(setMole,2000);
    }

    function getRandomTile(){
        let num=Math.floor(Math.random()*9);
        return num.toString();
    }

    /* setMole function will set the mole in a random tile and remove it from the previous tile 
    */
    function setMole(){
        if(currMoleTile!=null){
            currMoleTile.innerHTML="";
        }
        let mole=document.createElement("img");
        mole.src="./monty-mole.png";
        let num=getRandomTile();
        currMoleTile=document.getElementById(num);
        currMoleTile.appendChild(mole);
    }