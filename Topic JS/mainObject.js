console.log('Learning Object');

class Solana {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };
};

var Frodo = new Solana();
Frodo.height = 100;
Frodo.width = 300;
console.log(Frodo);

var Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };
};

var Square = new Polygon();
Square.height = 20;
Square.width = 10;
console.log(Square);