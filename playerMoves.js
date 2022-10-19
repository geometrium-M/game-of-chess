function playerMoves (board,player) {

   
    let piece;

    let direction;
    let destination;

    let directionCells;
    let destinationCell;

    let output = null;

    function setPiece() {

        const pieces = [...player.getPieces()].filter(piece => piece.alive)

        if (!pieces.length) {
            invalidatePlayer(); // ?
            return
        }
        piece = pickRandomItem(pieces)
    }

    function validator(piece,positionCell, cells) {

        if (!cells.length) return piece;

        const isPathValid = pathValidatorService.validatePath(piece,positionCell,cells);
        return isPathValid;
    }

    function setDirection() {
        directions = movementService.getPositionsByPiece(piece);
        destination = pickRandomItem(directions);
    }


    
    function setDirectionCell(){
        directionCells = directions.map(pos => board.getCell(pos.x, pos.y));
    }

   function setDestinationCell() {

    if(!directionCells.length) {
        invalidatePiece();
        return 
    }
        
    destinationCell = pickRandomItem(directionCells);
    validateDirection();

    }

   function invalidateDestination(){
    removeItemFromList(destinationCell, directionCells)
    
    }

    function invalidatePiece(){
        removeItemFromList(piece, pieces)
    }

    function validateDirection(){
        const pieceCheck = validator(piece, destinationCell, directionCells);
        if(pieceCheck){
        output = destinationCell;
        } else {
        invalidateDestination();
        setDestinationCell();
        }
    }

    setPiece();
    setDirection();
    setDirectionCell();
    setDestinationCell();

    return output;
}

function pickRandomItem(array) {
    const index = Math.round(Math.random() * (array.length - 1));
    return array[index];
}

function removeItemFromList(item, array) {
    const index = array.indexOf(item)
    array.splice(index, 1);
}



/*if(!this.playerA.hasActivatedPiece()) {
        return this.playerLost(this.playerA)
     }
      if(!this.playerA.hasActivatedPiece()) {
        return this.playerLost(this.playerA)
      }*/


       /* playerLost(player) {
      console.log('game lost by', player)
      clearTimeout(this.time)

    }
  
  
  
    pickRandomItem(array) {
      const index = Math.round(Math.random() * (array.length - 1));
      return array[index];
    }*/

    

      //const {destinationCell, piece} = destCell.movePiecerandomly();

     //if (!destinationCell) return this playerlost;