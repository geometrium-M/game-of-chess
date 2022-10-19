class Board {
    cells = [];
    constructor() {
        for (let y=0; y<8; y++) {
          for (let x=0; x<8; x++) {
            const cell = new Cell(y, x) // din class Cell
            this.cells.push(cell)
          }
        }
    }

    getCell(x,y) {
        return this.cells.find(
            cell => (cell.x == x && cell.y == y)
        )
    }

    getRandomCell() {
        const x = Math.round(Math.random() * 7)
        const y = Math.round(Math.random() * 7)
        return this.getCell(x,y)
    }

    setupPlayersPieces(PlayerA, PlayerB) {
        const playerAPieces = playerA.getPieces();
        const playerBPieces = PlayerB.getPieces();
        const allPieces = 
        [
          ...playerAPieces,
          ...playerBPieces
        ];
  
      allPieces.forEach(piece=>this.assignPieceToRandomCell(piece))
    }

    assignPieceToRandomCell(piece) {
        const cell = this.getRandomCell();
        if (cell.isBusy) {
          this.assignPieceToRandomCell(piece)
        } else {
          cell.occupyBy(piece);
          piece.setPosition(cell.x, cell.y)
         
        }
      }
}