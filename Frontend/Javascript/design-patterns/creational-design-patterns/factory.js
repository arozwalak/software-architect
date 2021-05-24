//----------------
// Factory Pattern
//----------------

function shapeFactory () {
    this.createShape = function (shapeType) {
        var shape;

        switch (shapeType) {
            case 'rectangle':
                shape = new Rectangle();
                break;
            case 'square':
                shape = new Square();
                break;
            case 'circle':
                shape = new Circle();
                break;
            deafult:
                shape = new Rectangle();
                break;
        }
        return shape;
    }
}

var Rectangle = function () {
    this.draw = function () {
        console.log('This is a Rectangle');
    };
};

var Square = function() {
    this.draw = function () {
        console.log('This is a Square');
    };
};

var Circle = function () {
    this.draw = function () {
        console.log('THis is a Circle');
    };
};

var factory = new shapeFactory();

var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var circle = factory.createShape('circle');

rectangle.draw();
square.draw();
circle.draw();