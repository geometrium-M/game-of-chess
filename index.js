const board = new Board();
const playerA = new Player("white");
const playerB = new Player("black");
let game = new Game(board,playerA,playerB);

const movementService = new MovementService(8,8);

const pathValidatorService = new PathValidatorService();


game.setup(); // board setupPlayersPieces(playerA, playerB); intoarce lista de pieces fiecare player, 
              // creeaza o lista cu toate piesele, si ii face asign catre o celula random;



let start = document.querySelector('.start');
start.addEventListener("click",() =>  setTimeout(()=>game.start(),500));



function func() {
    board.getRandomCell();
    
    playerA.pieces.map(piece=> piece.setAlive())
    playerB.pieces.map(piece=> piece.setAlive())

    game.setup();
}

let newGame = document.querySelector('.newGame').addEventListener("click", func);


let arr = [1,2,3];
console.log(arr);

arr = [];
console.log(arr)


