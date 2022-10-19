class Game {
    board;
    playerA;
    playerB;
    currentPlayer;
    opponentPlayer;
    piece;
    destinationCell;
    currentCell;
    timer;

    
    isStarted = false;
    isPaused = false;
    isOver = false;
  
  
    constructor(board, playerA, playerB) {
      this.board = board;
      this.playerA = playerA;
      this.playerB = playerB;
    }
  
    
    setup() {
      board.setupPlayersPieces(playerA, playerB);
      console.log(board);
    }
  
    start() {
      this.currentPlayer = this.playerA;
      this.opponentPlayer = this.playerB;
      this.playTurn()
    }
  
    playTurn() {
      
      
     const Move = new PlayerMoves(board, this.currentPlayer);
     this.destinationCell = Move.destinationCell;
     this.piece = Move.piece;

     this.currentCell = this.board.getCell(this.piece.x, this.piece.y);
     this.MovePiece(this.piece, this.destinationCell)

    }


    MovePiece(piece,destinationCell) {

     if(destinationCell.isBusy) {
      destinationCell.piece.die()
      destinationCell.empty()
     }

      this.currentCell.empty()
      destinationCell.occupyBy(piece)
      piece.setPosition(destinationCell.x, destinationCell.y)
      this.endTurn()    
    }


    endTurn() {
      
     this.timer = setTimeout(() => this.playTurn(), 1000);

      if(!this.playerA.hasActivatedPiece()) {
        return this.playerLost(this.playerA)
      }
      if(!this.playerB.hasActivatedPiece()) {
        return this.playerLost(this.playerB)
      } 

      this.switchPlayer()
    }  

    switchPlayer() {

      if(this.currentPlayer === this.playerA) {
        this.currentPlayer = this.playerB;
        this.opponentPlayer = this.playerA;
      }
      else  {
        this.currentPlayer = this.playerA;
        this.opponentPlayer = this.playerB;
      }
    }

    playerLost(player) {
      console.log('game lost by', player)
      clearTimeout(this.timer)
    } 
  }