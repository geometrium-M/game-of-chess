class PlayerMoves {

    
    piece;
    direction;
    destination;
    directionCells;
    destinationCell;

    output = null;

    pieces;

    constructor(board, player) {
        this.player = player;
        this.board = board;

        this.identifyPiece()
    }

    identifyPiece() {

        this.pieces =[...this.player.getPieces()].filter(piece => piece.alive)
        if (!this.pieces.length) {
            this.invalidatePlayer(); 
            return
        }
        this.piece = pickRandomItem(this.pieces)

        this.identifyDirectionCell()

    }

    validator(piece, positionCell, cells) {
        if (!cells.length) return piece;
    
        const isPathValid = pathValidatorService.validatePath(piece, positionCell, cells)
        
        return isPathValid;
        console.log(piece,positionCell,cells)
      
        
      }

    identifyDirectionCell() {
        this.directions = movementService.getPositionsByPiece(this.piece);
        console.log(this.directions)

        this.destination = pickRandomItem(this.directions);

        this.directionCells = this.directions.map(pos => board.getCell(pos.x, pos.y));
        console.log(this.directionCells)  

        this.identifyDestinationCell()
    }



   identifyDestinationCell() {

    if(!this.directionCells.length) {
        this.invalidatePiece();
        this.identifyPiece();
        return 
    }
        
    this.destinationCell = pickRandomItem(this.directionCells);
    this.validateDirection();

   }

   invalidateDestination() {
    removeItemFromList(this.destinationCell, this.directionCells)
    
    }

    invalidatePiece() {
        removeItemFromList(this.piece, this.pieces)
    }

    validateDirection(){
        const pieceCheck = this.validator(this.piece, this.destinationCell, this.directionCells);
        if(pieceCheck){
          this.output = this.destinationCell;
       
        } else {
          this.invalidateDestination();
          this.identifyDestinationCell();
        }

        console.log(this.output) 
    }

}



function pickRandomItem(array) {
    const index = Math.round(Math.random() * (array.length - 1));
    return array[index];
  }

function removeItemFromList(item, array) {
    const index = array.indexOf(item)
    array.splice(index, 1);
  }