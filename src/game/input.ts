interface input {
  UP: boolean;
  RIGHT: boolean;
  DOWN: boolean;
  LEFT: boolean;
}

class Input {
  movement: input;
  
  constructor() {
    this.movement = { UP: false, RIGHT: false, DOWN: false, LEFT: false };

    document.addEventListener('keyup', (e) => this.onKeyUp(e));
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    
    // setInterval(() => console.log(this.movement), 60);
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38:
      case 87:
        event.preventDefault();
        this.movement.UP = true;
        break;
      case 39:
      case 68:
        event.preventDefault();
        this.movement.RIGHT = true;
        break;
      case 40:
      case 83:
        event.preventDefault();
        this.movement.DOWN = true;
        break;
      case 37:
      case 65:
        event.preventDefault();
        this.movement.LEFT = true;
        break;
    };
  };

  onKeyUp(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38:
      case 87:
        event.preventDefault();
        this.movement.UP = false;
        break;
      case 39:
      case 68:
        event.preventDefault();
        this.movement.RIGHT = false;
        break;
      case 40:
      case 83:
        event.preventDefault();
        this.movement.DOWN = false;
        break;
      case 37:
      case 65:
        event.preventDefault();
        this.movement.LEFT = false;
        break;
    };
  };
};

export default Input;
