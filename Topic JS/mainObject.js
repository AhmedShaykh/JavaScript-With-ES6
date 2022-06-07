console.log('Learning Object');

class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    };
};

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo);


var Polygon = class {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    };
};

var Square = new Polygon();
Square.height = 20;
Square.weight = 10;
console.log(Square);