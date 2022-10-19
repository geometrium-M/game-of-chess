class Piece {
    type;
    color;
    x;
    y;
    alive;
    htmlElement;
  
    
    
    constructor(type, color, x, y) {
      this.type = type;
      this.color = color;
      this.x = x;
      this.y = y;
      this.alive = true;

      this.createView()
    

    }
  
    setPosition(x, y) {
      this.x = x;
      this.y = y;

      this.updateView(x,y)

    }

    updateView(x,y) {
      this.htmlElement.style.top = y * 40 + 'px';
      this.htmlElement.style.left = x * 40 + 'px';

    }
    createView() {
      this.htmlElement = document.createElement('div');
      this.htmlElement.classList.add('piece');
      this.htmlElement.classList.add(this.color);
      this.htmlElement.classList.add(this.type + this.color);
      
      document.querySelector('#game').append(this.htmlElement);

    }

    die() {
      this.alive = false;
      setTimeout(()=>this.htmlElement.style.display = 'none',400);
    }

    setAlive() {
      this.alive = true;
      this.htmlElement.style.display = 'block'

    }

   

  

   
  
  }