class Cell {
    color;
    x;
    y;
    piece = null;
    isBusy = false;
    htmlElement;

    constructor(x,y) {
        this.x = x;
        this.y = y;

        const sum = (x+y) % 2;
        this.color = sum ? "beige" : "green";
        this.createView();

    }

    occupyBy(piece) {
        this.piece = piece;
        this.isBusy = true;
    }

    empty() {
        this.piece = null;
        this.isBusy = false;
    }

    createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add(this.color)
        this.htmlElement.classList.add('cell')
        document.querySelector('#game').append(this.htmlElement);
        console.log(this.htmlElement)

    }
}