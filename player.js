class Player {
    color;
    pieces = [];

    constructor(color) {
        this.color = color;
        this.pieces.push(new Piece("Q", color, 0,0 ));
        this.pieces.push(new Piece("H", color, 0,0 ));
        this.pieces.push(new Piece("B", color, 0,0 ));
    }

    getPieces() {
        return this.pieces;
    }

    getPiece(type) {
        return this.pieces.find(piece => piece.type === type)
    }

    getRandomPiece() {
        const index = Math.round(Math.random() * 2)
        return this.pieces[index];
    }

    removePiece(piece) {
        pieces = pieces.filter(p => p.x === piece.x && p.y === p.y)
    }

    hasActivatedPiece() {
        if(this.pieces.find(piece => piece.alive === true)) {
            return true
        }
        
    }

    

 
}